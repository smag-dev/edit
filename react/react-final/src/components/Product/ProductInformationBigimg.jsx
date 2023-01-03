import Social from "../Social"
const ProductInformationBigimg = ({image, id_image}) => {
    return(
        <div id="bigimg" className="col-9 col-t-4 col-d-5">
            <img className="imgfit" srcSet={image+" 720w, ../src/assets/imgs/products/medium/product23.jpg 640w"} sizes="(min-width: 1200px) 720px, 640px" src={image} />
            <div className="share margintopfull">
                Share this product 
                <Social title="Facebook"  icon="icn-facebook"/>
                <Social title="Twitter"   icon="icn-twitter"/>
                <Social title="Pinterest" icon="icn-pinterest"/>
            </div>
        </div>
    )
}

export default ProductInformationBigimg