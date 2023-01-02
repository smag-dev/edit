function choosePress(type, id, description) {
    if (type == "home") {
        return  <>   
                    <div className="press-card-image">
                        <img className="imgfit" srcSet={"./../../src/assets/imgs/press/press"+id+".jpg 720w, ./../../src/assets/imgs/press/medium/press"+id+".jpg 450w"} sizes="(min-width: 1200px) 720px, 450px" src={"./../../src/assets/imgs/press/press"+id+".jpg"} />
                    </div>
                    <p>{description}</p>
                </>
    }
    return <> 
                <div className="col-12 col-t-4">
                                <img className="imgfit" srcSet={"./../../src/assets/imgs/press/press"+id+".jpg 720w, ./../../src/assets/imgs/press/medium/press"+id+".jpg 450w"} sizes="(min-width: 1200px) 720px, 450px" src={"./../../src/assets/imgs/press/press"+id+".jpg"} />
                    <p className="textcenter">{description}</p>
                </div>
            </>
}

const Press = ({type, id, description}) => {
    return(
        choosePress(type, id, description)
    )
}

export default Press