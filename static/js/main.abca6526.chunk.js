(this["webpackJsonpcra-pwa-notification"]=this["webpackJsonpcra-pwa-notification"]||[]).push([[0],{49:function(e,n,i){},50:function(e,n,i){},56:function(e,n,i){"use strict";i.r(n);var o=i(7),t=i(0),a=i.n(t),r=i(9),c=i.n(r),s=(i(49),i(50),i(34)),l=(i(57),s.a.initializeApp({apiKey:"AIzaSyCbnMN2Z_jF2hu2WHZy_csPzaVb09M-CJY",authDomain:"cra-pwa-notification.firebaseapp.com",projectId:"cra-pwa-notification",storageBucket:"cra-pwa-notification.appspot.com",messagingSenderId:"105560085884",appId:"1:105560085884:web:2b1a95db109665a43e80f9",measurementId:"G-KDENP93Z1J"}).messaging()),d=i(37),u=i(87),f=i(86),g=i(85),h=i(83),p=i(84),v=i(82);function j(){var e=a.a.useState(!0),n=Object(d.a)(e,2),i=n[0],r=n[1],c=function(){r(!1)};return Object(t.useEffect)((function(){navigator.serviceWorker.addEventListener("message",(function(e){return console.log(e.data)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(u.a,{variant:"outlined",color:"primary",onClick:function(){r(!0)},children:"Slide in alert dialog"}),Object(o.jsxs)(f.a,{open:i,keepMounted:!0,onClose:c,children:[Object(o.jsx)(v.a,{id:"alert-dialog-slide-title",children:"TITLE"}),Object(o.jsx)(h.a,{children:Object(o.jsx)(p.a,{id:"alert-dialog-slide-description",children:"CONTENT"})}),Object(o.jsxs)(g.a,{children:[Object(o.jsx)(u.a,{variant:"contained",onClick:c,color:"primary",children:"Disagree"}),Object(o.jsx)(u.a,{variant:"contained",onClick:c,color:"primary",children:"Agree"})]})]})]})}var w=function(){return Object(t.useEffect)((function(){l.getToken().then((function(){var e=l.getToken();console.log("Token",e)})).catch((function(e){return console.log("Unable to get permission to notify.",e)})),navigator.serviceWorker.addEventListener("message",(function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("div",{className:"w3-display-container w3-animate-opacity w3-text-white",children:Object(o.jsx)("div",{className:"w3-display-middle",children:Object(o.jsx)("h5",{className:"w3-jumbo w3-animate-top",children:"Notifica in arrivo"})})})}),Object(o.jsx)(j,{})]})},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,89)).then((function(n){var i=n.getCLS,o=n.getFID,t=n.getFCP,a=n.getLCP,r=n.getTTFB;i(e),o(e),t(e),a(e),r(e)}))};navigator.serviceWorker.addEventListener("message",(function(e){return console.log(e)})),"serviceWorker"in navigator&&navigator.serviceWorker.register("./../public/firebase-messaging-sw").then((function(e){console.log("Registration successful, scope is:",e.scope),l.useServiceWorker(e)})).catch((function(e){console.log("Service worker registration failed, error:",e)})),c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cra-pwa-notification",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/cra-pwa-notification","/service-worker.js");b?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var o=i.headers.get("content-type");404===i.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(n,e)}))}}(),k()}},[[56,1,2]]]);
//# sourceMappingURL=main.abca6526.chunk.js.map