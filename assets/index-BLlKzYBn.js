(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function g(){let s=gsap.utils.toArray("nav ul li a");s.forEach(o=>{let e=document.querySelector(o.getAttribute("href"));ScrollTrigger.create({trigger:e,start:"top center",end:"bottom center",onToggle:t=>n(o)}),o.addEventListener("click",function(t){t.preventDefault(),n(o),gsap.to(window,{duration:1,scrollTo:{y:e},overwite:"auto"})})});const r=gsap.from("nav",{yPercent:-200,paused:!0,duration:.2}).progress(1);ScrollTrigger.create({start:"top top",end:99999,onUpdate:o=>{o.direction===-1?r.play():r.reverse()}});function n(o){s.forEach(e=>e.classList.remove("on")),o.classList.add("on")}}function d(){new Swiper(".mySwiper",{slidesPerView:4,spaceBetween:30,loop:!0,mousewheel:!0,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".next"}})}function f(){let s=document.querySelectorAll(".btn > div");document.querySelectorAll(".btn .prev"),document.querySelectorAll(".btn .next");let r=document.querySelector(".rot__box"),n=document.querySelectorAll(".card__box"),o=document.querySelectorAll(".card"),e=0,t=60;function i(a,l){a==="prev"&&(n.forEach(c=>{c.style.opacity="0"}),n[0].style.opacity="1"),a==="next"&&(n.forEach(c=>{c.style.opacity="1"}),n[0].style.opacity="0")}function u(){e>0?r.style.transform=`rotate(${-150+-((e-1)*t)}deg)`:(n.forEach((a,l)=>{a.style.transitionDelay="0s"}),r.style.transform="rotate(0deg)",i("prev"))}function p(){e===0?(n.forEach((a,l)=>{a.style.transitionDelay=` ${.1*l}s`}),r.style.transform="rotate(-150deg)"):r.style.transform=`rotate(${-150+-(e*t)}deg)`,i("next")}s.forEach(a=>{a.addEventListener("click",function(){let l=this.getAttribute("value");l==="next"&&e<o.length?(p(),e++):l==="prev"&&e>0&&(e--,u())})})}function y(){gsap.registerPlugin(ScrollTrigger),gsap.to(".about_wrap .title1",{scrollTrigger:{trigger:".about_wrap .cont01",start:"top top",toggleClass:{targets:".about_wrap .title1",className:"on"},scrub:2}}),gsap.to(".about_wrap .title2",{scrollTrigger:{trigger:".about_wrap .cont02",start:"top top",toggleClass:{targets:".about_wrap .title2",className:"on"},scrub:2}}),gsap.to(".about_wrap .title3",{scrollTrigger:{trigger:".about_wrap .cont03",start:"top top",toggleClass:{targets:".about_wrap .title3",className:"on"},scrub:2}})}function m(){gsap.registerPlugin(ScrollTrigger);const s=document.querySelector("#graphic"),r=gsap.utils.toArray(".graphic__list");gsap.to(r,{xPercent:-100*(r.length-1),ease:"none",scrollTrigger:{trigger:s,start:"top top",end:"+=1000",pin:!0,scrub:1}})}function w(){new Splide(".splide",{type:"loop",drag:!1,focus:"center",gap:30,autoWidth:!0,arrows:!1,pagination:!1,autoScroll:{speed:2,pauseOnHover:!0,rewind:!1},breakpoint:{1200:{perPage:3},640:{perPage:2}}}).mount(window.splide.Extensions)}window.addEventListener("load",function(){g(),d(),f(),y(),m(),w()});
