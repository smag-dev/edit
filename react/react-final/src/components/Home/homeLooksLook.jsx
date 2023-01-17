import { Link } from "react-router-dom"
import Look from "../Look"

const HomeLooksLook = ({look}) => {
    return(
        <div className="col-6 col-t-3">
            <Link to="#" title="View Look" className="look-card">
                <Look id={look.id} type="home" />
                <p className="fancytext">{look.description}</p>
            </Link>
        </div>
    )
}

export default HomeLooksLook