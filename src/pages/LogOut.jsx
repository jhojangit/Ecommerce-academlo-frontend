import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./logOut.css"


const LogOut = () => {

    const navigate = useNavigate()

    const handleExit = () => {
        localStorage.removeItem("token")
        navigate("/login")
        window.location.reload(true)

    }


  return (
    <section className='logOut__container'>
        <h3 className='logOut__text'>Do you want to exit the session?</h3>
        <button className='logOut__btn' onClick={handleExit}>Log out</button>
    </section>
  )
}

export default LogOut