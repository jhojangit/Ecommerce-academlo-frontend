import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import CardProducts from '../cardProducts/CardProducts'
import { useNavigate } from 'react-router-dom'
import LoaderSkeleton from '../../loaderSkeleton/LoaderSkeleton'


const SimilarProducts = ({ product }) => {

    const url = `https://ecommerce-academlo-backend.onrender.com/products?categoryId=${product?.categoryId}`

    const [filterProducts, getProductByCategory] = useFetch(url)

    useEffect(() => {
        if (product) {
            getProductByCategory()
        }
    }, [product])





    return (

        !filterProducts? <LoaderSkeleton/> :
        <section >
            <h2 style={{color:"var(--redMain)", marginLeft:80 }}>Discover Similar Products</h2>
            <div className='products__container' style={{display:"flex", flexDirection:"row", gap:"1rem", margin:"1rem 1rem 2rem 1rem",justifyContent:"center"}}>
                {
                    filterProducts?.map(prod => {
                        if(product.id !== prod.id){
                            return (
                                <CardProducts
                                    key={prod.id}
                                    product={prod}
                                />
                            )
                        }
                    })
                }
            </div>

        </section>


    )
}

export default SimilarProducts