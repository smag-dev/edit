const Productcare = ({name, description, open}) => {
    const addClass = open ? "open" : '';
    return(
        <li  className={addClass}>
            <a href="#" title="Tops">
                {name}
                <span className="plus">+</span>
                <span className="minus">-</span>
            </a>
            <div className="graymedium">
                <p>
                    {description}
                </p>
            </div>
        </li>
    )
}

export default Productcare


