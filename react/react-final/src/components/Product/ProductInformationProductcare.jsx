import Productcare from '../Productcare'

const datas = [
    { id :1, name : "Features", description : "Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque, posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc sed convallis massa.", open : false},
    { id :2, name : "Fabric", description : "Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque, posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc sed convallis massa.", open : true}
]

const ProductInformationProductcare = () => {
    return(
        <div className="gridrowfull product-care">
            <div className="col-12">
                <ul>
                    {datas.map(data => <Productcare key={data.id} name = {data.name} description={data.description} open = {data.open}/>)}
                </ul>
            </div>
        </div>
    )
}

export default ProductInformationProductcare