import { useEffect, useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './pages/Welcome'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import { gapi } from 'gapi-script'
import './App.css'

const clientId = "1078813141578-ncckgu3hnvqd03e0n7d7kfj0tfkiegdh.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start);
  })
  return (
    <>
      <Login/>
      <Logout/>
    </>
  )
}

export default App
