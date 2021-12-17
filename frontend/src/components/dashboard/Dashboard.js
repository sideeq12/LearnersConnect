import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css"


const Dashboard =()=>{
    return (
        <div className="dashboardWrap">
            <div className="dashboard"> Dashboard nav
            <ul>
                <li><Link to="/profile"> nav</Link></li>
                </ul></div>
        </div>
    )
}

export default Dashboard;