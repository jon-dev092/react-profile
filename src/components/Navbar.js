import { Link } from "react-router-dom";
 
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Jonathan Perez</h1>
            <div className="links">
                <Link to="/">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
     );
}
export default Navbar;