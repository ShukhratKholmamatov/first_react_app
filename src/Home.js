import logo1 from './images/client-databiz.svg';
import logo2 from './images/client-audiophile.svg';
import logo3 from './images/client-meet.svg';
import logo4 from './images/client-maker.svg';
import img_home from './images/image-hero-desktop.png';
import img_mobile from './images/image-hero-mobile.png';
import Navbar from './Navbar';
const Home = () => {
    return ( 
        <div className="container">
            <Navbar/>
            <div className="page1">
                <div className="left_home">
                <h1>Make remote work</h1>
                <div className="text">
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                </div>
                <button className="more">Learn more</button>

                <div className="logo_sponsors">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                </div>
                </div>

                <div className="right_home">
                    <img className='desktop' src={img_home} alt="" />
                    <img className='mobile' src={img_mobile} alt="" />
                </div>
            </div>
        </div>

     );
}
 
export default Home;