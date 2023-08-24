import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import Button from "../Button";
import Icon from "../Icon/Icon";
export function Hero() {
  return (
    <Container id="home" className="home">
      <div className="hero-text">
        {/* <ScrollAnimation animateIn="fadeInUp"> */}
        <p>Hello 👋, I'm</p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
        <h1>Salman Khan</h1>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> */}
        <h3>Front-end Developer</h3>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> */}
        <p className="small-resume">
          I'm Software Engineer having expertise in Front-end Web
          Developement.
        </p>
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}> */}
        <BrowserRouter>
          <Button variant="primary" size="medium">
            <NavHashLink smooth to="#contact">
              Contact
            </NavHashLink>
          </Button>
        </BrowserRouter>
        {/* </ScrollAnimation> */}
      </div>
      <div className="hero-image">
        {/* <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}> */}
        <div className="illustration-image">
          <Icon type='Illustration' />
        </div>
        {/* </ScrollAnimation> */}
      </div>
    </Container>
  );
}
