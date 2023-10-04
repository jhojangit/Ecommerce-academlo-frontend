import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../utils/defaultRegisterValues'
import "../pages/register.css"




const Register = () => {

  const {register, handleSubmit, reset} = useForm()

  const {createNewUser} = useAuthentication()

  const submit = data =>{
    createNewUser(data)
    reset(defaultRegisterValues)
  }



  return (
    <div className="form__sign-container">

      <form className="form__sign-view" onSubmit={handleSubmit(submit)}>
        <h1 className="form__sign-title">Sign Up</h1>
        <div className='form__sing-div'>
          <label className="form__sign-label" htmlFor="fisrtName">First name</label>
          <input className="form__sign-input" {...register('firstName')} type="text" id='fisrtName' />
        </div>
        <div className='form__sing-div'>
          <label className="form__sign-label" htmlFor="lastName">Last name</label>
          <input className="form__sign-input" {...register('lastName')} type="text" id='lastName' />
        </div>
        <div className='form__sing-div'> 
          <label className="form__sign-label" htmlFor="email">Email</label>
          <input className="form__sign-input" {...register('email')} type="email" id='email' />
        </div>
        <div className='form__sing-div'>
          <label className="form__sign-label" htmlFor="password">Password</label>
          <input className="form__sign-input" {...register('password')} type="password" id='password' />
        </div>
        <div className='form__sing-div'>
          <label className="form__sign-label" htmlFor="phone">Phone</label>
          <input className="form__sign-input" {...register('phone')} type="tel" id='phone' />
        </div>

        <button className="form__sign-submit" type="submit">Sign Up</button>

      </form>

    </div>
  )
}

export default Register