import logo from './images/logo.svg';
import icon1 from './images/icon-arrow-down.svg';
import icon2 from './images/icon-arrow-up.svg';
import icon_todo from './images/icon-todo.svg';
import icon_calendar from './images/icon-calendar.svg';
import icon_reminder from './images/icon-reminders.svg';
import icon_plan from './images/icon-planning.svg';
import icon_menu from './images/icon-menu.svg';



function featuresDrop() {
    let features = document.querySelector('.navbar .left_navbar ul li ul.features');
    if(features.style.display === 'flex'){
        features.style.display = 'none'
    }else{
        features.style.display = 'flex';
    }

    window.stop()
};

function companyDrop() {
    let company = document.querySelector('.navbar .left_navbar ul #company');

    if(company.style.display === 'none'){
        company.style.display = 'flex';
    }else{
        company.style.display = 'none';
    };
}


const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="left_navbar">
                <div className="logo"><img src={logo} alt="" /></div>
                <ul>
                    <li onClick={featuresDrop}>Features <img src={icon1} alt="" />
                        <ul className="features" id="features">
                            <li><img src={icon_todo} alt="" />Todo List</li>
                            <li><img src={icon_calendar} alt="" />Calendar</li>
                            <li><img src={icon_reminder} alt="" />Reminders</li>
                            <li><img src={icon_plan} alt="" />Planning</li>
                        </ul>
                    </li>
                    <li onClick={companyDrop}>Company <img src={icon1} alt="" />
                        <ul className = "company" id = "company">
                            <li>History</li>
                            <li>Our Team</li>
                            <li>Blog</li>
                        </ul>
                    </li>
                    <li><a href="/Careers">Careers</a></li>
                    <li><a href="/About">About</a></li>
                </ul>
            </div>
            <div className="buttons">
                <button className='login'>Login</button>
                <button>Register</button>
            </div>
            <img className='menu' src={icon_menu} alt="" />
        </div>
     );
}
 
export default Navbar;