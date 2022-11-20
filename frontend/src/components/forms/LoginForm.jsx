import { useState } from "react"
import {useNavigate} from "react-router-dom"

const API_BASE = "http://localhost:5000";

function LoginForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      email: "",
      password: "",
  })

  const {email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
  }

  const onSubmit = (e) => {
      e.preventDefault();
      
      const res = await fetch(API_BASE + "/api/users/authenticate",
        {
          
        }
      );
  }

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

      <button className="btn btn-block" type="submit">Login</button>
    </form>
  )
}

export default LoginForm