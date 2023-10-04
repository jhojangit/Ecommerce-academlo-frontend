import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../../pages/Cart'
import "./header.css"

const Header = () => {

  const [isLog, setIsLog] = useState(localStorage.getItem("token"))


  

  useEffect(() => {
    setIsLog(localStorage.getItem("token"))
  }, [isLog])


    
  return (
    <header className='navbar'>
        <h1 className='navbar__title'> <Link to="/" >e-commerce</Link></h1>
        <nav className='navbar__ul-container'>
            <ul className='navbar__ul'>

              {
                !isLog?
                <>
                  <li className='navbar__li'> <Link to="/">Home</Link>  </li>
                  <li className='navbar__li'> <Link to="/login">Login</Link>  </li>
                  <li className='navbar__li'> <Link to="/register">Register</Link>  </li>
                </>
                  :
              <>

                  <li className='navbar__li'> <Link to="/logOut">Log out</Link>  </li>
                  <li className='navbar__li'> <Link to="/register">Register</Link>  </li>
                  <li className='navbar__li'> <Link to="/Cart">Cart</Link>  </li>
                  <li className='navbar__li'> <Link to="/purchases">Purchases</Link>  </li>
              </>

                }

            </ul>
        </nav>
    </header>
  )
}

export default Header