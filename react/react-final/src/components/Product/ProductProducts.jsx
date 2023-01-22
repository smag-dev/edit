import ProductCard from "../ProductCard"

const products = [{id : "21", name : "Black classNameic Broadcloth Parka", category : "Tops", price : "321.00", new : false},
                  {id : "22", name : "Black classNameic Broadcloth Parka", category : "Tops", price : "321.00", new : false},
                  {id : "24", name : "Black classNameic Broadcloth Parka", category : "Tops", price : "312.00", new : false},
                  {id : "25", name : "Black classNameic Broadcloth Parka", category : "Tops", price : "321.00", new : false},
                ]

const ProductProducts = () => {
    return(
        <>
        <h2 className="textcenter marginverticalfull">Related Products</h2>
        <div className="gridrow marginbottomdouble product-list">
            {
                products.map((product) => {
                    return(<ProductCard key={product.id} type="product" product={product}/>)
                })
            }
        </div>
        </>
    )
}

export default ProductProducts

