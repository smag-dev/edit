import { Link } from "react-router-dom"

const ProductsCategories = ({setFilter}) => {
    return(
        <ul className="categories">
            <li className="open">
                <Link to="#" title="Tops">
                    Tops 
                    <i className="icn-chevron-down"></i>
                    <i className="icn-chevron-up"></i>
                </Link>
                <ul>
                    {/*<li><a href="#" title="Jackets"><i className="icn-chevron-right"></i> Jackets</a></li>
                    <li><a href="#" title="Sweaters"><i className="icn-chevron-right"></i> Sweaters</a></li>
                    <li><a href="#" title="Shirts"><i className="icn-chevron-right"></i> Shirts</a></li>
                    <li><a href="#" title="Tees"><i className="icn-chevron-right"></i> Tees</a></li>
                    <li><a href="#" title="Polos"><i className="icn-chevron-right"></i> Polos</a></li>*/}
                    <li><a title="Coats" onClick={() => setFilter('category-2')}><i className="icn-chevron-right"></i> Coats</a></li>
                </ul>
            </li>
            <li className="open">
                <Link to="#" title="Bottoms">
                    Bottoms
                    <i className="icn-chevron-down"></i>
                    <i className="icn-chevron-up"></i>
                </Link>
                <ul>
                    {/*<li><a href="#" title="Shorts"><i className="icn-chevron-right"></i> Shorts</a></li>
                    <li><a href="#" title="Trousers"><i className="icn-chevron-right"></i> Trousers</a></li>
                    <li><a href="#" title="Skirts"><i className="icn-chevron-right"></i> Skirts</a></li>*/}
                    <li><a  title="Pants" onClick={() => setFilter('category-3')}><i className="icn-chevron-right"></i> Pants</a></li>
                </ul>
            </li>
            <li className="open">
                <Link to="#" title="Bags">
                    Bags
                    <i className="icn-chevron-down"></i>
                    <i className="icn-chevron-up"></i>
                </Link>
                <ul>
                    {/*<li><a href="#" title="Travel"><i className="icn-chevron-right"></i> Travel</a></li>
                    <li><a href="#" title="Work"><i className="icn-chevron-right"></i> Work</a></li>*/}
                    <li><a  title="Jackets" onClick={() => setFilter('category-4')}><i className="icn-chevron-right"></i> Jackets</a></li>
                </ul>
            </li>
            <li className="open">
                <Link to="#" title="Bags">
                    Shoes
                    <i className="icn-chevron-down"></i>
                    <i className="icn-chevron-up"></i>
                </Link>
                <ul>
                    <li><a  title="Sneakers" onClick={() => setFilter('category-1')}><i className="icn-chevron-right"></i> Sneakers</a></li>
                    {/*<li><a href="#" title="Boots"><i className="icn-chevron-right"></i> Boots</a></li>
                    <li><a href="#" title="Flip-flops"><i className="icn-chevron-right"></i> Flip-flops</a></li>*/}
                </ul>
            </li>
        </ul>
    )
}

export default  ProductsCategories