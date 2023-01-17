import { Link } from "react-router-dom"

const FooterLinks = ({column}) => {
    return(
        <>
            <p className="margintopnone">{column.name}</p>
            <ul>
                { column.links.map(link => <li key={link}><Link to="#" title={link}>{link}</Link></li>)}
            </ul>
        </>
    )
}

export default FooterLinks