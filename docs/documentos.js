'use strict';
document.querySelectorAll('[data-print]').forEach(button=>button.addEventListener('click',()=>window.print()));
function syncPrint(){document.querySelectorAll('[data-record]').forEach(el=>{const out=el.nextElementSibling;if(out?.classList.contains('print-value'))out.textContent=el.value;});}
document.addEventListener('input',syncPrint);document.addEventListener('change',syncPrint);window.addEventListener('beforeprint',syncPrint);
if(document.getElementById('trial-rows')){
const body=document.getElementById('trial-rows'),status=document.getElementById('record-status'),key='biocode-real-trials-v1';
const cases=[['AUG AAA GCU UUU UAA','Met–Lys–Ala–Phe; patrón'],['AUG CAA GCU UUU UAA','Met–Gln–Ala–Phe; missense'],['AUG AAG GCU UUU UAA','Met–Lys–Ala–Phe; silenciosa'],['AUG UAA GCU UUU UAA','Met; nonsense']];
const columns=['entrada','predicción','resultado observado','correcto/incorrecto','problema encontrado','ajuste','repetición'];
function row(values=[]){const tr=document.createElement('tr');const number=body.children.length+1;columns.forEach((name,i)=>{const td=document.createElement('td'),el=document.createElement(i===3?'select':'textarea');if(i===3){for(const [v,label]of [['','Sin registrar'],['Correcto','Correcto'],['Incorrecto','Incorrecto']]){const o=document.createElement('option');o.value=v;o.textContent=label;el.append(o);}}el.setAttribute('aria-label','Ensayo '+number+': '+name);el.dataset.record='';el.value=typeof values[i]==='string'?values[i]:'';el.maxLength=3000;const span=document.createElement('div');span.className='print-value';td.append(el,span);tr.append(td);});body.append(tr);syncPrint();}
function message(text,error=false){status.textContent=text;status.classList.toggle('error',error);}
document.getElementById('add-trial').onclick=()=>{if(body.children.length>=50){message('Máximo 50 ensayos por registro.',true);return;}row();message('Ensayo añadido. Predice antes de realizarlo; registra lo observado después.');};
document.getElementById('save-trials').onclick=()=>{const rows=[...body.rows].map(tr=>[...tr.querySelectorAll('[data-record]')].map(el=>el.value));const metadata=[...document.querySelectorAll('.fields [data-record]')].map(el=>el.value);try{localStorage.setItem(key,JSON.stringify({rows,metadata}));message('Registro guardado solo en este navegador. Imprime o guarda una copia PDF para conservar evidencia.');}catch{message('Este navegador no permite guardar. Conserva una copia mediante Imprimir / Guardar PDF.',true);}};
let saved;try{saved=JSON.parse(localStorage.getItem(key));}catch{message('No se pudo leer un registro anterior; se muestran ensayos previstos con observaciones vacías.',true);}
if(saved&&Array.isArray(saved.rows)&&saved.rows.length<=50&&saved.rows.every(r=>Array.isArray(r)&&r.length===7&&r.every(x=>typeof x==='string'))){saved.rows.forEach(row);document.querySelectorAll('.fields [data-record]').forEach((el,i)=>{el.value=typeof saved.metadata?.[i]==='string'?saved.metadata[i]:'';});message('Registro local recuperado. Los datos proceden de quien utilizó este navegador.');}else cases.forEach(row);
syncPrint();
}
