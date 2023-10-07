import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./logOut.css"
import { useMenuState } from '../store/menuState'




const LogOut = () => {

    const navigate = useNavigate()

    const stateStore = useMenuState( state => state.changeStateFalse)




    const handleExit = () => {
        localStorage.removeItem("token")
        navigate("/login")
        stateStore()
    }


  return (
    <section className='logOut__container'>
        <h3 className='logOut__text'>Do you want to exit the session?</h3>
        <button className='logOut__btn' onClick={handleExit}>Log out</button>
    </section>
  )
}

export default LogOut