import { GoogleLogout } from '@leecheuk/react-google-login'
import React from 'react'

const clientId = "1078813141578-ncckgu3hnvqd03e0n7d7kfj0tfkiegdh.apps.googleusercontent.com";

function Logout() {

  const onSuccess = () => {
    console.log('Log out successfull!');
  }

  return (
    <>
      <div className="signOutButton">
        <GoogleLogout
          clientId={clientId}
          buttonText={'Logout'}
          onLogoutSuccess={onSuccess}
        />
      </div>
    </>
  )
}

export default Logout