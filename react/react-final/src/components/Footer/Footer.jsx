import Social from "../Social"
import FooterLinks from "./FooterLinks"

const footerColumn = [{ name: "Categories", links: ["About Us", "Testimonials", "Contact", "Journal", "Privacy Policy"]},
                     { name: "Partners",    links: ["Support", "Shipping & Returns", "Size Guide", "Product Care"]},
                    ]
const Footer = () =>{
    return(
        <footer>
            <div className="gridrow">
                <div className="col-4 col-d-2">
                    <FooterLinks column = {footerColumn[0]} />
                </div>
                <div className="col-4 col-d-2">
                    <FooterLinks column = {footerColumn[1]} />
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
                        <Social title="Facebook" icon="icn-facebook" />
                        <Social title="Twitter" icon="icn-twitter" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer