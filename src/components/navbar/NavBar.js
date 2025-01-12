import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { HamburgerIcon, GitHubIcon, LinkedInIcon, EmailIcon, ExitIcon } from "../svg";
import LogoSH from "../../media/logoSH.png";

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
            <a href="#Intro">
              <img className="logo" src={LogoSH}/>
            </a>
          </li>
          <div className="navbar-pages">
            <li>
              <a href="#Intro">Intro</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
          </div>
          <div className="navbar-links">
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
              <a href="https://www.linkedin.com">
                <LinkedInIcon iconSize={20}/>
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
                  <a href="#Intro">Intro</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Experience">Experience</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
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
                    <a href="https://www.linkedin.com">
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
