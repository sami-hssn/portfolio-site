import React from "react";
import "../styles/About.css";
import Me from "../media/me.jpg";


function About(){

    const tech_stack = [
        "Python",
        "React",
        "HTML5",
        "CSS",
        "JavaScript",
        "Java",
        "UE4",
        "Groovy"
      ];

    return(
        <div className="wrapper">
            <div id="about">
                <div className="section-header ">
                    <span className="section-title">about me</span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        I'm currently in my fourth year of my <b>Bachelors of Science  </b> 
                        in <b>Computer Science</b> at the <a href="https://www.uottawa.ca">University of Ottawa</a>.
                        I am interested in all things design, front-end development, human-computer interactions,
                        QA and data science.

                        <div className="stack-intro">
                        Here are some technologies in my toolkit:
                        </div>
                        <ul className="tech-stack">
                            {tech_stack.map(function (tech_item, i) {
                            return (
                                <li>{tech_item}</li>
                            
                            );
                            })}
                        </ul>
                    Outside of work, I collect a lot of smiskis, like to try out new cafes,
                    and carry around my digicam everywhere I go.
                    </div>
                    <div className="about-image">
                    <img alt="Sami Hassan" src={Me} />
                    </div>
                </div>
            </div>
        </div>
            
        );
    
}

export default About;
