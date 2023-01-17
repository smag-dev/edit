
import { Link } from "react-router-dom"
const Social = ({title, icon}) => {
    return(
        <Link to="#" title={title}><i className={icon}></i></Link>
    )
}

export default Social