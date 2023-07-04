import React from 'react'

function UserCard({ userData }) {
  return (
    <div className="user-card">
      <h2>{userData.name}</h2>
      <img src={userData.imageUrl} alt="user image" />
    </div>
  )
}

export default UserCard