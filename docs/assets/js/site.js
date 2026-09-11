(()=>{
const toggle=document.querySelector('.nav-toggle');
const nav=document.getElementById('site-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
    toggle.textContent=open?'×':'☰';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Abrir menu');
    toggle.textContent='☰';
  }));
}

const c=document.querySelector("[data-countdown]");
if(c){
  const t=new Date(c.dataset.countdown);
  const tick=()=>{
    let d=t-new Date();
    if(d<=0){const l=c.querySelector("[data-label]");if(l)l.textContent="A temporada começou.";return}
    const vals={days:Math.floor(d/86400000)};d%=86400000;vals.hours=Math.floor(d/3600000);d%=3600000;vals.minutes=Math.floor(d/60000);d%=60000;vals.seconds=Math.floor(d/1000);
    for(const[k,v]of Object.entries(vals)){const e=c.querySelector(`[data-unit="${k}"]`);if(e)e.textContent=String(v).padStart(2,"0")}
  };
  tick();setInterval(tick,1000)
}

const data=document.getElementById("events-json");
if(data){
  try{
    const now=new Date();
    const events=JSON.parse(data.textContent).map(e=>({...e,d:new Date(e.date)})).sort((a,b)=>a.d-b.d);
    const future=events.filter(e=>e.d>=now);

    const nextBox=document.getElementById("next-event");
    const next=future[0];
    if(nextBox&&next){
      nextBox.innerHTML=`<p class="eyebrow">Próximo compromisso</p><h2>${next.title}</h2><p class="event-big">${next.display_date} · ${next.time}</p><p>${next.weekday} · ${next.place}</p>${next.note?`<p>${next.note}</p>`:""}`;
    }

    const upcomingBox=document.getElementById("upcoming-events");
    if(upcomingBox){
      const upcoming=future.slice(1,5);
      upcomingBox.innerHTML=upcoming.length?upcoming.map(e=>`<div class="compact-event"><strong>${e.display_date}</strong><span>${e.title}</span><small>${e.weekday} · ${e.time} · ${e.place}</small></div>`).join(""):`<p>Sem outros compromissos futuros cadastrados.</p>`;
    }

    const fridayBox=document.getElementById("friday-rehearsals");
    if(fridayBox){
      const friday=future.filter(e=>e.kind==="ensaio"&&e.weekday==="sexta");
      fridayBox.innerHTML=friday.length?friday.map(e=>`<div class="compact-event"><strong>${e.display_date} · ${e.time}</strong><span>${e.place}</span>${e.note?`<small>${e.note}</small>`:""}</div>`).join(""):`<p>Sem ensaios regulares futuros cadastrados.</p>`;
    }

    const otherBox=document.getElementById("other-rehearsals");
    if(otherBox){
      const others=future.filter(e=>e.kind==="ensaio"&&e.weekday!=="sexta");
      otherBox.innerHTML=others.length?others.map(e=>`<div class="compact-event"><strong>${e.display_date} · ${e.time}</strong><span>${e.weekday} · ${e.place}</span>${e.note?`<small>${e.note}</small>`:""}</div>`).join(""):`<p>Sem ensaios extras futuros cadastrados.</p>`;
    }
  }catch(err){console.error(err)}
}

document.querySelectorAll("[data-event-date]").forEach(e=>{if(new Date(e.dataset.eventDate)<new Date())e.classList.add("past")});
})();
