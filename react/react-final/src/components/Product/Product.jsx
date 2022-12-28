import { useParams, Link } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Top from "../Top/Top";

const Product = () => {
    return ( 
        <div className="preload">
            <Top/>
            <Header/>
            <main>
                <div className="breadcrumb">
                    <div className="gridrow">
                        <div className="col-12">
                            <a href="productlist.html" title="Tops">Tops</a> <i className="icn-chevron-right"></i>
                            <a href="productlist.html" title="Sweaters">Sweaters</a> <i className="icn-chevron-right"></i>
                            Red classNameic Chest Logo Hoodie
                        </div>
                    </div>
                </div>
                <div className="gridrow" id="product">
                    <div id="thumbs" className="col-3 col-t-1">
                        <a href="#" title="Red classNameic Chest Logo Hoodie 1" className="open">
                            <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb01.jpg" alt="Red classNameic Chest Logo Hoodie 1" />
                        </a>
                        <a href="#" title="Red classNameic Chest Logo Hoodie 2">
                            <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb02.jpg" alt="Red classNameic Chest Logo Hoodie 2" />
                        </a>
                        <a href="#" title="Red classNameic Chest Logo Hoodie 3">
                            <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb03.jpg" alt="Red classNameic Chest Logo Hoodie 3" />
                        </a>
                        <a href="#" title="Red classNameic Chest Logo Hoodie 4">
                            <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb04.jpg" alt="Red classNameic Chest Logo Hoodie 4" />
                        </a>
                        <a href="#" title="Red classNameic Chest Logo Hoodie 5">
                            <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb05.jpg" alt="Red classNameic Chest Logo Hoodie 5" />
                        </a>
                    </div>
                    <div id="bigimg" className="col-9 col-t-4 col-d-5">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/products/product23.jpg 720w, ./../../src/assets/imgs/products/medium/product23.jpg 640w" sizes="(min-width: 1200px) 720px, 640px" src="./../../src/assets/imgs/products/product23.jpg" />
                        <div className="share margintopfull">
                            Share this product 
                            <a href="#" title="Facebook"><i className="icn-facebook"></i></a>
                            <a href="#" title="Twitter"><i className="icn-twitter"></i></a>
                            <a href="#" title="Pinteres"><i className="icn-pinterest"></i></a>
                        </div>
                    </div>
                    <div id="product-description" className="col-12 col-t-7 col-d-6">
                        <h1>Red classNameic Chest Logo Hoodie</h1>
                        <div className="product-description-line gridrowfull nogutter">
                            <div className="col-6 price">USD 351.00</div>
                            <div className="col-6 textright score"><i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star"></i><span>4.2 of 5</span></div>
                        </div>
                        <div className="product-description-line gridrowfull">
                            <div className="col-12">
                                <p className="marginnone">Description</p>
                                <p className="graymedium marginnone marginbottomthird smallerheight">Nam in velit a metus feugiat luctus nec in diam. Donec quis viverra metus. Nulla lacinia pulvinar justo, vitae ornare sapien convallis non...</p>
                            </div>
                        </div>
                        <div className="product-description-line gridrowfull">
                            <div className="col-6">
                                Artisan Employment
                            </div>
                            <div className="col-6 graymedium">
                                54 jobs
                            </div>
                        </div>
                        <div className="product-description-line gridrowfull">
                            <div className="col-6">
                                Partnership
                            </div>
                            <div className="col-6 graymedium">
                                Yohji Yamamoto
                            </div>
                        </div>
                        <div className="product-description-line gridrowfull">
                            <div className="col-6">
                                In Collab
                            </div>
                            <div className="col-6 graymedium">
                                Adidas
                            </div>
                        </div>
                        <div className="product-description-line gridrowfull">
                            <div className="col-12 fancytext">
                                Size
                            </div>
                            <div className="col-6 sizebtns">
                                <button type="button">1</button>
                                <button type="button">2</button>
                                <button type="button">3</button>
                                <button type="button">4</button>
                            </div>
                            <div className="col-6 textright">
                                <a href="#" title="Size Guidelines" className="fancytext">Size Guidelines</a>
                            </div>
                            <div className="col-12 small graymedium">
                                Model is a US size 2-4, wears Matter size 1. 175cm tall.
                            </div>
                            <div className="col-12 fancytext">
                                Quantity
                            </div>
                            <div className="col-6 col-d qty">
                                <button type="button" className="btnleft">-</button>
                                <input type="number" value="1" name="qty"/>
                                <button type="button" className="btnright">+</button>
                            </div>
                            <div className="col-6 col-d cart">
                                <button type="button">Add to cart</button>
                            </div>
                            <div className="col-12 col-d textright wishlist marginbottomtwothirds">
                                <a href="#" title="Add top wishlist" className="fancytext"><i className="icn-heart"></i> Add to wishlist</a>
                            </div>
                        </div>
                        <div className="gridrowfull product-care">
                            <div className="col-12">
                                <ul>
                                    <li>
                                        <a href="#" title="Tops">
                                            Features 
                                            <span className="plus">+</span>
                                            <span className="minus">-</span>
                                        </a>
                                        <div className="graymedium">
                                            <p>
                                                Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque, posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc sed convallis massa.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="open">
                                        <a href="#" title="Tops">
                                            Fabric
                                            <span className="plus">+</span>
                                            <span className="minus">-</span>
                                        </a>
                                        <div className="graymedium">
                                            <p>
                                                Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque, posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc sed convallis massa.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separador"></div>
                <div className="gridrow">
                    <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 graymedium marginbottomfull">
                        Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat.
                    </div>
                    <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 marginbottomfull">
                        Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque, posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc sed convallis massa.
                    </div>
                </div>
                <div className="gridrow marginverticalfull">
                    <div className="col-12 col-t-4">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/press/press01.jpg 720w, ./../../src/assets/imgs/press/medium/press01.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press01.jpg" />
                        <p className="textcenter">Replica Collection</p>
                    </div>
                    <div className="col-6 col-t-4">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/press/press02.jpg 720w, ./../../src/assets/imgs/press/medium/press02.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press02.jpg" />
                        <p className="textcenter">Hublot Collaboration</p>
                    </div>
                    <div className="col-6 col-t-4">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/press/press03.jpg 720w, ./../../src/assets/imgs/press/medium/press03.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press03.jpg" />
                        <p className="textcenter">Dr Martens vs Yamamoto</p>
                    </div>
                </div>
                <div className="bg-graylight paddingverticaldouble marginbottomfull">
                    <div className="gridrow">
                        <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
                            <p>Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat.</p>
                        </div>
                    </div>
                </div>
                <h2 className="textcenter">Looks</h2>
                <div className="gridrow marginbottomfull">
                    <div className="col-6 col-t-3 paddingtopfull">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks01.jpg 720w, ./../../src/assets/imgs/looks/medium/looks01.jpg 360w, ./../../src/assets/imgs/looks/small/looks01.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks01.jpg" />
                    </div>
                    <div className="col-6 col-t-3 paddingtopfull">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks02.jpg 720w, ./../../src/assets/imgs/looks/medium/looks02.jpg 360w, ./../../src/assets/imgs/looks/small/looks02.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks02.jpg" />
                    </div>
                    <div className="col-6 col-t-3 paddingtopfull">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks03.jpg 720w, ./../../src/assets/imgs/looks/medium/looks03.jpg 360w, ./../../src/assets/imgs/looks/small/looks03.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks03.jpg" />
                    </div>
                    <div className="col-6 col-t-3 paddingtopfull">
                        <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks04.jpg 720w, ./../../src/assets/imgs/looks/medium/looks04.jpg 360w, ./../../src/assets/imgs/looks/small/looks04.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks04.jpg" />
                    </div>
                </div>
                <div className="bg-graylight paddingverticaldouble marginbottomfull" id="reviews">
                    <h2 className="textcenter">Reviews</h2>
                    <div className="gridrow">
                        <div className="col-12 col-t-5 col-d-4 offset-t-1 offset-d-2 score">
                            <i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star"></i><span>4.2 of 5</span>
                        </div>
                        <div className="col-12 col-t-5 col-d-4 textright">
                            <a className="graymedium small" href="#" title="Share your thoughts with other customers">Share your thoughts with other customers</a>
                        </div>
                        <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
                            <p>Top customer reviews</p>
                            <div className="review">
                                <div className="score">
                                    <i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star primary"></i><i className="icn-star primary"></i><span>5 of 5</span>
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
                <h2 className="textcenter marginverticalfull">Related Products</h2>
                <div className="gridrow marginbottomdouble product-list">
                    <a className="product-card col-6 col-t-3" href="product.html" title="View Product">
                        <div className="product-card-image">
                            <img className="imgfit" srcSet="./../../src/assets/imgs/products/product21.jpg 720w, ./../../src/assets/imgs/products/medium/product21.jpg 640w, ./../../src/assets/imgs/products/small/product21.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product21.jpg" />
                        </div>
                        <p className="margintophalf marginbottomnone">Black classNameic Broadcloth Parka</p>
                        <p className="gray marginnone">Tops</p>
                        <p className="secondary marginnone">$321.00</p>
                    </a>
                    <a className="product-card col-6 col-t-3" href="product.html" title="View Product">
                        <div className="product-card-image">
                            <img className="imgfit" srcSet="./../../src/assets/imgs/products/product22.jpg 720w, ./../../src/assets/imgs/products/medium/product22.jpg 640w, ./../../src/assets/imgs/products/small/product22.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product22.jpg" />
                        </div>
                        <p className="margintophalf marginbottomnone">Black classNameic Broadcloth Parka</p>
                        <p className="gray marginnone">Tops</p>
                        <p className="secondary marginnone">$321.00</p>
                    </a>
                    <a className="product-card col-6 col-t-3" href="product.html" title="View Product">
                        <div className="product-card-image">
                            <img className="imgfit" srcSet="./../../src/assets/imgs/products/product24.jpg 720w, ./../../src/assets/imgs/products/medium/product24.jpg 640w, ./../../src/assets/imgs/products/small/product24.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product24.jpg" />
                        </div>
                        <p className="margintophalf marginbottomnone">Black classNameic Broadcloth Parka</p>
                        <p className="gray marginnone">Tops</p>
                        <p className="secondary marginnone">$321.00</p>
                    </a>
                    <a className="product-card col-6 col-t-3" href="product.html" title="View Product">
                        <div className="product-card-image">
                            <img className="imgfit" srcSet="./../../src/assets/imgs/products/product25.jpg 720w, ./../../src/assets/imgs/products/medium/product25.jpg 640w, ./../../src/assets/imgs/products/small/product25.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product25.jpg" />
                        </div>
                        <p className="margintophalf marginbottomnone">Black classNameic Broadcloth Parka</p>
                        <p className="gray marginnone">Tops</p>
                        <p className="secondary marginnone">$321.00</p>
                    </a>
                </div>
            </main>
            <Footer/>
            <script src="js/script.js"></script>
        </div>
    )
 
 }
 
 export default Product