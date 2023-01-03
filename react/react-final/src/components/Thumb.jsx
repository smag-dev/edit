const Thumb = ({id, name , image , open}) => {
    return(
        <a key = {id} href="#" title={name} className={open}>
            <img className="imgfit" src={"/src/assets/imgs/products/thumbs/"+image} alt={name} />
        </a>
    )
}

export default Thumb