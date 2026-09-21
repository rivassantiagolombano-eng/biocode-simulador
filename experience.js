/* Presentation adapter only: all scientific results come from BioScience. */
(() => {
 'use strict';
 const B=BioScience, el=id=>document.getElementById(id), stages=['simulador','arnm','ribosoma','proteina','mutaciones','resultado'];
 let dna='ATGAAAGCTTTTTAA', rna=B.transcribe(dna), selected=4, result=null, actions=[], cursor=-1, view='inicio';
 const group=s=>(s.match(/.{1,3}/g)||[]).join(' ');
 const label=(id,text)=>el(id).textContent=text;
 function chain(node,values,other){node.replaceChildren();if(!values.length){node.textContent='Sin cadena';return;}values.forEach((aa,i)=>{if(i){const dash=document.createElement('span');dash.textContent='—';dash.setAttribute('aria-label','enlace peptídico');node.append(dash);}const bead=document.createElement('span');bead.className='aa'+(other&&aa!==other[i]?' difference':'');bead.textContent=aa;node.append(bead);});}
 function resetGuide(){actions=[];cursor=-1;result=null;el('guide-compare').disabled=true;}
 function buildActions(){
  const frames=B.frames(rna);actions=[];let prev=frames[0];
  const add=(frame,message)=>actions.push({frame,message});
  for(const f of frames.slice(1)){
   if(f.phase==='Iniciación'){
    add({...prev,index:f.index,message:'El primer AUG establece el inicio y el marco de lectura en este modelo.'},'AUG fue detectado. Es la señal de inicio.');
    add({...f,chain:[]},'Llega un ARNt con Metionina al sitio P.');
    add(f,'Metionina es el primer aminoácido de la cadena.');
   }else if(f.phase==='Reconocimiento'){
    add({...prev,index:f.index,message:'El codón '+f.a.codon+' está en el sitio A y especifica '+f.a.aa.name+'.'},f.a.codon+' fue detectado.');
    add(f,'Llega un ARNt con '+f.a.aa.name+' al sitio A.');
   }else if(f.phase==='Enlace peptídico')add(f,f.a.aa.name+' se une a la cadena.');
   else if(f.phase==='Translocación')add(f,'El ribosoma avanza un codón.');
   else if(f.release){add({...prev,index:f.index,message:f.release+' es un codón STOP. No especifica un aminoácido ni tiene un ARNt correspondiente.'},f.release+' fue detectado. Es una señal STOP.');add(f,'Un factor de liberación suelta la cadena.');}
   else add(f,f.message);
   prev=f;
  }
  if(!actions.length)add(frames[0],frames[0].message);
 }
 function renderAction(){
  if(!actions.length)buildActions();
  const f=cursor<0?null:actions[cursor].frame;
  label('guide-action',cursor<0?'Vamos a buscar la señal de inicio.':actions[cursor].message);
  label('guide-action-count',cursor<0?'LISTO PARA COMENZAR':`ACCIÓN ${cursor+1} DE ${actions.length}`);
  label('guide-detail',f?f.message:'El primer AUG establece el inicio y el marco de lectura en este modelo.');
  for(const site of ['e','p','a']){
   const node=el('guide-site-'+site), t=f?.[site];node.replaceChildren();
   if(site==='a'&&f?.release){node.innerHTML='<span class="release">Factor de<br>liberación</span>';}
   else if(t){const trna=document.createElement('div');trna.className='simple-trna'+(t.empty?' discharged':'');const aa=document.createElement('b');aa.textContent=t.empty?'Vacío':t.aa.short;const stem=document.createElement('span');stem.className='simple-stem';const name=document.createElement('small');name.textContent='ARNt';trna.append(aa,stem,name);node.append(trna);}
  }
  const track=el('guide-track'),translation=B.translate(rna);track.replaceChildren();
  const strip=document.createElement('div');strip.className='guide-rna-strip';
  const spacing=el('guide-site-a').getBoundingClientRect().left-el('guide-site-p').getBoundingClientRect().left;
  translation.rows.forEach(row=>{const codon=document.createElement('span');codon.className='track-codon'+(f&&row.index===f.index?' current':'');codon.style.width=spacing+'px';codon.textContent=row.codon;if(f&&row.index===f.index)codon.setAttribute('aria-current','step');strip.append(codon);});
  if(!strip.children.length)track.textContent=group(rna);else{
   const pIndex=f?.p?f.p.index:f?.release?f.index-3:translation.start;
   strip.style.transform=`translateX(${-spacing/2-(pIndex-translation.start)/3*spacing}px)`;
   track.append(strip);
  }
  if(f)chain(el('guide-chain'),f.chain);else label('guide-chain','Todavía no hay aminoácidos.');
  label('guide-next',cursor===actions.length-1?'Ver mi cadena →':'Siguiente paso →');
 }
 function protein(){const t=B.translate(rna);chain(el('guide-protein'),t.chain);label('protein-title',t.stop?'¡Terminamos la traducción!':t.start<0?'No comenzó la traducción':'Un fragmento todavía incompleto');label('protein-message',t.stop?'El ribosoma encontró '+t.rows.at(-1).codon+', una señal STOP.':t.message);}
 function mutationLetters(){const node=el('mutation-letters');node.replaceChildren();label('selected-base','Base '+selected+' · '+rna[selected-1]);for(let offset=0;offset<rna.length;offset+=3){const codon=document.createElement('span');codon.className='letter-triplet';[...rna.slice(offset,offset+3)].forEach((base,i)=>{const n=offset+i+1,button=document.createElement('button');button.className='letter-button base-'+base;button.textContent=base;button.setAttribute('aria-label',`Base ${n}: ${base}`);button.setAttribute('aria-pressed',String(n===selected));button.onclick=()=>{selected=n;clearResult();mutationLetters();};codon.append(button);});node.append(codon);}}
 function clearResult(){result=null;el('mutation-reveal').replaceChildren();el('guide-comparison').replaceChildren();label('guide-mutation-error','');el('guide-compare').disabled=true;}
 function mutateGuide(){clearResult();try{
   result=B.mutate(rna,selected,el('guide-base').value);
   const old=result.oldCodon,newCodon=result.newCodon;
   const oldName=old?B.code[old].name:'Fuera de la región traducida',newName=newCodon?B.code[newCodon].name:'Fuera de la región traducida';
   const box=el('mutation-reveal');box.innerHTML='<div class="codon-change"><span id="before-codon"></span><span aria-hidden="true">↓</span><span id="after-codon"></span></div><div class="amino-change"><div><small>ANTES</small><strong id="before-aa"></strong></div><span aria-hidden="true">→</span><div><small>DESPUÉS</small><strong id="after-aa"></strong></div></div><h2 id="mutation-headline"></h2><p id="mutation-type"></p>';
   label('before-codon',old||rna[selected-1]);label('after-codon',newCodon||result.base);label('before-aa',oldName);label('after-aa',newName);
   label('mutation-headline',result.type==='Cambio de sentido (missense)'?'Cambió un aminoácido.':result.type==='Silenciosa'?'La letra cambió. El aminoácido se conserva.':result.type==='Sin sentido (nonsense)'?'Apareció una señal STOP antes de tiempo.':result.type);
   label('mutation-type',result.type==='Cambio de sentido (missense)'?'Esta es una mutación missense o de cambio de sentido.':result.type+'. '+result.mutated.message);
   el('guide-compare').disabled=false;
  }catch(e){label('guide-mutation-error',e.message);}
 }
 function compareGuide(){if(!result)return;const wrap=el('guide-comparison');wrap.replaceChildren();
  [['NORMAL',result.original,result.normal,result.mutated],['MUTADA',result.changed,result.mutated,result.normal]].forEach(([title,seq,t,other],n)=>{
   if(n){const vs=document.createElement('span');vs.className='versus';vs.textContent='VS';wrap.append(vs);}
   const card=document.createElement('article');card.className='result-card';const h=document.createElement('h2');h.textContent=title;const sequence=document.createElement('div');sequence.className='comparison-sequence';
   const start=Math.max(0,result.normal.start);let i=0;
   while(i<seq.length){const end=i<start?start:Math.min(i+3,seq.length);const codon=document.createElement('span');codon.textContent=seq.slice(i,end);if(i<=selected-1&&selected-1<end)codon.className='difference';sequence.append(codon);i=end;}
   const beads=document.createElement('div');beads.className='chain';chain(beads,t.chain,other.chain);const note=document.createElement('p');note.className='hint';note.textContent=t.message;card.append(h,sequence,beads,note);wrap.append(card);
  });const conclusion=document.createElement('p');conclusion.className='result-caption';conclusion.textContent=result.type+(result.oldCodon?' · '+result.oldCodon+' → '+result.newCodon:'');wrap.append(conclusion);
 }
 function show(){let target=location.hash.slice(1)||'inicio';if(target==='main')target=view;if(!document.getElementById(target)?.classList.contains('view'))target='inicio';
  if(target==='resultado'&&!result)target='mutaciones';view=target;
  document.querySelectorAll('.view').forEach(v=>v.hidden=v.id!==target);
  const stage=stages.indexOf(target);el('journey').hidden=stage<0;
  document.querySelectorAll('[data-stage]').forEach((node,i)=>{node.classList.toggle('complete',i<stage);node.classList.toggle('current',i===stage);if(i===stage)node.setAttribute('aria-current','step');else node.removeAttribute('aria-current');});
  document.querySelectorAll('header nav a').forEach(a=>{const active=a.hash==='#'+target||(stage>=0&&stage<4&&a.hash==='#simulador')||(target==='resultado'&&a.hash==='#mutaciones');a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(target==='arnm'){label('guide-dna-output',group(dna));label('guide-rna-output',group(rna));}
  if(target==='ribosoma')renderAction();if(target==='proteina')protein();
  if(target==='mutaciones'){selected=Math.min(selected,rna.length);mutationLetters();}
  if(target==='resultado')compareGuide();
  if(target==='avanzado'){el('rna').value=group(rna);el('dna').value=group(dna);el('strand').value=el('guide-strand').value;el('strand').onchange();invalidate();}
  window.scrollTo({top:0,behavior:'instant'});const title=el(target).querySelector('h1,h2');if(title){title.setAttribute('tabindex','-1');title.focus({preventScroll:true});}
 }
 el('back-step').onclick=()=>{const i=stages.indexOf(view);location.hash=i>0?stages[i-1]:'inicio';};
 el('guide-edit').onclick=()=>{el('custom-dna').hidden=false;el('guide-dna').focus();};
 el('guide-example').onclick=()=>{el('guide-dna').value=el('guide-strand').value==='template'?'TAC TTT CGA AAA ATT':'ATG AAA GCT TTT TAA';label('dna-preview',el('guide-dna').value);label('guide-dna-status','Secuencia de ejemplo seleccionada. Continúa cuando quieras.');};
 el('guide-strand').onchange=()=>{label('guide-strand-help',el('guide-strand').value==='template'?'Introduce la hebra molde 3′ → 5′. El ARNm se forma por complementariedad.':'La hebra codificante coincide con el ARNm, cambiando T por U.');label('guide-dna-status','Verifica la secuencia o usa el ejemplo de esta hebra.');};
 el('guide-dna').oninput=()=>label('dna-preview',el('guide-dna').value.toUpperCase());
 el('dna-continue').onclick=()=>{try{const nextDNA=B.clean(el('guide-dna').value,'DNA'),nextRNA=B.transcribe(nextDNA,el('guide-strand').value);dna=nextDNA;rna=nextRNA;resetGuide();label('guide-dna-status','');location.hash='arnm';}catch(e){label('guide-dna-status',e.message);}};
 el('guide-next').onclick=()=>{if(cursor===actions.length-1){location.hash='proteina';return;}cursor++;renderAction();};
 el('guide-restart').onclick=()=>{cursor=-1;renderAction();};
 el('guide-base').onchange=clearResult;el('guide-mutate').onclick=mutateGuide;
 el('guide-compare').onclick=()=>{if(result)location.hash='resultado';};
 el('advanced-to-guide').onclick=()=>{try{const value=B.clean(el('rna').value);rna=value;dna=B.clean(el('dna').value,'DNA');el('guide-dna').value=group(dna);el('guide-strand').value=el('strand').value;label('dna-preview',group(dna));resetGuide();location.hash='ribosoma';}catch(e){notice('context',e.message,true);el('context').scrollIntoView({block:'center'});}};
 addEventListener('resize',()=>{if(view==='ribosoma')renderAction();});
 addEventListener('hashchange',show);show();
})();
