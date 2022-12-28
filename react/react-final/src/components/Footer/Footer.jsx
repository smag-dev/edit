const Footer = () =>{
    return(
        <footer>
            <div className="gridrow">
                <div className="col-4 col-d-2">
                    <p className="margintopnone">Categories</p>
                    <ul>
                        <li><a href="#" title="About Us">About Us</a></li>
                        <li><a href="#" title="Testimonials">Testimonials</a></li>
                        <li><a href="#" title="Contact">Contact</a></li>
                        <li><a href="#" title="Journal">Journal</a></li>
                        <li><a href="#" title="Privacy Policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="col-4 col-d-2">
                    <p className="margintopnone">Partners</p>
                    <ul>
                        <li><a href="#" title="Support">Support</a></li>
                        <li><a href="#" title="Shipping & Returns">Shipping & Returns</a></li>
                        <li><a href="#" title="Size Guide">Size Guide</a></li>
                        <li><a href="#" title="Product Care">Product Care</a></li>
                    </ul>
                </div>
                <div className="col-4 col-d-2">
                    <p className="margintopnone">Contact us</p>
                    <p className="margintopnone marginbottomfull small contacts">
                        Adi-Dassler-Strasse 1<br />
                        91074 Herzogenaurach<br />
                        Germany
                    </p>
                    <p className="marginverticalnone small contacts">+49 (0) 9132 84-0</p>
                </div>
                <div className="col-12 col-d-6 newsletter">
                    <p className="margintopnone">Subscribe to newsletter</p>
                    <form className="gridrowfull">
                        <div className="col-7 paddingleftnone">
                            <input type="email" placeholder="Enter your email" name="email" />
                        </div>
                        <div className="col-5 paddingrightnone">
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                    <div className="social">
                        <a href="#" title="Facebook"><i className="icn-facebook"></i></a>
                        <a href="#" title="Twitter"><i className="icn-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer