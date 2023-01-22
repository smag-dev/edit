import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () =>{
    const {products} = useContext(CartContext);
    return(
        <header className="bg-white">
            <nav className="gridrow">
                <div className="col-5 col-t-3 col-d-2" id="logo">
                    <Link to="/" title="Ir para a página inicial">
                        <img className="imgfit" src="/src/assets/imgs/logo.svg" alt="Edit Store Logo" />
                    </Link>
                </div>
                <ul id="mainmenu" className="col-12 col-t-6 col-d-7">
                    <li><Link to="/products" title="Shop">Shop <i className="icn-chevron-down"></i></Link></li>
                    <li><Link to="#" title="Fabric">Fabric <i className="icn-chevron-down"></i></Link></li>
                    <li><Link to="/#journal" title="Journal">Journal <i className="icn-chevron-down"></i></Link></li>
                    <li><Link to="/#about" title="About">About <i className="icn-chevron-down"></i></Link></li>
                </ul>
                <ul id="customermenu" className="col-7 col-t-3 col-d-2 textright">
                    <li><Link to="#" title="Login">Login</Link></li>
                    <li><Link to="#" title="Search"><i className="icn-search"></i></Link></li>
                    <li><Link to="#" title="Wishlist"><i className="icn-heart"></i></Link></li>
                    <li><Link to={products.length>0 ? 'cart' : '#'} title="Shopping Cart"><i className="icn-shopping-cart"></i><span className="cartLength">({products.length})</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header