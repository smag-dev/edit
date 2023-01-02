import Look from "../Look"

const HomeLooksLook = ({look}) => {
    return(
        <div className="col-6 col-t-3">
            <a href="#" title="View Look" className="look-card">
                <Look id={look.id} type="home" />
                <p className="fancytext">{look.description}</p>
            </a>
        </div>
    )
}

export default HomeLooksLook