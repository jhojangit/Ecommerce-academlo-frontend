import React, { useEffect, useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'



const Login = () => {

  
  const navigate =useNavigate()

  const { loginUser} = useAuthentication()


  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const data = { email, password };

    loginUser(data)

    setTimeout(() => {
      
      navigate("/")
      window.location.reload(true)

    }, 2000);
  }




  return (

      <div className="form__login-container">
          <form className='form__login-view' onSubmit={handleLogin} >
            <h1 className='form__login-title'>Welcome! Enter your email and password to continue</h1>

            <div className='form__login-div'>
              <label className='form__login-label' htmlFor="email">Email</label>
              <input className='form__login-input' type="email" id='email' />
            </div>
            <div className='form__login-div'>
              <label className='form__login-label' htmlFor="password">Password</label>
              <input className='form__login-input' type="password" id='password' />
            </div>
            <button className='form__login-submit' type="submit">Sign in</button>

            <p className='form__login-p' > Don't have an account? <Link className='form__login-link' to="/register">Sign up</Link> </p>
          </form>
        </div>


  )
}

export default Login