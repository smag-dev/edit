import HomeSliderSlide from "./HomeSliderSlide"

const HomeSlider = () => {
    return(
        <section className="slider">
            <div className="slider-slides">
                <HomeSliderSlide/>
            </div>
            <a href="#" className="slider-previous"><i className="icn-chevron-left"></i></a>
            <a href="#" className="slider-next"><i className="icn-chevron-right"></i></a>
        </section>
    )
}

export default HomeSlider