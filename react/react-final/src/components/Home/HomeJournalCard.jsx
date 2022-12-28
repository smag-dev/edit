const  description = (description ) => {

    return description ? <p>{description}</p> : '';
}

const  image = (image ) => {
    return image 
        ?  <div className="journal-card-image">
            <img className="imgfit" srcSet={"./../../src/assets/imgs/journal/"+image+" 720w, ./../../src/assets/imgs/journal/medium/journal01.jpg 360w"} sizes="(min-width: 750px) 720px, 360px" src={"./../../src/assets/imgs/journal/"+image} />
            </div>
        : '' 

}

const HomejournalCard = ({card}) => {
    const smallCard = card.cardsmall ? " journal-card-small" : '';

    return(
        <a href="#" title="View Journal" className={"journal-card" + smallCard}>
            <p className="fancytext">{card.type}</p>
            <h3>{card.title}</h3>
            {description(card.description)}
            {image(card.image)}
        </a>
    )
}

export default HomejournalCard