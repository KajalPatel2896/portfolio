import '../styles/Home.css';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div className="home">
            <main className="main-section">
                <h1>Welcome to My Portfolio</h1>
                <p>Hello! I'm Kajal Patel, a passionate web developer.</p>

                    <p>
                        My mission is to create impactful and efficient web applications that provide seamless user experiences.
                        I am dedicated to continuous learning and improvement, ensuring that every project I work on contributes
                        to a better, more connected digital world.
                    </p>

                <div className="button-container">
                    <a href="https://www.linkedin.com/in/kajal-patel-2b18751b4/" target="_blank" rel="noopener noreferrer" className="btn">
                        LinkedIn
                    </a>
                    <a href="mailto:kajolpatel28@gmail.com" className="btn">
                        Email Me
                    </a>
                </div>
            </main>
        </div>
    );
}

export default Home;
