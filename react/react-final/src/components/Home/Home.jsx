import HomeSlider from './HomeSlider'
import HomeProducts from './HomeProducts'
import HomeAbout from './HomeAbout'
import HomeJournal from './HomeJournal'
import HomeLooks from './HomeLooks'
import HomePress from './HomePress'
import HomeTalkings from './HomeTalkings'

const Home = () => {
    return(
        <>
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
        </>
    )
}
export default Home;