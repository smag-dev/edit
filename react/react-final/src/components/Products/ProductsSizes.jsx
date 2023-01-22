import { Link } from "react-router-dom"

const ProductSizes = ({setFilter}) => {
    return(
        <div className="sizes">
            <p className="fancytext">- Sizes</p>
            <div className="sizebtns marginverticalfourth">
                <button type="button" onClick={() => setFilter('size-1')}>1</button>
                <button type="button" onClick={() => setFilter('size-2')}>2</button>
                <button type="button" onClick={() => setFilter('size-3')}>3</button>
                <button type="button" onClick={() => setFilter('size-4')}>4</button>
            </div>
            <Link to="#" title="View Size Guide" className="fancytext">See our sizing guide</Link>
        </div>
    )
}

export default ProductSizes