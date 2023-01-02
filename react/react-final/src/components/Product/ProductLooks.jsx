import Look from "../Look" 
const ProductLooks = () => {
    return(
        <>
        <h2 className="textcenter">Looks</h2>
        <div className="gridrow marginbottomfull">
            <Look id="01" type="product" />
            <Look id="02" type="product" />
            <Look id="03" type="product" />
            <Look id="04" type="product" />
        </div>
        </>
    )
}

export default ProductLooks