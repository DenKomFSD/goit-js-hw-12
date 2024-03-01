import{a as h,i as f,S as b}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();h.defaults.baseURL="https://pixabay.com/api/";const w="26468965-37c536f46ba330a607460f03f";async function m(r,t,o){const i=new URLSearchParams({key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:o});return(await h.get("",{params:i})).data}const g=document.querySelector(".gallery"),C=document.querySelector(".search-form"),l=document.querySelector(".loader"),a=document.querySelector(".load-more");let c="",d,p;C.addEventListener("submit",B);a.addEventListener("click",q);a.classList.add("is-hidden");function B(r){if(r.preventDefault(),g.innerHTML="",l.classList.remove("is-hidden"),c=r.currentTarget.elements.search.value.trim(),c===""){f.error({title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),l.classList.add("is-hidden");return}l.classList.remove("is-hidden"),m(c,15,1).then(t=>{if(t.hits.length===0)throw new Error("No images found");y(t.hits),p=c,d=1,a.classList.remove("is-hidden"),r.target.reset()}).catch(t=>{a.classList.add("is-hidden"),f.error({title:"Error",message:`${t.message||"Something went wrong"}`,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),a.classList.add("is-hidden")}).finally(()=>{l.classList.add("is-hidden")})}const S=new b(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});let u=0;function y(r){const t=r.map(({webformatURL:o,largeImageURL:i,tags:e,likes:s,views:n,comments:L,downloads:v})=>`<li class ='gallery-item'>
        <a class="gallery-link" href="${i}">
            <img class="gallery-image"
                src="${o}"
                alt="${e}"
                width="360"
                height="152"/>
        </a>  
        <div class='info-block'>
            <div class="info">
                <h3 class = "head-likes">Likes</h3>
                <p>${s}</p>
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
    </li>`).join("");if(g.insertAdjacentHTML("beforeend",t),S.refresh(),u>=1){const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}u++}function q(r){d++,m(p,15,d).then(t=>{const o=t.totalHits||0;d*15>=o?(a.classList.add("is-hidden"),f.warning({title:"Info",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"orange",messageColor:"#fff",titleColor:"#fff",progressBarColor:"dark orange",position:"topRight"})):y(t.hits)})}
//# sourceMappingURL=commonHelpers.js.map
