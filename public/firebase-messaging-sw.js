import firebase from 'firebase/app'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
    });
}

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCbnMN2Z_jF2hu2WHZy_csPzaVb09M-CJY",
    authDomain: "cra-pwa-notification.firebaseapp.com",
    projectId: "cra-pwa-notification",
    storageBucket: "cra-pwa-notification.appspot.com",
    messagingSenderId: "105560085884",
    appId: "1:105560085884:web:2b1a95db109665a43e80f9",
    measurementId: "G-KDENP93Z1J"
};

firebase.initializeApp( firebaseConfig)

const initMessaging = firebase.messaging()
