import React from "react";
import FirstSection from "./sub_landing";
import LandNav from "./LandNav";
import "./LandingPage.css"
import SecondSection from "./secondSection";
import WorkFlow from "./WorkFlow";

const LandingPage = ()=>{
    return (
        <div>
        <div className="Wrapper">
            <LandNav />
            <FirstSection />
            </div>
            <SecondSection />
            <WorkFlow />
            </div>
    )
}

export default LandingPage;