import"./main-c63765fe.js";const f=document.querySelector(".custom-splitText");f.innerHTML=`<span class="char">${f.innerHTML.split("").join('</span><span class="char">')}</span>`;const w=document.querySelectorAll(".needs-validation");Array.from(w).forEach(e=>{e.addEventListener("submit",c=>{e.checkValidity()||(c.preventDefault(),c.stopPropagation()),e.classList.add("was-validated")},!1)});const s=document.querySelector("#reviewArea"),l=document.querySelector("#reviewList"),h=document.querySelector("#reviewScroll"),t=document.querySelector("#reviewScroll > div"),y=l.scrollWidth,m=l.offsetWidth,d=h.offsetWidth,p=t.offsetWidth,L=(y-m)/(d-p);let u=l.style.left.split("px")!=""?parseInt(l.style.left.split("px")[0]):0,a=t.style.left.split("px")!=""?parseInt(t.style.left.split("px")[0]):0,i,o=0,n=!1,v=0;s.addEventListener("mousedown",e=>{e.target===t&&(s.style.setProperty("cursor","grabbing"),v=e.clientX,n=!0,u=l.style.left.split("px")!=""?parseInt(l.style.left.split("px")[0]):0,a=t.style.left.split("px")!=""?parseInt(t.style.left.split("px")[0]):0)});s.addEventListener("mousemove",e=>{if(n){const r=e.clientX-v;r>=0&&a+r+p>d?(o=d-p,i=u-(y-m)):r<0&&a+r<=0?(o=0,i=0):(o=a+r,i=u-Math.ceil(r*L)),t.style.setProperty("left",`${o}px`,"important"),l.style.setProperty("left",`${i}px`,"important")}});s.addEventListener("mouseup",e=>x());s.addEventListener("mouseleave",e=>x());function x(e){n&&(t.style.setProperty("left",`${o}px`,"important"),l.style.setProperty("left",`${i}px`,"important"),s.style.cursor="auto",n=!1,o=0)}t.addEventListener("mouseenter",()=>{s.style.cursor="grab"});t.addEventListener("mouseleave",()=>{n||(s.style.cursor="auto")});document.querySelector("#carouselExample");window.addEventListener("resize",e=>void 0);
