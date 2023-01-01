import Thumbs from "../Thumbs"

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
                return <Thumbs key= {thumb.id} id = {thumb.id} name = {thumb.name} image={thumb.image} open = {index == 0 ? 'open' : ''}/>
                })
            }
            {/*<a href="#" title="Red classNameic Chest Logo Hoodie 1" className="open">
                <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb01.jpg" alt="Red classNameic Chest Logo Hoodie 1" />
            </a>
            <a href="#" title="Red classNameic Chest Logo Hoodie 2">
                <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb02.jpg" alt="Red classNameic Chest Logo Hoodie 2" />
            </a>
            <a href="#" title="Red classNameic Chest Logo Hoodie 3">
                <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb03.jpg" alt="Red classNameic Chest Logo Hoodie 3" />
            </a>
            <a href="#" title="Red classNameic Chest Logo Hoodie 4">
                <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb04.jpg" alt="Red classNameic Chest Logo Hoodie 4" />
            </a>
            <a href="#" title="Red classNameic Chest Logo Hoodie 5">
                <img className="imgfit" src="./../../src/assets/imgs/products/thumbs/thumb05.jpg" alt="Red classNameic Chest Logo Hoodie 5" />
            </a>*/}
        </div>
    )
}

export default ProductInformationThumbs