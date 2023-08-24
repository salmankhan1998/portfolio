import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";
import Icon from "../Icon/Icon";
import profileImage from "../../assets/profile-image.jpg";

export function About() {
  return (
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 100}>
          <p>
            Welcome to my portfolio! I am a skilled front-end developer experienced in JavaScript,
            React.js, Next.js, Svelte.js, and styling technologies. My work reflects a deep
            understanding of these tools, allowing me to create dynamic web applications with
            seamless user experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 100}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            My proficiency extends to styling with technologies like Styled Components, CSS,
            Sass, Tailwind CSS, Material UI, and Ant Design. These skills enable me to craft
            visually appealing and user-friendly interfaces.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 100}>
          <p>
            I have a strong grasp of state management using Redux and Recoil, and I've enhanced
            code quality and collaboration using TypeScript. My portfolio showcases diverse projects
            that highlight my ability to turn ideas into functional web applications.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 100}>
          <p>
            Thank you for visiting my portfolio. I look forward to the opportunity to contribute my
            skills and expertise to your next project. Let's create something amazing together!
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 100}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 100}>
              <Icon type="ReactJs" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <Icon type="VueJs" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <Icon type="Javascript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <Icon type="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <Icon type="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <Icon type="Sass" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <Icon type="NodeJs" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <Icon type="Typescript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 100}>
          <img src={profileImage} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
