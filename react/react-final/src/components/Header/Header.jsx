import { Link } from 'react-router-dom'
const Header = () =>{
    return(
        <header className="bg-white">
            <nav className="gridrow">
                <div className="col-5 col-t-3 col-d-2" id="logo">
                    <Link to="/" title="Ir para a página inicial">
                        <img className="imgfit" src="./../../src/assets/imgs/logo.svg" alt="Edit Store Logo" />
                    </Link>
                </div>
                <ul id="mainmenu" className="col-12 col-t-6 col-d-7">
                    <li><Link to="/products" title="Shop">Shop <i className="icn-chevron-down"></i></Link></li>
                    <li><a href="#" title="Fabric">Fabric <i className="icn-chevron-down"></i></a></li>
                    <li><a href="/#journal" title="Journal">Journal <i className="icn-chevron-down"></i></a></li>
                    <li><a href="/#about" title="About">About <i className="icn-chevron-down"></i></a></li>
                </ul>
                <ul id="customermenu" className="col-7 col-t-3 col-d-2 textright">
                    <li><a href="#" title="Login">Login</a></li>
                    <li><a href="#" title="Search"><i className="icn-search"></i></a></li>
                    <li><a href="#" title="Wishlist"><i className="icn-heart"></i></a></li>
                    <li><a href="#" title="Shopping Cart"><i className="icn-shopping-cart"></i></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header