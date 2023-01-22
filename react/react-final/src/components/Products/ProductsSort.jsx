const ProductsSort = ({handleChangeOrder, order}) => {
    return(
        <div id="sortbar">
            <div className="gridrow">
                <div className="col-4">Tops</div>
                <div className="col-8 textright">Sort by
                    <select onChange={handleChangeOrder} value={order}>
                        <option value="price" >Price</option>
                        <option value="popularity">Popularity</option>
                        <option value="name">Name</option>
                        <option value="season">Season</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ProductsSort