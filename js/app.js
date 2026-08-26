(function(){
  const menuButton=document.getElementById('menuButton');
  const mobileMenu=document.getElementById('mobileMenu');
  if(menuButton&&mobileMenu){
    const desktopMedia=window.matchMedia('(min-width: 941px)');
    const closeMenu=()=>{menuButton.setAttribute('aria-expanded','false');mobileMenu.hidden=true;};
    menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));mobileMenu.hidden=open;});
    mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    desktopMedia.addEventListener('change',event=>{if(event.matches)closeMenu();});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!mobileMenu.hidden){closeMenu();menuButton.focus();}});
    if(desktopMedia.matches)closeMenu();
  }
  const tabs=[...document.querySelectorAll('.mode-tab')];
  const panels=[...document.querySelectorAll('.mode-panel')];
  function activate(tab){const id=tab.getAttribute('aria-controls');tabs.forEach(t=>{const on=t===tab;t.classList.toggle('is-active',on);t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;});panels.forEach(p=>{const on=p.id===id;p.classList.toggle('is-active',on);p.hidden=!on;});}
  tabs.forEach((tab,i)=>{tab.tabIndex=i===0?0:-1;tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',e=>{const idx=tabs.indexOf(tab);let next=null;if(e.key==='ArrowRight')next=(idx+1)%tabs.length;if(e.key==='ArrowLeft')next=(idx-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==null){e.preventDefault();tabs[next].focus();activate(tabs[next]);}});});
  const form=document.getElementById('requestForm'),message=document.getElementById('formMessage');
  if(form&&message)form.addEventListener('submit',e=>{e.preventDefault();message.textContent='Демонстрационная версия: данные не отправлены. В рабочей версии здесь будет подключён согласованный маршрут заявки.';message.classList.add('is-visible');});
  const reveals=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.12,rootMargin:'0px 0px -40px'});reveals.forEach(el=>observer.observe(el));}else{reveals.forEach(el=>el.classList.add('is-visible'));}
})();
