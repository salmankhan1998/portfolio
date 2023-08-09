import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";
import Button from "../Button";

import Curriculo from "../../assets/SalmanResume.pdf";
export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>S.K</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" className="link" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#sobre" className="link" onClick={closeMenu}>
            About me
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
              CV
            </a>
          </Button>
        </nav>

        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
