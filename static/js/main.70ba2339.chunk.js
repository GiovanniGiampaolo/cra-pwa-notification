(this["webpackJsonpcra-pwa-notification"]=this["webpackJsonpcra-pwa-notification"]||[]).push([[0],{49:function(e,n,i){},50:function(e,n,i){},56:function(e,n,i){"use strict";i.r(n);var t=i(7),o=i(0),a=i.n(o),c=i(9),r=i.n(c),s=(i(49),i(50),i(34)),l=(i(57),s.a.initializeApp({apiKey:"AIzaSyCbnMN2Z_jF2hu2WHZy_csPzaVb09M-CJY",authDomain:"cra-pwa-notification.firebaseapp.com",projectId:"cra-pwa-notification",storageBucket:"cra-pwa-notification.appspot.com",messagingSenderId:"105560085884",appId:"1:105560085884:web:2b1a95db109665a43e80f9",measurementId:"G-KDENP93Z1J"}).messaging()),d=i(35),u=i(87),f=i(86),g=i(85),v=i(83),h=i(84),p=i(82);function b(){var e,n,i,a,c=Object(o.useState)(!1),r=Object(d.a)(c,2),s=r[0],l=r[1],b=Object(o.useState)(null),j=Object(d.a)(b,2),w=j[0],m=j[1],k=function(){l(!1)};Object(o.useEffect)((function(){navigator.serviceWorker.addEventListener("message",(function(e){return m(e.data)}))}),[]),Object(o.useEffect)((function(){w&&l(!0)}),[w]);var O={title:w?null===(e=w["firebase-messaging-msg-data"])||void 0===e||null===(n=e.notification)||void 0===n?void 0:n.title:"no-data",desc:w?null===(i=w["firebase-messaging-msg-data"])||void 0===i||null===(a=i.notification)||void 0===a?void 0:a.body:"no-data"};return Object(t.jsxs)("div",{children:[Object(t.jsx)(u.a,{variant:"outlined",color:"primary",onClick:function(){l(!0)},children:"Slide in alert dialog"}),Object(t.jsxs)(f.a,{open:s,keepMounted:!0,onClose:k,children:[O&&Object(t.jsx)(p.a,{id:"alert-dialog-slide-title",children:O.title}),O&&Object(t.jsx)(v.a,{children:Object(t.jsx)(h.a,{id:"alert-dialog-slide-description",children:O.desc})}),Object(t.jsxs)(g.a,{children:[Object(t.jsx)(u.a,{variant:"contained",onClick:k,color:"primary",children:"Disagree"}),Object(t.jsx)(u.a,{variant:"contained",onClick:k,color:"primary",children:"Agree"})]})]})]})}var j=function(){return Object(o.useEffect)((function(){l.getToken().then((function(){var e=l.getToken();console.log("Token",e)})).catch((function(e){return console.log("Unable to get permission to notify.",e)})),navigator.serviceWorker.addEventListener("message",(function(e){return console.log(e)}))}),[]),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("header",{className:"App-header",children:Object(t.jsx)("div",{className:"w3-display-container w3-animate-opacity w3-text-white",children:Object(t.jsx)("div",{className:"w3-display-middle",children:Object(t.jsx)("h5",{className:"w3-jumbo w3-animate-top",children:"Notifica in arrivo"})})})}),Object(t.jsx)(b,{})]})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,89)).then((function(n){var i=n.getCLS,t=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;i(e),t(e),o(e),a(e),c(e)}))};navigator.serviceWorker.addEventListener("message",(function(e){return console.log(e)})),"serviceWorker"in navigator&&navigator.serviceWorker.register("./../public/firebase-messaging-sw").then((function(e){console.log("Registration successful, scope is:",e.scope),l.useServiceWorker(e)})).catch((function(e){console.log("Service worker registration failed, error:",e)})),r.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(j,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cra-pwa-notification",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/cra-pwa-notification","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var t=i.headers.get("content-type");404===i.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(n,e)}))}}(),k()}},[[56,1,2]]]);
//# sourceMappingURL=main.70ba2339.chunk.js.map