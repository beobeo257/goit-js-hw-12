import{a as w,S,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const q="57635798-c4932ba894df776d1b1444d77",E="https://pixabay.com/api/";async function u(e,s){const a={key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return(await w.get(E,{params:a})).data}const f=document.querySelector(".gallery"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function m(e){const s=e.map(({webformatURL:a,largeImageURL:r,tags:t,likes:o,views:i,comments:L,downloads:b})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img 
            class="gallery-image" 
            src="${a}" 
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
            <span class="info-value">${i}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${L}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${b}</span>
          </div>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",s),P.refresh()}function M(){f.innerHTML=""}function p(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function h(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}const c=document.querySelector(".load-more-btn");function g(){c&&c.classList.remove("is-hidden")}function y(){c&&c.classList.add("is-hidden")}let n=1,d="";const v=15,$=document.querySelector("form");$.addEventListener("submit",B);async function B(e){e.preventDefault();const a=e.currentTarget.elements["search-text"].value.trim();if(a===""){l.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}d=a,n=1,M(),y(),p();try{const r=await u(d,n);if(!r.hits||r.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}m(r.hits);const t=Math.ceil(r.totalHits/v);n<t&&g()}catch(r){l.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}finally{h()}}const R=document.querySelector(".load-more-btn");R.addEventListener("click",x);async function x(){n+=1,y(),p();try{const e=await u(d,n);m(e.hits);const s=Math.ceil(e.totalHits/v);n>=s?l.info({title:"End of collection",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):g(),O()}catch(e){l.error({title:"Error",message:`Something went wrong: ${e.message}`,position:"topRight"})}finally{h()}}function O(){const e=document.querySelector(".gallery-item");if(e){const{height:s}=e.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
