
import ScrollAnimation from "react-animate-on-scroll";
import profileImage from "../../assets/profile-image.jpg";
import Icon from "../Icon/Icon";

import { Container } from "./styles";

const About = () => {
  return (
    <Container id="salman">
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
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 100}>
              <Icon type="ReactJs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 100}>
              <Icon type="NextJs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 100}>
              <Icon type="SvelteJs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
              <Icon type="Javascript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <Icon type="NodeJs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <Icon type="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <Icon type="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <Icon type="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 100}>
              <Icon type="TailwindCss" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <Icon type="Sass" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <Icon type="Git" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <Icon type="GitHub" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.18 * 100}>
          <img src={profileImage} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}

export default About;