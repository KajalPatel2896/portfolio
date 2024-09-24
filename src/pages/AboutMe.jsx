import '../styles/AboutMe.css';
import profileImage from '../assets/profile.jpeg'; // Update the path to your image
import resumePDF from '../assets/kajal_patel.pdf';

function AboutMe() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
                <img src={profileImage} alt="Your Name" className="profile-image" />
                <div className="about-text">
                    <h2>Kajal Patel</h2> {/* Replace with your legal name */}
                    <p>
                        I am a passionate web developer with a love for creating dynamic and responsive web applications.
                        My journey in web development started when I discovered the power of code to bring ideas to life.
                        I enjoy tackling challenges and continuously learning new technologies to enhance my skills.
                    </p>
                    <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-link">
                        Download My Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
