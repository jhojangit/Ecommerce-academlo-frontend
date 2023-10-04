import React from 'react'
import useCrudCart from '../../hooks/useCrudCart';
import "./styles/productInCart.css"

const ProductInCart = ({ prodCart }) => {

    
    const {deleteProductsFromCart} = useCrudCart()

    const handleDeleteCart = () =>{
        deleteProductsFromCart(prodCart.id)
    }
    
    

    return (
        <article className='prodcart'>
            <header className='prodcart__header'>
                <img className='prodcart__img' src={prodCart.product.images[0].url} alt="" />
            </header>

            
                <h3 className='prodcart__title'>{prodCart.product.title}</h3>

            
            <button className='prodcart__delete' onClick={handleDeleteCart}>
                <i  className='bx bx-trash prodcart__icon'></i>
            </button>

            <footer className='prodcart__footer'>
                <span className='prodcart__quantity'>{prodCart.quantity}</span>

            <div className='prodcart__subtotal'>
                <span className='prodcart__subtotal-label'>SubTotal</span>
                <span className='prodcart__subtotal-value'>{prodCart.product.price * prodCart.quantity}</span>
            </div>

            </footer>

        </article>
    )
}

export default ProductInCart