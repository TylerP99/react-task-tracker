import React from 'react'
import {Link} from "react-router-dom"

function Navigation() {
  return (
    <nav className="header">

        <h1><Link to="/">Task Tracker</Link></h1>

        <ul>

            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/register">Register</Link></li>

        </ul>

    </nav>
  )
}

export default Navigation