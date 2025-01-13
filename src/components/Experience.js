import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";


function Experience(){

    return(
        <div className="wrapper">
            <div id="experience">
                <div className="section-header ">
                    <span className="section-title">experience</span>
                </div>
                <JobList/>

            </div>
        </div>
        
    );
    
}

export default Experience;