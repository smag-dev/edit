import { useParams, Link } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Top from "../Top/Top";
import ProductProducts from "./ProductProducts";
import ProductLooks from "./ProductLooks";
import ProductPress from "./ProductPress";
import ProductInformation from "./ProductInformation";
import ProductBreadcumb from "./ProductBreadcumb";
import Score from "../Score";

const Product = () => {
    const { id } = useParams();

    const myrequest = new XMLHttpRequest;
    myrequest.open("GET", "https://foxcoding.net/api/getProduct?id="+id, false);
    myrequest.send();

    let product = JSON.parse(myrequest.response);
    console.log(product);
    return ( 
        <div className="preload">
            <Top/>
            <Header/>
            <main>
                <ProductBreadcumb name = {product.name}/>

                <ProductInformation product = {product}/>

                <div className="separador"></div>
                <div className="gridrow">
                    <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 graymedium marginbottomfull">
                        Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat.
                    </div>
                    <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 marginbottomfull">
                        Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque, posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc sed convallis massa.
                    </div>
                </div>

                <ProductPress/>

                <div className="bg-graylight paddingverticaldouble marginbottomfull">
                    <div className="gridrow">
                        <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
                            <p>Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat.</p>
                        </div>
                    </div>
                </div>

                <ProductLooks/>
                
                <div className="bg-graylight paddingverticaldouble marginbottomfull" id="reviews">
                    <h2 className="textcenter">Reviews</h2>
                    <div className="gridrow">
                        <div className="col-12 col-t-5 col-d-4 offset-t-1 offset-d-2 score">
                            <Score score={product.score}/>
                        </div>
                        <div className="col-12 col-t-5 col-d-4 textright">
                            <a className="graymedium small" href="#" title="Share your thoughts with other customers">Share your thoughts with other customers</a>
                        </div>
                        <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
                            <p>Top customer reviews</p>
                            <div className="review">
                                <div className="score">
                                <Score score= "5"/>
                                </div>
                                <div className="graymedium">By <span className="black">Zé Manel</span> on February 18th, 2020</div>
                                <p>Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae.</p>
                            </div>
                            <div>
                                <a className="secondary fancytext" href="#">Show more reviews</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <ProductProducts/>
            </main>
            <Footer/>
            <script src="js/script.js"></script>
        </div>
    )
 
 }
 
 export default Product