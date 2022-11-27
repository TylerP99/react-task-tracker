import React from 'react'

import RegisterForm from '../components/forms/RegisterForm'

function Register({formData, onChange, onSubmit}) {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm
      formData={formData}
      onSubmit={onSubmit}
      onChange={onChange}
      />
    </div>
  )
}

export default Register