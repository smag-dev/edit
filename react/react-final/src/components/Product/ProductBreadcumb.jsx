const ProductBreadcumb = ({name}) => {
    return(
        <div className="breadcrumb">
            <div className="gridrow">
                <div className="col-12">
                    <a href="/products" title="Tops">Tops</a> <i className="icn-chevron-right"></i>
                    <a href="/products" title="Sweaters">Sweaters</a> <i className="icn-chevron-right"></i>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default ProductBreadcumb