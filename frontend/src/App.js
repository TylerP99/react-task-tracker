// Library imports
import { useState } from "react"

// My functional imports
import authService from "./features/authService";

// Public element imports
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// My page imports
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";

// My component imports
import Navigation from "./components/Navigation";
import Errors from "./components/Errors";


function App() {

  // User state
  const [user, setUser] = useState("");

  // Errors
  const [errors, setErrors] = useState([]);

  // User form state
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  // User form functions

  // Register form field set
  const onRegisterFieldChange = (e) => {
    setUserFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  // Register form submission
  const onRegister = async (e) => {
    e.preventDefault();

    // Do some validation
    const user = userFormData;

    // Make request
    const data = await authService.register(user);

    if(data.errors) {
      setErrors(data.errors);
    }

    // Store user in global state
    if(data.user) {
      setUser(data.user);
    }
  }

  return(
    <>
    <Router>
      <Navigation/>
      <div className="container">
        <Errors 
        errors={errors}
        />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/register" element={<Register
          formData={userFormData}
          onSubmit={onRegister}
          onChange={onRegisterFieldChange}
          />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;