import React from "react";
import FirstNav from "./firstNav";

const LoginDetails = ()=>{
    return(
        <div className="login">
            <FirstNav />
            <h2>Welcome Back</h2>
            <h4>Login to your account </h4>
        <form>
            <label>Email address :</label> <br/>
            <input type="email" placeholder="example@oauife.edu.ng" required /> <br/>
            <label>Password : </label> <br/>
            <input type="password" placeholder="******" required /> <br/>
            <button type="submit" value="submit">Login</button>
        </form>
         Don't have an account ? <a href="#">Sign up here</a>
        </div>
    )
}

export default LoginDetails;