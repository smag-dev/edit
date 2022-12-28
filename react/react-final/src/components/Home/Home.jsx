import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Top from '../Top/Top'
import HomeSlider from './HomeSlider'
import HomeProducts from './HomeProducts'
import HomeAbout from './HomeAbout'
import HomeJournal from './HomeJournal'
import HomeLooks from './HomeLooks'
import HomePress from './HomePress'
import HomeTalkings from './HomeTalkings'

const Home = () => {
    return(
        <div className="preload">
            <Top/>
            <Header/>
            <main>
                {/* <!-- ------ -->
                <!-- SLIDER -->
                <!-- ------ --> */}
                <HomeSlider/>
                {/*  <!-- -------- -->
                <!-- PRODUTOS -->
                <!-- -------- --> */}
                <HomeProducts/>
                {/*  <!-- ----- -->
                <!-- ABOUT -->
                <!-- ----- --> */}
                <HomeAbout/>
                {/*   <!-- ------- -->
                <!-- JOURNAL -->
                <!-- ------- --> */}
                <HomeJournal/>
                {/*   <!-- ----- -->
                <!-- LOOKS -->
                <!-- ----- --> */}
                <HomeLooks/>
                {/*  <!-- ----- -->
                <!-- PRESS -->
                <!-- ----- --> */}
                <HomePress/>
                {/*  <!-- ----- -->
                <!-- TALKING -->
                <!-- ----- --> */}
                <HomeTalkings/>
            </main>
            <Footer/>
             <script src="js/script.js"></script>
        </div>
    )
}
export default Home;