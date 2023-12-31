import React, { useRef, useState } from 'react'
import "./productInfo.css"
import SliderImgs from './SliderImgs'
import { useNavigate } from 'react-router-dom'
import useCrudCart from '../../../hooks/useCrudCart'
import LoaderSkeleton from '../../loaderSkeleton/LoaderSkeleton'

const ProductIdInfo = ({ product }) => {

    const [addProduct, setAddProduct] = useState(false)
    const [needLogin, setNeedLogin] = useState(false)


    const [quantity, setQuantity] = useState(1)
    const {addProductToCart} = useCrudCart()


    const navigate = useNavigate()

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if(quantity > 1) setQuantity(quantity - 1)
    }

    const handleHome = () => {
        navigate(`/`)
    }




    const handleAddToCart = () => {
        const data = {
            quantity: quantity,
            productId: product.id
        }

        if(localStorage.getItem('token')){
            addProductToCart(data)
            setAddProduct(true)
            setTimeout(() => {
                setAddProduct(false)
            }, 1500)
        }else{
            setNeedLogin(true)
            setTimeout(() => {
                setNeedLogin(false)
            }, 1500)
        }
    }



    return (

        !product? <LoaderSkeleton/>:

        <section className='product__info'> 

            
            <h4 className='product__miga'> <span className='product__miga-span' onClick={handleHome} >HOME</span> 🔸 {product?.title}</h4>
        
            <div className="product__info-slider">
                <SliderImgs product={product} />
            </div>



            <h3 className='product__info-brand'>{product?.brand}</h3>

            <h2 className='product__info-title'>{product?.title}</h2>

            <p className='product__info-description'>{product?.description}</p>


                    <span className='product__info-price-label' >Price </span>
                    <span className='product__info-price-number'>$ {product?.price.toLocaleString('es-Co')}</span>
                

                <span className='product__info-quantity-text'>Quantity</span>

                <div className='product__info-btns'>
                    <button className='product__info-btn' onClick={handleMinus}>-</button>
                    <div className='product__info-quantity-number'>{quantity}</div>
                    <button className='product__info-btn' onClick={handlePlus} >+</button>
                </div>
                {addProduct &&  <p className='product__added'> Produc added to cart</p>}
                {needLogin &&  <p className='product__added'> You need login</p>}


                <button onClick={handleAddToCart} className='product__btn-add' >Add to cart  <i className='bx bx-cart-add'></i></button>



        </section>
    )
}

export default ProductIdInfo