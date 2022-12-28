const HomeSliderSlide = () => {
    return(
        <div className="slider-slides-slide">
            <img srcSet="./../../src/assets/imgs/slider/slider01.jpg 1920w, ./../../src/assets/imgs/slider/slider01-medium.jpg 1024w, ./../../src/assets/imgs/slider/slider01-small.jpg 576w" sizes="(min-width: 1200px) 1920px, (min-width: 750px) 1024px, 576px" src="./../../src/assets/imgs/slider/slider01.jpg" alt="Lore Impsum @edit" />
            <div className="slider-slides-slide-caption">
                <p className="h1">
                    Yohji Yamamoto<br />
                    Y-3
                </p>
                <a href="#" title="Shop Now">Shop Now</a>
            </div>
        </div>
    )
}

export default HomeSliderSlide