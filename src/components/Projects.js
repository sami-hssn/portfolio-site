import React from "react";
import "../styles/Projects.css";
import ExternalLinks from "./ExternalLinks";

function Projects(){

    const projects = {
      "StyleSync": {
          desc:
            "Your virtual closet app. Honours project in the works. Currently working on prototyping.",
          techStack: "Figma, HTML5, CSS5, JavaScript, Android Studio, Firebase",
          link: "https://github.com/yasssami/CSI4142",
        },
        "Exploratory Data Analysis": {
          desc:
            "Analyzing the “story” behind data by choosing top insights to highlight and supporting them through data analysis.",
          techStack: "Python (Numpy, Pandas, Seaborn), Jupyter Notebook",
          link: "https://github.com/yasssami/CSI4142",
        },
        "Audio.fm Website": {
          desc:
            "A website for a fictitious music sharing platform. My first project with React, you can check out my design choices as well!",
          techStack: "React, Bootstrap, HTML5, CSS3, JavaScript",
          link: "https://github.com/sami-hssn/audiofm",
        },
        "Graduate Admission Management System": {
          desc:
            "Case study for SEG 3101, requirement elicitation, mockups, personas, use cases.",
          techStack: "Figma",
          link: "https://github.com/sami-hssn/seg3101-gams-management",
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
