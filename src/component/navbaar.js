import { NavLink } from "react-router-dom";
import BreadCump from "./breadcump";

const Navbar = () =>{
    return(
        <>
          <header>
        <nav>
            <h1>Logo</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink to="careers">Careers</NavLink>
        </nav>
        <BreadCump/>
    </header>

        </>

    )
}

export default Navbar;