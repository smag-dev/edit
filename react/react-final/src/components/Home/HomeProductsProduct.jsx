function IsNew({New }) {

    if (New) {
        return <span className="product-card-image-badge">New!</span>
    }

    return ''
}


const HomeProductsProduct = ({product}) => {
    return(
        <a  className="product-card col-12 col-t-6 col-d-3" href="product.html" title="View Product">
            <div className="product-card-image">
                <IsNew New = {product.new} />
                <img className="imgfit" srcSet={"./../../src/assets/imgs/products/product"+ product.id +".jpg 720w, ./../../src/assets/imgs/products/medium/product"+ product.id +".jpg 640w, ./../../src/assets/imgs/products/small/product"+ product.id +".jpg 240w"} sizes="(min-width: 1200px) 720px, 640px" src={"./../../src/assets/imgs/products/product"+ product.id +".jpg"} />
            </div>
            <p className="margintophalf marginbottomnone">{product.description}</p>
            <p className="gray marginnone">{product.category}</p>
            <p className="secondary marginnone">{product.price}</p>
        </a>
        /*<a className="product-card col-12 col-t-6 col-d-3" href="product.html" title="View Product">
            <div className="product-card-image">
                <span className="product-card-image-badge">New!</span>
                <img className="imgfit" srcSet="./../../assets/./../../src/assets/imgs/products/product01.jpg 720w, ./../../src/assets/imgs/products/medium/product01.jpg 640w, ./../../src/assets/imgs/products/small/product01.jpg 240w" sizes="(min-width: 1200px) 720px, 640px" src="./../../src/assets/imgs/products/product01.jpg" />
            </div>
            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
            <p className="gray marginnone">Shoes</p>
            <p className="secondary marginnone">$123.00</p>
        </a>*/
    )
}

export default HomeProductsProduct