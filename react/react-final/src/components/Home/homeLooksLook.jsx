const HomeLooksLook = ({look}) => {
    return(
        <div className="col-6 col-t-3">
            <a href="#" title="View Look" className="look-card">
                <div className="look-card-image">
                    <img className="imgfit" srcSet={"./../../src/assets/imgs/looks/looks"+look.id+".jpg 720w, ./../../src/assets/imgs/looks/medium/looks"+look.id+".jpg 360w, ./../../src/assets/imgs/looks/small/looks"+look.id+".jpg 240w"} sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src={"./../../src/assets/imgs/looks/looks"+look.id+".jpg"} />
                </div>
                <p className="fancytext">{look.description}</p>
            </a>
        </div>
    )
}

export default HomeLooksLook