function e(e,t){const n=Math.random()>.3;return new Promise(((o,l)=>{setTimeout((()=>{n?o(`✅ Fulfilled promise ${e} in ${t}ms`):l(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}const t=document.querySelector(".form");t.addEventListener("submit",(function(n){n.preventDefault();const o=t.elements;let l=Number(o.delay.value),u=Number(o.step.value),m=Number(o.amount.value);for(let t=1;t<=m;t++)e(t,l).then((e=>{console.log(e)})).catch((e=>{console.log(e)})),l+=u}));
//# sourceMappingURL=03-promises.2f31e2f0.js.map