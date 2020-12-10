import React, {useEffect} from 'react'
import './App.css'
import {messaging} from './init-fcm.js'
import SimpleDialog from './NotificationDialog'

function App() {

    useEffect(() => {
        messaging.getToken()
            .then( () => {
                const token = messaging.getToken()
                console.log('Token', token)
            })
            .catch((err: any) => console.log('Unable to get permission to notify.', err))

        navigator.serviceWorker.addEventListener('message', (message) => console.log(message))

    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <div className="w3-display-container w3-animate-opacity w3-text-white">
                    <div className="w3-display-middle">
                        <h5 className="w3-jumbo w3-animate-top">Notifica in arrivo</h5>
                    </div>
                </div>
            </header>

            <SimpleDialog/>
        </div>
    )
}

export default App
