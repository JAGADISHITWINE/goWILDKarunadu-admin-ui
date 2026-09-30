import{v as n}from"./chunk-VXQTXOY7.js";var a=(()=>{let e=class e{constructor(){this.toastEl=null,this.hideTimer=null}show(s,i=3e3){try{this.toastEl?.remove(),this.hideTimer&&clearTimeout(this.hideTimer);let t=document.createElement("div");t.textContent=s,t.style.cssText=`
        position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
        background: #1d1b18; color: #fff; padding: 12px 24px;
        border-radius: 8px; font-size: 14px; font-family: Manrope, sans-serif;
        z-index: 99999; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        opacity: 0; transition: opacity 0.25s ease;
        max-width: 480px; text-align: center; pointer-events: none;
      `,document.body.appendChild(t),this.toastEl=t,requestAnimationFrame(()=>{t.style.opacity="1"}),this.hideTimer=setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{t.remove(),this.toastEl=null},300)},i)}catch{}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{a};
