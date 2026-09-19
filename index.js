import{a as u,S as f,i}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p="57635798-c4932ba894df776d1b1444d77",m="https://pixabay.com/api/";async function g(t){const r={key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(m,{params:r})).data}const l=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const r=t.map(({webformatURL:o,largeImageURL:a,tags:e,likes:s,views:n,comments:c,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img 
            class="gallery-image" 
            src="${o}" 
            alt="${e}" 
            loading="lazy" 
          />
        </a>
        <div class="info-box">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${s}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${n}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${c}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${d}</span>
          </div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function v(){l.innerHTML=""}function b(){const t=document.querySelector(".loader");t&&t.classList.remove("is-hidden")}function L(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}const S=document.querySelector("form");S.addEventListener("submit",w);async function w(t){t.preventDefault();const r=t.currentTarget,o=r.elements["search-text"].value.trim();if(o===""){i.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}v(),b();try{const a=await g(o);if(!a.hits||a.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}h(a.hits),r.reset()}catch(a){i.error({title:"Error",message:`Something went wrong: ${a.message}`,position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
