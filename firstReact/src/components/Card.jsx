import React from 'react'

const Card = (props) => {
    
  return (
    <div>
      <h1>{props.username} {props.surname}</h1>
      <h2>{props.age}, {props.city}</h2>
      <button>Add Friend</button>
    </div>
  )
}

export default Card
