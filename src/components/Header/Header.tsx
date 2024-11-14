import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import Button from "../Button";
import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";
import Curriculo from "../../assets/SalmanResume.pdf";

import { Container } from "./styles";

const Header = () => {
  const [active, setActive] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false)

  const toggleTheme = () => {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
    setIsLightTheme(!isLightTheme);
  }

  const closeMenu = () => {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="Header-logo">
          <img src={isLightTheme ? LogoLight : LogoDark} alt="logo" />
        </HashLink>

        <nav className={active ? "active" : ""}>
          <NavHashLink smooth to="#home" className="link" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#salman" className="link" onClick={closeMenu}>
            About
          </NavHashLink>
          <NavHashLink
            smooth
            to="#projects"
            className="link"
            onClick={closeMenu}
          >
            Projects
          </NavHashLink>
          <NavHashLink
            smooth
            to="#contact"
            className="link"
            onClick={closeMenu}
          >
            Contact
          </NavHashLink>
          <Button variant="primary">
            <a href={Curriculo} download>
              Resume
            </a>
          </Button>
          <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
          />
          <label htmlFor="switch">Toggle</label>
        </nav>

        <div
          aria-expanded={active ? "true" : "false"}
          aria-haspopup="true"
          aria-label={active ? "Fechar menu" : "Abrir menu"}
          className={active ? "menu active" : "menu"}
          onClick={() => {
            setActive(!active);
          }}
        ></div>
      </Router>
    </Container>
  );
}

export default Header;