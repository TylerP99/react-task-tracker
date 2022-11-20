import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

function Header(props) {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button
        text={props.showTaskForm ? "Close" : "Open"}
        color={props.showTaskForm ? "red" : "green"}
        onButtonToggle={props.onButtonToggle}
      />
    </header>
  )
}

Header.defaultProps = {
    title: "Enter a title"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header