import '../styles/Projects.css';
import projectOneImage from '../assets/project-1.jpg'; // Import images
import projectTwoImage from '../assets/project-2.jpg';
import projectThreeImage from '../assets/project-3.jpg';

function Projects() {
    const projectsList = [
        {
            title: 'Project One',
            description: 'Developed a responsive web application using React and Node.js, enhancing user engagement by 30%.',
            image: projectOneImage, // Use the imported image
            role: 'Lead Developer',
            outcome: 'Successfully launched and received positive user feedback.'
        },
        {
            title: 'Project Two',
            description: 'Created a mobile application for both iOS and Android platforms using React Native, increasing app downloads by 50%.',
            image: projectTwoImage,
            role: 'Mobile Developer',
            outcome: 'Achieved high user satisfaction and ratings on app stores.'
        },
        {
            title: 'Project Three',
            description: 'Implemented a RESTful API for a major e-commerce platform, improving response times and scalability.',
            image: projectThreeImage,
            role: 'Backend Developer',
            outcome: 'Significantly enhanced performance and reduced downtime.'
        },
    ];

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projectsList.map((project, index) => (
                    <div className="project-box" key={index}>
                        <div className="img-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <h2>{project.title}</h2>
                        <p><strong>Role:</strong> {project.role}</p>
                        <p>{project.description}</p>
                        <p><strong>Outcome:</strong> {project.outcome}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
