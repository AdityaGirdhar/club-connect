import React from 'react'

function UserCard({ userData }) {
  return (
    <div className="user-card">
      <h3>Current session:</h3>
      <h4>{userData.name}</h4>
      <img src={userData.imageUrl} alt="user image" />
    </div>
  )
}

export default UserCard