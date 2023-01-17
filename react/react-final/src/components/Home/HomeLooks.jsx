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
                </div>
            </section>
    )
}

export default HomeLooks