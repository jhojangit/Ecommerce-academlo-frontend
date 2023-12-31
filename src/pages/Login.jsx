import React, { useEffect, useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../components/loading/Loading'
import { useMenuState } from '../store/menuState'



const Login = () => {

  const [isLog, setIsLog] = useState(false);
  const [load, setLoad] = useState(false);

  
  const stateStore = useMenuState((state) => state.changeStateTrue)

  const { loginUser} = useAuthentication()

  const navigate =useNavigate()





  const handleLogin = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const data = { email, password };

    setLoad(true)
    setIsLog(false)

    
    try {
      const send = await loginUser(data);
      setLoad(false)
      setIsLog(true)
        
      navigate("/");
      stateStore()


    } catch (error) {
      console.error(error);
      setLoad(false)
      setIsLog(true)
    }
  }


  return (

      <div className="form__login-container">
          <form className='form__login-view' onSubmit={handleLogin} >
            <h1 className='form__login-title'>Welcome! Enter your email and password to continue</h1>

            <div className='form__login-div'>
              <label className='form__login-label' htmlFor="email">Email</label>
              <input className='form__login-input' type="email" id='email' required="true" />
            </div>
            <div className='form__login-div'>
              <label className='form__login-label' htmlFor="password">Password</label>
              <input className='form__login-input' type="password" id='password' required="true" />
            </div>
            <button className='form__login-submit' type="submit">Sign in</button>


              {load && <Loading/>}

            {
              isLog?
                <p style={{color:"red", fontSize:"1.5rem"}}>Email or password invalid</p>
                :
                <p className='form__login-p' > Don't have an account? <Link className='form__login-link' to="/register">Sign up</Link> </p>
            } 

          </form>
        </div>


  )
}

export default Login