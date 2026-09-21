/* End-to-end checks of the beginner journey, scientific edge cases and responsive layout. */
const {chromium}=require('playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
(async()=>{const root=path.resolve(__dirname,'..'),browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),checks=[],errors=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const check=(name,ok)=>{assert.ok(ok,name);checks.push({name,status:'PASS'});};
const visible=id=>page.locator('#'+id).isVisible(),text=id=>page.locator('#'+id).innerText();
const click=id=>page.locator('#'+id).click();
const route=async id=>{await page.evaluate(id=>location.hash=id,id);await page.locator('#'+id).waitFor({state:'visible'});};
const finish=async()=>{await page.locator('#ribosoma').waitFor({state:'visible'});for(let i=0;i<30;i++){if((await text('guide-next')).includes('Ver mi cadena'))break;await click('guide-next');}await click('guide-next');await page.locator('#proteina').waitFor({state:'visible'});};
try{
await page.goto(pathToFileURL(path.join(root,'index.html')).href);
check('Bienvenida sin formularios científicos',await visible('inicio')&&!await visible('dna')&&!await visible('guide-dna'));
check('Una sola pantalla visible',await page.locator('.view:visible').count()===1);
await page.screenshot({path:path.join(root,'assets/images/desktop-home.png')});
await page.getByRole('link',{name:'Comenzar experiencia →',exact:true}).click();
check('Solo ADN, sin ribosoma',await visible('simulador')&&!await visible('ribosoma')&&!await visible('strand'));
await click('guide-edit');await page.locator('#guide-dna').fill('ATGX');await click('dna-continue');check('ADN inválido no avanza',(await text('guide-dna-status')).includes('únicamente')&&await visible('simulador'));
await click('guide-example');await click('dna-continue');check('Transcripción correcta',(await text('guide-rna-output'))==='AUG AAA GCU UUU UAA');
await page.getByRole('link',{name:'Continuar al ribosoma →',exact:true}).click();
check('Ribosoma separado del ADN',await visible('ribosoma')&&!await visible('simulador')&&!await visible('arnm'));
await click('guide-next');check('Primera acción detecta AUG',(await text('guide-action')).includes('AUG fue detectado')&&!(await text('guide-chain')).includes('Met'));
await click('guide-next');check('ARNt llega a P antes de cadena',(await text('guide-site-p')).includes('Met')&&!(await text('guide-chain')).includes('Met'));
await click('guide-next');check('Cadena inicia en Met',await text('guide-chain')==='Met');
await click('guide-next');check('Codón siguiente detectado',(await text('guide-action')).includes('AAA fue detectado'));
await click('guide-next');check('Llega Lisina',(await text('guide-action')).includes('Lisina'));
await click('guide-next');check('Crece cadena Met Lys',JSON.stringify(await page.locator('#guide-chain .aa').allTextContents())==='["Met","Lys"]');
await page.screenshot({path:path.join(root,'assets/images/desktop.png')});
await finish();check('Cadena completa correcta',JSON.stringify(await page.locator('#guide-protein .aa').allTextContents())==='["Met","Lys","Ala","Phe"]');check('STOP explícito',(await text('protein-message')).includes('UAA'));
await page.getByRole('link',{name:'Crear una mutación →',exact:true}).click();await click('guide-mutate');check('Missense correcto',(await text('mutation-reveal')).includes('Lisina')&&(await text('mutation-reveal')).includes('Glutamina'));
await click('guide-compare');await page.locator('#resultado').waitFor({state:'visible'});check('Comparación normal y mutada',await page.locator('.result-card').count()===2);check('Solo dos codones y dos aminoácidos resaltados',await page.locator('#guide-comparison .difference').count()===4);
await route('mutaciones');await page.getByRole('button',{name:'Base 6: A',exact:true}).click();check('Cambiar letra invalida comparación',await page.locator('#guide-compare').isDisabled());await page.locator('#guide-base').selectOption('G');await click('guide-mutate');check('Silenciosa',(await text('mutation-reveal')).includes('Silenciosa'));
await page.getByRole('button',{name:'Base 4: A',exact:true}).click();await page.locator('#guide-base').selectOption('U');await click('guide-mutate');check('Nonsense',(await text('mutation-reveal')).includes('nonsense'));
await page.locator('#guide-base').selectOption('A');await click('guide-mutate');check('Sustitución idéntica rechazada',(await text('guide-mutation-error')).includes('diferente')&&await page.locator('#guide-compare').isDisabled());
await route('ciencia');check('Seis tarjetas educativas',await page.locator('.learn-card').count()===6);for(const card of await page.locator('.learn-card').all()){await card.locator('summary').click();check('Ver más abre explicación',await card.locator('details').getAttribute('open')!==null);}
await route('avanzado');check('Tabla completa conservada',await page.locator('#genetic-code tr').count()===64);await page.locator('#strand').selectOption('template');await click('example');check('Hebra molde conservada',(await page.locator('#rna').inputValue()).replace(/\s/g,'')==='AUGAAAGCUUUUUAA');await click('start');check('Anticodón en modo avanzado',(await text('site-p')).includes('UAC'));await click('next');await click('next');await click('next');check('Sitio E conservado',(await text('site-e')).includes('Descargado'));
await page.locator('#rna').fill('AAAGCU');await click('advanced-to-guide');await finish();check('Sin AUG no anuncia éxito',(await text('protein-title')).includes('No comenzó'));
await route('avanzado');await page.locator('#rna').fill('AUGAAAG');await click('advanced-to-guide');await finish();check('Sin STOP se reconoce fragmento',(await text('protein-title')).includes('incompleto')&&(await text('protein-message')).includes('sin STOP'));
await route('desafio');await click('check');check('Desafío requiere selección',(await text('challenge-feedback')).includes('Selecciona'));for(const [i,a]of [1,0,3,2,1].entries()){await page.locator('input[name=answer]').nth(a).check();await click('check');check('Reto '+(i+1)+' bloqueado',await page.locator('#check').isDisabled());if(i<4)await click('new-challenge');}check('Desafíos completados',(await text('challenge-summary')).includes('100 / 100'));await click('new-challenge');
await route('simulador');await page.locator('.advanced-options summary').click();await page.locator('#guide-strand').selectOption('coding');await click('guide-example');await click('dna-continue');await route('ribosoma');await click('guide-next');await click('guide-next');await click('guide-next');
for(const width of [1440,1024,768,390,320]){await page.setViewportSize({width,height:900});for(const id of ['inicio','simulador','arnm','ribosoma','proteina','mutaciones','ciencia','desafio','acerca','avanzado']){await route(id);check(id+' sin desborde a '+width,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}}
await page.setViewportSize({width:390,height:844});await route('simulador');await click('guide-example');await click('dna-continue');await route('ribosoma');for(let i=0;i<6;i++)await click('guide-next');await page.screenshot({path:path.join(root,'assets/images/mobile.png'),fullPage:true});await page.screenshot({path:path.join(root,'assets/images/mobile-ribosome.png')});await click('guide-restart');check('Reinicio guiado en celular',(await text('guide-action')).includes('buscar'));
await click('back-step');await page.locator('#arnm').waitFor({state:'visible'});check('Volver funciona',await visible('arnm'));
await route('inicio');await page.screenshot({path:path.join(root,'assets/images/mobile-home.png'),fullPage:true});
for(const link of await page.locator('header nav a').all()){const href=await link.getAttribute('href');await link.click();await page.locator(href).waitFor({state:'visible'});check('Navegación '+await link.innerText(),await page.locator('.view:visible').count()===1);}
check('Documentación escolar sin enlaces públicos',await page.locator('a[href^="docs/"]').count()===0);
check('Todas las anclas existen',await page.locator('a[href^="#"]').evaluateAll(as=>as.every(a=>document.getElementById(a.hash.slice(1)))));
check('Sin errores de consola',errors.length===0);
fs.writeFileSync(path.join(__dirname,'experience-results.json'),JSON.stringify({date:new Date().toISOString(),checks,errors},null,2));console.log(checks.length+' comprobaciones UX PASS');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
