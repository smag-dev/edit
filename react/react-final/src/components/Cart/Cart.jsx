import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'

function cartEmpty () {
    window.location = "/";
}

const Cart = () => {
    const {products, getTotalProducts, getTotalPriceProduct, getTotalPriceProducts, removeProduct,changeQuantityCart} = useContext(CartContext)

    const handleChange = (event, id) => {
        const { value } = event.target;
        if (value > 0){
            changeQuantityCart(id, value)
        }else{
            if (products.length === 1){
                window.setTimeout( function(){
                    cartEmpty()
                }, 500 );
            }
            removeProduct(id)
        }
    }

    const handleDelete = (id) => {
        if (products.length === 1){
            window.setTimeout( function(){
                cartEmpty()
            }, 500 );
        }
        removeProduct(id)
    }

    if (products.length === 0){
        cartEmpty()
    }

    return(
        <section id="cart" className="paddingverticaldouble">
            <h2 className="textcenter marginbottomfull">Cart</h2>
            <div className="gridrow">
                <div className="col-12">
                    <div className="container">
                        <div className="width-10">Image</div>
                        <div className="width-50">Name</div>
                        <div className="width-10 quantity">Quantity</div>
                        <div className="width-10">Price</div>
                        <div className="width-10">Total Price</div>
                        <div className="width-10">Delete</div>
                    </div>

                    {products.map((product) =>{
                        return (
                            <div key={product.id} className="container">
                                <div className="width-10"><Link to={"/product/"+product.id}><img width="100"  srcSet={product.img}></img></Link></div>
                                <div className="width-50">{product.name}</div>
                                <div className="width-10 container-buttons-input">
                                    <button type="button" value ={Number(product.quantity) - 1}  className="btnleft" onClick={() => handleChange(event, product.id)}>-</button>
                                    <input type="number" value={product.quantity} name="qty" onChange={() => handleChange(event, product.id)}/>
                                    <button type="button" value ={Number(product.quantity) + 1}className="btnright" onClick={() => handleChange(event, product.id)}>+</button></div>
                                <div className="width-10">{product.price}€</div>
                                <div className="width-10">{getTotalPriceProduct(product).toFixed(2)}€</div>
                                <div className="width-10" onClick={() => handleDelete(product.id)}>Delete</div>
                            </div>
                            
                        )
                    })}
                    <div className="container-footer"><div className="width-80"></div><div className="totalProducts">Total Products:</div><div className="width-10">{getTotalPriceProducts().toFixed(2)}€</div></div>
                </div>
            </div>
        </section>
    )
}

export default Cart