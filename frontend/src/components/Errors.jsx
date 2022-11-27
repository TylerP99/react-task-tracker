import React from 'react'

function Errors({errors}) {
  return (
    <ul>
        {errors.map((x,i) => (
            <li key={i}>{x.msg}</li>
        ))}
    </ul>
  )
}

export default Errors