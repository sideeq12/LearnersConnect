import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavLinks from "../NavLink/navLink";
import "./template.css"


const TemplateList =()=>{
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <h2>Template List table here</h2>
            </div>
    )
}

export default TemplateList;