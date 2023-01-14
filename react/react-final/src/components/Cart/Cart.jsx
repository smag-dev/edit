import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css'
const Cart = () => {
    const {products, getTotalPriceProduct} = useContext(CartContext)
    console.log(products)
    return(
        <section id="cart" className="paddingverticaldouble">
            <h2 className="textcenter marginbottomfull">Cart</h2>
            <div className="gridrow">
                <div className="col-12">
                <table>
                    <thead>
                        <tr>
                        <th className="width-10">Image</th>
                        <th className="width-50">Name</th>
                        <th className="width-10">Quantity</th>
                        <th className="width-10">Price</th>
                        <th className="width-20">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product) =>{
                        return (
                            
                            <tr key={product.img}>
                            <td><img width="100"  srcSet={product.img}></img></td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}€</td>
                            <td>{getTotalPriceProduct(product).toFixed(2)}€</td>
                            </tr>
                            
                        )
                    })}
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}

export default Cart