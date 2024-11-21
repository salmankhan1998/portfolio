
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
                    <ul className="job-responsibilities">
                        <li>Built dynamic, interactive web applications using React, and Next.js,
                            delivering fast and efficient single-page applications.
                        </li>
                        <li>
                            Utilized Tailwind CSS and MUI to create modular, reusable, and visually
                            appealing UI components that enhance user experience.
                        </li>
                        <li>
                            Developed responsive and user-friendly interfaces with HTML, CSS, and SASS,
                            implementing modern design principles and ensuring cross-browser compatibility.
                        </li>
                        <li>
                            Managed application state with Redux Toolkit and Recoil, optimizing data flow
                            and performance across complex component trees.
                        </li>
                        <li>
                            Integrated GraphQL with Apollo Client for efficient data management, enabling
                            seamless interaction with backend APIs.
                        </li>
                        <li>
                            Leveraged RTK Query and REST API to fetch, cache, and update data in real-time,
                            streamlining API integration for enhanced user experience.
                        </li>
                        <li>
                            Collaborated with cross-functional teams through Scrum or Agile methodology to
                            define project requirements and ensure code quality through unit testing and code reviews.<br />
                        </li>
                        <li>
                            Developed and converted numerous content pages from Dojo to React through CMC along with
                            team leads  for marketing team.
                        </li>
                    </ul>
                    <div className="skills-stack">
                        <span>Skills:</span> React.js · Next.js · TypeScript · Recoil · REST APIs · RTK Query · Jest · Unit Testing · Css module · SASS · Git · GitHub · Gitlab
                    </div>
                </div>
                <div className="experience">
                    <h1 className="job-title">Junior Frontend Developer</h1>
                    <p>BCDApps / Full-time</p>
                    <p className="job-duration">April 2021 - September 2022</p>
                    <p className='address'>Civic Center, Phase 4, Bahria Town · Onsite</p>
                    <ul className="job-responsibilities">
                        <li>Developed dynamic, component-based applications with React, Next.js, and Svelte, optimizing performance and delivering smooth, responsive user experiences.</li>
                        <li>Leveraged Tailwind CSS and Material UI (MUI) to create scalable, consistent, and visually engaging UI components.</li>
                        <li>Designed and implemented responsive and accessible user interfaces using HTML, CSS, and SASS, ensuring pixel-perfect design and cross-browser compatibility.</li>
                        <li>Managed complex application states with Redux, enabling efficient and maintainable state management across multiple components.</li>
                        <li>Integrated GraphQL using Apollo Client to manage data querying and caching, enhancing app performance and data consistency.</li>
                        <li>Leveraged REST APIs, handling asynchronous data fetching and error management to create a seamless data flow.</li>
                        <li>Collaborated closely with designers and backend developers to align UI/UX requirements with business goals, ensuring a cohesive user experience.</li>
                    </ul>
                    <div className="skills-stack">
                        <span>Skills:</span> React.js · Next.js · Svelte · TypeScript · Redux · REST APIs · GraphQL · Tailwind CSS · Ant · SASS · styled-components · HTML5 · Postman · Git · GitHub
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Experience;