import { Link } from "react-router-dom"

const Thumb = ({id, name , image , open}) => {
    return(
        <Link key = {id} to="#" title={name} className={open}>
            <img className="imgfit" src={"/src/assets/imgs/products/thumbs/"+image} alt={name} />
        </Link>
    )
}

export default Thumb