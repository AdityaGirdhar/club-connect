import React, { useState } from 'react'
import { GoogleLogin } from '@leecheuk/react-google-login'

const clientId = "1078813141578-ncckgu3hnvqd03e0n7d7kfj0tfkiegdh.apps.googleusercontent.com";

function UserCard({ userData }) {
  return (
    <div className="user-card">
      <h2>{userData.name}</h2>
      <img src={userData.imageUrl} alt="user image" />
    </div>
  )
}

function Login() {

  const [userData, setUserData] = useState({
    isloggedIn: false,
    name: "",
    imageUrl: ""
  })

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    
    const newUserData = {
      isloggedIn: true,
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl
    }

    setUserData(newUserData);
  }
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res); 

    const newUserData = {
      isloggedIn: false,
      name: "",
      imageUrl: ""
    }

    setUserData(newUserData);
  }
  return (
    <>
      <div className="signInButton">
        <GoogleLogin
          clientId={clientId}
          buttonText='Login'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        {userData.isloggedIn ? <UserCard userData={userData}/> : ""}
      </div>
    </>
  )
}

export default Login