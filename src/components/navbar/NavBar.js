import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
import { Email, GitHub, LinkedIn } from "../svg.js";

const NavBar = () => {


  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand>
        <a href="/" className="logo">
          <img src="../media/logoSH.png" alt="Logo" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as='home'
            to="/"
          >
            /home
          </Nav.Link>
          <Nav.Link
            as='about'
            to="/about"
          >
            /about
          </Nav.Link>
          <Nav.Link
            as='skills'
            to="/skills"
          >
            /skills
          </Nav.Link>
          <Nav.Link
            as='experience'
            to="/experience"
          >
            /experience
          </Nav.Link>
          <Nav.Link
            as='projects'
            to="/projects"
          >
            /projects
          </Nav.Link>
        </Nav>
        <div className="social-icons">
          <a href="mailto:your-email@example.com">
            <Email />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
