import ProductInformationProductcare from "./ProductInformationProductcare"
import Score from "../Score"
import Sizes from "../Sizes"

const ProductInformationDescription = ({product}) => {
    return(
        <div id="product-description" className="col-12 col-t-7 col-d-6">
            <h1>{product.name}</h1>
            <div className="product-description-line gridrowfull nogutter">
                <div className="col-6 price">USD {product.price}</div>
                <div className="col-6 textright score"><Score score={product.score}/></div>
            </div>
            <div className="product-description-line gridrowfull">
                <div className="col-12">
                    <p className="marginnone">Description</p>
                    <p className="graymedium marginnone marginbottomthird smallerheight">{product.description}</p>
                </div>
            </div>
            <div className="product-description-line gridrowfull">
                <div className="col-6">
                    Artisan Employment
                </div>
                <div className="col-6 graymedium">
                    54 jobs
                </div>
            </div>
            <div className="product-description-line gridrowfull">
                <div className="col-6">
                    Partnership
                </div>
                <div className="col-6 graymedium">
                {product.partnership}
                </div>
            </div>
            <div className="product-description-line gridrowfull">
                <div className="col-6">
                    In Collab
                </div>
                <div className="col-6 graymedium">
                    {product.brand}
                </div>
            </div>
            <div className="product-description-line gridrowfull">
                <div className="col-12 fancytext">
                    Size
                </div>
                <div className="col-6 sizebtns">
                    <Sizes sizes={Object.keys(product.sizes)} />
                </div>
                <div className="col-6 textright">
                    <a href="#" title="Size Guidelines" className="fancytext">Size Guidelines</a>
                </div>
                <div className="col-12 small graymedium">
                    Model is a US size 2-4, wears Matter size 1. 175cm tall.
                </div>
                <div className="col-12 fancytext">
                    Quantity
                </div>
                <div className="col-6 col-d qty">
                    <button type="button" className="btnleft">-</button>
                    <input type="number" value="1" name="qty"/>
                    <button type="button" className="btnright">+</button>
                </div>
                <div className="col-6 col-d cart">
                    <button type="button">Add to cart</button>
                </div>
                <div className="col-12 col-d textright wishlist marginbottomtwothirds">
                    <a href="#" title="Add top wishlist" className="fancytext"><i className="icn-heart"></i> Add to wishlist</a>
                </div>
            </div>
            
            <ProductInformationProductcare/>
            
        </div>
    )
}

export default ProductInformationDescription