import React from 'react'

function Button(props) {
  const { dato } = props
  return (
    <button>{dato}</button>
  )
}

export default Button