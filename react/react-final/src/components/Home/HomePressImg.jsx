import { Link } from "react-router-dom"
import Press from "../Press"
const HomePressImg = ({press}) => {
    return(
        <div className="col-12 col-t-4">
            <Link to={press.link} target="_blank" title="View Look" className="press-card">
                <Press type="home" id={press.id} description={press.description} />
            </Link>
        </div>
    )
}

export default HomePressImg