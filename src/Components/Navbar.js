import React from "react";
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="flex justify-between bb b--white-10 bg-light-">
            <div className="flex-grow pa2 flex items-center ">
                <a className="f5 link dib white dim mr3 mr4-ns" href="#0">About</a>
                <a className="f5 link dib white dim mr3 mr4-ns" href="#0">Sign In</a>
                <a className="f5 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
            </div>
        </nav>

    );
}
export default Navbar;