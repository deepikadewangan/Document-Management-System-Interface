import React from 'react'

const UserContext = ({children}) => {
    const username = "riya"
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default UserContext
