import React from "react";
import {Link } from "react-router-dom";
import "./nav.css"

const NavStyle = ()=>{
    return (
        <div className="homeNav">
        <nav>Leaner'sConnect </nav>
        <ul>
        <li><Link to="/">Enroll</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact Us.</Link></li>
        </ul>
        </div>
    )
}

export default NavStyle;