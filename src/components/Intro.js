import React from "react";
import "../styles/Intro.css";
import FractalTree from "./FractalTree";

function Intro(){
    return(
        <div className="wrapper">
            <div id="home">
                 <div className ="intro">
                    <FractalTree></FractalTree> 
                        <span className="intro-name">{"sami hassan"}</span> 
                    
                    <div className="intro-desc">
                    i'm a student from ottawa, canada. check out some of
                    my previous work + past experiences in this portfolio site.
                    </div>
                    
                </div>
            </div>
            
        </div>
            
        );
    
}

export default Intro;