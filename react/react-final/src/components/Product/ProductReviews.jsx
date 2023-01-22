import { Link } from "react-router-dom"
import Score from "../Score"

const ProductReviews = ({score}) => {
    return(
        <div className="bg-graylight paddingverticaldouble marginbottomfull" id="reviews">
            <h2 className="textcenter">Reviews</h2>
            <div className="gridrow">
                <div className="col-12 col-t-5 col-d-4 offset-t-1 offset-d-2 score">
                    <Score score={score}/>
                </div>
                <div className="col-12 col-t-5 col-d-4 textright">
                    <Link className="graymedium small" to="#" title="Share your thoughts with other customers">Share your thoughts with other customers</Link>
                </div>
                <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
                    <p>Top customer reviews</p>
                    <div className="review">
                        <div className="score">
                        <Score score= "5"/>
                        </div>
                        <div className="graymedium">By <span className="black">Zé Manel</span> on February 18th, 2020</div>
                        <p>Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae.</p>
                    </div>
                    <div>
                        <Link className="secondary fancytext" to="#">Show more reviews</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductReviews