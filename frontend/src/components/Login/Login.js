import React from "react";
import "./login.css"
import image from "./login.svg"
import LoginDetails from "./loginContent"

const Login = ()=>{
    return (
        <div className="mainLogin">
           <div className="secondLogin">
               <nav>Leaner's connect </nav>
            <img src={image} alt="Login image section for Leaner's connect"/>
           </div>
           <LoginDetails />
        </div>
    )
}

export default Login;