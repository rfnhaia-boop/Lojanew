'use strict';

const shapes={
 home:'<path d="m3 10 9-7 9 7v11h-6v-7H9v7H3z"/>',
 search:'<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>',
 list:'<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="3" cy="6" r="1"/><circle cx="3" cy="12" r="1"/><circle cx="3" cy="18" r="1"/>',
 box:'<path d="m12 2 9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10M7 4.8l9 5"/>',
 cart:'<path d="M2 3h3l3 12h10l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',
 orders:'<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h6"/>',
 user:'<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3z"/>',
 team:'<circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3M17 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 4 5v2"/>',
 leaf:'<path d="M20 3C8 1 2 7 6 14s15 4 14-11ZM5 22c0-8 5-11 10-14"/>',
 pin:'<path d="M19 9c0 6-7 13-7 13S5 15 5 9a7 7 0 0 1 14 0Z"/><circle cx="12" cy="9" r="2"/>',
 arrow:'<path d="M4 12h16M14 6l6 6-6 6"/>',
 back:'<path d="M20 12H4M10 6l-6 6 6 6"/>',
 plug:'<path d="M8 2v6M16 2v6M5 8h14v4a7 7 0 0 1-14 0zM12 19v4"/>',
 store:'<path d="M3 10h18l-2-6H5zM4 10v11h16V10M9 21v-7h6v7"/>',
 check:'<path d="m5 12 4 4L20 5"/>'
};
// Base inicial de catálogo CEASA. Preços, estoques e fretes abaixo são demonstrativos
// até que cada box mantenha sua própria oferta no painel de fornecedor.
const products=[
 {id:1,name:'Tomate italiano',image:'tomate',category:'Legumes',unit:'kg',stock:8,target:30,alias:['tomate italiano','tomate'],price:490,pack:10,sellers:[1,2,3,4,5]},
 {id:2,name:'Banana prata',image:'banana',category:'Frutas',unit:'kg',stock:12,target:40,alias:['banana prata','banana'],price:549,pack:12,sellers:[1,2,5]},
 {id:3,name:'Alface crespa',image:'alface',category:'Verduras',unit:'un.',stock:6,target:20,alias:['alface crespa','alface'],price:245,pack:1,sellers:[1,3,4,5],available:100},
 {id:4,name:'Laranja pera',image:'laranja',category:'Frutas',unit:'kg',stock:24,target:20,alias:['laranja pera','laranja'],price:390,pack:15,sellers:[2,3]},
 {id:5,name:'Batata inglesa',image:'caixa',category:'Raízes',unit:'kg',stock:18,target:45,alias:['batata inglesa','batata'],price:420,pack:25,sellers:[1,3,5]},
 {id:6,name:'Cebola',image:'caixa',category:'Raízes',unit:'kg',stock:10,target:30,alias:['cebola','cebolas'],price:445,pack:20,sellers:[1,3,5]},
 {id:7,name:'Cenoura',image:'caixa',category:'Legumes',unit:'kg',stock:9,target:25,alias:['cenoura','cenouras'],price:465,pack:20,sellers:[1,3,4]},
 {id:8,name:'Abobrinha italiana',image:'caixa',category:'Legumes',unit:'kg',stock:5,target:18,alias:['abobrinha italiana','abobrinha'],price:610,pack:10,sellers:[1,3,4]},
 {id:9,name:'Berinjela',image:'caixa',category:'Legumes',unit:'kg',stock:4,target:15,alias:['berinjela','berinjelas'],price:690,pack:8,sellers:[1,3,4]},
 {id:10,name:'Chuchu',image:'caixa',category:'Legumes',unit:'kg',stock:12,target:25,alias:['chuchu'],price:380,pack:20,sellers:[1,3,5]},
 {id:11,name:'Pimentão verde',image:'caixa',category:'Legumes',unit:'kg',stock:3,target:12,alias:['pimentao verde','pimentao'],price:880,pack:5,sellers:[1,4]},
 {id:12,name:'Pepino japonês',image:'caixa',category:'Legumes',unit:'kg',stock:7,target:20,alias:['pepino japones','pepino'],price:560,pack:10,sellers:[1,3,4]},
 {id:13,name:'Milho verde',image:'caixa',category:'Legumes',unit:'un.',stock:20,target:80,alias:['milho verde','milho'],price:120,pack:12,sellers:[1,3,4],available:480},
 {id:14,name:'Brócolis ninja',image:'alface',category:'Verduras',unit:'un.',stock:5,target:24,alias:['brocolis ninja','brocolis'],price:690,pack:6,sellers:[1,3,4],available:180},
 {id:15,name:'Couve-flor',image:'alface',category:'Verduras',unit:'un.',stock:4,target:20,alias:['couve flor','couve-flor'],price:750,pack:6,sellers:[1,3,4],available:180},
 {id:16,name:'Tomate salada',image:'tomate',category:'Legumes',unit:'kg',stock:11,target:30,alias:['tomate salada'],price:510,pack:20,sellers:[1,2,3,4]},
 {id:17,name:'Alface americana',image:'alface',category:'Verduras',unit:'un.',stock:9,target:30,alias:['alface americana'],price:310,pack:6,sellers:[1,3,4],available:180},
 {id:18,name:'Rúcula',image:'alface',category:'Verduras',unit:'maço',stock:5,target:25,alias:['rucula'],price:240,pack:10,sellers:[1,3,4],available:250},
 {id:19,name:'Couve manteiga',image:'alface',category:'Verduras',unit:'maço',stock:7,target:30,alias:['couve manteiga','couve'],price:190,pack:10,sellers:[1,3,4],available:300},
 {id:20,name:'Espinafre',image:'alface',category:'Verduras',unit:'maço',stock:3,target:18,alias:['espinafre'],price:275,pack:8,sellers:[1,3],available:160},
 {id:21,name:'Repolho verde',image:'alface',category:'Verduras',unit:'kg',stock:8,target:25,alias:['repolho verde','repolho'],price:360,pack:15,sellers:[1,3,5]},
 {id:22,name:'Salsinha',image:'alface',category:'Temperos',unit:'maço',stock:8,target:30,alias:['salsinha','cheiro verde'],price:180,pack:10,sellers:[1,3,4],available:300},
 {id:23,name:'Cebolinha',image:'alface',category:'Temperos',unit:'maço',stock:7,target:30,alias:['cebolinha'],price:185,pack:10,sellers:[1,3,4],available:300},
 {id:24,name:'Coentro',image:'alface',category:'Temperos',unit:'maço',stock:4,target:22,alias:['coentro'],price:195,pack:10,sellers:[1,3,4],available:250},
 {id:25,name:'Manjericão',image:'alface',category:'Temperos',unit:'maço',stock:2,target:12,alias:['manjericao'],price:330,pack:6,sellers:[1,3],available:120},
 {id:26,name:'Mandioca',image:'caixa',category:'Raízes',unit:'kg',stock:15,target:40,alias:['mandioca','aipim'],price:430,pack:20,sellers:[3,5]},
 {id:27,name:'Batata-doce',image:'caixa',category:'Raízes',unit:'kg',stock:6,target:25,alias:['batata doce','batata-doce'],price:475,pack:20,sellers:[3,5]},
 {id:28,name:'Alho',image:'caixa',category:'Temperos',unit:'kg',stock:2,target:10,alias:['alho'],price:1890,pack:5,sellers:[3,5]},
 {id:29,name:'Gengibre',image:'caixa',category:'Temperos',unit:'kg',stock:2,target:10,alias:['gengibre'],price:1150,pack:5,sellers:[3,5]},
 {id:30,name:'Limão tahiti',image:'laranja',category:'Frutas',unit:'kg',stock:7,target:22,alias:['limao tahiti','limao'],price:395,pack:18,sellers:[2,3,5]},
 {id:31,name:'Maçã gala',image:'laranja',category:'Frutas',unit:'kg',stock:9,target:25,alias:['maca gala','maca'],price:890,pack:18,sellers:[2,5]},
 {id:32,name:'Mamão formosa',image:'laranja',category:'Frutas',unit:'kg',stock:5,target:18,alias:['mamao formosa','mamao'],price:620,pack:10,sellers:[2,5]},
 {id:33,name:'Melão amarelo',image:'laranja',category:'Frutas',unit:'un.',stock:6,target:24,alias:['melao amarelo','melao'],price:790,pack:6,sellers:[2,5],available:120},
 {id:34,name:'Abacaxi pérola',image:'laranja',category:'Frutas',unit:'un.',stock:8,target:30,alias:['abacaxi perola','abacaxi'],price:660,pack:8,sellers:[2,5],available:160},
 {id:35,name:'Manga tommy',image:'laranja',category:'Frutas',unit:'kg',stock:5,target:18,alias:['manga tommy','manga'],price:740,pack:12,sellers:[2,5]},
 {id:36,name:'Uva niágara',image:'laranja',category:'Frutas',unit:'kg',stock:3,target:12,alias:['uva niagara','uva'],price:1250,pack:5,sellers:[2,5]},
 {id:37,name:'Morango',image:'tomate',category:'Frutas',unit:'bandeja',stock:8,target:40,alias:['morango','morangos'],price:890,pack:4,sellers:[2,4],available:120},
 {id:38,name:'Ovo branco',image:'caixa',category:'Ovos',unit:'dúzia',stock:12,target:60,alias:['ovo branco','ovos'],price:990,pack:10,sellers:[1,5],available:200},
 {id:39,name:'Ovo vermelho',image:'caixa',category:'Ovos',unit:'dúzia',stock:8,target:48,alias:['ovo vermelho'],price:1190,pack:10,sellers:[1,5],available:200},
 {id:40,name:'Mexerica poncã',image:'caixa',category:'Frutas',unit:'cx',stock:0,target:4,alias:['mexerica ponca','ponca','tangerina ponca'],price:7800,pack:1,sellers:[2],available:12},
 {id:41,name:'Tomate cereja',image:'tomate',category:'Legumes',unit:'kg',stock:0,target:5,alias:['tomate cereja','cereja'],price:1450,pack:1,sellers:[1,3,4],available:45},
 {id:42,name:'Pimentão vermelho',image:'caixa',category:'Legumes',unit:'kg',stock:0,target:5,alias:['pimentao vermelho'],price:1250,pack:2,sellers:[1,4],available:40},
 {id:43,name:'Pimentão amarelo',image:'caixa',category:'Legumes',unit:'kg',stock:0,target:5,alias:['pimentao amarelo'],price:1200,pack:2,sellers:[1,4],available:40},
 {id:44,name:'Batata pirulito',image:'caixa',category:'Raízes',unit:'kg',stock:0,target:5,alias:['batata pirulito'],price:620,pack:2,sellers:[1,3,5],available:60},
 {id:45,name:'Beterraba graúda',image:'caixa',category:'Raízes',unit:'kg',stock:0,target:5,alias:['beterraba','beterraba grauda'],price:460,pack:3,sellers:[1,3,5],available:80},
 {id:46,name:'Uva roxa',image:'caixa',category:'Frutas',unit:'bandeja',stock:0,target:2,alias:['uva roxa','uva roxo'],price:1490,pack:1,sellers:[2,4],available:40},
 {id:47,name:'Alface roxa',image:'alface',category:'Verduras',unit:'un.',stock:0,target:4,alias:['alface roxa'],price:345,pack:2,sellers:[1,3,4],available:100},
 {id:48,name:'Hortelã',image:'alface',category:'Temperos',unit:'maço',stock:0,target:3,alias:['hortela'],price:260,pack:1,sellers:[1,3,4],available:100},
 {id:49,name:'Alho descascado',image:'caixa',category:'Temperos',unit:'kg',stock:0,target:10,alias:['alho descascado'],price:2450,pack:5,sellers:[3,5],available:80},
 {id:50,name:'Banana nanica amarela',image:'banana',category:'Frutas',unit:'kg',stock:0,target:10,alias:['banana nanica','banana nanica amarela'],price:430,pack:10,sellers:[1,2,5],available:120},
 {id:51,name:'Mandioquinha',image:'caixa',category:'Raízes',unit:'kg',stock:0,target:5,alias:['mandioquinha','batata baroa'],price:1290,pack:2,sellers:[3,5],available:60},
 {id:52,name:'Melancia graúda',image:'laranja',category:'Frutas',unit:'kg',stock:0,target:30,alias:['melancia','melancia grauda'],price:330,pack:13,sellers:[2,5],available:260},
 {id:53,name:'Morango congelado',image:'tomate',category:'Frutas',unit:'kg',stock:0,target:5,alias:['morango congelado'],price:1890,pack:1,sellers:[5],available:30},
 {id:54,name:'Abóbora cabotiá',image:'caixa',category:'Legumes',unit:'kg',stock:0,target:20,alias:['abobora cabotia','cabotia'],price:370,pack:10,sellers:[1,3,5],available:120},
 {id:55,name:'Alho-poró',image:'alface',category:'Temperos',unit:'un.',stock:0,target:3,alias:['alho poro','alho-poro'],price:790,pack:1,sellers:[1,3,4],available:60},
 {id:56,name:'Cebola roxa',image:'caixa',category:'Raízes',unit:'kg',stock:0,target:5,alias:['cebola roxa'],price:690,pack:5,sellers:[1,3,5],available:60},
 {id:57,name:'Manga palmer madura',image:'laranja',category:'Frutas',unit:'kg',stock:0,target:10,alias:['manga palmer','manga palmer madura'],price:820,pack:10,sellers:[2,5],available:100},
 {id:58,name:'Uva verde',image:'laranja',category:'Frutas',unit:'bandeja',stock:0,target:4,alias:['uva verde'],price:1590,pack:1,sellers:[2,4],available:40}
];
const categories=['Frutas','Legumes','Verduras','Raízes','Temperos','Ovos'];
// A imagem de capa é uma referência de catálogo. Na implantação real, cada oferta
// recebe novas fotos e vídeos do lote pelo painel do box, sem alterar o produto-base.
const catalogAsset={1:'tomate-italiano',2:'banana-prata',3:'alface-crespa',4:'laranja-pera',5:'batata-inglesa',6:'cebola',7:'cenoura',8:'abobrinha-italiana',9:'berinjela',10:'chuchu',11:'pimentao-verde',12:'pepino-japones',13:'milho-verde',14:'brocolis-ninja',15:'couve-flor',16:'tomate-salada',17:'alface-americana',18:'rucula',19:'couve-manteiga',20:'espinafre',21:'repolho-verde',22:'salsinha',23:'cebolinha',24:'coentro',25:'manjericao',26:'mandioca',27:'batata-doce',28:'alho',29:'gengibre',30:'limao-tahiti',31:'maca-gala',32:'mamao-formosa',33:'melao-amarelo',34:'abacaxi-perola',35:'manga-tommy',36:'uva-niagara',37:'morango',38:'ovo-branco',39:'ovo-vermelho',40:'mexerica-ponca',41:'tomate-cereja',42:'pimentao-vermelho',43:'pimentao-amarelo',44:'batata-pirulito',45:'beterraba',46:'uva-roxa',47:'alface-roxa',48:'hortela',49:'alho-descascado',50:'banana-nanica',51:'mandioquinha',52:'melancia',53:'morango-congelado',54:'abobora-cabotia',55:'alho-poro',56:'cebola-roxa',57:'manga-palmer',58:'uva-verde'};
const packaging={1:'Caixa de madeira',2:'Caixa de madeira',3:'Unidade fresca',4:'Caixa de madeira',5:'Saco de rede',6:'Saco de rede',7:'Saco de rede',8:'Caixa de madeira',9:'Caixa de madeira',10:'Caixa de madeira',11:'Caixa rasa',12:'Caixa de madeira',13:'Caixa de espigas',14:'Caixa rasa',15:'Caixa rasa',16:'Caixa de madeira',17:'Caixa de alfaces',18:'Maço',19:'Maço',20:'Maço',21:'Saco de rede',22:'Maço',23:'Maço',24:'Maço',25:'Maço',26:'Saco de rede',27:'Saco de rede',28:'Saco de rede',29:'Saco de rede',30:'Caixa de madeira',31:'Caixa de madeira',32:'Caixa de madeira',33:'Caixa de madeira',34:'Caixa de madeira',35:'Caixa de madeira',36:'Caixa rasa',37:'Bandeja',38:'Cartela de ovos',39:'Cartela de ovos',40:'Caixa de madeira',41:'Bandeja',42:'Caixa rasa',43:'Caixa rasa',44:'Saco de rede',45:'Saco de rede',46:'Bandeja',47:'Unidade fresca',48:'Maço',49:'Saco selado',50:'Cacho solto',51:'Saco de rede',52:'Unidade graúda',53:'Pacote congelado',54:'Caixa de madeira',55:'Unidade fresca',56:'Saco de rede',57:'Caixa de madeira',58:'Bandeja'};
products.forEach(p=>p.image='catalog/'+catalogAsset[p.id]);
// Modelos criados a partir da rotina real enviada. Mantêm a unidade digitada
// na compra e servem como ponto de partida para importar e cotar todo dia.
const standardLists=[
 {name:'Sassafraz · NF-e / 3 boletos',total:'R$ 979,00',items:[{product:34,quantity:4},{product:32,quantity:2},{product:40,quantity:1},{product:41,quantity:3},{product:42,quantity:6},{product:11,quantity:6},{product:43,quantity:6},{product:4,quantity:15}]},
 {name:'Campeão 38 · padrão 2',total:'R$ 2.557,00',items:[{product:34,quantity:10},{product:27,quantity:2},{product:5,quantity:25},{product:44,quantity:2},{product:45,quantity:3},{product:6,quantity:20},{product:7,quantity:5},{product:10,quantity:10},{product:30,quantity:5},{product:32,quantity:2},{product:12,quantity:2},{product:43,quantity:2},{product:42,quantity:2},{product:21,quantity:4},{product:46,quantity:1},{product:17,quantity:2},{product:3,quantity:20},{product:47,quantity:2},{product:23,quantity:1},{product:24,quantity:1},{product:19,quantity:2},{product:48,quantity:2},{product:18,quantity:2},{product:22,quantity:1},{product:49,quantity:10},{product:38,quantity:2},{product:50,quantity:10},{product:51,quantity:2},{product:37,quantity:1},{product:52,quantity:26},{product:53,quantity:3},{product:16,quantity:40}]},
 {name:'Campeão 28 · padrão 3',total:'R$ 8.052,80',items:[{product:34,quantity:80},{product:54,quantity:20},{product:55,quantity:1},{product:27,quantity:10},{product:5,quantity:150},{product:44,quantity:10},{product:9,quantity:20},{product:6,quantity:20},{product:56,quantity:5},{product:7,quantity:20},{product:10,quantity:10},{product:30,quantity:10},{product:32,quantity:3},{product:57,quantity:10},{product:12,quantity:5},{product:58,quantity:4},{product:17,quantity:10},{product:3,quantity:50},{product:19,quantity:6},{product:25,quantity:1},{product:18,quantity:13},{product:49,quantity:10},{product:38,quantity:6},{product:50,quantity:10},{product:14,quantity:10},{product:51,quantity:5},{product:4,quantity:306},{product:52,quantity:26},{product:16,quantity:100}]}
];
const vendors=[
 {id:1,name:'Box Primavera',box:'07',pavilion:'A',image:'boxes/primavera',freight:1200,description:'Frutas e legumes selecionados'},
 {id:2,name:'Sítio Horizonte',box:'18',pavilion:'A',image:'boxes/horizonte',freight:1000,description:'Frutas da estação'},
 {id:3,name:'Horta do Vale',box:'12',pavilion:'A',image:'boxes/vale',freight:800,description:'Verduras e legumes'},
 {id:4,name:'Campo Fresco',box:'09',pavilion:'B',image:'boxes/campo',freight:1500,description:'Hortifruti para sua cozinha'},
 {id:5,name:'Raízes do Campo',box:'23',pavilion:'B',image:'boxes/raizes',freight:1000,description:'Reposição para o seu negócio'}
];
const baseOffers=[
 [1,1,10,490],[1,2,20,500],[1,3,10,540],[1,4,12,480],[1,5,1,580],
 [2,1,12,549],[2,2,12,569],[2,5,12,589],
 [3,1,1,245],[3,3,1,265],[3,4,1,285],[3,5,1,305],
 [4,2,15,390],[4,3,15,410]
];
const generatedOffers=products.filter(p=>p.id>4).flatMap(p=>p.sellers.map((seller,index)=>[p.id,seller,p.pack,Math.round(p.price*(1+index*.06))]));
const inventoryOffers=[...baseOffers,...generatedOffers].map(([product,vendor,pack,price])=>{
 const item=products.find(p=>p.id===product);
 return {product,vendor,pack,price,available:item?.available||240,presentation:packaging[product],media:{cover:item?.image,photoCount:1,videoCount:0,updatedAt:'Imagem-base do catálogo'}};
});
const cities=['Jundiaí','Itupeva','Campo Limpo Paulista','Jarinu'];
const example='20 kg de tomate italiano\n24 kg de banana prata\n10 unidades de alface crespa\n15 kg de laranja pera';
const key='newflow-titanio-v2';
const product=id=>products.find(p=>p.id===Number(id));
const vendor=id=>vendors.find(v=>v.id===Number(id));
const offerKey=(productId,vendorId)=>Number(productId)+'-'+Number(vendorId);
const baseOffer=(productId,vendorId)=>inventoryOffers.find(o=>o.product===Number(productId)&&o.vendor===Number(vendorId));
const effectiveOffer=offer=>{
 const update=state?.offerUpdates?.[offerKey(offer.product,offer.vendor)];
 return update?{...offer,...update,media:{...offer.media,...(update.media||{})}}:offer;
};
const offers=id=>inventoryOffers.filter(o=>o.product===Number(id)).map(effectiveOffer);
const discrete=p=>p.unit!=='kg';
const byId=id=>document.getElementById(id);
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normal=value=>String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const money=cents=>(cents/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const number=value=>Number(value).toLocaleString('pt-BR',{maximumFractionDigits:2});
const icon=(name,size=22)=>'<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(shapes[name]||shapes.box)+'</svg>';
const image=(name,cls='')=>'<img src="assets/'+name+'.png" alt="" class="'+cls+'">';
let saved={};
try{saved=JSON.parse(localStorage.getItem(key))||{};}catch{}
const state={
 cart:Array.isArray(saved.cart)?saved.cart:[],orders:Array.isArray(saved.orders)?saved.orders:[],
 lists:Array.isArray(saved.lists)?saved.lists:[],team:Array.isArray(saved.team)?saved.team:[],
 profile:{name:'Rafael',business:'Minha loja',city:'Jundiaí',address:'',...saved.profile},
 targets:saved.targets||{},sound:!!saved.sound,listText:saved.listText||'',connected:!!saved.connected,
 offerUpdates:saved.offerUpdates&&typeof saved.offerUpdates==='object'?saved.offerUpdates:{},
 livePosts:Array.isArray(saved.livePosts)?saved.livePosts:[
  {id:'lote-tomate',product:1,vendor:1,createdAt:Date.now()-2*60*60*1000,caption:'Tomate italiano firme, separado agora.'},
  {id:'lote-banana',product:2,vendor:1,createdAt:Date.now()-5*60*60*1000,caption:'Banana prata no ponto para reposição.'},
  {id:'lote-morango',product:37,vendor:4,createdAt:Date.now()-9*60*60*1000,caption:'Bandejas frescas recebidas hoje.'}
 ],
 ownerOrders:Array.isArray(saved.ownerOrders)?saved.ownerOrders:[
  {id:'BX-1048',buyer:'Sassafraz',items:8,total:97900,status:0,when:'Hoje · 08:12'},
  {id:'BX-1047',buyer:'Campeão 38',items:32,total:255700,status:1,when:'Hoje · 07:35'},
  {id:'BX-1046',buyer:'Campeão 28',items:29,total:805280,status:2,when:'Ontem · 16:20'}
 ],
 boxErpConnected:!!saved.boxErpConnected
};
state.cart=state.cart.filter(l=>product(l.product)&&vendor(l.vendor)&&Number.isFinite(l.quantity)&&l.quantity>0);
let draft=[],category='Todos',query='',preferredBox=0,listBox=0,boxCategory='Todos',compare={product:1,quantity:20,vendor:1,origin:'product'};
let stockOnly=true,stockSelected=new Set([1,2,3]),stockValues={},toastTimer,audioContext;
const main=byId('main');
function save(){
 try{localStorage.setItem(key,JSON.stringify(state));}
 catch{toast('Armazenamento indisponível. Mantenha esta aba aberta.');}
}
function toast(text){
 byId('toast').textContent=text;byId('toast').hidden=false;
 clearTimeout(toastTimer);toastTimer=setTimeout(()=>byId('toast').hidden=true,3500);
}
function sound(){
 if(!state.sound)return;
 try{
  audioContext ||= new (window.AudioContext||window.webkitAudioContext)();
  audioContext.resume();
  const osc=audioContext.createOscillator(),gain=audioContext.createGain(),now=audioContext.currentTime;
  osc.connect(gain);gain.connect(audioContext.destination);
  osc.frequency.setValueAtTime(660,now);osc.frequency.exponentialRampToValueAtTime(880,now+.1);
  gain.gain.setValueAtTime(.035,now);gain.gain.exponentialRampToValueAtTime(.001,now+.18);
  osc.start();osc.stop(now+.2);
 }catch{}
}
const sessionMedia={},sessionPostMedia={};
function current(){const [name,id,subId]=location.hash.slice(1).split('/');return {name:name||'home',id:id||'',subId:subId||''};}
function go(name,id='',subId=''){
 const hash='#'+name+(id?'/'+id:'')+(subId?'/'+subId:'');
 if(location.hash===hash)render();else location.hash=hash;
 byId('scroll').scrollTo(0,0);
}
function title(name,subtitle=''){return '<h1 class="page-title">'+name+'</h1>'+(subtitle?'<p class="subtitle">'+subtitle+'</p>':'');}
function primary(label,act,extra=''){return '<button class="metal glow primary" data-act="'+act+'" '+extra+'>'+label+icon('arrow')+'</button>';}
function routeButton(label,routeName,cls='text-button'){return '<button class="'+cls+'" data-act="route" data-route="'+routeName+'">'+label+'</button>';}
function tile(label,detail,ico,routeName){return '<button class="metal route-card" data-act="route" data-route="'+routeName+'">'+icon(ico,29)+'<div><h3>'+label+'</h3><p>'+detail+'</p></div></button>';}
function dialog(label,html){byId('dialog-title').textContent=label;byId('dialog-content').innerHTML=html;if(!byId('dialog').open)byId('dialog').showModal();}
function empty(label,detail,routeName='buy'){
 return '<div class="metal empty">'+icon('box',40)+'<h2>'+label+'</h2><p>'+detail+'</p>'+routeButton('Começar uma compra',routeName)+'</div>';
}
function cost(productId,vendorId,quantity){
 const raw=baseOffer(productId,vendorId),offer=raw&&effectiveOffer(raw);
 if(!offer||!Number.isFinite(quantity)||quantity<=0)return null;
 const packs=Math.ceil(quantity/offer.pack-1e-9);
 return {...offer,requested:quantity,packs,quantity:packs*offer.pack,total:Math.round(packs*offer.pack*offer.price)};
}
function lines(){return state.cart.map(l=>cost(l.product,l.vendor,l.quantity)).filter(Boolean);}
function totals(items=lines()){
 const groups=[...new Set(items.map(l=>l.vendor))];
 const subtotal=items.reduce((sum,l)=>sum+l.total,0);
 const freight=groups.reduce((sum,id)=>sum+vendor(id).freight,0);
 return {groups,subtotal,freight,total:subtotal+freight};
}
function summary(value){
 return '<div class="metal summary"><div class="between"><span>Produtos</span><strong>'+money(value.subtotal)+'</strong></div><div class="between"><span>Fretes</span><strong>'+money(value.freight)+'</strong></div><hr><div class="between"><span>Total</span><strong class="total">'+money(value.total)+'</strong></div></div>';
}
function add(productId,vendorId,quantity){
 const found=state.cart.find(l=>l.product===productId&&l.vendor===vendorId);
 const requested=quantity+(found?.quantity||0),calculated=cost(productId,vendorId,requested);
 if(!calculated||calculated.quantity>calculated.available)return false;
 if(found)found.quantity=requested;else state.cart.push({product:productId,vendor:vendorId,quantity});
 return true;
}
function merchant(v){
 return '<button class="metal vendor-card" data-act="vendor" data-id="'+v.id+'">'+image(v.image,'vendor-photo')+'<div class="vendor-body"><h3>'+v.name+'</h3><p class="meta">Box '+v.box+' · Pavilhão '+v.pavilion+'</p><p class="meta">'+v.description+'</p></div></button>';
}
function card(p,box=0){
 const candidates=offers(p.id).filter(o=>!box||o.vendor===box).sort((a,b)=>a.price-b.price);
 if(!candidates.length)return '';
 return '<article class="metal product-card"><button style="width:100%;padding:0" data-act="product" data-id="'+p.id+'" data-box="'+box+'" aria-label="Ver '+p.name+'">'+image(p.image,'product-image')+'</button><div class="product-body"><h3>'+p.name+'</h3><p class="meta">A partir de</p><div class="price">'+money(candidates[0].price)+' <small>/ '+p.unit+'</small></div><button class="metal glow" data-act="product" data-id="'+p.id+'" data-box="'+box+'">Ver ofertas</button></div></article>';
}
function activeLivePosts(){
 const limit=Date.now()-24*60*60*1000;
 return state.livePosts.filter(post=>post.createdAt>limit&&product(post.product)&&vendor(post.vendor)).sort((a,b)=>b.createdAt-a.createdAt);
}
function liveAge(post){
 const minutes=Math.max(1,Math.floor((Date.now()-post.createdAt)/60000));
 if(minutes<60)return minutes+' min';
 return Math.floor(minutes/60)+' h';
}
function postDate(post){
 const day=post.day?new Date(post.day+'T12:00:00'):new Date(post.createdAt);
 return day.toLocaleDateString('pt-BR',{day:'2-digit',month:'short'}).replace('.','')+' · '+liveAge(post);
}
function liveCard(post){
 const p=product(post.product),v=vendor(post.vendor),offer=effectiveOffer(baseOffer(p.id,v.id)),src=post.preview||'assets/'+p.image+'.png';
 return '<button class="metal live-card" data-act="open-live" data-product="'+p.id+'" data-vendor="'+v.id+'"><div class="live-image"><img src="'+src+'" alt="'+escape(p.name)+'"><span>AO VIVO</span></div><div class="live-body"><p class="eyebrow">'+escape(v.name)+' · '+liveAge(post)+'</p><h3>'+escape(p.name)+'</h3><p>'+escape(post.caption||offer.presentation)+'</p><strong>'+money(offer.price)+' <small>/ '+p.unit+'</small></strong></div></button>';
}
function socialPost(post){
 const p=product(post.product),v=vendor(post.vendor),offer=effectiveOffer(baseOffer(p.id,v.id)),src=sessionPostMedia[post.id]||post.preview||'assets/'+p.image+'.png';
 return '<article class="metal social-post"><header><div class="post-avatar">'+image(v.image)+'</div><div class="grow"><strong>'+escape(v.name)+'</strong><p>Box '+escape(v.box)+' · '+postDate(post)+'</p></div><span class="post-kind">'+escape(post.kind||'Atualização')+'</span></header><div class="social-photo"><img src="'+src+'" alt="'+escape(p.name)+'"><span>'+escape(p.name)+'</span></div><div class="social-copy"><p>'+escape(post.caption||'Lote atualizado no Box.')+'</p><div class="between"><div><strong>'+money(offer.price)+'</strong><small> / '+p.unit+' · '+number(offer.available)+' disponíveis</small></div><button class="text-button" data-act="open-live" data-product="'+p.id+'" data-vendor="'+v.id+'">Comprar lote</button></div></div></article>';
}
function liveFeed(){
 const posts=activeLivePosts();
 return title('Mercado ao vivo','Atualizações reais de frutas, lotes e disponibilidade.')+
 '<p class="notice">Cada publicação fica no ar por 24 horas. Toque para comprar diretamente daquele Box.</p>'+
 (posts.length?'<div class="social-feed">'+posts.map(socialPost).join('')+'</div>':empty('Nenhuma atualização ao vivo agora','Quando um Box publicar uma atualização, ela aparece aqui durante 24 horas.','explore'));
}
function home(){
 return '<section class="hero"><h1>Entre no Box.<br>Abasteça sua loja.</h1><p>Escolha quem vende, veja o lote do dia e compre dentro da vitrine.</p>'+routeButton('Escolher um Box','boxes','metal glow')+image('boxes/primavera','hero-image')+'<div class="pedestal"></div></section><div class="section-heading"><h2>Escolha seu Box</h2>'+routeButton('Ver todos','boxes')+'</div><div class="box-entry-grid">'+vendors.map(v=>'<button class="metal box-entry" data-act="vendor" data-id="'+v.id+'">'+image(v.image)+'<strong>'+escape(v.name)+'</strong><small>Box '+escape(v.box)+' · '+escape(v.description)+'</small></button>').join('')+'</div>'+
 '<form class="search" id="home-search">'+icon('search')+'<input name="query" aria-label="Buscar produtos ou boxes" placeholder="Buscar produtos ou boxes"></form>'+
 '<div class="section-heading"><h2>Mercado ao vivo</h2>'+routeButton('Ver feed','live')+'</div><div class="live-rail">'+activeLivePosts().slice(0,3).map(liveCard).join('')+'</div>'+
 '<div class="action-grid">'+[['Comprar pela lista','list','list'],['Repor meu estoque','box','stock'],['Planejar produção','leaf','production'],['Pedidos da equipe','team','team']].map(([label,ico,to])=>'<button class="metal glow" data-act="route" data-route="'+to+'">'+icon(ico)+label+'</button>').join('')+'</div>'+
 '<div class="chips">'+categories.map(c=>'<button class="metal chip" data-act="category" data-name="'+c+'">'+c+'</button>').join('')+'</div>'+
 '<div class="section-heading"><h2>Para abastecer</h2>'+routeButton('Ver tudo','explore')+'</div><div class="catalog">'+products.slice(0,4).map(p=>card(p)).join('')+'</div><p class="meta gap">Base CEASA · '+products.length+' produtos em '+categories.length+' categorias · Valores demonstrativos</p>';
}
function catalogResults(){
 const term=normal(query);
 return products.filter(p=>(category==='Todos'||p.category===category)&&(normal(p.name+' '+p.category+' '+p.alias.join(' ')).includes(term)||offers(p.id).some(o=>normal(vendor(o.vendor).name).includes(term)))).map(p=>card(p)).join('')||'<p class="notice" style="grid-column:1/-1">Nenhum produto encontrado. Tente outra busca ou categoria.</p>';
}
function explore(){
 return title('O que vamos comprar?','Base CEASA com '+products.length+' produtos para montar sua compra.')+'<form id="explore-search" class="search">'+icon('search')+'<input name="query" value="'+escape(query)+'" aria-label="Buscar produtos" placeholder="Produto, categoria ou box"></form><div class="chips">'+['Todos',...categories].map(c=>'<button class="metal chip" aria-pressed="'+(category===c)+'" data-act="filter" data-name="'+c+'">'+c+'</button>').join('')+'</div><div class="catalog" id="results">'+catalogResults()+'</div>';
}
function boxView(id){
 const v=vendor(id);
 if(!v)return title('Explore os boxes','Encontre quem abastece o seu negócio.')+'<div class="stack">'+vendors.map(v=>'<button class="metal route-card" data-act="vendor" data-id="'+v.id+'">'+image(v.image)+'<div><h3>'+v.name+'</h3><p>Box '+v.box+' · Pavilhão '+v.pavilion+'</p><p>'+v.description+'</p></div></button>').join('')+'</div>';
 const boxProducts=products.filter(p=>offers(p.id).some(o=>o.vendor===v.id));
 const boxCategories=[...new Set(boxProducts.map(p=>p.category))];
 const visible=boxProducts.filter(p=>boxCategory==='Todos'||p.category===boxCategory);
 const live=activeLivePosts().filter(post=>post.vendor===v.id);
 return '<section class="box-store box-theme-'+v.id+'"><div class="box-cover">'+image(v.image)+'</div><div class="box-store-top"><div><span class="eyebrow">PAVILHÃO '+escape(v.pavilion)+' · BOX '+escape(v.box)+'</span><h1>'+escape(v.name)+'</h1><p>'+escape(v.description)+'</p></div></div><div class="box-facts"><span>Entrega amanhã</span><span>Frete '+money(v.freight)+'</span><span>'+boxProducts.length+' produtos</span></div></section>'+
 '<div class="box-nav"><button class="metal" data-act="box-top" data-box="'+v.id+'">Vitrine</button><button class="metal" data-act="box-category-all" data-box="'+v.id+'">Catálogo</button><button class="metal" data-act="box-live" data-box="'+v.id+'">Lotes ao vivo '+(live.length?'('+live.length+')':'')+'</button></div>'+
 (live.length?'<div id="box-live-'+v.id+'" class="box-section"><div class="section-heading"><h2>Chegou agora</h2><span class="tag">24h</span></div><div class="live-rail">'+live.slice(0,3).map(liveCard).join('')+'</div></div>':'')+
 '<div class="metal box-list-cta"><strong>Já tem uma lista?</strong><p>Cole seus ingredientes e veja somente o que este Box vende.</p><button class="metal glow secondary" data-act="box-list" data-id="'+v.id+'">Comprar lista neste Box</button></div>'+
 '<div id="box-catalog-'+v.id+'" class="box-section"><div class="section-heading"><h2>Comprar neste Box</h2><span class="meta">'+visible.length+' itens</span></div><p class="meta">Você está vendo somente produtos do '+escape(v.name)+'.</p><div class="chips">'+['Todos',...boxCategories].map(c=>'<button class="metal chip" data-act="box-filter" data-name="'+c+'" data-box="'+v.id+'" aria-pressed="'+(boxCategory===c)+'">'+c+'</button>').join('')+'</div><div class="catalog">'+visible.map(p=>card(p,v.id)).join('')+'</div></div>';
}
function productView(id){
 const p=product(id);if(!p)return empty('Produto indisponível','Escolha um produto no catálogo.','explore');
 return title(p.name,p.category)+image(p.image,'product-hero')+
 '<p class="notice">'+offers(p.id).length+' boxes com ofertas. Compare embalagem, quantidade e frete.</p><div class="metal summary"><h3>Fotos e vídeos do lote</h3><p class="meta">Cada box pode atualizar foto, vídeo curto, embalagem e disponibilidade do lote pelo celular.</p></div>'+
 '<form id="quantity-form"><input type="hidden" name="product" value="'+p.id+'"><label class="field">Quanto você precisa ('+p.unit+')?<input type="number" name="quantity" min="'+(discrete(p)?'1':'.1')+'" step="'+(discrete(p)?'1':'.1')+'" max="240" value="'+(p.unit==='kg'?20:10)+'" required></label><button class="metal glow primary">Comparar boxes '+icon('arrow')+'</button></form>';
}
function buy(){
 return title('Como vamos comprar?','Escolha o caminho mais fácil para sua rotina.')+'<div class="stack">'+
 tile('Explorar produtos','Escolha diretamente no catálogo','search','explore')+
 tile('Comprar pela lista','Cole ou importe suas necessidades','list','list')+
 tile('Repor meu estoque','Selecione os produtos que faltam','box','stock')+
 tile('Planejar produção','Calcule ingredientes por porção','leaf','production')+
 tile('Pedidos da equipe','Reúna os pedidos dos setores','team','team')+
 tile('Minhas listas','Reutilize suas compras frequentes','orders','saved')+'</div>';
}
function listView(){
 return title(listBox?'Lista no '+vendor(listBox).name:'Comprar pela lista',listBox?'Somente ofertas deste Box. Itens ausentes serão mostrados para revisão.':'Cole sua lista ou importe um arquivo de produtos.')+
 (listBox?'<button class="text-button" data-act="clear-list-box">Comparar todos os Boxes</button>':'')+
 '<div class="flex bottom"><button class="metal secondary" data-act="example">Usar exemplo</button><button class="metal secondary" data-act="import">Importar TXT/CSV</button><input id="file" type="file" accept=".txt,.csv,text/plain,text/csv" hidden></div>'+
 '<label class="sr" for="list-text">Lista de produtos e quantidades</label><textarea id="list-text" rows="7" placeholder="'+example+'">'+escape(state.listText)+'</textarea>'+
 '<p class="meta">Uma linha por produto com quantidade e unidade. CSV com colunas produto, quantidade e unidade.</p>'+
 primary('Conferir produtos','parse')+routeButton('Minhas listas salvas ('+state.lists.length+')','saved','text-button full gap');
}
function parseList(text){
 const output=[];
 for(const raw of text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean)){
  const cleaned=raw.replace(/"/g,''),n=normal(cleaned);
  if(/^(produto|product)[;,\t]/.test(n))continue;
  let matches=products.filter(p=>p.alias.some(alias=>new RegExp('\\b'+normal(alias)+'\\b').test(n)));
  const match=cleaned.match(/\d+(?:[.,]\d+)?/);
  let amount=match?Number(match[0].replace(',','.')):0;
  let inputUnit='';
  if(/\b(kg|quilo|quilos)\b/.test(n))inputUnit='kg';
  else if(/\b(g|grama|gramas)\b/.test(n)){inputUnit='kg';amount/=1000;}
  else if(/\b(unidade|unidades|un\.)\b/.test(n))inputUnit='un.';
  else if(/\b(maco|macos)\b/.test(n))inputUnit='maço';
  else if(/\b(bandeja|bandejas)\b/.test(n))inputUnit='bandeja';
  else if(/\b(duzia|duzias)\b/.test(n))inputUnit='dúzia';
  const p=matches.length===1?matches[0]:null;
  output.push({product:p?.id||0,quantity:amount,raw,inputUnit,needsUnit:/caixa|\bcx\b|pacote/.test(n)});
 }
 return output;
}
function review(){
 if(!draft.length)return empty('Sua lista está vazia','Adicione produtos para comparar ofertas.','list');
 return title('Confira sua lista',draft.length+' itens para revisar antes de comparar.')+
 '<form id="review-form"><div class="stack">'+draft.map((line,i)=>{
  const p=product(line.product);
  return '<article class="metal" style="padding:14px">'+(p?'<div class="flex">'+image(p.image,'review-thumb')+'<h3>'+p.name+'</h3></div>':'<p class="warning">Escolha o produto correspondente</p>')+
  '<p class="meta">'+escape(line.raw)+'</p><div class="form-row"><label class="field">Produto<select name="product-'+i+'" required><option value="">Selecione</option>'+products.filter(p=>!listBox||offers(p.id).some(o=>o.vendor===listBox)).map(p=>'<option value="'+p.id+'" '+(line.product===p.id?'selected':'')+'>'+p.name+'</option>').join('')+'</select></label>'+
  '<label class="field" style="flex:0 0 90px">Quantidade<input name="quantity-'+i+'" type="number" min=".1" step=".1" value="'+(line.quantity||'')+'" required></label></div><p class="meta">Quantidade em <strong class="unit">'+(p?.unit||'unidade do produto')+'</strong></p>'+
  (line.needsUnit?'<label class="flex warning"><input type="checkbox" required>Converti a embalagem para a unidade de compra.</label>':'')+
  (p&&line.inputUnit&&line.inputUnit!==p.unit?'<label class="flex warning"><input type="checkbox" required>A lista usa '+escape(line.inputUnit)+' e este produto é vendido em '+escape(p.unit)+'. Confirmo a conversão.</label>':'')+'</article>';
 }).join('')+'</div><button class="metal glow primary gap">Comparar minha lista '+icon('arrow')+'</button></form>';
}
function suggest(items){
 return items.map(line=>{
  const cheapest=offers(line.product).filter(o=>!listBox||o.vendor===listBox).map(o=>cost(line.product,o.vendor,line.quantity)).filter(o=>o&&o.quantity<=o.available).sort((a,b)=>a.total-b.total)[0];
  return {...line,vendor:cheapest?.vendor||0};
 });
}
function plan(){
 if(!draft.length)return listView();
 const selected=draft.map(l=>cost(l.product,l.vendor,l.quantity)).filter(Boolean),total=totals(selected);
 return title('Sua lista, seus boxes','Revise as ofertas e altere o fornecedor de cada produto.')+'<div class="stack">'+draft.map((l,i)=>{
  const p=product(l.product),o=cost(l.product,l.vendor,l.quantity);
  return '<article class="metal review-row">'+image(p.image)+'<div class="grow"><h3>'+p.name+'</h3><p class="meta">Solicitado '+number(l.quantity)+' '+p.unit+'</p>'+
  (o?'<p class="meta">'+vendor(o.vendor).name+'</p><strong>'+money(o.total)+'</strong><p class="meta">Compra de '+number(o.quantity)+' '+p.unit+'</p>':'<p class="warning">Sem disponibilidade para essa quantidade</p>')+
  (listBox?'<span class="meta">'+escape(vendor(listBox).name)+' somente</span>':'<button class="text-button" data-act="compare-line" data-index="'+i+'">Ver '+offers(p.id).length+' boxes</button>')+'</div></article>';
 }).join('')+'</div><p class="notice">Sugestão pelo subtotal de cada produto. Compare o total com fretes ao trocar os fornecedores.</p>'+
 summary(total)+primary('Adicionar lista à sacola','add-list')+'<button class="text-button full gap" data-act="save-list">Salvar esta lista</button>';
}
function compareView(){
 const p=product(compare.product),choices=offers(p.id).map(o=>cost(p.id,o.vendor,compare.quantity)).sort((a,b)=>a.total-b.total);
 return title('Compare os boxes')+'<div class="metal review-row bottom">'+image(p.image)+'<div><h3>'+p.name+'</h3><p class="meta">Você precisa de '+number(compare.quantity)+' '+p.unit+'</p></div></div><p class="meta">'+choices.length+' ofertas · Ordenadas pelo subtotal</p><div class="stack">'+choices.map(o=>{
  const v=vendor(o.vendor),extra=o.quantity-compare.quantity;
  return '<button class="metal offer '+(compare.vendor===o.vendor?'selected glow':'')+'" data-act="select-offer" data-id="'+v.id+'" aria-pressed="'+(compare.vendor===v.id)+'" '+(o.quantity>o.available?'disabled':'')+'><div class="between"><h3>'+v.name+'</h3><span class="radio"></span></div><div class="between"><div><p class="meta">'+escape(o.presentation)+' · '+(o.pack===1?'Venda por '+p.unit:o.packs+' × '+o.pack+' '+p.unit)+'</p><p class="meta">'+money(o.price)+' / '+p.unit+'</p></div><strong class="offer-price">'+money(o.total)+'</strong></div><p class="meta">Frete '+money(v.freight)+' · Amanhã · '+o.media.photoCount+' foto de referência</p>'+
  (extra>0?'<p class="warning" style="margin-bottom:0">+'+number(extra)+' '+p.unit+' além da lista</p>':'')+
  (o.quantity>o.available?'<p class="warning">Disponível até '+o.available+' '+p.unit+'</p>':'')+'</button>';
 }).join('')+'</div><p class="meta gap">Um frete por box na sacola. Valores demonstrativos.</p>'+primary(compare.origin==='draft'?'Escolher este box':'Adicionar à sacola','choose-offer');
}
function stock(){
 const shown=products.filter(p=>!stockOnly||p.stock<Number(state.targets[p.id]??p.target));
 return title('Repor meu estoque','Confira as necessidades e escolha quanto comprar.')+
 '<section class="metal summary"><div class="flex">'+icon('plug',32)+'<div><h3>ERP NEW FLOW</h3><p class="meta">'+(state.connected?'Estoque demonstrativo carregado':'Explore um estoque de exemplo')+'</p></div></div>'+routeButton('Gerenciar conexão','connection','text-button full')+'</section>'+
 '<div class="chips"><button class="metal chip" data-act="stock-filter" data-value="all" aria-pressed="'+!stockOnly+'">Todos</button><button class="metal chip" data-act="stock-filter" data-value="need" aria-pressed="'+stockOnly+'">Precisam de reposição</button></div><div class="stack">'+shown.map(p=>{
  const target=Number(state.targets[p.id]??p.target),amount=stockValues[p.id]??Math.max(0,target-p.stock);
  return '<article class="metal stock-card"><div class="flex">'+image(p.image)+'<div class="grow"><h3>'+p.name+'</h3><div class="stock-facts"><span>Disponível <strong>'+p.stock+' '+p.unit+'</strong></span><span>Meta <strong>'+target+' '+p.unit+'</strong></span></div></div><input type="checkbox" data-stock="'+p.id+'" aria-label="Selecionar '+p.name+'" '+(stockSelected.has(p.id)?'checked':'')+'></div><label class="stock-buy">Comprar ('+p.unit+')<input class="quantity" type="number" min="0" max="240" step="'+(discrete(p)?'1':'.1')+'" data-amount="'+p.id+'" value="'+amount+'"></label></article>';
 }).join('')+'</div><button class="text-button full gap" data-act="targets">Editar metas de estoque</button>'+primary('Buscar ofertas nos boxes','stock-list');
}
function connection(){
 return title('Conectar meu sistema','Centralize as informações de reposição.')+'<p class="notice">Prévia de integração. A conexão real depende do conector e da autorização do seu ERP.</p>'+
 '<button class="metal route-card" data-act="demo-connect">'+icon('plug',30)+'<div><h3>ERP NEW FLOW</h3><p>Carregar estoque demonstrativo</p></div></button>'+
 '<div class="metal summary"><h3>Outros sistemas</h3><p class="meta">Bling, Loyverse ou sistema próprio precisam de um conector configurado para sincronizar produtos e depósitos.</p></div>'+
 '<div class="metal summary"><h3>Importar uma necessidade</h3><p class="meta">Use a lista exportada do seu sistema para comparar produtos nesta versão.</p>'+routeButton('Importar lista TXT/CSV','list')+'</div>';
}
function production(){
 return title('Planejar produção','Calcule a compra a partir de uma receita.')+'<p class="notice">Ficha técnica demonstrativa. Ajuste os ingredientes por porção para sua receita.</p>'+
 '<form id="production-form"><label class="field">Nome da receita<input name="name" value="Salada da casa" required maxlength="80"></label><label class="field">Quantidade de porções<input name="portions" type="number" min="1" max="1000" step="1" value="100" required></label>'+
 '<div class="metal summary"><h3>Ingredientes por porção</h3><label class="field">Tomate italiano (gramas)<input name="tomato" type="number" min="1" max="1000" value="120" required></label><label class="field">Alface crespa (fração de unidade)<input name="lettuce" type="number" min=".01" max="10" step=".01" value=".15" required></label></div>'+
 '<label class="flex bottom"><input name="subtract" type="checkbox">Descontar o estoque demonstrativo</label><button class="metal glow primary">Calcular ingredientes '+icon('arrow')+'</button></form>';
}
function team(){
 return title('Pedidos da equipe','Reúna as necessidades dos setores da loja.')+'<p class="notice">Equipe demonstrativa. Solicitações salvas neste navegador.</p><div class="stack">'+state.team.map((l,i)=>'<article class="metal review-row">'+image(product(l.product).image)+'<div class="grow"><h3>'+product(l.product).name+'</h3><p class="meta">'+escape(l.sector)+' · '+number(l.quantity)+' '+product(l.product).unit+'</p></div><button class="text-button" data-act="remove-team" data-index="'+i+'">Remover</button></article>').join('')+'</div>'+
 '<button class="metal secondary full gap" data-act="add-team">Adicionar solicitação</button>'+
 (state.team.length?'<div class="gap">'+primary('Revisar compra da equipe','team-list')+'</div>':'<p class="meta gap">Cada setor contribui e o comprador revisa as quantidades reunidas.</p>');
}
function cart(){
 const items=lines(),total=totals(items);
 if(!items.length)return title('Sua sacola')+empty('Vamos abastecer?','Escolha produtos ou envie sua lista para começar.');
 return title('Sua sacola',items.length+' produtos em '+total.groups.length+' boxes.')+
 total.groups.map(id=>'<div class="section-heading"><h2>'+vendor(id).name+'</h2></div><div class="stack">'+items.filter(l=>l.vendor===id).map(l=>{
  const p=product(l.product);
  return '<article class="metal review-row">'+image(p.image)+'<div class="grow"><h3>'+p.name+'</h3><p class="meta">'+l.packs+' × '+l.pack+' '+p.unit+' · '+money(l.price)+' / '+p.unit+'</p><strong>'+money(l.total)+'</strong><div class="between gap"><div class="metal stepper"><button data-act="cart-minus" data-product="'+p.id+'" data-vendor="'+id+'" aria-label="Remover embalagem de '+p.name+'">−</button><strong>'+l.packs+'</strong><button data-act="cart-plus" data-product="'+p.id+'" data-vendor="'+id+'" aria-label="Adicionar embalagem de '+p.name+'">+</button></div><button class="text-button" data-act="cart-remove" data-product="'+p.id+'" data-vendor="'+id+'">Remover</button></div></div></article>';
 }).join('')+'</div><p class="meta gap">Frete do box '+money(vendor(id).freight)+'</p>').join('')+summary(total)+primary('Revisar pedido','checkout');
}
function citySelect(name='city'){return '<select name="'+name+'">'+cities.map(c=>'<option '+(c===state.profile.city?'selected':'')+'>'+c+'</option>').join('')+'</select>';}
function checkout(){
 if(!state.cart.length)return cart();
 const total=totals();
 return title('Revisar pedido','Confira a entrega e os valores de cada fornecedor.')+
 '<form id="checkout-form"><label class="field">Estabelecimento<input name="business" required maxlength="100" value="'+escape(state.profile.business)+'"></label><label class="field">Cidade'+citySelect()+'</label><label class="field">Endereço de entrega<input name="address" required maxlength="200" value="'+escape(state.profile.address)+'" placeholder="Rua, número e complemento"></label><label class="field">Janela de entrega<select name="window"><option>Amanhã · 8h às 12h</option><option>Amanhã · 13h às 17h</option></select></label><label class="field">Observações<textarea name="note" maxlength="400" rows="2" placeholder="Orientações para recebimento"></textarea></label>'+
 total.groups.map(id=>'<div class="between meta"><span>'+vendor(id).name+'</span><strong>'+money(lines().filter(l=>l.vendor===id).reduce((sum,l)=>sum+l.total,0)+vendor(id).freight)+'</strong></div>').join('')+
 summary(total)+'<p class="notice">Pedido simulado. A confirmação registra a compra neste navegador. Pagamento e envio aos boxes entram na integração real.</p><button class="metal glow primary">Confirmar pedido simulado '+icon('check')+'</button></form>';
}
const stages=['Confirmado','Em separação','A caminho','Entregue'];
function orders(){
 return title('Meus pedidos','Histórico e acompanhamento das suas compras.')+
 (state.orders.length?'<div class="stack">'+state.orders.map(o=>'<article class="metal" style="padding:17px"><div class="between"><h3>Pedido #'+o.number+'</h3><span class="tag">'+stages[o.stage]+'</span></div><p class="meta">'+new Date(o.created).toLocaleDateString('pt-BR')+' · '+o.groups.length+' boxes</p><p class="meta">'+o.lines.map(l=>product(l.product).name).join(', ')+'</p><div class="between gap"><strong class="total">'+money(o.total)+'</strong><button class="text-button" data-act="order" data-id="'+o.id+'">Ver pedido</button></div></article>').join('')+'</div>':empty('Seu próximo pedido começa aqui','As compras confirmadas aparecem neste espaço.'));
}
function orderView(id){
 const o=state.orders.find(o=>o.id===id);if(!o)return orders();
 return title('Pedido #'+o.number,'Compra simulada · '+new Date(o.created).toLocaleDateString('pt-BR'))+
 '<div class="metal summary"><h3>'+escape(o.business)+'</h3><p class="meta">'+escape(o.address)+' · '+escape(o.city)+'</p><p class="meta">'+escape(o.window)+'</p><span class="tag">'+stages[o.stage]+'</span></div>'+
 '<div class="timeline">'+['Pedido confirmado','Separando nos boxes','Pedido a caminho','Entrega recebida'].map((name,i)=>'<div class="'+(i>o.stage?'pending':'')+'"><strong>'+name+'</strong>'+(i===o.stage?'<p class="meta">Etapa atual da demonstração</p>':'')+'</div>').join('')+'</div>'+
 o.groups.map(id=>'<div class="section-heading"><h2>'+vendor(id).name+'</h2></div>'+o.lines.filter(l=>l.vendor===id).map(l=>'<div class="between meta"><span>'+product(l.product).name+' · '+number(l.quantity)+' '+product(l.product).unit+'</span><strong>'+money(l.total)+'</strong></div>').join('')).join('')+
 summary(o)+(o.note?'<p class="meta">Observação · '+escape(o.note)+'</p>':'')+
 (o.stage<3?primary('Avançar etapa da demonstração','advance','data-id="'+o.id+'"'):'<p class="notice">Entrega demonstrativa concluída.</p>')+
 '<div class="between gap"><button class="text-button" data-act="reorder" data-id="'+o.id+'">Pedir de novo</button><button class="text-button" data-act="help" data-id="'+o.id+'">Ajuda com pedido</button></div>'+
 (o.issue?'<p class="notice">Solicitação registrada localmente · '+escape(o.issue)+'</p>':'');
}
function account(){
 return title('Minha conta',escape(state.profile.name)+' · '+escape(state.profile.business))+
 '<div class="stack">'+tile('Meu estabelecimento','Nome, responsável e endereço','store','profile')+tile('Meus pedidos','Histórico e entregas','orders','orders')+tile('Minhas listas','Reutilize suas compras','list','saved')+tile('Área do meu Box','Gerencie vendas, catálogo e lotes','box','boxowner')+tile('Sistemas conectados','Estoque e integrações','plug','connection')+tile('Minha equipe','Solicitações por setor','team','team')+'</div>'+
 '<label class="metal between gap" style="padding:16px">Sons de confirmação<input id="sound" type="checkbox" '+(state.sound?'checked':'')+'></label><p class="meta gap">Protótipo interativo NEW FLOW. Dados salvos neste navegador. Integrações, equipe e entregas são demonstrativas.</p>';
}
const ownerStages=['Novo pedido','Em separação','Pronto para saída','Finalizado'];
function boxOwner(){
 const v=vendor(1),offers=inventoryOffers.filter(o=>o.vendor===1).map(effectiveOffer),available=offers.reduce((sum,o)=>sum+o.available,0),live=activeLivePosts().filter(p=>p.vendor===1).length,newOrders=state.ownerOrders.filter(o=>o.status===0).length;
 return '<section class="owner-hero"><span class="eyebrow">ÁREA DO DONO DO BOX</span><h1>'+escape(v.name)+'</h1><p>Box '+escape(v.box)+' · Pavilhão '+escape(v.pavilion)+' · Gestão operacional</p><div class="owner-metrics"><div><strong>'+offers.length+'</strong><span>produtos</span></div><div><strong>'+live+'</strong><span>lotes ao vivo</span></div><div><strong>'+newOrders+'</strong><span>novos pedidos</span></div></div></section>'+
 '<div class="stack">'+
 tile('Pedidos recebidos',newOrders?newOrders+' aguardando ação':'Acompanhar separação e entrega','orders','boxorders')+
 tile('Catálogo e lotes','Preço, estoque, embalagem, foto e vídeo','box','offers')+
 tile('Publicar no feed','Foto, data e atualização da fruta','leaf','boxpost')+
 tile('Meu feed do Box',live?'Ver '+live+' publicação'+(live===1?'':'ões')+' ao vivo':'Ver publicações recentes','orders','ownerfeed')+
 tile('ERP do Box',state.boxErpConnected?'Sincronização demonstrativa ativa':'Conectar produtos e estoque do seu sistema','plug','boxerp')+
 '<button class="metal route-card" data-act="owner-store">'+icon('store',29)+'<div><h3>Ver minha loja</h3><p>Como o comprador enxerga seu Box</p></div></button></div>'+
 '<div class="metal owner-stock"><div><span class="eyebrow">DISPONIBILIDADE PUBLICADA</span><h3>'+number(available)+' unidades de venda</h3><p>Somatória dos lotes ativos no catálogo demonstrativo.</p></div><button class="text-button" data-act="route" data-route="offers">Gerenciar</button></div>';
}
function boxOrders(){
 return title('Pedidos do meu Box','Recebidos diretamente na sua vitrine.')+'<p class="notice">Cada pedido chega separado por Box. Você gerencia só o que será separado e entregue por você.</p><div class="stack">'+state.ownerOrders.map(o=>'<article class="metal owner-order"><div class="between"><div><span class="eyebrow">'+escape(o.id)+'</span><h3>'+escape(o.buyer)+'</h3></div><span class="tag">'+ownerStages[o.status]+'</span></div><p class="meta">'+o.items+' itens · '+escape(o.when)+'</p><div class="between"><strong class="total">'+money(o.total)+'</strong>'+(o.status<3?'<button class="text-button" data-act="advance-owner-order" data-id="'+escape(o.id)+'">Avançar status</button>':'<span class="meta">Concluído</span>')+'</div></article>').join('')+'</div>';
}
function boxPost(){
 const v=vendor(1),owned=inventoryOffers.filter(o=>o.vendor===1).map(o=>product(o.product));
 const today=new Date().toISOString().slice(0,10),draft=sessionMedia['feed-post'];
 return title('Nova atualização','Conte o que chegou hoje no '+v.name)+
 '<form id="feed-post-form"><label class="field">Produto<select name="product">'+owned.map(p=>'<option value="'+p.id+'">'+escape(p.name)+'</option>').join('')+'</select></label><div class="form-row"><label class="field">Data da atualização<input name="day" type="date" value="'+today+'" required></label><label class="field">Tipo<select name="kind"><option>Chegou hoje</option><option>Lote fresco</option><option>Preço atualizado</option><option>Últimas unidades</option></select></label></div><label class="upload-zone" for="feed-media">'+icon('leaf',28)+'<strong>Foto ou vídeo da fruta</strong><span>Mostre o lote como ele está hoje. A publicação fica no ar por 24 horas.</span><input id="feed-media" data-feed-media="feed-post" type="file" accept="image/*,video/*" multiple></label><div id="feed-media-files" class="media-files">'+(draft?.files?.length?draft.files.map(f=>'<span>'+escape(f.name)+'</span>').join(''):'<span>Sem mídia nova selecionada nesta publicação.</span>')+'</div><label class="field">Atualização do dia<textarea name="caption" rows="4" maxlength="280" required placeholder="Ex.: Chegaram caixas de tomate-cereja bem firmes, colhidos hoje. Lote bonito para salada e buffet."></textarea></label><p class="notice">A data informa o dia do lote. A publicação expira após 24 horas. Nesta demonstração, a mídia escolhida é prévia local; no sistema real ela será salva no feed.</p><button class="metal glow primary">Publicar no feed '+icon('check')+'</button></form>';
}
function ownerFeed(){
 const posts=activeLivePosts().filter(post=>post.vendor===1);
 return title('Meu feed do Box','Publicações que os compradores veem por 24 horas.')+routeButton('Criar nova publicação','boxpost','metal glow')+(posts.length?'<div class="social-feed gap">'+posts.map(socialPost).join('')+'</div>':empty('Seu feed está pronto','Publique a chegada, qualidade ou disponibilidade de um lote.','boxpost'));
}
function boxErp(){
 return title('ERP do meu Box','Conecte o sistema que controla o seu catálogo.')+'<div class="metal summary"><div class="flex">'+icon('plug',34)+'<div><h3>'+ (state.boxErpConnected?'ERP conectado':'Conexão pendente')+'</h3><p class="meta">'+(state.boxErpConnected?'Produtos, preço e disponibilidade demonstrativos sincronizados.':'Conecte para atualizar preço e quantidade sem cadastrar duas vezes.')+'</p></div></div></div>'+
 '<div class="stack">'+tile('Produtos e SKUs','Mapear SKU do seu ERP para o catálogo NEW FLOW','box','offers')+tile('Estoque disponível','Publicar somente o que pode vender agora','orders','offers')+'</div>'+
 (state.boxErpConnected?'<p class="notice">A sincronização real será configurada por API ou importação estruturada do ERP.</p>':primary('Simular conexão do ERP','connect-box-erp'));
}
function offerImage(offer){
 const preview=sessionMedia[offerKey(offer.product,offer.vendor)]?.imageUrl;
 return preview||'assets/'+offer.media.cover+'.png';
}
function offersDashboard(){
 const supplier=vendor(1),items=inventoryOffers.filter(o=>o.vendor===supplier.id).slice(0,12).map(effectiveOffer);
 return title('Atualizar lote','Painel demonstrativo · '+supplier.name+' · Box '+supplier.box)+
 '<p class="notice">Atualize o que está realmente disponível. A foto e o vídeo representam o lote atual, não o produto genérico.</p><div class="stack">'+items.map(o=>{
  const p=product(o.product);
  return '<article class="metal lot-card"><img src="'+offerImage(o)+'" alt="'+escape(p.name)+'"><div class="grow"><div class="between"><h3>'+escape(p.name)+'</h3><span class="tag">'+o.media.photoCount+' foto'+(o.media.photoCount===1?'':'s')+'</span></div><p class="meta">'+escape(o.presentation)+' · '+number(o.available)+' '+p.unit+'</p><p class="meta">'+escape(o.media.updatedAt)+'</p><button class="text-button" data-act="edit-offer" data-product="'+p.id+'" data-vendor="'+supplier.id+'">Atualizar este lote</button></div></article>';
 }).join('')+'</div>';
}
function offerEditor(productId,vendorId){
 const raw=baseOffer(productId,vendorId),offer=raw&&effectiveOffer(raw),p=product(productId),v=vendor(vendorId);
 if(!offer||!p||!v)return offersDashboard();
 const k=offerKey(productId,vendorId),files=sessionMedia[k]?.files||[];
 const presentationOptions=[packaging[p.id],'Caixa de madeira','Caixa rasa','Saco de rede','Bandeja','Maço','Cartela de ovos'].filter((x,i,a)=>a.indexOf(x)===i);
 return title('Atualizar lote',p.name+' · '+v.name)+
 '<article class="metal lot-hero"><img src="'+offerImage(offer)+'" alt="'+escape(p.name)+'"><div><span class="eyebrow">LOTE ATUAL</span><h2>'+escape(p.name)+'</h2><p>'+escape(offer.presentation)+' · '+number(offer.available)+' '+p.unit+'</p><p class="meta">'+escape(offer.media.updatedAt)+'</p></div></article>'+
 '<form id="offer-form" data-product="'+p.id+'" data-vendor="'+v.id+'">'+
 '<label class="field">Preço por '+p.unit+' (R$)<input name="price" type="number" inputmode="decimal" min="0.01" step="0.01" value="'+(offer.price/100).toFixed(2).replace('.',',')+'" required></label>'+
 '<div class="form-row"><label class="field">Disponível agora ('+p.unit+')<input name="available" type="number" min="0" max="9999" step="'+(discrete(p)?'1':'.1')+'" value="'+offer.available+'" required></label><label class="field">Embalagem<select name="presentation">'+presentationOptions.map(x=>'<option '+(x===offer.presentation?'selected':'')+'>'+escape(x)+'</option>').join('')+'</select></label></div>'+
 '<label class="upload-zone" for="lot-media">'+icon('box',28)+'<strong>Adicionar fotos ou vídeo do lote</strong><span>Mostre produto, embalagem e estado real. Um vídeo curto ajuda na conferência.</span><input id="lot-media" data-media-input="'+k+'" type="file" accept="image/*,video/*" multiple></label>'+
 '<div id="media-files" class="media-files">'+(files.length?files.map(f=>'<span>'+escape(f.name)+'</span>').join(''):'<span>Sem mídia nova selecionada nesta atualização.</span>')+'</div>'+
 '<label class="field">Observação do lote<textarea name="note" rows="3" maxlength="240" placeholder="Ex.: tomate firme, colhido hoje, caixa com 10 kg.">'+escape(offer.note||'')+'</textarea></label>'+
 '<p class="notice">Prévia local nesta demonstração. Na implantação, fotos e vídeos serão enviados ao armazenamento do NEW FLOW e ligados a este lote.</p><button class="metal glow primary">Publicar atualização '+icon('check')+'</button></form>';
}
function profile(){
 return title('Meu estabelecimento')+'<form id="profile-form">'+[['name','Seu nome'],['business','Estabelecimento'],['address','Endereço']].map(([key,label])=>'<label class="field">'+label+'<input name="'+key+'" value="'+escape(state.profile[key])+'" required maxlength="150"></label>').join('')+'<label class="field">Cidade'+citySelect()+'</label><button class="metal glow primary">Salvar dados '+icon('check')+'</button></form>';
}
function savedLists(){
 const standard='<div class="section-heading"><h2>Listas padrão</h2></div><div class="stack">'+standardLists.map((list,i)=>'<button class="metal route-card" data-act="load-standard-list" data-index="'+i+'">'+icon('list',29)+'<div><h3>'+escape(list.name)+'</h3><p>'+list.items.length+' itens · último total '+list.total+'</p></div></button>').join('')+'</div>';
 const personal=state.lists.length?'<div class="section-heading"><h2>Minhas listas salvas</h2></div><div class="stack">'+state.lists.map((list,i)=>'<button class="metal route-card" data-act="load-list" data-index="'+i+'">'+icon('list',29)+'<div><h3>'+escape(list.name)+'</h3><p>'+list.items.length+' produtos · Consultar preços atuais</p></div></button>').join('')+'</div>':'';
 return title('Minhas listas','Modelos baseados na operação real.')+standard+personal;
}
function render(){
 const r=current();
 byId('header').innerHTML=r.name==='home'?'<div class="header-top"><div class="brand">NEW FLOW</div><button class="metal round" data-act="route" data-route="account" aria-label="Minha conta">'+escape(state.profile.name.slice(0,1).toUpperCase())+'</button></div><button class="metal location" data-act="location">'+icon('pin',17)+'Entregar em '+escape(state.profile.city)+'</button>':
 '<div class="header-top"><button class="metal round" data-act="back" aria-label="Voltar">'+icon('back')+'</button><div class="brand">NEW FLOW</div><button class="round" data-act="route" data-route="cart" aria-label="Abrir sacola">'+icon('cart')+'</button></div>';
 const views={home,live:liveFeed,explore,boxes:()=>boxView(),vendor:()=>boxView(r.id),product:()=>productView(r.id),buy,list:listView,review,plan,compare:compareView,stock,connection,production,team,cart,checkout,orders,order:()=>orderView(r.id),account,profile,saved:savedLists,boxowner:boxOwner,boxorders:boxOrders,boxpost:boxPost,ownerfeed:ownerFeed,boxerp:boxErp,offers:offersDashboard,offer:()=>offerEditor(r.id,r.subId)};
 main.innerHTML=(views[r.name]||home)();
 main.classList.remove('enter');void main.offsetWidth;main.classList.add('enter');
 const section=['home','live'].includes(r.name)?'home':['explore','boxes','vendor','product'].includes(r.name)?'explore':['orders','order'].includes(r.name)?'orders':['account','profile','connection','boxowner','boxorders','boxpost','ownerfeed','boxerp','offers','offer'].includes(r.name)?'account':'buy';
 byId('nav').innerHTML=[['home','home','Início'],['explore','search','Explorar'],['buy','cart','Comprar'],['orders','orders','Pedidos'],['account','user','Conta']].map(([to,ico,label])=>'<button data-act="route" data-route="'+to+'" '+(section===to?'aria-current="page"':'')+'>'+icon(ico)+'<span>'+label+'</span></button>').join('');
 const hasCart=state.cart.length>0&&!['cart','checkout'].includes(r.name);
 byId('phone').classList.toggle('has-cart',hasCart);byId('cartbar').hidden=!hasCart;
 byId('cartbar').innerHTML='<span>Sacola · '+state.cart.length+' produtos</span><strong>'+money(totals().total)+'</strong>';
}
function prepareCompare(productId,quantity,origin='product',vendorId=0){
 const cheapest=offers(productId).map(o=>cost(productId,o.vendor,quantity)).filter(o=>o&&o.quantity<=o.available).sort((a,b)=>a.total-b.total)[0];
 compare={product:productId,quantity,origin,vendor:vendorId||cheapest?.vendor||0};go('compare');
}
function draftFrom(items){
 const merged=new Map();
 for(const line of items)merged.set(line.product,(merged.get(line.product)||0)+line.quantity);
 draft=[...merged].map(([productId,quantity])=>({product:productId,quantity,raw:product(productId).name}));
 go('review');
}
document.addEventListener('click',event=>{
 const button=event.target.closest('button');if(!button)return;
 if(button.dataset.width){
  document.documentElement.style.setProperty('--width',button.dataset.width+'px');
  document.querySelectorAll('[data-width]').forEach(b=>b.setAttribute('aria-pressed',b===button));return;
 }
 const {act,id,index,name}=button.dataset;if(!act)return;
 if(act==='route')go(button.dataset.route);
 if(act==='back'){
  const page=current().name;
  go(page==='compare'&&compare.origin==='draft'?'plan':page==='order'?'orders':page==='boxowner'?'account':['boxorders','boxpost','ownerfeed','boxerp','offers'].includes(page)?'boxowner':page==='vendor'?'boxes':page==='product'&&preferredBox?'vendor':page==='product'?'explore':'home',page==='product'&&preferredBox?preferredBox:'');
 }
 if(act==='close')byId('dialog').close();
 if(act==='location')dialog('Entregar em','<div class="stack">'+cities.map(c=>'<button class="metal secondary" data-act="city" data-name="'+c+'">'+c+'</button>').join('')+'</div>');
 if(act==='city'){state.profile.city=name;save();byId('dialog').close();render();}
 if(act==='category'){category=name;query='';go('explore');}
 if(act==='filter'){category=name;render();}
 if(act==='vendor'){boxCategory='Todos';go('vendor',id);}
 if(act==='box-list'){listBox=Number(id);go('list');}
 if(act==='clear-list-box'){listBox=0;render();}
 if(act==='product'){preferredBox=Number(button.dataset.box)||0;go('product',id);}
 if(act==='box-filter'){boxCategory=name;render();}
 if(act==='box-category-all'){boxCategory='Todos';render();requestAnimationFrame(()=>byId('box-catalog-'+button.dataset.box)?.scrollIntoView({behavior:'smooth',block:'start'}));}
 if(act==='box-live')byId('box-live-'+button.dataset.box)?.scrollIntoView({behavior:'smooth',block:'start'});
 if(act==='box-top')byId('scroll').scrollTo({top:0,behavior:'smooth'});
 if(act==='edit-offer')go('offer',button.dataset.product,button.dataset.vendor);
 if(act==='owner-store'){boxCategory='Todos';go('vendor',1);}
 if(act==='connect-box-erp'){state.boxErpConnected=true;save();sound();render();toast('ERP do Box conectado na demonstração.');}
 if(act==='advance-owner-order'){const order=state.ownerOrders.find(o=>o.id===id);if(order&&order.status<3){order.status++;save();sound();render();}}
 if(act==='open-live'){preferredBox=Number(button.dataset.vendor);go('product',button.dataset.product);}
 if(act==='example'){byId('list-text').value=example;state.listText=example;save();}
 if(act==='import')byId('file').click();
 if(act==='parse'){
  state.listText=byId('list-text').value;save();draft=parseList(state.listText);
  if(!draft.length){toast('Cole uma lista para continuar.');return;}go('review');
 }
 if(act==='compare-line'){const line=draft[Number(index)];prepareCompare(line.product,line.quantity,'draft',line.vendor);}
 if(act==='select-offer'){compare.vendor=Number(id);render();}
 if(act==='choose-offer'){
  const chosen=cost(compare.product,compare.vendor,compare.quantity);
  if(!chosen||chosen.quantity>chosen.available){toast('Escolha uma oferta com disponibilidade.');return;}
  if(compare.origin==='draft'){
   draft.find(l=>l.product===compare.product).vendor=compare.vendor;go('plan');
  }else{
   if(!add(compare.product,compare.vendor,compare.quantity)){toast('A quantidade ultrapassa a disponibilidade.');return;}
   save();sound();go('cart');toast('Produto adicionado à sacola.');
  }
 }
 if(act==='add-list'){
  const before=JSON.parse(JSON.stringify(state.cart));
  for(const line of draft)if(!line.vendor||!add(line.product,line.vendor,line.quantity)){
   state.cart=before;toast('Revise as quantidades. Um box não atende à lista.');return;
  }
  save();sound();go('cart');toast('Lista adicionada à sacola.');
 }
 if(act==='save-list')dialog('Salvar lista','<form id="save-list-form"><label class="field">Nome da lista<input name="name" required maxlength="80" placeholder="Reposição da semana"></label><button class="metal glow primary">Salvar lista</button></form>');
 if(act==='load-list')draftFrom(state.lists[Number(index)].items);
 if(act==='load-standard-list')draftFrom(standardLists[Number(index)].items);
 if(act==='stock-filter'){stockOnly=button.dataset.value==='need';render();}
 if(act==='demo-connect'){state.connected=true;save();go('stock');toast('Estoque demonstrativo carregado.');}
 if(act==='targets')dialog('Metas de estoque','<form id="targets-form">'+products.map(p=>'<label class="field">'+p.name+' ('+p.unit+')<input type="number" name="'+p.id+'" min="0" max="240" step="'+(discrete(p)?'1':'.1')+'" value="'+(state.targets[p.id]??p.target)+'" required></label>').join('')+'<button class="metal glow primary">Salvar metas</button></form>');
 if(act==='stock-list'){
  const items=products.filter(p=>stockSelected.has(p.id)).map(p=>({product:p.id,quantity:Number(stockValues[p.id]??Math.max(0,Number(state.targets[p.id]??p.target)-p.stock))})).filter(l=>l.quantity>0);
  if(!items.length){toast('Selecione produtos e quantidades para repor.');return;}
  if(items.some(l=>!Number.isFinite(l.quantity)||l.quantity>240||(discrete(product(l.product))&&!Number.isInteger(l.quantity)))){toast('Confira as quantidades selecionadas.');return;}
  draftFrom(items);
 }
 if(act==='add-team')dialog('Solicitar produto','<form id="team-form"><label class="field">Setor<select name="sector"><option>Cozinha</option><option>Bar</option><option>Estoque</option><option>Saladas</option></select></label><label class="field">Produto<select name="product">'+products.map(p=>'<option value="'+p.id+'">'+p.name+' ('+p.unit+')</option>').join('')+'</select></label><label class="field">Quantidade<input type="number" name="quantity" min="1" max="240" step="1" value="5" required></label><button class="metal glow primary">Adicionar solicitação</button></form>');
 if(act==='remove-team'){state.team.splice(Number(index),1);save();render();}
 if(act==='team-list')draftFrom(state.team);
 if(act.startsWith('cart-')){
  const productId=Number(button.dataset.product),vendorId=Number(button.dataset.vendor);
  const line=state.cart.find(l=>l.product===productId&&l.vendor===vendorId);if(!line)return;
  const calculated=cost(productId,vendorId,line.quantity),amount=calculated.quantity+(act==='cart-plus'?calculated.pack:-calculated.pack);
  if(act==='cart-remove'||amount<=0)state.cart=state.cart.filter(l=>l!==line);
  else if(amount<=calculated.available)line.quantity=amount;
  else toast('Limite de disponibilidade atingido.');
  save();render();
 }
 if(act==='checkout')go('checkout');
 if(act==='order')go('order',id);
 if(act==='advance'){const order=state.orders.find(o=>o.id===id);if(order&&order.stage<3){order.stage++;save();sound();render();}}
 if(act==='reorder'){const order=state.orders.find(o=>o.id===id);draftFrom(order.lines.map(l=>({product:l.product,quantity:l.quantity})));}
 if(act==='help')dialog('Ajuda com pedido','<form id="help-form"><input type="hidden" name="order" value="'+id+'"><label class="field">Conte o que aconteceu<textarea name="issue" required maxlength="400" rows="4"></textarea></label><p class="meta">Registro demonstrativo salvo neste navegador.</p><button class="metal glow primary">Registrar solicitação</button></form>');
});
document.addEventListener('input',event=>{
 const input=event.target;
 if(input.id==='list-text'){state.listText=input.value;save();}
 if(input.closest('#explore-search')){query=input.value;byId('results').innerHTML=catalogResults();}
 if(input.dataset.amount)stockValues[input.dataset.amount]=Number(input.value);
});
document.addEventListener('change',async event=>{
 const input=event.target;
 if(input.dataset.stock){const id=Number(input.dataset.stock);input.checked?stockSelected.add(id):stockSelected.delete(id);}
 if(input.id==='sound'){state.sound=input.checked;save();sound();}
 if(input.closest('#review-form')&&input.name.startsWith('product-')){
  const p=product(input.value);input.closest('article').querySelector('.unit').textContent=p?.unit||'unidade do produto';
 }
 if(input.id==='file'){
  const file=input.files[0];if(!file)return;
  if(file.size>1024*1024){toast('Use um arquivo TXT ou CSV de até 1 MB.');return;}
  try{state.listText=await file.text();byId('list-text').value=state.listText;save();toast('Arquivo importado. Confira os produtos.');}
  catch{toast('Não foi possível ler o arquivo. Tente colar o texto.');}
 }
 if(input.dataset.mediaInput){
  const files=[...input.files];
  const tooLarge=files.find(file=>file.size>20*1024*1024);
  if(tooLarge){toast('Cada foto ou vídeo pode ter até 20 MB nesta demonstração.');input.value='';return;}
  const imageFile=files.find(file=>file.type.startsWith('image/'));
  sessionMedia[input.dataset.mediaInput]={files,imageUrl:imageFile?URL.createObjectURL(imageFile):sessionMedia[input.dataset.mediaInput]?.imageUrl};
  const holder=byId('media-files');if(holder)holder.innerHTML=files.length?files.map(file=>'<span>'+escape(file.name)+'</span>').join(''):'<span>Sem mídia nova selecionada nesta atualização.</span>';
 }
 if(input.dataset.feedMedia){
  const files=[...input.files],tooLarge=files.find(file=>file.size>20*1024*1024);
  if(tooLarge){toast('Cada foto ou vídeo pode ter até 20 MB nesta demonstração.');input.value='';return;}
  const imageFile=files.find(file=>file.type.startsWith('image/'));
  sessionMedia[input.dataset.feedMedia]={files,imageUrl:imageFile?URL.createObjectURL(imageFile):''};
  const holder=byId('feed-media-files');if(holder)holder.innerHTML=files.length?files.map(file=>'<span>'+escape(file.name)+'</span>').join(''):'<span>Sem mídia nova selecionada nesta publicação.</span>';
 }
});
document.addEventListener('submit',event=>{
 const form=event.target;event.preventDefault();const data=new FormData(form);
 if(form.id==='home-search'||form.id==='explore-search'){query=String(data.get('query')).trim();category='Todos';go('explore');}
 if(form.id==='quantity-form'){
  const p=product(data.get('product')),quantity=Number(data.get('quantity'));
  if(!Number.isFinite(quantity)||quantity<=0||quantity>240||(discrete(p)&&!Number.isInteger(quantity))){toast('Confira a quantidade desejada.');return;}
  prepareCompare(p.id,quantity,'product',preferredBox);
 }
 if(form.id==='review-form'){
  const merged=new Map();
  for(let i=0;i<draft.length;i++){
   const p=product(data.get('product-'+i)),quantity=Number(data.get('quantity-'+i));
   if(!p||listBox&&!offers(p.id).some(o=>o.vendor===listBox)||!Number.isFinite(quantity)||quantity<=0||(discrete(p)&&!Number.isInteger(quantity))){toast('Confira produtos disponíveis no Box e as quantidades.');return;}
   merged.set(p.id,(merged.get(p.id)||0)+quantity);
  }
  draft=suggest([...merged].map(([product,quantity])=>({product,quantity})));go('plan');
 }
 if(form.id==='save-list-form'){
  state.lists.push({name:String(data.get('name')).trim(),items:draft.map(l=>({product:l.product,quantity:l.quantity}))});
  save();byId('dialog').close();toast('Lista salva para sua próxima compra.');
 }
 if(form.id==='targets-form'){
  for(const p of products)state.targets[p.id]=Number(data.get(String(p.id)));
  stockValues={};save();byId('dialog').close();render();
 }
 if(form.id==='production-form'){
  const portions=Number(data.get('portions'));
  let tomato=portions*Number(data.get('tomato'))/1000,lettuce=portions*Number(data.get('lettuce'));
  if(data.get('subtract')){tomato=Math.max(0,tomato-products[0].stock);lettuce=Math.max(0,lettuce-products[2].stock);}
  const items=[{product:1,quantity:Math.ceil(tomato*10)/10},{product:3,quantity:Math.ceil(lettuce)}].filter(l=>l.quantity>0);
  if(!items.length){toast('O estoque demonstrativo atende à produção informada.');return;}
  draftFrom(items);
 }
 if(form.id==='team-form'){
  state.team.push({product:Number(data.get('product')),quantity:Number(data.get('quantity')),sector:String(data.get('sector'))});
  save();byId('dialog').close();render();
 }
 if(form.id==='checkout-form'){
  const items=lines();if(!items.length)return;
  const total=totals(items);
  for(const field of ['business','address','city'])state.profile[field]=String(data.get(field)).trim();
  const order={id:crypto.randomUUID(),number:1001+state.orders.length,created:new Date().toISOString(),lines:items,...total,...state.profile,window:String(data.get('window')),note:String(data.get('note')).trim(),stage:0};
  state.orders.unshift(order);state.cart=[];save();sound();go('order',order.id);toast('Pedido simulado confirmado.');
 }
 if(form.id==='profile-form'){
  for(const field of ['name','business','address','city'])state.profile[field]=String(data.get(field)).trim();
  save();go('account');toast('Dados salvos.');
 }
 if(form.id==='help-form'){
  const order=state.orders.find(o=>o.id===data.get('order'));if(order)order.issue=String(data.get('issue')).trim();
  save();byId('dialog').close();render();toast('Solicitação registrada na demonstração.');
 }
 if(form.id==='feed-post-form'){
  const productId=Number(data.get('product')),offer=baseOffer(productId,1),caption=String(data.get('caption')).trim(),day=String(data.get('day'));
  if(!offer||!caption||!day){toast('Escolha o produto, a data e escreva a atualização.');return;}
  const postId=crypto.randomUUID();
  if(sessionMedia['feed-post']?.imageUrl)sessionPostMedia[postId]=sessionMedia['feed-post'].imageUrl;
  state.livePosts.unshift({id:postId,product:productId,vendor:1,createdAt:Date.now(),day,kind:String(data.get('kind')),caption});
  state.livePosts=activeLivePosts().slice(0,60);save();sound();go('ownerfeed');toast('Atualização publicada no feed por 24 horas.');
 }
 if(form.id==='offer-form'){
  const productId=Number(form.dataset.product),vendorId=Number(form.dataset.vendor),p=product(productId);
  const price=Math.round(Number(String(data.get('price')).replace(',','.'))*100),available=Number(data.get('available'));
  if(!p||!Number.isFinite(price)||price<=0||!Number.isFinite(available)||available<0||(discrete(p)&&!Number.isInteger(available))){toast('Confira preço e quantidade disponível.');return;}
  const k=offerKey(productId,vendorId),files=sessionMedia[k]?.files||[],photos=files.filter(file=>file.type.startsWith('image/')).length,videos=files.filter(file=>file.type.startsWith('video/')).length;
  const old=effectiveOffer(baseOffer(productId,vendorId));
  state.offerUpdates[k]={price,available,presentation:String(data.get('presentation')),note:String(data.get('note')).trim(),media:{photoCount:photos||old.media.photoCount,videoCount:videos||old.media.videoCount,updatedAt:'Atualizado agora'}};
  state.livePosts.unshift({id:crypto.randomUUID(),product:productId,vendor:vendorId,createdAt:Date.now(),caption:String(data.get('note')).trim()||'Lote atualizado agora.'});
  state.livePosts=activeLivePosts().slice(0,60);
  save();sound();go('offers');toast('Lote atualizado na demonstração.');
 }
});
window.addEventListener('hashchange',()=>{render();byId('scroll').scrollTo(0,0);});
render();
