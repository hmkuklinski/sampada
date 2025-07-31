import { NavLink } from "react-router-dom";
import {useState, useEffect} from "react";
export default function NavBar(){
    const [isMobile, setIsMobile] = useState(false);
    const [showHamburger, setShowHamburger]= useState(false);
    
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

    //holds the ul for the navbar (with li elements)
    //note: added onclick to close the hamburger options if a link is clicked (so user can see whole page)
    const navbarUL = (
        <ul>
            <li onClick={() => setShowHamburger(false)}><NavLink to="/">Home</NavLink></li>
            <li onClick={() => setShowHamburger(false)}><NavLink to="/projects" >Projects</NavLink></li>
            <li onClick={() => setShowHamburger(false)}><NavLink to="/publications" >Publications</NavLink></li>
            <li onClick={() => setShowHamburger(false)}><NavLink to="/thesis" >Thesis</NavLink></li>
            <li onClick={() => setShowHamburger(false)}>
                <a href="/documents/Sampada Acharya CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </li>
            <li onClick={() => setShowHamburger(false)}><NavLink to="/awards" >Awards</NavLink></li>
            <li onClick={() => setShowHamburger(false)}><NavLink to="/community" >Community</NavLink></li>
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
            {navbarUL}
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