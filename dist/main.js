(()=>{"use strict";function t(t,e){const n=document.createElement("button");return n.setAttribute("id",t),n.textContent=e,n}const e=function(){const t=document.querySelector("#mainarea");t.innerHTML="";const e=function(t){const e=document.createElement("div");return e.setAttribute("id","about"),e.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",e}();t.appendChild(e)},n=function(){const t=document.getElementById("mainarea");t.innerHTML="";const e=function(t){const e=document.createElement("div");return e.setAttribute("id","contact"),e.innerText="Kiosk contact test",e}();t.appendChild(e)},i=function(){const t=document.querySelector("#mainarea");t.innerHTML="";const e=function(t){const e=document.createElement("div");return e.setAttribute("id","menu-area"),e.innerText="Fish and Chips $1,000,000",e}();t.appendChild(e)};(function(){const e=document.getElementById("content"),n=function(t){const e=document.createElement("header");return e.setAttribute("id","header"),e}();e.appendChild(n);const i=function(t,e){const n=document.createElement("div");return n.setAttribute("id","rest-name"),n.textContent="KIOSK",n}();n.appendChild(i);const o=function(e){const n=document.createElement("div");n.setAttribute("id","nav-bar");const i=t("homebtn","Home"),o=t("menubtn","Menu"),c=t("contactbtn","Contact");return n.appendChild(i),n.appendChild(o),n.appendChild(c),n}();n.appendChild(o);const c=function(t){const e=document.createElement("div");return e.setAttribute("id","mainarea"),e}();e.appendChild(c)})(),e(),function(){const t=document.getElementById("homebtn"),o=document.getElementById("menubtn"),c=document.getElementById("contactbtn");t.addEventListener("click",e),o.addEventListener("click",i),c.addEventListener("click",n)}()})();