import React from "react";
import image from "./first.png"

const firstSection = ()=>{
    return (
        <div className="firstWrapper">
            <div className="textContent">
                <h2>Na person wey wan help me with my skills i wan dey follow chat now.</h2>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         av.jdsohf ioeha Lorem Ipsum has</p>
                     <a href="#">Let's roll</a>
            </div>
            <div className="imageSection">
                <img src={image} alt="the welcome image section for Learner's Connect" />
                </div>
        </div>
    )
}

export default firstSection;