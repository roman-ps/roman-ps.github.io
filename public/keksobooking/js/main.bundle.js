(()=>{"use strict";const e={lat:35.68951,lng:139.69171},t={iconSize:[52,52],iconAnchor:[26,52],iconUrl:"img/main-pin.svg"},r={iconSize:[40,40],iconAnchor:[20,20],iconUrl:"img/pin.svg"},o=L,n=o.map("map-canvas");let a=[];const s=()=>{a.forEach((e=>{e.remove()}))};let c;const i=(e,t)=>t[[e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]],l=(e,t=5)=>{let r=Math.pow(10,t);return Math.round(e*r)/r},d=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u=document.querySelector("#card"),p={palace:"Дворец",flat:"Квартира",house:"Дом",bungalow:"Бунгало"},f={title:".popup__title",address:".popup__text--address",price:".popup__text--price",type:".popup__type",capacity:".popup__text--capacity",time:".popup__text--time",features:".popup__features",description:".popup__description",photos:".popup__photos",avatar:".popup__avatar"},h=["комната","комнаты","комнат"],m=["гостя","гостей","гостей"];let v=null,g=null;const E=e=>{if(!v)throw new Error("Ошибка вызова данных!");let t=v;"function"==typeof e&&(t=t.filter(e)),t.length>10&&(t=(e=>e.slice(0,10))(t)),g=t},y=()=>g,S=e=>{v=e,E()},T=document.querySelector("main"),w=e=>{(e=>"Escape"===e.key||"Esc"===e.key)(e)&&(e.preventDefault(),O(T))},A=()=>{O(T)},b=(e,t,r=".success")=>{const o=e.content.cloneNode(!0).querySelector(r);o.style.zIndex="10000",t.appendChild(o),document.addEventListener("keydown",w),document.addEventListener("click",A)},O=e=>{const t=e.lastElementChild;e.removeChild(t),document.removeEventListener("keydown",w),document.removeEventListener("click",A)},q=document.querySelector(".ad-form"),C=document.querySelector(".ad-form__reset"),k=document.querySelector(".map__filters"),I=document.querySelector("main"),P=q.querySelector(".ad-form-header__preview img"),R=q.querySelector(".ad-form__photo"),M=P.cloneNode(!0),$=document.querySelector("#success"),N=document.querySelector("#error"),x={TYPE:q.querySelector("#type"),PRICE:q.querySelector("#price"),TIMEIN:q.querySelector("#timein"),TIMEOUT:q.querySelector("#timeout"),ADDRESS:q.querySelector("#address"),ROOM_NUMBER:q.querySelector("#room_number"),CAPACITY:q.querySelector("#capacity"),PHOTO_AVATAR:q.querySelector("#avatar"),PHOTO_HOUSE:q.querySelector("#images")},U=["gif","jpg","jpeg","png"],D={palace:1e4,flat:1e3,house:5e3,bungalow:0},H={1:["1"],2:["1","2"],3:["1","2","3"],100:["0"]},j=e=>{const t=e.target.files[0],r=t.name.toLowerCase();if(U.some((e=>r.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{P.src=e.result})),e.readAsDataURL(t)}},V=e=>{const t=e.target.files[0],r=t.name.toLowerCase();if(U.some((e=>r.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{const t=M;t.src=e.result,t.width="70",t.height="70",R.appendChild(t)})),e.readAsDataURL(t)}},Y=e=>{let t=e.target.value;x.CAPACITY.querySelectorAll("option").forEach((function(e){z(e,"selected","disabled"),H[t].includes(e.value)&&z(e,"disabled","selected")}))},z=(e,t,r)=>{e.removeAttribute(t),e.setAttribute(r,"")},F=(e,t,r="ad-form--disabled")=>{e.classList.add(r),e.querySelectorAll(t).forEach((e=>e.setAttribute("disabled","")))},B=(e,t,r="ad-form--disabled")=>{e.classList.remove(r),e.querySelectorAll(t).forEach((e=>e.removeAttribute("disabled")))},W=e=>{let t=e.target.value;x.PRICE.setAttribute("placeholder",D[t]),x.PRICE.setAttribute("min",D[t])},G=e=>{x.TIMEOUT.value=e.target.value},J=e=>{x.TIMEIN.value=e.target.value},K=t=>{t.preventDefault(),q.reset(),k.reset(),n.setView(e),c.setLatLng(e),ee(e),x.PRICE.setAttribute("placeholder","1000")},Q=e=>{e.preventDefault();const t=new FormData(e.target);fetch("https://22.javascript.pages.academy/keksobooking",{method:"POST",body:t}).then((e=>{if(e.ok)return e.json();throw new Error(`${e.status} ${e.statusText}`)})).then((()=>{b($,I),K(e)})).catch((()=>{b(N,I,".error")}))};let X;const Z=()=>{const{TYPE:e,TIMEIN:t,TIMEOUT:r,ROOM_NUMBER:o,PHOTO_AVATAR:n,PHOTO_HOUSE:a}=x;e.addEventListener("change",W),t.addEventListener("change",G),r.addEventListener("change",J),o.addEventListener("change",Y),q.addEventListener("submit",Q),C.addEventListener("click",K),n.addEventListener("change",j),a.addEventListener("change",V)},ee=({lat:e,lng:t})=>{x.ADDRESS.value=`${l(e)}, ${l(t)}`},te={"filter-wifi":!1,"filter-dishwasher":!1,"filter-parking":!1,"filter-washer":!1,"filter-elevator":!1,"filter-conditioner":!1},re="housing-type",oe="housing-price",ne="housing-rooms",ae="housing-guests",se={[re]:"",[oe]:"",[ne]:"",[ae]:""},ce={...se,...te},ie=(e,t,r=!1)=>r?ce[e]&&"any"!==ce[e]&&!((e,t)=>{switch(e){case"any":return!0;case"low":return t<1e4;case"middle":return t>=1e4&&t<5e4;case"high":return t>=5e4;default:return!1}})(ce[e],t):ce[e]&&"any"!==ce[e]&&`${t}`!==ce[e],le=e=>!(ie(re,e.offer.type)||ie(oe,e.offer.price,!0)||ie(ne,e.offer.rooms)||ie(ae,e.offer.guests))&&(e=>{for(let t in te)if(ce[t]&&!e.includes(t.replace("filter-","")))return!1;return!0})(e.offer.features),de=e=>({title:e.offer.title,lat:e.location.lat,lng:e.location.lng}),ue=e=>{const t=e.map(de);s(),((t,s)=>{t.forEach((({lat:t,lng:s},c)=>{const d=o.icon(r),v=o.marker({lat:t,lng:s},{icon:d});v.bindPopup((()=>(t=>(e=>{const t=u.content.cloneNode(!0),r=((e,t)=>{let r={};const o=Object.entries(e);for(let[e,n]of o)r[e]=t.querySelector(n);return r})(f,t);var o,n,a;return r.title.textContent=e.offer.titles,r.address.textContent=(({lat:e,lng:t})=>`${l(e)}, ${l(t)}`)(e.location),r.price.innerHTML=`${e.offer.price} <span>₽/ночь</span>`,r.type.textContent=(o=e.offer.type,p[o]),r.capacity.textContent=(e=>{const t=i(e.rooms,h),r=i(e.rooms,m);return`${e.rooms} ${t} для ${e.guests} ${r}`})(e.offer),r.time.textContent=`Заезд после ${e.offer.checkin}, выезд до ${e.offer.checkout}`,n=r.features,a=e.offer.features,n.querySelectorAll(".popup__feature").forEach((function(e){e.classList.add("hidden"),a.forEach((function(t){e.className.includes(t)&&e.classList.remove("hidden")}))})),r.description.textContent=e.offer.description,r.photos.appendChild(((e,t)=>{const r=e.querySelector(".popup__photo"),o=r.cloneNode(!0),n=document.createDocumentFragment();return e.removeChild(r),t.forEach((function(e){let t=o.cloneNode(!0);t.setAttribute("src",e),n.appendChild(t)})),n})(r.photos,e.offer.photos)),r.avatar.src=e.author.avatar,t})(e[t]))(c)),{keepInView:!0}),v.addTo(n),a.push(v)}))})(t)},pe=_.debounce((()=>{E(le),s(),ue(y())}),500),fe=e=>{var t,r;S(e),t=me,r=ve,X=e=>{const o=e.target;"SELECT"!==o.tagName?"INPUT"!==o.tagName||r(o.id,o.checked):t(o.id,o.value)},k.addEventListener("change",X),B(k,"select"),B(k,"fieldset"),Z(),ue(y())},he=()=>{const e=document.createElement("div");e.classList.add("alert"),e.textContent="Данные не загрузились",document.body.append(e),setTimeout(e.remove,3e3)},me=(...e)=>{((e,t)=>{if(!d(se,e))throw new Error(`Ошибка, отсутствует ключ ${e}`);ce[e]=t})(...e),pe()},ve=(...e)=>{((e,t)=>{if(!d(te,e))throw new Error(`Ошибка, отсутствует ключ ${e}`);ce[e]=t})(...e),pe()};F(q,"fieldset"),F(k,"select"),F(k,"fieldset"),(()=>{const{TYPE:e,TIMEIN:t,TIMEOUT:r,ROOM_NUMBER:o,PHOTO_AVATAR:n,PHOTO_HOUSE:a}=x;e.removeEventListener("change",W),t.removeEventListener("change",G),r.removeEventListener("change",J),o.removeEventListener("change",Y),q.removeEventListener("submit",Q),C.removeEventListener("click",K),n.removeEventListener("change",j),a.removeEventListener("change",V)})(),k.removeEventListener("change",X),X=null,function(r,a){n.on("load",(()=>{Z(),B(q,"fieldset"),fetch("https://22.javascript.pages.academy/keksobooking/data").then((e=>{if(e.ok)return e.json();throw new Error(`${e.status} ${e.statusText}`)})).then(fe).catch(he),a(e)})).setView(e,10),o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(n);const s=o.icon(t);c=o.marker(e,{draggable:!0,icon:s}),c.addTo(n),c.on("move",(e=>{a(e.target.getLatLng())}))}(0,ee)})();
//# sourceMappingURL=main.bundle.js.map