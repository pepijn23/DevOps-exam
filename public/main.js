(()=>{var e={793:e=>{e.exports={isLeapYear:function(e){return e%400==0||e%100!=0&&e%4==0}}}},t={};try{const{isValid:n}=function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(793),r=document.getElementById("body"),a=document.getElementById("leapYearInput"),o=document.getElementById("leapYearCheckButton"),d=document.getElementById("resetButton"),g=document.getElementById("leapYearFeedback"),i=e=>`Year is ${e?"":"not"} leap year`,c="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(9, 9, 121, 1) 35%,\n                rgba(0, 212, 255, 1) 100%\n            ) !important",l="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(11, 255, 168, 1) 35%,\n                rgba(0, 212, 0, 1) 100%\n            ) !important",s="background:linear-gradient(\n                90deg,\n                rgba(2, 0, 36, 1) 0%,\n                rgba(200, 9, 70, 1) 35%,\n                rgba(255, 0, 0, 1) 100%\n            ) !important";let u;a.addEventListener("change",(e=>{u=e.target.value})),o.addEventListener("click",(()=>{const e=n(u);console.log("Leap year input :",u),g.textContent=i(e),r.setAttribute("style",e?l:s)})),d.addEventListener("click",(()=>{g.textContent="",r.setAttribute("style",c)}))}catch(e){console.error(JSON.stringify(e))}})();