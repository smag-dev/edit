import { Link } from "react-router-dom";

const Productcare = ({name, description, open}) => {
    const addClass = open ? "open" : '';
    return(
        <li  className={addClass}>
            <Link to="#" title="Tops">
                {name}
                <span className="plus">+</span>
                <span className="minus">-</span>
            </Link>
            <div className="graymedium">
                <p>
                    {description}
                </p>
            </div>
        </li>
    )
}

export default Productcare


