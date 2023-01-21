import { Link } from "react-router-dom";
import ProductInformationProductcare from "./ProductInformationProductcare"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import Score from "../Score"
import Sizes from "../Sizes"
import { useState } from "react"

const ProductInformationDescription = ({product}) => {
    const sizeKeys = Object.keys(product.sizes);
    const [maxquantity, setMaxquantity] = useState(product.sizes[sizeKeys[0]]);
    const [quantity, setQuantity] = useState(1);
    const {addProduct} = useContext(CartContext)

    const changeQuantity = (event) => {
        const { value } = event.target;

        setQuantity(Number(value));
        if (value < 1){
            setQuantity(1);
        }
        if (value > maxquantity){
            setQuantity(maxquantity);
        }
    }


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
                    <Sizes sizes={product.sizes} 
                           setMaxquantity={setMaxquantity} 
                           setQuantity={setQuantity}
                           quantity={quantity}
                           />
                </div>
                <div className="col-6 textright">
                    <Link to="#" title="Size Guidelines" className="fancytext">Size Guidelines</Link>
                </div>
                <div className="col-12 small graymedium">
                    Model is a US size 2-4, wears Matter size 1. 175cm tall.
                </div>
                <div className="col-12 fancytext">
                    Quantity
                </div>
                <div className="col-6 col-d qty">
                    <button type="button" value={quantity -1} className="btnleft" onClick={() => changeQuantity(event)}>-</button>
                    <input type="number" value={quantity} name="qty"/>
                    <button type="button" value={quantity +1} className="btnright" onClick={() => changeQuantity(event)}>+</button>
                </div>
                <div className="col-6 col-d cart">
                    <button type="button" onClick={() => addProduct({id : product.id, name : product.name, img : product.image, quantity : quantity, price : product.price})}>Add to cart</button>
                </div>
                <div className="col-12 col-d textright wishlist marginbottomtwothirds">
                    <Link to="#" title="Add top wishlist" className="fancytext"><i className="icn-heart"></i> Add to wishlist</Link>
                </div>
            </div>
            
            <ProductInformationProductcare/>
            
        </div>
    )
}

export default ProductInformationDescription