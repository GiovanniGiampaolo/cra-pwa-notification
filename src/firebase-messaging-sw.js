import firebase from 'firebase/app'

importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js')

firebase.initializeApp({
    apiKey: 'AIzaSyCbnMN2Z_jF2hu2WHZy_csPzaVb09M-CJY',
    authDomain: 'cra-pwa-notification.firebaseapp.com',
    projectId: 'cra-pwa-notification',
    storageBucket: 'cra-pwa-notification.appspot.com',
    messagingSenderId: '105560085884',
    appId: '1:105560085884:web:2b1a95db109665a43e80f9',
    measurementId: 'G-KDENP93Z1J'
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
        .then((windowClients) => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i]
                windowClient.postMessage(payload)
            }
        })
        .then(() => {
            return registration.showNotification('my notification title')
        })
    return promiseChain
})

self.addEventListener('notificationclick', function (event) {
    console.log(event)
})
