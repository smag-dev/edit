import { Link } from "react-router-dom"

const categories = {
    1 : "Sneackers",
    2 : "Coats",
    3 : "Pants",
    4 : "Jackets"
}

function isNew(productNew ) {

    if (productNew) {
        return <span className="product-card-image-badge">New!</span>
    }

    return ''
}


const Product = ({type, product}) => {
    let category = product.category;
    let id = product.id;
    let addClass = "";
    let img = "/src/assets/imgs/products/product"+ product.id +".jpg";
    if (type == "home") {
        addClass = "col-12 col-t-6 col-d-3"
    } else if (type == "productlist") {
        id = product.id < 10 ? '0'+product.id : product.id;
        addClass = "col-6 col-d-4"
        img = product.image;
        category = categories[product.category[0]];
    } else {
        addClass = "col-6 col-t-3"
    }

    const productNew = product.new ? product.new : false;
    return(
        <Link className={"product-card "+addClass} to={"/product/"+product.id} title="View Product">
            <div className="product-card-image">
                {isNew(productNew)}
                <img className="imgfit" srcSet={img+" 720w, /src/assets/imgs/products/medium/product"+ id +".jpg 640w, /src/assets/imgs/products/small/product"+ id +".jpg 240w"} sizes="(min-width: 1200px) 720px, 640px" src={img} />
            </div>
            <p className="margintophalf marginbottomnone">{product.name}</p>
            <p className="gray marginnone">{category}</p>
            <p className="secondary marginnone">${product.price}</p>
        </Link>
    )
}

export default Product