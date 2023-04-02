// Import Hooks
import { useState, useEffect } from "react";
// Import Bootstrap Components
import { Nav, Navbar, Container } from "react-bootstrap";
// Import Assets
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  // Hook state for NavLinks
  const [activeLink, setActiveLink] = useState("home");
  // Hook state for if user scrolled
  const [scrolled, setScrolled] = useState(false);

  // Update current NavLink
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // Triggered once scroll starts
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Add to EventListener
    window.addEventListener("scroll", onScroll);
    // Remove EventListener as well when components gets removed from the DOM
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* Navbar Brand Logo */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Navbar Toggler (when viewport is small) */}
        <Navbar.Toggle aria-controls="navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Nav Lists */}
        <Navbar.Collapse id="navbar-nav">
          {/* Basic Nav Links */}
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          {/* Social Nav Links */}
          <span className="navbar-text">
            {/* Icons */}
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="social link icon 1" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="social link icon 2" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="social link icon 3" />
              </a>
            </div>
            {/* Connect Button */}
            <button className="connect-btn">
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
