import{a as c,i as l,S as u}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";const h="26468965-37c536f46ba330a607460f03f";async function p(o,r,s){const i=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:s});return(await c.get("",{params:i})).data}const d=document.querySelector(".gallery"),g=document.querySelector(".search-form"),n=document.querySelector(".loader");g.addEventListener("submit",y);function y(o){o.preventDefault(),d.innerHTML="",n.classList.remove("is-hidden");const r=o.currentTarget.elements.search.value.trim();if(r===""){l.error({title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),n.classList.add("is-hidden");return}n.classList.remove("is-hidden"),p(r).then(s=>{if(s.hits.length===0)throw new Error("No images found");L(s.hits),o.target.reset()}).catch(s=>{l.error({title:"Error",message:`${s.message||"Something went wrong"}`,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"})}).finally(()=>{n.classList.add("is-hidden")})}const v=new u(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:f,downloads:m})=>`<li class ='gallery-item'>
        <a class="gallery-link" href="${i}">
            <img class="gallery-image"
                src="${s}"
                alt="${e}"
                width="360"
                height="152"/>
        </a>  
        <div class='info-block'>
            <div class="info">
                <h3 class = "head-likes">Likes</h3>
                <p>${t}</p>
            </div>
            <div class="info">
                <h3 class = "head-views">Views</h3>
                <p>${a}</p>
            </div>
            <div class="info">
                <h3 class = "head-comments">Comments</h3>
                <p>${f}</p>
            </div>
            <div class="info">
                <h3 class = "head-downloads">Downloads</h3>
                <p>${m}</p>
            </div>
        </div>
    </li>`).join("");d.innerHTML=r,v.refresh()}
//# sourceMappingURL=commonHelpers.js.map
