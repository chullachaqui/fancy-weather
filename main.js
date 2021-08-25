(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"body {\r\n    margin: 0px;\r\n    background: no-repeat;\r\n    background-size: cover;\r\n    background-image: linear-gradient(to bottom, rgb(116, 18, 18), rgb(0, 0, 0));\r\n}\r\n\r\n.dashboard {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n    margin-right: 30px;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    color:rgb(66, 0, 0);\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n}\r\n\r\n.button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0px 5px;\r\n    margin-right: 5px;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    background-color: rgb(160, 116, 35, 0.7);\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.rotation {\r\n    animation: Rotation 2s;\r\n}\r\n\r\n@keyframes Rotation{\r\n    0% {transform: rotate(0deg) ;}\r\n    100% {transform: rotate(360deg);}\r\n}\r\n\r\n.listContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n    align-items: center;\r\n    max-height: 1rem;\r\n    line-height: 24px;\r\n}\r\n\r\n.closed-list{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0px 0px 24px 0px;\r\n    margin-right: 5px;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    height: 3rem;\r\n    background-color: rgb(160, 116, 35, 0.7);\r\n    overflow: hidden;\r\n}\r\n\r\n.open-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0px 0px 24px 0px;\r\n    margin-right: 5px;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    height: 3rem;\r\n    overflow: visible;\r\n    background-color: rgb(160, 116, 35, 0.7);\r\n    cursor: pointer;\r\n}\r\n\r\n.languageSelection {\r\n    display: flex;\r\n    box-sizing: border-box;\r\n    border-radius: inherit;\r\n    padding: 0px 10px;\r\n    width: inherit;\r\n}\r\n\r\n.units-c {\r\n    padding: 0 10px 0 10px;\r\n    border: 1px solid black;\r\n    border-right: none;\r\n    border-radius: 5px 0 0 5px;\r\n    background-color: rgb(160, 116, 35, 0.7);\r\n    cursor: pointer;\r\n}\r\n\r\n.units-f {\r\n    padding: 0 10px 0 10px;\r\n    border: 1px solid black;\r\n    border-radius: 0 5px 5px 0;\r\n    background-color: rgb(160, 116, 35, 0.7);\r\n    cursor: pointer;\r\n}\r\n\r\n.button:hover, .closed-list:hover, .searchButton:hover, .languageSelection:hover, .voiceButton:hover, .units-c:hover, .units-f:hover {\r\n    cursor:pointer;\r\n    background: linear-gradient(135deg, white, rgb(160, 116, 35, 0.7),rgb(236, 184, 13));\r\n    animation: animation 0.3s;\r\n    animation-fill-mode: forwards;\r\n    background-size: 200% 200%;\r\n}\r\n\r\n@-webkit-keyframes animation {\r\n    0%{background-position:10% 10%}\r\n    100%{background-position:100% 100%}\r\n}\r\n\r\n.open-list:hover {\r\n    background-color: rgb(160, 116, 35, 0.7);\r\n}\r\n\r\n.searchArea {\r\n    display: flex;\r\n    width: 300px;\r\n}\r\n\r\n.voiceButton {\r\n    display: flex;\r\n    background-color: rgb(160, 116, 35, 0.7);\r\n    border-radius: 5px 0 0 5px;\r\n    border: 1px solid black;\r\n    border-right: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.active-button {\r\n    background-color: rgb(236, 184, 13);\r\n}\r\n\r\n.searchBar {\r\n    font-size: 16px;\r\n    background-color: rgb(160, 116, 35, 1);\r\n    border: 1px solid black;\r\n    outline: none;\r\n}\r\n\r\n::placeholder {\r\n    color:rgb(15, 11, 11);\r\n}\r\n\r\n.searchButton {\r\n    font-size: 16px;\r\n    border-radius: 0 10px 10px 0;\r\n    background-color: rgb(160, 116, 35, 0.7);\r\n    border: 1px solid black;\r\n    border-left: none;\r\n}\r\n\r\n.main {\r\n    display: flex;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color:white;\r\n    justify-content: space-between;\r\n    margin-right: 30px;\r\n}\r\n\r\n.weather {\r\n    display: flex;\r\n    margin: 20px;\r\n}\r\n\r\n.condition {\r\n    display: flex;\r\n}\r\n\r\n.location {\r\n    font-size: 30px;\r\n    margin: 0px;\r\n}\r\n\r\n.time {\r\n    font-size: 18px;\r\n    margin: 0px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.temperature-today {\r\n    display: flex;\r\n    font-weight: bold;\r\n    font-size: 150px;\r\n    margin: 50px 40px 0 0;    \r\n}\r\n\r\n.today {\r\n    display: flex;\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    position: relative;\r\n    left: -40px;\r\n    top: -20px;\r\n    max-width: 170px;\r\n    max-height: 170px;\r\n}\r\n\r\n.overview {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: start;\r\n    justify-content: space-around;\r\n    font-size: 18px;\r\n}\r\n\r\n.text {\r\n    margin: 0;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.forecast {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    margin: 0 20px 0 60px;\r\n}\r\n\r\n.forecast-day {\r\n    font-size: 20px;\r\n    padding: 0;\r\n}\r\n\r\n.forecast-condition {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 5px;\r\n}\r\n\r\n.forecast-weekday {\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\n.forecast-temperature {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    margin: 0;\r\n    font-size: 30px;\r\n    text-align: end;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.map {\r\n    border-radius: 10px;\r\n}\r\n\r\n.material-icons-outlined {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .main {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .overview {\r\n        box-sizing: border-box;\r\n        min-width: fit-content;\r\n        min-height: fit-content;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n    .weather {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .forecast {\r\n        flex-direction: row;\r\n        margin: 50px 15px 0 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .dashboard {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .main {\r\n        align-items: center;\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .buttons {\r\n        padding: 10px;\r\n    }\r\n\r\n    .condition {\r\n        /* flex-direction: column; */\r\n        align-self: center;\r\n    }\r\n\r\n    .temperature-today {\r\n        font-size: 70px;\r\n        /* align-self: center; */\r\n        margin: 30px 10px 0 0;    \r\n         \r\n    }\r\n\r\n    .current {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-self: center;\r\n    }\r\n\r\n    .searchArea {\r\n        width: 250px;\r\n    }\r\n\r\n    .text {\r\n        font-size: 70%;\r\n    }\r\n    \r\n    .forecast {\r\n        /* align-self: flex-end; */\r\n        /* max-width: 200px; */\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .forecast-icon {\r\n        max-width: 80px;\r\n    }\r\n\r\n    .forecast-day {\r\n        font-size: 80%;\r\n    }\r\n\r\n    .forecast-condition {\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    .forecast-temperature {\r\n        font-size: 16px;\r\n        text-align: center;\r\n    }\r\n\r\n    .overview {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .icon {\r\n        display: flex;\r\n        position: inherit ;\r\n        max-width: 100px;\r\n        max-height: 100px;\r\n    }\r\n\r\n    .map {\r\n        max-width: 250px;\r\n    }\r\n    \r\n    .coordinates {\r\n        font-size: 70%;\r\n    }\r\n}\r\n\r\n",""]);const a=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,h="".concat(d," ").concat(l);a[d]=l+1;var u=t(h),g={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(e[u].references++,e[u].updater(g)):e.push({identifier:h,updater:i(g,r),references:1}),o.push(h)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=r(n,i),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,i=t.media,a=t.sourceMap;i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var r={};(()=>{t.d(r,{K:()=>M});class n{constructor(n){"en"===n?(this.initialAlert="Unable to retrieve user's location. Please use the search engine.",this.emblem="ENG",this.placeholder="Search city or location",this.search="Search",this.searchAlert="Please retry with a valid location name",this.timezone=`${n}-GB`,this.wind="Wind speed: ",this.feelsLike="Feels like: ",this.humidity="Humidity: ",this.latitude="Latitude: ",this.longitude="Longitude: "):(this.initialAlert="Nie ustalono pozycji użytkownika. Proszę użyć wyszukiwarki.",this.emblem="PL",this.placeholder="Znajdź miasto lub miejsce",this.search="Szukaj",this.searchAlert="Spróbój ponownie wpisując poprawne dane",this.timezone="pl",this.wind="Prędkość wiatru: ",this.feelsLike="Temperatura odczuwalna: ",this.humidity="Wilgotność: ",this.latitude="Szerokość geograficzna: ",this.longitude="Długość geograficzna: ")}}class e{constructor(n,e,t,r){const i=document.createElement(n);return t&&i.classList.add(t),e.appendChild(i),r&&Object.keys(r).forEach((n=>{i.setAttribute(n,r[n])})),i}}class i{constructor(t){this.dictionary=new n(t),this.container=document.querySelector(".dashboard");const r=new e("div",this.container,"buttons");this.changeBackground=new e("div",r,"button"),this.changeBackground.button=new e("span",this.changeBackground,"material-icons-outlined"),this.changeBackground.button.innerHTML="refresh";const i=new e("div",r,"listContainer");this.changeLanguage=new e("div",i,"closed-list"),this.changeLanguage.chosen=new e("div",this.changeLanguage,"languageSelected"),this.changeLanguage.chosen.innerHTML=this.dictionary.emblem,this.changeLanguage.choice1=new e("div",this.changeLanguage,"languageSelection"),this.changeLanguage.choice1.innerHTML="ENG",this.changeLanguage.choice2=new e("div",this.changeLanguage,"languageSelection"),this.changeLanguage.choice2.innerHTML="PL",this.celsius=new e("div",r,"units-c"),this.celsius.innerHTML="°C",this.fahrenheit=new e("div",r,"units-f"),this.fahrenheit.innerHTML="°F","celsius"===localStorage.getItem("units")?this.celsius.classList.add("active-button"):this.fahrenheit.classList.add("active-button");const a=new e("div",this.container,"searchArea"),o=new e("div",a,"voiceButton");this.voiceIcon=new e("div",o,"material-icons-outlined"),this.voiceIcon.innerHTML="mic",this.searchBar=new e("input",a,"searchBar",{type:"search",placeholder:this.dictionary.placeholder}),this.searchButton=new e("input",a,"searchButton",{type:"button",value:this.dictionary.search})}translateDashboard(){this.searchBar.setAttribute("placeholder",M.dictionary.placeholder),this.searchButton.setAttribute("value",M.dictionary.search)}}class a{constructor(){this.units=localStorage.getItem("units")||"celsius",this.main=document.querySelector(".main");const n=new e("section",this.main,"weather"),t=new e("div",n,"current");this.location=new e("p",t,"location"),this.time=new e("p",t,"time");const r=new e("div",t,"condition");this.temperature=new e("p",r,"temperature-today");const i=new e("div",r,"overview");this.icon=new e("img",i,"icon"),this.description=new e("p",i,"text"),this.wind=new e("p",i,"text"),this.feelsLike=new e("p",i,"text"),this.humidity=new e("p",i,"text");const a=new e("div",n,"forecast");for(let n=1;n<=3;n++){const t=new e("div",a,"forecast-day");this[`day${n}`]=t,t.weekday=new e("div",t,"forecast-weekday");const r=new e("p",t,"forecast-condition");t.temperature=new e("div",r,"forecast-temperature"),t.icon=new e("img",r,"forecast-icon")}}getWeather(n,e){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${n}&lon=${e}&exclude=minutely,hourly,alerts&cnt=3&appid=f9d19679058f35da8b74e2b7fb3b62a1&lang=${localStorage.getItem("lang")}&units=metric`).then((n=>n.json())).then((n=>{this.displayWeather(n)}))}displayWeather(n){const e=n.timezone,t=(new Date).toLocaleString(M.dictionary.timezone,{weekday:"short",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:`${e}`}).replaceAll(",","");this.time.innerHTML=`${t}`,this.description.innerHTML=`${n.current.weather[0].description}`,this.temperature.value=this.unitSwitch(n.current.temp),this.temperature.innerHTML=this.temperature.value,this.feelsLike.value=this.unitSwitch(n.current.feels_like),this.icon.setAttribute("src",`http://openweathermap.org/img/wn/${n.current.weather[0].icon}@2x.png`),this.wind.innerHTML=`${M.dictionary.wind}${n.current.wind_speed} m/s`,this.feelsLike.innerHTML=`${M.dictionary.feelsLike}${this.feelsLike.value}`,this.humidity.innerHTML=`${M.dictionary.humidity}${n.current.humidity} %`;for(let e=1;e<=3;e+=1){let t=new Date,r=t.getDate();r+=e,t.setDate(r);const i=this[`day${e}`];i.weekday.innerHTML=t.toLocaleString(M.dictionary.timezone,{weekday:"long"}),i.icon.setAttribute("src",`http://openweathermap.org/img/wn/${n.daily[e].weather[0].icon}@2x.png`),i.temperature.innerHTML=this.unitSwitch((n.daily[e].temp.min+n.daily[e].temp.max)/2)}}unitSwitch(n){return"celsius"===localStorage.getItem("units")?`${Math.round(n)}°C`:`${Math.round(1.8*n+32)}°F`}}const o=n=>Math.round(1e3*n)/1e3,s=n=>{const e=n%1*60,t=e%1*60;return`${Math.round(n)}° ${Math.abs(Math.floor(e))}" ${Math.abs(Math.floor(t))}'`};class c{constructor(){const n=document.querySelector(".main");this.container=new e("section",n,"map"),this.mapContainer=new e("div",this.container,"map",{id:"map",style:"width: 350px; height: 300px;"}),mapboxgl.accessToken="pk.eyJ1IjoiY2h1bGxhY2hhcXVpIiwiYSI6ImNrcm50OXpvbzEwMTAyb25veWN2MG5kM3AifQ.mzkVMgGbIu7ApGVaWtPAbg",this.coordinates=new e("div",this.container,"coordinates"),this.coordinates.latititude=new e("p",this.coordinates),this.coordinates.longitude=new e("p",this.coordinates)}centerPosition(n,e){new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[e,n],zoom:10})}displayCoordinates(n,e){this.coordinates.latititude.innerHTML=`${M.dictionary.latitude}${s(n)}`,this.coordinates.longitude.innerHTML=`${M.dictionary.longitude}${s(e)}`}}class d{constructor(){const n=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new n,this.recognition.interimResults=!0}voiceSearchListener(){const n=document.querySelector(".voiceButton");n.addEventListener("click",(()=>{this.recognition.start(),n.classList.toggle("active-button"),this.recognition.addEventListener("result",(e=>{if(e.results[0].isFinal){const t=document.querySelector(".searchBar");t.value=`${e.results[0][0].transcript}`,M.getLocationBasedWeather(t.value),n.classList.remove("active-button")}})),this.recognition.addEventListener("end",(()=>{this.recognition.abort(),n.classList.remove("active-button")}))}))}}var l=t(379),h=t.n(l),u=t(795),g=t.n(u),p=t(569),m=t.n(p),f=t(565),b=t.n(f),x=t(216),v=t.n(x),w=t(589),y=t.n(w),L=t(424),k={};k.styleTagTransform=y(),k.setAttributes=b(),k.insert=m().bind(null,"head"),k.domAPI=g(),k.insertStyleElement=v(),h()(L.Z,k),L.Z&&L.Z.locals&&L.Z.locals;const M=new class{constructor(){this.generateHTML(),this.getInitialWeather(),this.language=localStorage.getItem("lang")||"en",this.dashboard=new i(this.language),this.weather=new a,this.map=new c,this.speech=new d,this.dictionary=new n(this.language),this.previousLat="",this.previousLng="",this.searchListeners(),this.unitChangeListeners(),this.languageListeners(),this.backgroundListeners(),this.speech.voiceSearchListener()}generateHTML(){this.dashboardElement=new e("header",document.body,"dashboard"),this.mainElement=new e("main",document.body,"main")}getBackground(){fetch(`https://api.unsplash.com/photos/random?&client_id=L0JtEhlUZnLRnHtLs5d8-BZBPQNp-Pejvs5PKObs7eE&orientation=landscape&per_page=1&query=${this.weather.description.innerHTML},sky,weather`).then((n=>n.json())).then((n=>{const e=n.urls.regular;document.body.setAttribute("style",`background-image: url(${e});`)}))}getInitialWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((n=>{if(n.coords){const e=n.coords.latitude,t=n.coords.longitude;this.getLocationBasedWeather(`${e},${t}`)}}),(()=>{this.getBackground(),alert(this.dictionary.initialAlert)}),{enableHighAccuracy:!0})}getLocationBasedWeather(n){fetch(`https://api.opencagedata.com/geocode/v1/json?q=${n}&key=d1e4f3c55f444cfa82590e0c3d733a98&limit=1&language=${localStorage.getItem("lang")}`).then((n=>n.json())).then((n=>{let e;this.latitude=n.results[0].geometry.lat,this.longitude=n.results[0].geometry.lng,this.map.displayCoordinates(this.latitude,this.longitude),this.dashboard.translateDashboard(),n.results[0].components.city?e=n.results[0].components.city:n.results[0].components.town?e=n.results[0].components.town:n.results[0].components.administrative?e=n.results[0].components.administrative:n.results[0].components.village?e=n.results[0].components.village:n.results[0].components.region&&(e=n.results[0].components.region),this.getBackground(),o(this.previousLat)!==o(this.latitude)&&o(this.previousLng)!==o(this.longitude)&&this.map.centerPosition(this.latitude,this.longitude),this.weather.location.innerHTML=e?`${e}, ${n.results[0].components.country}`:`${n.results[0].components.country}`,this.previousLat=this.latitude,this.previousLong=this.longitude,this.weather.getWeather(this.latitude,this.longitude)})).catch((()=>alert(this.dictionary.searchAlert)))}searchListeners(){this.dashboard.searchButton.addEventListener("click",(()=>{this.getLocationBasedWeather(this.dashboard.searchBar.value),this.dashboard.searchBar.value=""})),this.dashboard.searchBar.addEventListener("keydown",(n=>{"Enter"===n.code&&(this.getLocationBasedWeather(this.dashboard.searchBar.value),this.dashboard.searchBar.value="")}))}unitChangeListeners(){this.dashboard.celsius.addEventListener("click",(()=>{localStorage.setItem("units","celsius"),this.weather.getWeather(this.latitude,this.longitude),this.dashboard.celsius.classList.add("active-button"),this.dashboard.fahrenheit.classList.remove("active-button")})),this.dashboard.fahrenheit.addEventListener("click",(()=>{localStorage.setItem("units","fahrenheit"),this.weather.getWeather(this.latitude,this.longitude),this.dashboard.fahrenheit.classList.add("active-button"),this.dashboard.celsius.classList.remove("active-button")}))}languageListeners(){this.dashboard.changeLanguage.addEventListener("click",(()=>{this.dashboard.changeLanguage.classList.toggle("open-list"),this.dashboard.changeLanguage.classList.toggle("closed-list")})),this.dashboard.changeLanguage.choice1.addEventListener("click",(()=>{"pl"===this.language&&(this.language="en",localStorage.setItem("lang","en"),this.dictionary=new n("en"),this.dashboard.translateDashboard(),this.dashboard.changeLanguage.chosen.innerHTML=this.dictionary.emblem,this.weather.location.innerHTML&&(this.map.displayCoordinates(this.latitude,this.longitude),this.getLocationBasedWeather(`${this.latitude},${this.longitude}`)))})),this.dashboard.changeLanguage.choice2.addEventListener("click",(()=>{"en"===this.language&&(this.language="pl",localStorage.setItem("lang","pl"),this.dictionary=new n("pl"),this.dashboard.translateDashboard(),this.dashboard.changeLanguage.chosen.innerHTML=this.dictionary.emblem,this.weather.location.innerHTML&&(this.map.displayCoordinates(this.latitude,this.longitude),this.getLocationBasedWeather(`${this.latitude},${this.longitude}`)))}))}backgroundListeners(){this.dashboard.changeBackground.addEventListener("click",(()=>{this.dashboard.changeBackground.button.classList.add("rotation"),this.getBackground(),setTimeout((()=>{this.dashboard.changeBackground.button.classList.remove("rotation")}),1500)}))}};window.omena=M})()})();