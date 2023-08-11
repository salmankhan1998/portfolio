import { Container } from "./styles";

import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Salman</span>
        <span>Khan</span>
      </a>
      <div>
        <p>Copyright &copy; 2022-23 | All Rights Reserved</p>
      </div>

      <div className="social-media">
        <a href="#" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
