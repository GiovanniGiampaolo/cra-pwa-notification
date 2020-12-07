import firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbnMN2Z_jF2hu2WHZy_csPzaVb09M-CJY",
    authDomain: "cra-pwa-notification.firebaseapp.com",
    projectId: "cra-pwa-notification",
    storageBucket: "cra-pwa-notification.appspot.com",
    messagingSenderId: "105560085884",
    appId: "1:105560085884:web:2b1a95db109665a43e80f9",
    measurementId: "G-KDENP93Z1J"
});

export const messaging = initializedFirebaseApp.messaging();
