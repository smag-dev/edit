const ProductsProduct = ({product, categories}) => {
    const id_image = product.id < 10 ? '0'+product.id : product.id;
    return(
        <a className="product-card col-6 col-d-4" href={"/product/"+product.id} title="View Product">
            <div className="product-card-image">
                <img className="imgfit" src={product.image} />
            </div>
            <p className="margintophalf marginbottomnone">{product.name}</p>
            <p className="gray marginnone">{categories[product.category[0]]}</p>
            <p className="secondary marginnone">${product.price}</p>
        </a>
    )
}

export default ProductsProduct