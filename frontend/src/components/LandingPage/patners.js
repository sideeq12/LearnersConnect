import React from "react";
import "./partners.css"
import tutorial from "./tutorial.png"

const Partners = ()=>{
    return (
        <section className="partners">
            <h2>PARTNERSHIP</h2>
            <div className="partnerList">
                <div className="partnerImage">
                    <img src={tutorial} alt="partners Learners Connect" />
                    <h3>BestBrain Tutorial</h3>
                </div>
                <div className="partnerImage">
                    <img src={tutorial} alt="partners Learners Connect" />
                    <h3>Digi-Tech skill Ltd.</h3>
                </div>
                <div className="partnerImage">
                    <img src={tutorial} alt="partners Learners Connect" />
                    <h3>Digi-Tech skill Ltd.</h3>
                </div>
            </div>
        </section>
    )
}

export default Partners;