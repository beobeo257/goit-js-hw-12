import{a as b,S as w,i}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const S="57635798-c4932ba894df776d1b1444d77",E="https://pixabay.com/api/";async function f(e,r){const n={key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await b.get(E,{params:n})).data}const m=document.querySelector(".gallery"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function p(e){const r=e.map(({webformatURL:n,largeImageURL:s,tags:t,likes:o,views:a,comments:v,downloads:L})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img 
            class="gallery-image" 
            src="${n}" 
            alt="${t}" 
            loading="lazy" 
          />
        </a>
        <div class="info-box">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${o}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${a}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${v}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${L}</span>
          </div>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",r),q.refresh()}function P(){m.innerHTML=""}function h(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function g(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}const l=document.querySelector(".load-more-btn");function $(){l&&l.classList.remove("is-hidden")}function d(){l&&l.classList.add("is-hidden")}let c=1,u="";const M=15,B=document.querySelector("form"),R=document.querySelector(".load-more-btn");B.addEventListener("submit",x);R.addEventListener("click",O);async function x(e){e.preventDefault();const n=e.currentTarget.elements["search-text"].value.trim();if(n===""){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}u=n,c=1,P(),d(),h();try{const s=await f(u,c);if(!s.hits||s.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}p(s.hits),y(s.totalHits)}catch(s){i.error({title:"Error",message:`Something went wrong: ${s.message}`,position:"topRight"})}finally{g()}}async function O(){c+=1,d(),h();try{const e=await f(u,c);p(e.hits),y(e.totalHits)}catch(e){i.error({title:"Error",message:`Something went wrong: ${e.message}`,position:"topRight"})}finally{g(),A()}}function y(e){const r=Math.ceil(e/M);if(e===0){d();return}c>=r?(d(),i.info({title:"End of collection",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):$()}function A(){const e=document.querySelector(".gallery-item");if(e){const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
