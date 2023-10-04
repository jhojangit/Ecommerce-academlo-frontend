import "../../pages/purchases.css"


const ProductPurchase = ({prodpurchase}) => {

  return (
        <article className="prodpurchase__container">
            <div className="prodpurchase__img-div">
              <img className="prodpurchase__img" src={prodpurchase.product.images[0].url} alt="" />
            </div>

            <h3 className="prodpurchase__name">{prodpurchase.product.title}</h3>

            <span className="prodpurchase__quantity">{prodpurchase.quantity}</span>

            <span className="prodpurchase__price">{prodpurchase.quantity * prodpurchase.product.price}</span>
        </article>  )
}

export default ProductPurchase