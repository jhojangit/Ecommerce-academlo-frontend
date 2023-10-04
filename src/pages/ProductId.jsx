import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/home/productId/ProductIdInfo'
import SliderImgs from '../components/home/productId/SliderImgs'
import SimilarProducts from '../components/home/productId/SimilarProducts'



const ProductId = () => {
    const {id} = useParams()

    const url = `https://ecommerce-academlo-backend.onrender.com/products/${id}`

    const [product, getProductById]  = useFetch(url)

    useEffect(() => {
        getProductById()
    }, [url])



    return (
        <div>
            <ProductIdInfo product={product} />
            <SimilarProducts product={product} />
        </div>
    )
}

export default ProductId