import { useParams, Link } from "react-router-dom";
import ProductProducts from "./ProductProducts";
import ProductLooks from "./ProductLooks";
import ProductPress from "./ProductPress";
import ProductInformation from "./ProductInformation";
import ProductBreadcumb from "./ProductBreadcumb";
import ProductReviews from "./ProductReviews";
import ProductsText from "./ProductsText";

const text1 = "Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat."
const text2 = "Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque, posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc sed convallis massa."
const Product = () => {
    /* hook para obter id */
    const { id } = useParams();

    /* pedido à API mas desta vez usei o xmlhttprequest para ser diferente */
    const myrequest = new XMLHttpRequest;
    myrequest.open("GET", "https://foxcoding.net/api/getProduct?id="+id, false);
    myrequest.send();
    let product = JSON.parse(myrequest.response);
    console.log(product);

    return ( 
        <>
        <ProductBreadcumb name = {product.name}/>

        <ProductInformation product = {product}/>

        <div className="separador"></div>
        <div className="gridrow">
            <ProductsText classes="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 graymedium marginbottomfull" desc={text1} withp={false}/>
            <ProductsText classes="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 marginbottomfull" desc={text2} withp={false}/>
        </div>

        <ProductPress/>

        <div className="bg-graylight paddingverticaldouble marginbottomfull">
            <div className="gridrow">
            <ProductsText classes="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2" desc={text1} withp={true}/>
            </div>
        </div>

        <ProductLooks/>
        
        <ProductReviews score = {product.score} />
        
        <ProductProducts/>
        </>
    )
 }
 
 export default Product