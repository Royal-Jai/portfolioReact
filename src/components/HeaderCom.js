import React, {useState} from 'react'
import {Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars, FaTwitter, FaFacebookF, FaInstagramSquare, FaSkype, FaLinkedinIn} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { RiFilePaperLine, RiServiceLine } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";
import imgHeader from '../assets/images/newJaya.jpg';
import FooterCom from './FooterCom';
function HeaderCom() {
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <header>
            <nav className="navbar">
                <Link to="/">
                <div className="profileDiv">
                   <img src={imgHeader} alt="profile not display" className="profileImage"/>
                </div>
                 <h3 className="logo">Galla JayaPrakash</h3>
                 </Link>
                
                <ul className={isMobile ? "nav-link-mobile":"navLinks"}
                 onClick={() =>setIsMobile(false)}
                >
                    <div className="socilaIcons">
                        <Link to=""><FaTwitter className="faTwitter"/></Link>
                        <Link to=""> <FaFacebookF className="faFacebookF"/></Link>
                        <Link to=""><FaInstagramSquare className="faInstagramSquare"/></Link>
                        <Link to=""><FaSkype className="faSkype"/></Link>
                        <Link to=""><FaLinkedinIn className="faLinkedinIn"/></Link>
                    </div>
                   <li className="mt4"><Link to="/" className="home"><HiHome  className={`iconUser ${splitLocation[1] === '' ? 'active' : ''}`} /> Home</Link></li> 
                   <li><Link to="/about" className="about"><BiUser className={`iconUser ${splitLocation[1] === "about" ? "active" : ""}`} /> About Us</Link></li>
                   <li><Link to="/resume" className="resume"><RiFilePaperLine className={`iconUser ${splitLocation[1] === "resume" ? "active" : ""}`}/> Resume</Link></li>
                   <li><Link to="/portfolio" className="portfolio"><CgMenuBoxed className={`iconUser ${splitLocation[1] === "portfolio" ? "active" : ""}`}/> Portfolio</Link></li>
                   <li><Link to="/services" className="services"><RiServiceLine className={`iconUser ${splitLocation[1] === "services" ? "active" : ""}`}/> Services</Link></li>
                </ul>
                <button className="mobile-menu-icon" onClick={() =>setIsMobile(!isMobile)}>
                    {
                       isMobile ? (<FaTimes/>):(<FaBars/>)
                    }
                </button>
            </nav>
            <FooterCom/>
        </header>
    )
}

export default HeaderCom
