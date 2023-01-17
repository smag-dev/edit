import { Link } from "react-router-dom"

function IsNew({New }) {

    if (New) {
        return <span className="product-card-image-badge">New!</span>
    }

    return ''
}


const HomeProductsProduct = ({product}) => {
    return(
        <Link  className="product-card col-12 col-t-6 col-d-3" to={"/product/"+product.id} title="View Product">
            <div className="product-card-image">
                <IsNew New = {product.new} />
                <img className="imgfit" srcSet={"/src/assets/imgs/products/product"+ product.id +".jpg 720w, /src/assets/imgs/products/medium/product"+ product.id +".jpg 640w, /src/assets/imgs/products/small/product"+ product.id +".jpg 240w"} sizes="(min-width: 1200px) 720px, 640px" src={"/src/assets/imgs/products/product"+ product.id +".jpg"} />
            </div>
            <p className="margintophalf marginbottomnone">{product.description}</p>
            <p className="gray marginnone">{product.category}</p>
            <p className="secondary marginnone">{product.price}</p>
        </Link>
    )
}

export default HomeProductsProduct