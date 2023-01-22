import { Link } from "react-router-dom"
import HomeSliderSlide from "./HomeSliderSlide"

const HomeSlider = () => {
    return(
        <section className="slider">
            <div className="slider-slides">
                <HomeSliderSlide/>
            </div>
            <Link to="#" className="slider-previous"><i className="icn-chevron-left"></i></Link>
            <Link to="#" className="slider-next"><i className="icn-chevron-right"></i></Link>
        </section>
    )
}

export default HomeSlider