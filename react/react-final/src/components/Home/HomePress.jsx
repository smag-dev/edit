import HomePressImg from "./HomePressImg"
import Button from "../Button"

const presses = [ {id : "01", description : "Replica Collection", link : "https://hypebeast.com/2020/5/yohji-yamamoto-replica-spring-summer-1996-capsule-collection-release-info"},
                  {id : "02", description : "Hublot Collaboration", link : "https://www.thailandtatler.com/style/yohji-yamamoto-designs-a-new-watch-from-hublot"},
                  {id : "03", description : "Dr Martens vs Yamamoto", link : "https://flaunt.com/content/dr-martens-yohji-yamamoto"},
                ]

const generatePresses= (presses) => {

    const res = presses.map((press) => {
        return(<HomePressImg key={press.id} press={press}/>)
    })

    return res;
}


const HomePress = () => {
    return(
        <section id="press" className="paddingverticaldouble bg-graylight">
            <h2 className="textcenter marginbottomfull">Press</h2>
            <div className="gridrow">
                {generatePresses(presses)}
            </div>
            <Button title="More News" text="Show More"/>
        </section>
    )
}

export default HomePress