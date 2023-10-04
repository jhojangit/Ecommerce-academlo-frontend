import React from 'react'
import "./cardProducts.css"
import { useNavigate } from 'react-router-dom'
import useCrudCart from '../../../hooks/useCrudCart'


const CardProducts = ({ product }) => {

    const navigate = useNavigate()
    const {addProductToCart} = useCrudCart()


    const handleSelectProduct = () => {
        navigate(`/product/${product.id} `)
    }

    const handleBtnClick = e => {
        e.stopPropagation()
        const data = {
            quantity: 1,
            productId: product.id
        }
        addProductToCart(data)
    }
    return (
        <article onClick={handleSelectProduct} className='product'>
            <header className='product__header'>
                <img className='product__img product__img-1' src={product.images[0].url} alt="" />
                <img className='product__img product__img-2' src={product.images[1].url} alt="" />
            </header>
            <section className='product__section'>
                <h4 className='product__subtitle' >{product.brand}</h4>
                <h3 className='product__title'>{product.title}</h3>
            </section>

            <div className='product__price'>
                <span className='product__price-label' >Price </span>
                <span className='product__price-value'>{product.price}</span>
                <button onClick={handleBtnClick} className='product__btn'>
                    <i className='bx bx-cart-add bx-sm product__btn-title'></i>
                </button>
            </div>


        </article>
    )
}

export default CardProducts