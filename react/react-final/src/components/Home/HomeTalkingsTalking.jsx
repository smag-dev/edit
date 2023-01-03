const HomeTalkingsTalking = ({talking}) => {
    return(
        <div className={talking.classes}>
            <img className="imgfit" src={"/src/assets/imgs/talking/talking"+talking.id+".png"} alt={talking.alt} />
        </div>
    )
}

export default HomeTalkingsTalking