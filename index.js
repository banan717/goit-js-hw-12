import{a as w,S as E,i as c}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const B="53639164-946eeba40ce7ee6acba66c1a5",I="https://pixabay.com/api/",M=15;async function p(i,t=1){const r={key:B,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:M};return(await w.get(I,{params:r})).data}const m=document.getElementById("gallery"),y=document.getElementById("loader"),h=document.getElementById("load-more-btn"),P=new E(".gallery a",{captionsData:"alt",captionDelay:200});function g(i){const t=i.map(({webformatURL:r,largeImageURL:n,tags:e,likes:o,comments:a,views:L,downloads:b})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${r}" alt="${e}" loading="lazy" />
        </a>
        <div class="info-table">
          <div class="info-row">
            <div>Likes</div>
            <div>Comments</div>
            <div>Views</div>
            <div>Downloads</div>
          </div>
          <div class="info-row">
            <div>${o}</div>
            <div>${a}</div>
            <div>${L}</div>
            <div>${b}</div>
          </div>
        </div>
      </li>`).join("");m.insertAdjacentHTML("beforeend",t),P.refresh()}function R(){m.innerHTML=""}function v(){y.classList.remove("is-hidden")}function u(){y.classList.add("is-hidden")}function $(){h.classList.remove("is-hidden")}function f(){h.classList.add("is-hidden")}const O=document.getElementById("search-form"),S=document.getElementById("search-input");let d="",s=1,l=0;O.addEventListener("submit",A);h.addEventListener("click",_);async function A(i){if(i.preventDefault(),d=S.value.trim(),!!d){s=1,l=0,R(),f(),v();try{const t=await p(d,s);if(u(),t.hits.length===0){c.error({message:"Нічого не знайдено",position:"topRight"});return}l=t.totalHits,g(t.hits),s*15<l?$():(f(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){u(),c.error({message:"Помилка запиту",position:"topRight"}),console.error(t)}}}async function _(){s+=1,v();try{const i=await p(d,s);u(),g(i.hits);const t=m.querySelector(".gallery-item");if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}s*15>=l&&(f(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(i){u(),console.error(i)}}
//# sourceMappingURL=index.js.map
