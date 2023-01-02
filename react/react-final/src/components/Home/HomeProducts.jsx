import HomeProductsProduct from "./HomeProductsProduct"
import Product from "../Product"

const products = [{id : "01", name : "Black and purple Ren Sneakers", category : "Shoes", price : "123.00", new : true},
                  {id : "02", name : "Black and white Kaiwa Sneakers", category : "Shoes", price : "213.00", new : false},
                  {id : "03", name : "Black and white Poplin Polo", category : "Tops", price : "312.00", new : false},
                  {id : "04", name : "Black Canvas Workwear Cargo Pants", category : "Bottoms", price : "231.00", new : false},
                  {id : "05", name : "Black ClassNameic Broadcloth Parka", category : "Tops", price : "321.00", new : false},
                  {id : "06", name : "Black ClassNameic Chest Logo Hoodie", category : "Tops", price : "322.00", new : false},
                  {id : "07", name : "Black ClassNameic Cross Dyed Long Coat", category : "Tops", price : "621.00", new : false},
                  {id : "08", name : "Black ClassNameic Track Jacket", category : "Tops", price : "412.00", new : false},
                ]

const generateProducts = (products) => {

    const res = products.map((product) => {
        return(<Product key={product.id} type="home" product={product}/>)
    })

    return res;
}

const HomeProducts = () => {

    return(
        <section id="products" className="product-list bg-graylight paddingtopdouble paddingbottomfull">
            <h1 className="textcenter">Top Products</h1>
            <div className="gridrow">
                {generateProducts(products)}
                {/*<a className="product-card col-12 col-t-6 col-d-3" href="product.html" title="View Product">
                        <div className="product-card-image">
                            <span className="product-card-image-badge">New!</span>
                            <img className="imgfit" srcSet="./../../src/assets/imgs/products/product01.jpg 720w, ./../../src/assets/imgs/products/medium/product01.jpg 640w, ./../../src/assets/imgs/products/small/product01.jpg 240w" sizes="(min-width: 1200px) 720px, 640px" src="./../../src/assets/imgs/products/product01.jpg" />
                        </div>
                        <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                        <p className="gray marginnone">Shoes</p>
                        <p className="secondary marginnone">$123.00</p>
                    </a>
                <a className="product-card col-12 col-t-6 col-d-3" href="product.html" title="View Product">
                    <div className="product-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/products/product02.jpg 720w, ./../../src/assets/imgs/products/medium/product02.jpg 640w, ./../../src/assets/imgs/products/small/product02.jpg 240w" sizes="(min-width: 1200px) 720px, 640px" src="./../../src/assets/imgs/products/product02.jpg" />
                    </div>
                    <p className="margintophalf marginbottomnone">Black and white Kaiwa Sneakers</p>
                    <p className="gray marginnone">Shoes</p>
                    <p className="secondary marginnone">$213.00</p>
                </a>
                <a className="product-card col-6 col-t-6 col-d-3" href="product.html" title="View Product">
                    <div className="product-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/products/product03.jpg 720w, ./../../src/assets/imgs/products/medium/product03.jpg 640w, ./../../src/assets/imgs/products/small/product03.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product03.jpg" />
                    </div>
                    <p className="margintophalf marginbottomnone">Black and white Poplin Polo</p>
                    <p className="gray marginnone">Tops</p>
                    <p className="secondary marginnone">$312.00</p>
                </a>
                <a className="product-card col-6 col-t-6 col-d-3" href="product.html" title="View Product">
                    <div className="product-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/products/product04.jpg 720w, ./../../src/assets/imgs/products/medium/product04.jpg 640w, ./../../src/assets/imgs/products/small/product04.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product04.jpg" />
                    </div>
                    <p className="margintophalf marginbottomnone">Black Canvas Workwear Cargo Pants</p>
                    <p className="gray marginnone">Bottoms</p>
                    <p className="secondary marginnone">$231.00</p>
                </a>
                <a className="product-card col-6 col-t-6 col-d-3" href="product.html" title="View Product">
                    <div className="product-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/products/product05.jpg 720w, ./../../src/assets/imgs/products/medium/product05.jpg 640w, ./../../src/assets/imgs/products/small/product05.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product05.jpg" />
                    </div>
                    <p className="margintophalf marginbottomnone">Black ClassNameic Broadcloth Parka</p>
                    <p className="gray marginnone">Tops</p>
                    <p className="secondary marginnone">$321.00</p>
                </a>
                <a className="product-card col-6 col-t-6 col-d-3" href="product.html" title="View Product">
                    <div className="product-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/products/product06.jpg 720w, ./../../src/assets/imgs/products/medium/product06.jpg 640w, ./../../src/assets/imgs/products/small/product06.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product06.jpg" />
                    </div>
                    <p className="margintophalf marginbottomnone">Black ClassNameic Chest Logo Hoodie</p>
                    <p className="gray marginnone">Tops</p>
                    <p className="secondary marginnone">$322.00</p>
                </a>
                <a className="product-card col-6 col-t-6 col-d-3" href="product.html" title="View Product">
                    <div className="product-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/products/product07.jpg 720w, ./../../src/assets/imgs/products/medium/product07.jpg 640w, ./../../src/assets/imgs/products/small/product07.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product07.jpg" />
                    </div>
                    <p className="margintophalf marginbottomnone">Black ClassNameic Cross Dyed Long Coat</p>
                    <p className="gray marginnone">Tops</p>
                    <p className="secondary marginnone">$621.00</p>
                </a>
                <a className="product-card col-6 col-t-6 col-d-3" href="product.html" title="View Product">
                    <div className="product-card-image">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/products/product08.jpg 720w, ./../../src/assets/imgs/products/medium/product08.jpg 640w, ./../../src/assets/imgs/products/small/product08.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product08.jpg" />
                    </div>
                    <p className="margintophalf marginbottomnone">Black ClassNameic Track Jacket</p>
                    <p className="gray marginnone">Tops</p>
                    <p className="secondary marginnone">$412.00</p>
                </a>*/}
            </div>
        </section>
    )
}

export default HomeProducts