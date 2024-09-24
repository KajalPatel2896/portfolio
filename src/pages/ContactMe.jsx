import '../styles/ContactMe.css';

function ContactMe() {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        window.location.href = '/'; // Redirect to home page
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <div className="contact-info">
                <h2>My Contact Information</h2>
                <p><strong>Email:</strong> kajallpatel@gmail.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Contact Number</label>
                    <input type="tel" id="phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
}

export default ContactMe;
