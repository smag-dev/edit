const ProductPress = () => {
    return(
        <div className="gridrow marginverticalfull">
            <div className="col-12 col-t-4">
                <img className="imgfit" srcSet="./../../src/assets/imgs/press/press01.jpg 720w, ./../../src/assets/imgs/press/medium/press01.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press01.jpg" />
                <p className="textcenter">Replica Collection</p>
            </div>
            <div className="col-6 col-t-4">
                <img className="imgfit" srcSet="./../../src/assets/imgs/press/press02.jpg 720w, ./../../src/assets/imgs/press/medium/press02.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press02.jpg" />
                <p className="textcenter">Hublot Collaboration</p>
            </div>
            <div className="col-6 col-t-4">
                <img className="imgfit" srcSet="./../../src/assets/imgs/press/press03.jpg 720w, ./../../src/assets/imgs/press/medium/press03.jpg 450w" sizes="(min-width: 1200px) 720px, 450px" src="./../../src/assets/imgs/press/press03.jpg" />
                <p className="textcenter">Dr Martens vs Yamamoto</p>
            </div>
        </div>
    )
}

export default ProductPress