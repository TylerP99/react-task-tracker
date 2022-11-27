import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API_BASE = "http://localhost:5000"

function RegisterForm({formData, onChange, onSubmit}) {

  const navigate = useNavigate();

  const {email, password, password2} = formData;

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onChange}
        />
      </div>

      <div className="form-control">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={onChange}
        />
      </div>

      <div className="form-control">
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password2"
          placeholder="Confirm password"
          value={password2}
          onChange={onChange}
        />
      </div>

      <button className="btn btn-block" type="submit">Register</button>
    </form>
  )
}

export default RegisterForm