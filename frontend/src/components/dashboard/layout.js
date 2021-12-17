import React from "react";
import "./layout.css"
import Avatar from "./avatar.jpg"
const DashboardLayout = ()=>{
    return (
        <div className="layout">
            <div className="userDetails">
                <img src={Avatar} alt="user avatar" />
                <p>
                    Waheed Sodiq <br/>
                    Frontend Developer
                </p>
            </div>
            <div className="tagsection">
                My tags
            </div>
            <div className="skillList">
                My skill list
            </div>
        </div>
    )
}

export default DashboardLayout;