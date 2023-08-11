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
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Salman, a proficient and dedicated Front-end Developer from
            Rawalpindi, Pakistan, stands out with a strong academic background.
            Having successfully completed the Matric Examination at SLS
            Montessori and High School Rawalpindi and the FSC Examination at 502
            Modal College Rawalpindi, he further honed his skills through a
            Bachelor's degree in Software Engineering from NUML University
            Islamabad.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            With a wealth of experience in website and application development,
            Salman specializes in crafting seamless user experiences using HTML,
            CSS, and JavaScript. He is well-versed in efficiently implementing
            provided layouts while continuously enhancing his abilities with
            each project undertaken.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            Driven by a relentless pursuit of excellence, Salman's work ethic is
            characterized by his unwavering commitment to achieving optimal
            results. As a result-oriented professional, he consistently strives
            to deliver the best possible outcomes, ensuring client satisfaction
            and project success.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.8 * 1000}>
          <p>
            Passionate about his craft, Salman's front-end portfolio showcases
            his expertise, growth mindset, and determination to create impactful
            digital solutions that leave a lasting impression.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
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
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
