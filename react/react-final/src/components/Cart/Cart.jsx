import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'
const Cart = () => {
    const {products, getTotalPriceProduct, getTotalPriceProducts, removeProduct,changeQuantityCart} = useContext(CartContext)

    return(
        <section id="cart" className="paddingverticaldouble">
            <h2 className="textcenter marginbottomfull">Cart</h2>
            <div className="gridrow">
                <div className="col-12">
                <table>
                    <thead>
                        <tr>
                        <th className="width-10">Image</th>
                        <th className="width-40">Name</th>
                        <th className="width-10">Quantity</th>
                        <th className="width-10">Price</th>
                        <th className="width-20">Total Price</th>
                        <th className="width-10">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product) =>{
                        return (
                            
                            <tr key={product.img}>
                            <td><Link to={"/product/"+product.id}><img width="100"  srcSet={product.img}></img></Link></td>
                            <td>{product.name}</td>
                            <td><button type="button" className="btnleft" onClick={() => changeQuantityCart(product.id, '-')}>-</button>
                                <input type="number" value={product.quantity} name="qty" onChange={() => alert('la')}/>
                                <button type="button" className="btnright" onClick={() => changeQuantityCart(product.id,'+')}>+</button></td>
                            <td>{product.price}€</td>
                            <td>{getTotalPriceProduct(product).toFixed(2)}€</td>
                            <td onClick={() => removeProduct(product.id)}>Delete</td>
                            </tr>
                            
                        )
                    })}
                     <tr><td colSpan="5" className="totalProducts">Total Products:</td><td>{getTotalPriceProducts().toFixed(2)}€</td></tr>
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}

export default Cart