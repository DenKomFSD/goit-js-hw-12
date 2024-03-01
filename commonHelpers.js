import{a as g,i as f,S as C}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();g.defaults.baseURL="https://pixabay.com/api/";const b="26468965-37c536f46ba330a607460f03f";async function m(s,t,r){const i=new URLSearchParams({key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:r});return(await g.get("",{params:i})).data}const u=document.querySelector(".gallery"),w=document.querySelector(".search-form"),l=document.querySelector(".loader"),a=document.querySelector(".load-more");let c="",d,p;w.addEventListener("submit",B);a.addEventListener("click",E);a.classList.add("is-hidden");function B(s){if(s.preventDefault(),u.innerHTML="",l.classList.remove("is-hidden"),c=s.currentTarget.elements.search.value.trim(),c===""){f.error({title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),l.classList.add("is-hidden");return}l.classList.remove("is-hidden"),m(c,15,1).then(t=>{if(t.hits.length===0)throw new Error("No images found");y(t.hits),p=c,d=1,a.classList.remove("is-hidden"),s.target.reset()}).catch(t=>{a.classList.add("is-hidden"),f.error({title:"Error",message:`${t.message||"Something went wrong"}`,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),a.classList.add("is-hidden")}).finally(()=>{l.classList.add("is-hidden")})}const S=new C(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});let h=0;function y(s){const t=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:n,comments:L,downloads:v})=>`<li class ='gallery-item'>
        <a class="gallery-link" href="${i}">
            <img class="gallery-image"
                src="${r}"
                alt="${e}"
                width="360"
                height="152"/>
        </a>  
        <div class='info-block'>
            <div class="info">
                <h3 class = "head-likes">Likes</h3>
                <p>${o}</p>
            </div>
            <div class="info">
                <h3 class = "head-views">Views</h3>
                <p>${n}</p>
            </div>
            <div class="info">
                <h3 class = "head-comments">Comments</h3>
                <p>${L}</p>
            </div>
            <div class="info">
                <h3 class = "head-downloads">Downloads</h3>
                <p>${v}</p>
            </div>
        </div>
    </li>`).join("");if(u.insertAdjacentHTML("beforeend",t),S.refresh(),h>=1){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}h++}async function E(s){d++;try{const t=await m(p,15,d);y(t.hits);const r=t.totalHits||0,i=Math.ceil(r/15);d>=i&&(a.classList.add("is-hidden"),f.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4CAF50",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#4CAF50",position:"topRight"}))}catch(t){f.error({title:"Error",message:`${t.message||"Something went wrong"}`,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"})}}
//# sourceMappingURL=commonHelpers.js.map
