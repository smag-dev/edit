import ProductInformationThumbs from "./ProductInformationThumbs"
import ProductInformationBigimg from "./ProductInformationBigimg"
import ProductInformationDescription from "./ProductImformationDescription"

const ProductInformation = ({product}) => {
    const id_image = product.id <10 ? '0'+product.id : product.id;
    return(
        <div className="gridrow" id="product"> 

            <ProductInformationThumbs/>

            <ProductInformationBigimg image = {product.image} id_image = {id_image}/>

            <ProductInformationDescription product = {product}/>
        </div>
    )
}

export default ProductInformation