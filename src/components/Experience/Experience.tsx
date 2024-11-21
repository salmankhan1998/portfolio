
import { Container } from './styles';

const Experience = () => {
    return (
        <Container id="experience">
            <h2 className='title'>Experience</h2>
            <div className='experiences-wrapper'>
                <div className="experience">
                    <h1 className="job-title">Frontend Developer</h1>
                    <p>Codify Pvt. Ltd / Full-time</p>
                    <p className="job-duration">September 2022 - Present</p>
                    <p className='address'>4th Road, Commercial Market, Rawalpindi · Onsite</p>
                    <div className="job-responsibilities">
                        ●  Built dynamic, interactive web applications using React, and Next.js,
                        delivering fast and efficient single-page applications. <br />
                        ●  Utilized Tailwind CSS and MUI to create modular, reusable, and visually
                        appealing UI components that enhance user experience. <br />
                        ●  Developed responsive and user-friendly interfaces with HTML, CSS, and SASS,
                        implementing modern design principles and ensuring cross-browser compatibility.<br />
                        ●  Managed application state with Redux Toolkit and Recoil, optimizing data flow
                        and performance across complex component trees. <br />
                        ●  Integrated GraphQL with Apollo Client for efficient data management, enabling
                        seamless interaction with backend APIs.<br />
                        ●  Leveraged RTK Query and REST API to fetch, cache, and update data in real-time,
                        streamlining API integration for enhanced user experience.
                        ●  Collaborated with cross-functional teams through Scrum or Agile methodology to
                        define project requirements and ensure code quality through unit testing and code reviews.<br />
                        ●  Developed and converted numerous content pages from Dojo to React through CMC along with
                        team leads  for marketing team.
                    </div>
                    <div className="skills-stack">
                        <span>Skills:</span> React.js · Next.js · TypeScript · Recoil · REST APIs · RTK Query · Jest · Unit Testing · Css module · SASS · Git · GitHub · Gitlab
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Experience;