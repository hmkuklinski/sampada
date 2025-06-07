import { NavLink } from "react-router-dom";
export default function NavBar(){
    return (
        <div className="navbar-container">
            <div className="navbar-name">
                <NavLink to="/"><h2>Sampada Acharya</h2></NavLink>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><NavLink to="/projects" >Projects</NavLink></li>
                    <li><NavLink to="/publications" >Publications</NavLink></li>
                    <li><NavLink to="/thesis" >Thesis</NavLink></li>
                    <li><NavLink to="/cv" >CV</NavLink></li>
                    <li><NavLink to="/awards" >Awards</NavLink></li>
                    <li><NavLink to="/community" >Community</NavLink></li>
                </ul>
            </div>
        </div>
    );
}