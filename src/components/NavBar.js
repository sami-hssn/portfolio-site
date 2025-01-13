import React, { useEffect, useState } from "react";
import "../styles/NavBar.css";
import { HamburgerIcon, GitHubIcon, LinkedInIcon, EmailIcon, ExitIcon } from "./svg";
import LogoSH from "../media/logoSH2.png";

const NavBar = () => {

  const [ isButtonClicked, setIsButtonClicked ] = useState( false );

  useEffect( () => {
    console.log(isButtonClicked)
  }, [ isButtonClicked ]) 

  return (
    <nav>
      <div className="navbar wrapper">
        <ul>
          <li>
            <a href="/">
              <img className="logo" src={LogoSH} alt="Logo"/>
            </a>
          </li>
          <div className="navbar-pages">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </div>
          <div className="navbar-links">
            <li>
              <a href="mailto:shass117@uottawa.ca">
                <EmailIcon iconSize={22}/>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/sami-hssn">
                <GitHubIcon iconSize={22}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sami-hassan-84116b244/">
                <LinkedInIcon iconSize={22}/>
              </a>
            </li>
            
          </div>
          <li>
              <button className="navbar-hamburger"
              onClick={ () => setIsButtonClicked( !isButtonClicked ) }
              >
                <HamburgerIcon iconSize={20}/>
              </button>
            </li>
        </ul>
      </div>
      { isButtonClicked ? 
          <ul className="navbar-mobile">
            <div className="wrapper">
              <div className="navbar-mobile-pages">
                <li>
                  <a href="#home">Intro</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>  
                <div className="navbar-mobile-links">
                  <li>
                    <a href="mailto:shass117@uottawa.ca">
                      <EmailIcon iconSize={20}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.github.com/sami-hssn">
                      <GitHubIcon iconSize={20}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sami-hassan-84116b244/">
                      <LinkedInIcon iconSize={20}/>
                    </a>
                  </li>
                  <li>
                    <button onClick={()=> setIsButtonClicked (!isButtonClicked)}  className="exitBtn">
                      <ExitIcon />
                    </button>
                  </li>
                </div>
              </div>
              
              
            </div>

            
          </ul>
          : 
          <></>
      }
    </nav>
  );
};

export default NavBar;
