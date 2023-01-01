const FooterLinks = ({column}) => {
    return(
        <>
            <p className="margintopnone">{column.name}</p>
            <ul>
                { column.links.map(link => <li key={link}><a href="#" title={link}>{link}</a></li>)}
            </ul>
        </>
    )
}

export default FooterLinks