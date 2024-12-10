import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "../Icon/Icon";
import ProjectsData from '../../assets/raw-data/projects.json'

import { Container } from "./styles";

const Projects = () => {
  return (
    <Container id="projects">
      <h2>Projects</h2>

      <div className="projects">
        {ProjectsData.map((project) => (
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