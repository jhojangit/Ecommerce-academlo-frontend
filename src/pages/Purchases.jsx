import React, { useEffect } from 'react'
import ProductPurchase from '../components/purchases/ProductPurchase'
import usePurchases from '../hooks/usePurchases'
import "./purchases.css"
import Loading from '../components/loading/Loading'
import LoaderSkeleton from '../components/loaderSkeleton/LoaderSkeleton'

const Purchases = () => {

    

    const {purchases, buyThisCart, getAllProductsPurchases } = usePurchases()
    
    useEffect(() => {
        getAllProductsPurchases()
    }, [])

  return (
    
    <div className='purchases__container'>
        <h2 className='purchases__title'>Purchases</h2>
            <div className='purchases__products-container'>
                {
                !purchases?<LoaderSkeleton/>:
                    purchases?.map( prodpurchase =>(
                        <ProductPurchase
                            key={prodpurchase.id}
                            prodpurchase={prodpurchase}
                        />
                    ))
                }
            </div>

    </div>
  )
}

export default Purchases