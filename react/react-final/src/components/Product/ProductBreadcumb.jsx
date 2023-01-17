import { Link } from "react-router-dom"
const ProductBreadcumb = ({name}) => {
    return(
        <div className="breadcrumb">
            <div className="gridrow">
                <div className="col-12">
                    <Link to="/products" title="Tops">Tops</Link> <i className="icn-chevron-right"></i>
                    <Link to="/products" title="Sweaters">Sweaters</Link> <i className="icn-chevron-right"></i>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default ProductBreadcumb