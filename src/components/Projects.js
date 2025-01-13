import React from "react";
import "../styles/Projects.css";
import ExternalLinks from "./ExternalLinks";

function Projects(){

    const projects = {
        "Audio.fm Website": {
          desc:
            "A website for a fictitious music sharing platform. My first project with React.",
          techStack: "React, Bootstrap, HTML5, CSS3, JavaScript",
          link: "https://github.com/sami-hssn/audiofm",
        },
        "Sorting Visualizer": {
          desc:
            "A web application to visualize and demonstrate the functionality of various sorting algorithms in an interactive way.",
          techStack: "HTML5, CSS3, JavaScript, Sass",
          link: "https://github.com/sami-hssn/sorting-visualizer",
        },
        "Old Maid": {
          desc:
            "A card game where the goal is to remove all pairs from the deck and avoid having the odd queen card as your final card.",
          techStack: "Python",
          link:
            "https://github.com/sami-hssn/old-maid-game"
        }
      };
      
    return(
        <div className="wrapper">
            <div id="projects">
                <div className="section-header ">
                    <span className="section-title">projects</span>
                </div>
            </div>
            <div className="project-container">
                <ul className="projects-grid">
                    {Object.keys(projects).map((key, i) => (
                        <li className="projects-card">
                        <div className="card-header">
                            {projects[key]["link"] && (<ExternalLinks
                            githubLink={projects[key]["link"]}
                            />)}
                        </div>
                        <div className="card-title">
                            {key}
                        </div>
                        <div className="card-desc">
                            {projects[key]["desc"]}
                        </div>
                        <div className="card-tech">
                            {projects[key]["techStack"]}
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>  
    );
}

export default Projects;