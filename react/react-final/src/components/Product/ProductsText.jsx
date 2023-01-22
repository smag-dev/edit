const ProductsText = ({classes, desc, withp}) => {
    return(
        <div className={classes}>
            { withp && <p>{desc}</p>}
            { !withp && desc}
        </div>
    )
}

export default ProductsText
