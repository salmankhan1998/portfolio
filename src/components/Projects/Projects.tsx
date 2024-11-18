import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "../Icon/Icon";

import { Container } from "./styles";

const Projects = () => {

  const dummyData = [
    {
      name: 'Basspro Shops',
      description: "I contributed to the enhancement of the Bass Pro Shops e-commerce platform using Next.js, focusing on building responsive and user-friendly interfaces. My work involved optimizing the performance of product pages, streamlining navigation, and integrating real-time updates for promotions and inventory. By ensuring cross-device compatibility and collaborating with backend teams, I helped deliver a seamless shopping experience for one of the leading outdoor recreation retailers.",
      github: '',
      externalLink: 'https://www.basspro.com',
      stack: ['NextJs', 'Recoil', 'Typescript', 'Sass']
    },
    {
      name: 'Sailplan',
      description: 'Contributed to the front-end development of SailPlan, a maritime analytics platform that leverages IoT and digital twin technology for fleet performance optimization. Built and enhanced responsive user interfaces using React.js, enabling real-time data visualization for vessel tracking, emissions monitoring, and predictive maintenance insights. Focused on delivering a seamless user experience to support maritime operators in improving operational efficiency and regulatory compliance.',
      github: '',
      externalLink: 'https://app.sailplan.ai/',
      stack: ['React', 'Typescript', 'Redux Toolkit', 'RTK Query', 'CSS(Sass) Module']
    },
    {
      name: 'Github Searcher',
      description: 'Uma aplicação Web realizada durante o Hackathon do programa de formação da FCamara. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.',
      github: 'https://github.com/joaotuliojt/github-search',
      externalLink: 'https://github-search-blond.vercel.app/',
      stack: ['React', 'Typescript', 'Styled-Components']
    },
    {
      name: 'Sunnyside agency',
      description: 'Uma aplicação Web realizada durante o Hackathon do programa de formação da FCamara. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.',
      github: 'https://joaotuliojt.github.io/sunnyside-agency/',
      externalLink: '#',
      stack: ['Html', 'Css', 'Javascript']
    }
  ]
  return (
    <Container id="projects">
      <h2>Projects</h2>

      <div className="projects">
        {dummyData.map((project) => (
          <React.Fragment key={project.name}>
            <ScrollAnimation animateIn="flipInX">
              <div className="project">
                <header>
                  <Icon type="FolderIcon" />
                  <div className="project-links">
                    {project.github && (<a href={project.github} target="_blank" rel="noreferrer">
                      <Icon type="GitHub" color="#FFFFFF" width="26" height="26" />
                    </a>)}
                    {project.externalLink && (<a href={project.externalLink} target="_blank" rel="noreferrer">
                      <Icon type="ExternalLink" />
                    </a>)}
                  </div>
                </header>
                <div className="body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    {project.stack.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          </React.Fragment>))}
      </div >
    </Container >
  );
}

export default Projects;