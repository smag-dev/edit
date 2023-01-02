const Look = ({id, type}) => {
    const addclass = type == "home" ?  "look-card-image" : "col-6 col-t-3 paddingtopfull"
    return(
        <div className={addclass}>
                <img className="imgfit" srcSet={"./../../src/assets/imgs/looks/looks"+id+".jpg 720w, ./../../src/assets/imgs/looks/medium/looks"+id+".jpg 360w, ./../../src/assets/imgs/looks/small/looks"+id+".jpg 240w"} sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src={"./../../src/assets/imgs/looks/looks"+id+".jpg"} />
        </div>
    )
}

export default Look