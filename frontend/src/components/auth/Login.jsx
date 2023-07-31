import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from '@leecheuk/react-google-login'

const clientId = "1078813141578-ncckgu3hnvqd03e0n7d7kfj0tfkiegdh.apps.googleusercontent.com";

function UserCard({ userData }) {
  return (
    <div className="user-card">
      <br />
      <div className='read-the-docs'>Current session:</div>
      <h3>{userData.name}</h3>
      <img src={userData.imageUrl} alt="user image" />
    </div>
  )
}

function Logout({ setUserData }) {

  const onSuccess = () => {
    console.log('Log out successfull!');
    const newUserData = {
      isloggedIn: false,
      name: "",
      imageUrl: ""
    }

    setUserData(newUserData);
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
        <br />
        <h2>Welcome to ClubConnect</h2>
        {userData.isloggedIn ? <UserCard userData={userData}/> : ""}
        <br />
        {userData.isloggedIn ?
        <Logout setUserData={setUserData}/> :
        <GoogleLogin
          clientId={clientId}
          buttonText='Login with your IIITD email'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />}
      </div>
    </>
  )
}

export default Login