import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import CardProducts from '../cardProducts/CardProducts'
import { useNavigate } from 'react-router-dom'


const SimilarProducts = ({ product }) => {

    const url = `http://localhost:8080/products?categoryId=${product?.categoryId}`

    const [filterProducts, getProductByCategory] = useFetch(url)

    useEffect(() => {
        if (product) {
            getProductByCategory()
        }
    }, [product])





    return (
        <section >
            <h2 style={{color:"var(--redMain)", marginLeft:80 }}>Discover Similar Products</h2>
            <div className='products__container' style={{display:"flex", flexDirection:"row", gap:"1rem", marginBottom:"2rem"}}>
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