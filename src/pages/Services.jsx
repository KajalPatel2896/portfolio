import '../styles/Services.css';
import webImage from '../assets/web.png'; // Import images
import mobileImage from '../assets/mobile.png';
import programmingImage from '../assets/programming.png';
import designImage from '../assets/design.png';

function Services() {
    const servicesList = [
        {
            title: 'Web Development',
            description: 'Building responsive and user-friendly websites.',
            image: webImage, // Use the imported image
        },
        {
            title: 'Mobile App Development',
            description: 'Creating engaging mobile applications for Android and iOS.',
            image: mobileImage,
        },
        {
            title: 'General Programming',
            description: 'Offering programming solutions in various languages.',
            image: programmingImage,
        },
        {
            title: 'UI/UX Design',
            description: 'Designing intuitive and aesthetically pleasing user interfaces.',
            image: designImage,
        },
    ];

    return (
        <div className="services-container">
            <h1>My Services</h1>
            <div className="services-list">
                {servicesList.map((service, index) => (
                    <div className="service-box" key={index}>
                        <img src={service.image} alt={service.title} className="service-image" />
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
