import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API_BASE = "http://localhost:5000"

function RegisterForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      email: "",
      password: "",
      password2: "",
  })

  const {email, password, password2} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
  }

  const onSubmit = async (e) => {
      e.preventDefault();
      
      const res = await fetch(
        API_BASE + "/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type":"application/json"},
          body: JSON.stringify({...formData}),
        }
      );

      const data = await res.json();

      console.log(data);

      navigate("/login");
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