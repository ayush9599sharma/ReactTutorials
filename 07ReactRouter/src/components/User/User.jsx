import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {user_id} = useParams()
  return (
    <div>
      <h1>user: {user_id}</h1>
    </div>
  )
}

export default User
