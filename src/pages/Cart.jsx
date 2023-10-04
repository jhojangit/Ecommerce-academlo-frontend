import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/cart/ProductInCart'
import "./cart.css"
import usePurchases from '../hooks/usePurchases'
import Login from './Login'



const Cart = () => {

    const isLog = localStorage.getItem("token")


    function resvisar(isLog){
        if (isLog) {
            navigate("/")
            window.location.reload(true)
    
        
    }
    } 

    resvisar()

    
    const {buyThisCart, getAllProductsPurchases} = usePurchases()

    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllProductsCartThunk())
    }, [])

    const {cartGlobal} = useSelector(state => state)


    const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price, 0)

        const handlePurchase = () => {
        buyThisCart()
    }

    
    return (

        <>
        {

            isLog?
        
            <div className='cart'>
                <h2 className='cart__title'>CART</h2>

                <div className='cart__container'>
                    {
                    cartGlobal?.map(prodCart => (
                        <ProductInCart
                        key={prodCart.id}
                        prodCart={prodCart}
                        />
                        ))
                    }
                </div>

                    <footer className='cart__footer'>
                        <span className='cart__footer-label'>Total: </span>

                        <h3 className='cart__footer-value'>{totalPriceCart}</h3>

                        <button onClick={handlePurchase} className='cart__btn'>Buy</button>
                    </footer>
            </div>

            :
            <Login/>

        }
        </>  
    )
}

export default Cart