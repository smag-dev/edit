import HomeTalkingsTalking from "./HomeTalkingsTalking"

const talkings = [{id : "01", alt : "talking 1", classes : "col-4 col-t-2 col-d-1 offset-1 offset-t-1 offset-d-2 paddingbottomfull"},
                  {id : "02", alt : "talking 2", classes : "col-4 col-t-2 col-d-1 offset-2 offset-t-2 offset-d paddingbottomfull"},
                  {id : "03", alt : "talking 3", classes : "col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull"},
                  {id : "04", alt : "talking 4", classes : "col-4 col-t-2 col-d-1 offset-2 offset-t-1 offset-d  paddingbottomfull"},
                  {id : "05", alt : "talking 5", classes : "col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d  paddingbottomfull"},
                  {id : "06", alt : "talking 6", classes : "col-4 col-t-2 col-d-1 offset-2 offset-t-2 offset-d paddingbottomfull"},
                  {id : "07", alt : "talking 7", classes : "col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull"},
                  {id : "08", alt : "talking 8", classes : "col-4 col-t-2 col-d-1 offset-2 offset-t-4 offset-d paddingbottomfull"},
                ]

const generateTalkings = (talkings) => {

    const res = talkings.map((talking) => {
        return(<HomeTalkingsTalking key={talking.id} talking={talking}/>)
    })

    return res;
}

 const HomeTalkings = () => {
    return(
        <section id="talking" className="paddingverticaldouble">
            <h2 className="textcenter marginbottomfull">Talking about us</h2>
            <div className="gridrow">
                {generateTalkings(talkings)}
                {/*<div className="col-4 col-t-2 col-d-1 offset-1 offset-t-1 offset-d-2 paddingbottomfull">
                    <img className="imgfit" src="./../../src/assets/imgs/talking/talking01.png" alt="talking 1" />
                </div>
                <div className="col-4 col-t-2 col-d-1 offset-2 offset-t-2 offset-d paddingbottomfull">
                    <img className="imgfit" src="./../../src/assets/imgs/talking/talking02.png" alt="talking 2" />
                </div>
                <div className="col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull">
                    <img className="imgfit" src="./../../src/assets/imgs/talking/talking03.png" alt="talking 3" />
                </div>
                <div className="col-4 col-t-2 col-d-1 offset-2 offset-t-1 offset-d  paddingbottomfull">
                    <img className="imgfit" src="./../../src/assets/imgs/talking/talking04.png" alt="talking 4" />
                </div>
                <div className="col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d  paddingbottomfull">
                    <img className="imgfit" src="./../../src/assets/imgs/talking/talking05.png" alt="talking 5" />
                </div>
                <div className="col-4 col-t-2 col-d-1 offset-2 offset-t-2 offset-d paddingbottomfull">
                    <img className="imgfit" src="./../../src/assets/imgs/talking/talking06.png" alt="talking 6" />
                </div>
                <div className="col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull">
                    <img className="imgfit" src="./../../src/assets/imgs/talking/talking07.png" alt="talking 7" />
                </div>
                <div className="col-4 col-t-2 col-d-1 offset-2 offset-t-4 offset-d paddingbottomfull">
                    <img className="imgfit" src="./../../src/assets/imgs/talking/talking08.png" alt="talking 8" />
                </div>*/}
            </div>
        </section>
    )
}

export default HomeTalkings