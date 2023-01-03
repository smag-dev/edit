const Button = ({title, text}) => {
    {/*     
            Home
            journal
            <a href="#" title="See the Journal">See the Journal</a>
            Press
            <a href="#" title="More News">Show More</a>

            Products 
            <a href="#" title="Load More"><i className="icn-reload"></i> Load More</a>

            Product
            guidelines
            <a href="#" title="Size Guidelines" className="fancytext">Size Guidelines</a>

            add wishlist
            <a href="#" title="Add top wishlist" className="fancytext"><i className="icn-heart"></i> Add to wishlist</a>

            reviews top
            <a class="graymedium small" href="#" title="Share your thoughts with other customers">Share your thoughts with other customers</a>

            reviews
            <a className="secondary fancytext" href="#">Show more reviews</a>

    */}

    return(
        <div className="central-link">
            <a href="#" title={title}>{text}</a>
        </div>
    )
}

export default Button