import HomeLooksLook from "./homeLooksLook"

const looks = [{id:"01", description : "Look 1" },
               {id:"02", description : "Look 2" },
               {id:"03", description : "Look 3" },
               {id:"04", description : "Look 4" }
             ];

const generateLooks = (looks) => {

    const res = looks.map((look) => {
        return(<HomeLooksLook key={look.id} look={look}/>)
    })

    return res;
}

const HomeLooks = () => {
    return(
        <section id="looks" className="paddingverticaldouble">
                <h2 className="textcenter marginbottomfull">Looks</h2>
                <div className="gridrow">
                    {generateLooks(looks)}
                    {/*<div className="col-6 col-t-3">
                        <a href="#" title="View Look" className="look-card">
                            <div className="look-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks01.jpg 720w, ./../../src/assets/imgs/looks/medium/looks01.jpg 360w, ./../../src/assets/imgs/looks/small/looks01.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks01.jpg" />
                            </div>
                            <p className="fancytext">Look 1</p>
                        </a>
                    </div>
                    <div className="col-6 col-t-3">
                        <a href="#" title="View Look" className="look-card">
                            <div className="look-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks02.jpg 720w, ./../../src/assets/imgs/looks/medium/looks02.jpg 360w, ./../../src/assets/imgs/looks/small/looks02.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks02.jpg" />
                            </div>
                            <p className="fancytext">Look 2</p>
                        </a>
                    </div>
                    <div className="col-6 col-t-3">
                        <a href="#" title="View Look" className="look-card">
                            <div className="look-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks03.jpg 720w, ./../../src/assets/imgs/looks/medium/looks03.jpg 360w, ./../../src/assets/imgs/looks/small/looks03.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks03.jpg" />
                            </div>
                            <p className="fancytext">Look 3</p>
                        </a>
                    </div>
                    <div className="col-6 col-t-3">
                        <a href="#" title="View Look" className="look-card">
                            <div className="look-card-image">
                                <img className="imgfit" srcSet="./../../src/assets/imgs/looks/looks04.jpg 720w, ./../../src/assets/imgs/looks/medium/looks04.jpg 360w, ./../../src/assets/imgs/looks/small/looks04.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="./../../src/assets/imgs/looks/looks04.jpg" />
                            </div>
                            <p className="fancytext">Look 4</p>
                        </a>
                    </div>*/}
                </div>
            </section>
    )
}

export default HomeLooks