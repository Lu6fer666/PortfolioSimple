(()=>{function e(){document.querySelectorAll(".nav-link, .scroll-button").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href")||this.getAttribute("data-target");gsap.to(window,{duration:1,scrollTo:{y:t,offsetY:50,autoKill:!0},ease:"power2.inOut"})}))})),document.querySelectorAll(".external-button").forEach((e=>{e.addEventListener("click",(function(){isOpen&&toggleMenu()}))}))}document.addEventListener("DOMContentLoaded",(function(){e(),barba.init({sync:!1,transitions:[{name:"opacity-transition",leave:e=>(console.log("Leave transition triggered"),gsap.to(e.current.container,{opacity:0,duration:.5,onComplete:()=>{e.current.container.remove()}})),enter:e=>(console.log("Enter transition triggered"),gsap.from(e.next.container,{opacity:0,duration:.5})),afterEnter(){window.scrollTo(0,0)}}],views:[{namespace:"home",beforeEnter(){e()}},{namespace:"contact",beforeEnter(){e()}}]})}))})();