import React from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "../Icon/Icon";


export function Portfolio() {

  const dummyData = [
    {
      name: 'FCallendar',
      description: 'Uma aplicação Web realizada durante o Hackathon do programa de formação da FCamara. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.',
      github: '#',
      externalLink: '#',
      stack: ['Node', 'Express', 'MySql', 'Ejs']
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
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Icon type="GitHub" />
                    </a>
                    <a href={project.externalLink} target="_blank" rel="noreferrer">
                      <Icon type="ExternalLink" />
                    </a>
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