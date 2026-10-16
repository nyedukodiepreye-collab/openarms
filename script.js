const IC={"ICT": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/></svg>", "Catering and baking": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z\"/><path d=\"M6 17h12\"/></svg>", "Phone repairs": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"2\"/><path d=\"M11 18h2\"/></svg>", "Solar installation": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41\"/></svg>", "Shoe making": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2 18v-7l4-1 2 3h6c4 0 8 1 8 5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z\"/><path d=\"M6 10V7\"/></svg>", "Bag making": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\"/><path d=\"M3 6h18\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/></svg>", "Cinematography": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m22 8-6 4 6 4V8Z\"/><rect x=\"2\" y=\"6\" width=\"14\" height=\"12\" rx=\"2\"/></svg>", "Cosmetology": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z\"/><path d=\"M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z\"/></svg>", "Interior decoration": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2\"/><path d=\"M2 11a2 2 0 0 1 4 0v3h12v-3a2 2 0 0 1 4 0v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z\"/><path d=\"M5 18v2M19 18v2\"/></svg>", "Barbing": "<svg viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12\"/></svg>"};
const T=[
 {n:"ICT",d:"Computer skills, internet use, and digital tools for work.",s:["Learn computer basics and typing","Use office and internet tools","Complete a practical digital project"]},
 {n:"Catering and baking",d:"Cook, bake, and serve food for events and sales.",s:["Learn kitchen hygiene and safety","Practise cooking and baking recipes","Prepare and price a small event menu"]},
 {n:"Phone repairs",d:"Diagnose and fix common phone faults.",s:["Learn phone parts and tools","Practise screen and battery replacement","Troubleshoot software problems"]},
 {n:"Solar installation",d:"Install and maintain solar power systems.",s:["Understand solar panels, batteries, and inverters","Learn safe wiring and mounting","Complete a supervised installation"]},
 {n:"Shoe making",d:"Design and make quality footwear.",s:["Learn materials, patterns, and cutting","Practise stitching and sole fixing","Finish a complete pair of shoes"]},
 {n:"Bag making",d:"Make bags and accessories for sale.",s:["Learn fabrics, leather, and tools","Practise cutting and sewing","Produce a finished bag collection"]},
 {n:"Cinematography",d:"Shoot and edit videos for events, ads, and stories.",s:["Learn camera, light, and framing","Practise shooting and sound","Edit and deliver a short film"]},
 {n:"Cosmetology",d:"Skincare, makeup, and beauty services.",s:["Learn skin types and hygiene","Practise makeup and beauty techniques","Serve practice clients with guidance"]},
 {n:"Interior decoration",d:"Plan and style beautiful rooms and spaces.",s:["Learn colour, layout, and lighting","Choose furniture and materials","Present a complete room design"]},
 {n:"Barbing",d:"Professional cuts, shaves, and grooming.",s:["Learn tools, hygiene, and safety","Practise cuts and styles","Serve practice clients with guidance"]}
];
const chips=document.getElementById('chips'),path=document.getElementById('path'),grid=document.getElementById('skillGrid'),sel=document.getElementById('skill');
function show(k){
  [...chips.children].forEach((c,j)=>c.setAttribute('aria-pressed',j===k));
  path.innerHTML='<div class="meta">What you will learn</div><ol>'+T[k].s.map(s=>'<li>'+s+'</li>').join('')+'</ol>';
}
T.forEach((x,k)=>{
  const b=document.createElement('button');b.className='chip';b.type='button';b.textContent=x.n;b.onclick=()=>show(k);chips.appendChild(b);
  grid.insertAdjacentHTML('beforeend','<article class="skill"><div class="ico">'+IC[x.n]+'</div><h3>'+x.n+'</h3><p>'+x.d+'</p></article>');
  sel.add(new Option(x.n,x.n));
});
show(0);

document.querySelectorAll('.slot input').forEach(inp=>inp.addEventListener('change',()=>{
  const f=inp.files[0];if(!f)return;
  const slot=inp.parentElement,url=URL.createObjectURL(f);
  slot.querySelectorAll('img,video').forEach(e=>e.remove());
  const el=document.createElement(f.type.startsWith('video')?'video':'img');
  el.src=url;if(el.tagName==='VIDEO'){el.controls=true}else{el.alt=''}
  slot.classList.add('filled');slot.prepend(el);
  if(el.tagName==='VIDEO'){inp.style.display='none'}
}));

const menu=document.querySelector('.menu'),nav=document.getElementById('nav');
menu.onclick=()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded',false)});

document.getElementById('form').onsubmit=e=>{
  e.preventDefault();
  const n=document.getElementById('name').value.trim(),m=document.getElementById('email'),ok=document.getElementById('ok');
  ok.style.display='block';
  if(!n||!m.value||!m.checkValidity()){ok.textContent='Please enter your full name and a valid email address.';return}
  ok.textContent='Thank you, '+n+'! We have received your registration for '+sel.value+'.';
  e.target.reset();
};
document.getElementById('theme').onclick=()=>{
  const r=document.documentElement,dark=getComputedStyle(r).colorScheme==='dark';
  r.setAttribute('data-theme',dark?'light':'dark');
};
