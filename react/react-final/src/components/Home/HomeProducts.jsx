import ProductCard from "../ProductCard"

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
        return(<ProductCard key={product.id} type="home" product={product}/>)
    })
    return res;
}

const HomeProducts = () => {
    return(
        <section id="products" className="product-list bg-graylight paddingtopdouble paddingbottomfull">
            <h1 className="textcenter">Top Products</h1>
            <div className="gridrow">
                {generateProducts(products)}
            </div>
        </section>
    )
}

export default HomeProducts