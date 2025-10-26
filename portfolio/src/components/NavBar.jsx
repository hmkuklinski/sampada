import { NavLink } from "react-router-dom";
import {useState, useEffect} from "react";
import { sampadaMobile, sampadaNav } from "../sampadaInfo";
export default function NavBar(){
    const [isMobile, setIsMobile] = useState(false);
    const [showHamburger, setShowHamburger]= useState(false);
    const [showDropdown, setShowDropdown]= useState(false);
    
    //check if the user is on mobile:
    useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    //toggles the menu options display:
    const toggleHamburger=()=>{
        setShowHamburger(prev =>!prev);
    }

    const toggleShowDropdown=()=>{
        setShowDropdown(prev => !prev);
    }

    const cvLi = ( 
        <li onClick={() => setShowHamburger(false)}>
            <a href="/documents/Sampada Acharya CV.pdf" download rel="noopener noreferrer">CV</a>
        </li>
    );

    const achievementsLi = (
        <li className="dropdown" onClick={() => toggleShowDropdown()}>
            <NavLink to="">Achievements</NavLink>
            <ul className="dropdown-menu" style={{display:showDropdown? "flex":"none"}}>
                <li><NavLink to="/awards">Awards</NavLink></li>
                <li><NavLink to="/certifications">Certifications</NavLink></li>
            </ul>
        </li>
    );
    //holds the ul for the navbar (with li elements)
    //note: added onclick to close the hamburger options if a link is clicked (so user can see whole page)
    const navbarUL = (
        <ul>
            {sampadaNav.slice(0,2).map((nav)=>(
                <li onClick={() => setShowHamburger(false)}><NavLink to={nav.link}>{nav.text}</NavLink></li>
            ))}
            {cvLi}
            {achievementsLi}
            <li onClick={() => setShowHamburger(false)}><NavLink to="/community" >Community</NavLink></li>
        </ul>
    );
    const navbarMobileUL = (
        <ul>
            {sampadaNav.slice(0,2).map((nav)=>(
                <li onClick={() => setShowHamburger(false)}><NavLink to={nav.link}>{nav.text}</NavLink></li>
            ))}
            {sampadaMobile.map((nav)=>(
                 <li onClick={() => setShowHamburger(false)}><NavLink to={nav.link}>{nav.text}</NavLink></li>
            ))}
        </ul>
    );

    //hamburger menu option for mobile:
    const mobileBtn = (
        <div className="nav-button">
            <button className="hamburger" onClick={toggleHamburger}>☰</button>
        </div>
    );

    //holds the name/home link:
    const navbarName = (
        <div className="navbar-name">
            <NavLink to="/"><h2>Sampada Acharya</h2></NavLink>
        </div>
    );

    //mobile display:
    if (isMobile){
        return (
        <nav className="navbar-container">
            {navbarName}
            {mobileBtn}
            <div className="nav-links" style={{display: showHamburger? "block": "none"}}>
            {navbarMobileUL}
            </div>
        </nav>
        )
    }
    //desktop or tablet view:
    return (
        <div className="navbar-container">
            {navbarName}
            <div className="navbar-links">
                {navbarUL}
            </div>
        </div>
    );
}