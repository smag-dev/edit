import Thumb from "../Thumb"

const thumbs = [
    {id : "1", name: "Red classNameic Chest Logo Hoodie 1" , image: "thumb01.jpg"},
    {id : "2", name: "Red classNameic Chest Logo Hoodie 2" , image: "thumb02.jpg"},
    {id : "3", name: "Red classNameic Chest Logo Hoodie 3" , image: "thumb03.jpg"},
    {id : "4", name: "Red classNameic Chest Logo Hoodie 4" , image: "thumb04.jpg"},
    {id : "5", name: "Red classNameic Chest Logo Hoodie 5" , image: "thumb05.jpg"},
]


const ProductInformationThumbs = () => {
    return(
        <div id="thumbs" className="col-3 col-t-1">
            {
            thumbs.map((thumb, index) => {
                return <Thumb key= {thumb.id} id = {thumb.id} name = {thumb.name} image={thumb.image} open = {index == 0 ? 'open' : ''}/>
                })
            }
        </div>
    )
}

export default ProductInformationThumbs