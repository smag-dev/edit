const ProductLooks = () => {
    return(
        <>
        <h2 className="textcenter">Looks</h2>
        <div className="gridrow marginbottomfull">
            <div className="col-6 col-t-3 paddingtopfull">
                <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks01.jpg 720w, ./../../src/assets/imgs/looks/medium/looks01.jpg 360w, ./../../src/assets/imgs/looks/small/looks01.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks01.jpg" />
            </div>
            <div className="col-6 col-t-3 paddingtopfull">
                <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks02.jpg 720w, ./../../src/assets/imgs/looks/medium/looks02.jpg 360w, ./../../src/assets/imgs/looks/small/looks02.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks02.jpg" />
            </div>
            <div className="col-6 col-t-3 paddingtopfull">
                <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks03.jpg 720w, ./../../src/assets/imgs/looks/medium/looks03.jpg 360w, ./../../src/assets/imgs/looks/small/looks03.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks03.jpg" />
            </div>
            <div className="col-6 col-t-3 paddingtopfull">
                <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks04.jpg 720w, ./../../src/assets/imgs/looks/medium/looks04.jpg 360w, ./../../src/assets/imgs/looks/small/looks04.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks04.jpg" />
            </div>
        </div>
        </>
    )
}

export default ProductLooks