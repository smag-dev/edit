const HomePressImg = ({press}) => {
    return(
        <div className="col-12 col-t-4">
            <a href={press.link} target="_blank" title="View Look" className="press-card">
                <div className="press-card-image">
                    <img className="imgfit" srcSet={"./../../src/assets/imgs/press/press"+press.id+".jpg 720w, ./../../src/assets/imgs/press/medium/press"+press.id+".jpg 450w"} sizes="(min-width: 1200px) 720px, 450px" src={"./../../src/assets/imgs/press/press"+press.id+".jpg"} />
                </div>
                <p>{press.description}</p>
            </a>
        </div>
    )
}

export default HomePressImg