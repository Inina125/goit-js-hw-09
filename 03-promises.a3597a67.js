!function(){function e(e,n){var t=Math.random()>.3;return new Promise((function(o,c){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):c("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}var n=document.querySelector(".form");n.addEventListener("submit",(function(t){t.preventDefault();for(var o=n.elements,c=Number(o.delay.value),u=Number(o.step.value),r=Number(o.amount.value),a=1;a<=r;a++)e(a,c).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c+=u}))}();
//# sourceMappingURL=03-promises.a3597a67.js.map
