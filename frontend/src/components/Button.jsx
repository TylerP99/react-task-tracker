import React from 'react'
import PropTypes from 'prop-types'

function Button({color, text, onButtonToggle}) {
  return (
    <button
    className='btn'
    style={{background:  color}}
    onClick={() => onButtonToggle()}
    >{text}</button>
  )
}

Button.defaultProps = {
    text: "Enter text"
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button