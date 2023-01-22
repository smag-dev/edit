import { Link } from 'react-router-dom';
import Product from '../ProductCard'
import ProductsCategories from './ProductsCategories';
import ProductsSizes from './ProductsSizes'
import ProductsSort from './ProductsSort';
import { useEffect, useState } from 'react'

/* filtra os produtos por categoria */
function filterProductsByCategory(products, id){
    return  products.filter((product) => product.category.includes(Number(id)))
}

/* filtra os produtos por  tamanho */
function filterProductsBySize(products, id){
    return products.filter((product) => Object.keys(product.sizes).includes(id))
}

/* verifica se há algum filtro para filtrar */
function getProductsFiltered(products, filtro)  {
    const filtered = filtro.split('-')
    const type =  filtered[0];
    const id = type ? filtered[1] : '';
    switch(type) {
        case 'category':
            products = filterProductsByCategory(products, id)
          break;
        case 'size':
            products = filterProductsBySize(products, id)
          break;
      }
    return products;
}

/* renderiza os produtos */
function getProductsRendered(products)  {
    const res = products.map((product) => {
        return(<Product key={product.id} type="productlist" product={product}/>)
    })
    return res;
}

/* obter produtos ordenados */
function getProductOrdered(products, order){
    switch(order) {
        case 'price':
            products.sort((p1, p2) => (p1.price < p2.price) ? -1 : (p1.price > p2.price) ? 1 : 0);
          break;
        case 'name':
            products.sort((p1, p2) => (p1.name < p2.name) ? -1 : (p1.name > p2.name) ? 1 : 0);
          break;
        case 'popularity':
        products.sort((p1, p2) => (p1.score < p2.score) ? 1 : (p1.score > p2.score) ? -1 : 0);
        break;
    }
    return products;
}


const Products = () => {
    /* hook que guarda o filtro, categoria e seu valor ou tamanho e seu valor */
    const [filter, setFilter] = useState('')
    /* hook que guarda a renderizacao */
    const [productsrendered, setProductsrendered] = useState('');
    /* hook que guarda o tipo de ordenação */
    const [order, setOrder] = useState('price');
    /* atualizar a ordenação */
    const handleChangeOrder = (event) => {
        const value  = event.target.value;
        setOrder(value)
    }
    /* useEfect  para obter dados do endpoint*/
    useEffect(()=> {
        fetch("https://foxcoding.net/api/getProductsList")
        .then (function(response){
            return response.json();
        })
        .then((data)=>{
            let products = getProductsFiltered(data.data.products, filter);
            products = getProductOrdered(products, order)
            setProductsrendered(getProductsRendered(products));
        })
        .catch(()=>{
            console.log('erro');
        });
    },[filter, order])
    
    return ( 
        <>
        <div id="headerproductlist">
            <div className="textoverlay">
                <h1>Tops</h1>
                <p>These awesome products</p>
            </div>
        </div>
        <ProductsSort handleChangeOrder={handleChangeOrder} order = {order}/>
        <div className="gridrow">
            <div id="filters" className="col-12 col-t-4 col-d-3">
                <p className="fancytext" onClick={() => setFilter('')}>Clear Filters</p>
                <p className="fancytext">Filters</p>
                <ProductsCategories setFilter = {setFilter} />
                <ProductsSizes setFilter = {setFilter}/>
            </div>
            <div id="mainproductlist" className="product-list col-12 col-t-8 col-d-9 gridrowfull">
                { productsrendered }
                <div className="central-link-light marginbottomdouble">
                    <Link to="#" title="Load More"><i className="icn-reload"></i> Load More</Link>
                </div>
            </div>
        </div>
        </>
    )
}
 
export default Products