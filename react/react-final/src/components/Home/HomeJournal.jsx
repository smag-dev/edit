import HomejournalCard from "./HomeJournalCard"
import Button from "../Button"

const cards = [
                {
                cardsmall : false , 
                type : "Awards - January 2006", 
                title : "Royal Designer for Industry",
                description : 'The title "Royal Designer for Industry" (RDI) is awarded annually by the RSA to designers of all disciplines who have achieved "sustained design excellence, work of aesthetic value and significant benefit to society.',
                image : "journal01.jpg" 
                },
                {
                cardsmall : true , 
                type : "Awards - Awards - January 2011", 
                title : "Commander of the Order of Arts and Letters",
                description : '',
                image : "journal02.jpg" 
                },
                {
                cardsmall : true , 
                type : "Design - January 2020", 
                title : "Yohji",
                description : 'Yohji Yamamoto is widely regarded as ranking among the greatest fashion designers of the late twentieth and early twenty-first centuries.',
                image : "" 
                },
                {
                cardsmall : true , 
                type : "Design - January 2014", 
                title : "Real Madrid Uniform",
                description : 'Designs the third jersey (uniform) for Spain\'s professional soccer team, "Real Madrid"',
                image : "" 
                },
                {
                cardsmall : true , 
                type : "Collections - January 2006", 
                title : "New Collection",
                description : '',
                image : "journal03.jpg" 
                },

                ]


const HomeJournal = () => {
    return(
        <section id="journal" className="paddingverticaldouble">
            <h2 className="textcenter marginbottomfull">Journal</h2>
            <div className="gridrow">
                <div className="col-12 col-d-6">
                   <HomejournalCard card={cards[0]}/>
                </div>
                <div className="col-6 col-d-3">
                    <HomejournalCard card={cards[1]}/>
                    <HomejournalCard card={cards[2]}/>
                </div>
                <div className="col-6 col-d-3">
                    <HomejournalCard card={cards[3]}/>
                    <HomejournalCard card={cards[4]}/>
                </div>
            </div>
            <Button title ="See the Journal" text="See the Journal"/>
        </section>
    )
}

export default HomeJournal