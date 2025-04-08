import "./NavBar.css"
import { Link } from "react-router-dom";




function NavBar() {


    return (
        <header>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/projects">Projects</Link></button>
            <button><Link to="/about">About</Link></button>
        </header>
    )
}








export default NavBar;