import React from "react";
import { GitHubIcon } from "./svg";

function ExternalLinks(props) {
  
    return (
      <span className="external-links">
        <a className="github-icon" href={props.githubLink}>
          <GitHubIcon iconSize={20}/>
        </a>
      </span>
    );
    
}

export default ExternalLinks;