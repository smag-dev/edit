import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Top from '../Top/Top'
import ProductsProduct from './ProductsProduct'
import Button from '../Button'
import { useEffect, useState } from 'react'

const categories = {
    1 : "Sneackers",
    2 : "Coats",
    3 : "Pants",
    4 : "Jackets"
}

function inArray(needle, haystack) {
    var length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

function filterProducts(products, id, type){
    const res = [];
    const length = products.length;
    for(let i = 0; i < length; i++) {
        let elementsToCompare = type == 'category' ?  products[i].category : Object.keys(products[i].sizes);
        if(inArray(id, elementsToCompare)) res.push(products[i]);
    }
    return res;
}

function generateProductsFilteres(products, filtro)  {
    const filtered = filtro.split('-')
    let res = [];
    const type =  filtered[0];
    const id = type ? filtered[1] : '';
    res = type ? filterProducts(products, id, type) : products;
    return res;
}


function generateRender(products)  {
    const res = products.map((product) => {
        return(<ProductsProduct key={product.id} product={product} categories={categories}/>)
    })

    return res;
}

const Products = () => {
    const [filter, setFilter] = useState('')
    const [filterrender, setFilterrender] = useState('');

    useEffect(()=> {
        fetch("https://foxcoding.net/api/getProductsList")
        .then (function(response){
            return response.json();
        })
        .then((data)=>{
            console.log(data.data.products)
            const products = generateProductsFilteres(data.data.products, filter);
            setFilterrender(generateRender(products));
        })
        .catch(()=>{
            console.log('erro');
        });

        /*const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://foxcoding.net/api/getProductsList", false);
        xhttp.send();
        generateProducts(JSON.parse(xhttp.response));*/

    },[filter])
    return ( 
        <div className="preload">
            <Top/>
            <Header/>
            <main>
                <div id="headerproductlist">
                    <div className="textoverlay">
                        <h1>Tops</h1>
                        <p>These awesome products</p>
                    </div>
                </div>
                <div id="sortbar">
                    <div className="gridrow">
                        <div className="col-4">Tops</div>
                        <div className="col-8 textright">Sort by
                            <select>
                                <option value="Price" selected>Price</option>
                                <option value="Popularity">Popularity</option>
                                <option value="Name">Name</option>
                                <option value="Season">Season</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="gridrow">
                    <div id="filters" className="col-12 col-t-4 col-d-3">
                        <p className="fancytext" onClick={() => setFilter('')}>Clear Filters</p>
                        <p className="fancytext">Filters</p>
                        <ul className="categories">
                            <li className="open">
                                <a href="#" title="Tops">
                                    Tops 
                                    <i className="icn-chevron-down"></i>
                                    <i className="icn-chevron-up"></i>
                                </a>
                                <ul>
                                    {/*<li><a href="#" title="Jackets"><i className="icn-chevron-right"></i> Jackets</a></li>
                                    <li><a href="#" title="Sweaters"><i className="icn-chevron-right"></i> Sweaters</a></li>
                                    <li><a href="#" title="Shirts"><i className="icn-chevron-right"></i> Shirts</a></li>
                                    <li><a href="#" title="Tees"><i className="icn-chevron-right"></i> Tees</a></li>
                                    <li><a href="#" title="Polos"><i className="icn-chevron-right"></i> Polos</a></li>*/}
                                    <li><a title="Coats" onClick={() => setFilter('category-2')}><i className="icn-chevron-right"></i> Coats</a></li>
                                </ul>
                            </li>
                            <li className="open">
                                <a href="#" title="Bottoms">
                                    Bottoms
                                    <i className="icn-chevron-down"></i>
                                    <i className="icn-chevron-up"></i>
                                </a>
                                <ul>
                                    {/*<li><a href="#" title="Shorts"><i className="icn-chevron-right"></i> Shorts</a></li>
                                    <li><a href="#" title="Trousers"><i className="icn-chevron-right"></i> Trousers</a></li>
                                    <li><a href="#" title="Skirts"><i className="icn-chevron-right"></i> Skirts</a></li>*/}
                                    <li><a  title="Pants" onClick={() => setFilter('category-3')}><i className="icn-chevron-right"></i> Pants</a></li>
                                </ul>
                            </li>
                            <li className="open">
                                <a href="#" title="Bags">
                                    Bags
                                    <i className="icn-chevron-down"></i>
                                    <i className="icn-chevron-up"></i>
                                </a>
                                <ul>
                                    {/*<li><a href="#" title="Travel"><i className="icn-chevron-right"></i> Travel</a></li>
                                    <li><a href="#" title="Work"><i className="icn-chevron-right"></i> Work</a></li>*/}
                                    <li><a  title="Jackets" onClick={() => setFilter('category-4')}><i className="icn-chevron-right"></i> Jackets</a></li>
                                </ul>
                            </li>
                            <li className="open">
                                <a href="#" title="Bags">
                                    Shoes
                                    <i className="icn-chevron-down"></i>
                                    <i className="icn-chevron-up"></i>
                                </a>
                                <ul>
                                    <li><a  title="Sneakers" onClick={() => setFilter('category-1')}><i className="icn-chevron-right"></i> Sneakers</a></li>
                                    {/*<li><a href="#" title="Boots"><i className="icn-chevron-right"></i> Boots</a></li>
                                    <li><a href="#" title="Flip-flops"><i className="icn-chevron-right"></i> Flip-flops</a></li>*/}
                                </ul>
                            </li>
                        </ul>
                        <div className="sizes">
                            <p className="fancytext">- Sizes</p>
                            <div className="sizebtns marginverticalfourth">
                                <button type="button" onClick={() => setFilter('sizes-1')}>1</button>
                                <button type="button" onClick={() => setFilter('sizes-2')}>2</button>
                                <button type="button" onClick={() => setFilter('sizes-3')}>3</button>
                                <button type="button" onClick={() => setFilter('sizes-4')}>4</button>
                            </div>
                            <a href="#" title="View Size Guide" className="fancytext">See our sizing guide</a>
                        </div>
                    </div>
                    <div id="mainproductlist" className="product-list col-12 col-t-8 col-d-9 gridrowfull">
                    {filterrender}
                        {/*<a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product09.jpg 720w, ./../../src/assets/imgs/products/medium/product09.jpg 640w, ./../../src/assets/imgs/products/small/product09.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product09.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Tops</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <span className="product-card-image-badge">New!</span>
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product10.jpg 720w, ./../../src/assets/imgs/products/medium/product10.jpg 640w, ./../../src/assets/imgs/products/small/product10.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product10.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product11.jpg 720w, ./../../src/assets/imgs/products/medium/product11.jpg 640w, ./../../src/assets/imgs/products/small/product11.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product11.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product13.jpg 720w, ./../../src/assets/imgs/products/medium/product13.jpg 640w, ./../../src/assets/imgs/products/small/product13.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product13.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product13.jpg 720w, ./../../src/assets/imgs/products/medium/product13.jpg 640w, ./../../src/assets/imgs/products/small/product13.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product13.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product15.jpg 720w, ./../../src/assets/imgs/products/medium/product15.jpg 640w, ./../../src/assets/imgs/products/small/product15.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product15.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product15.jpg 720w, ./../../src/assets/imgs/products/medium/product15.jpg 640w, ./../../src/assets/imgs/products/small/product15.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product15.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product16.jpg 720w, ./../../src/assets/imgs/products/medium/product16.jpg 640w, ./../../src/assets/imgs/products/small/product16.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product16.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product17.jpg 720w, ./../../src/assets/imgs/products/medium/product17.jpg 640w, ./../../src/assets/imgs/products/small/product17.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product17.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <span className="product-card-image-badge">New!</span>
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product18.jpg 720w, ./../../src/assets/imgs/products/medium/product18.jpg 640w, ./../../src/assets/imgs/products/small/product18.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product18.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product19.jpg 720w, ./../../src/assets/imgs/products/medium/product19.jpg 640w, ./../../src/assets/imgs/products/small/product19.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product19.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>
                        <a className="product-card col-6 col-d-4" href="product.html" title="View Product">
                            <div className="product-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/products/product20.jpg 720w, ./../../src/assets/imgs/products/medium/product20.jpg 640w, ./../../src/assets/imgs/products/small/product20.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/products/product20.jpg" />
                            </div>
                            <p className="margintophalf marginbottomnone">Black and purple Ren Sneakers</p>
                            <p className="gray marginnone">Shoes</p>
                            <p className="secondary marginnone">$123.00</p>
                        </a>*/}
                        <div className="central-link-light marginbottomdouble">
                            <a href="#" title="Load More"><i className="icn-reload"></i> Load More</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
            <script src="js/script.js"></script>
        </div>
    )
}
 
export default Products