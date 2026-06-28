import React, { useState } from 'react';
import SEO from '../../components/SEO/SEO';
import './Contact.css';
import ContactHeroImage from '../../assets/skyi-builders-commercial-project-bangalore.webp';
import hosurMapImg from '../../assets/skyi-builders-office-location-map-hosur-tamil-nadu.webp';

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.skyibuildersanddevelopers.com/contact#webpage",
  "name": "Contact SKYi Builders & Developers",
  "url": "https://www.skyibuildersanddevelopers.com/contact",
  "description": "Get in touch with SKYi Builders & Developers in Hosur, Tamil Nadu. Call +91 89251 14477 or visit our sales office at Plot No.41, Rajendra Nagar, O.Karapalli, Hosur.",
  "isPartOf": { "@id": "https://www.skyibuildersanddevelopers.com/#website" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.skyibuildersanddevelopers.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.skyibuildersanddevelopers.com/contact" }
    ]
  }
};

// ─── Web3Forms Configuration ─────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'bf86c54d-8087-4e37-8fcd-374e02186e36';
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const payload = {
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          phone: formData.phone,
          subject: formData.subject || 'New Enquiry from SKYi Builders Website',
          ...(formData.email && { email: formData.email }),
          ...(formData.message && { message: formData.message }),
        };
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  return (
    <div className="contact-page-container">
      <SEO
        title="Book a Free Site Visit | Call +91 89251 14477 | Hosur"
        description="Ready to invest? Contact SKYi Builders & Developers today. Book a free site visit to any of our projects in Hosur. Call +91 89251 14477 or visit us at Plot No.41, Rajendra Nagar, O.Karapalli, Hosur. Mon–Sat 9AM–6PM."
        canonical="/contact"
        keywords="Contact SKYi Builders, Book Site Visit Hosur, Real Estate Enquiry Hosur, Property Consultant Hosur, Call Builders Hosur, Free Site Visit Hosur, Buy Villa Hosur, Real Estate Office Hosur, SKYi Builders Phone Number"
        schemaData={CONTACT_SCHEMA}
      />

      {/* Premium Hero Section */}
      <section className="contact-hero-glass">
        <div className="hero-glass-bg">
          <img src={ContactHeroImage} alt="Contact SKYi Builders & Developers — Premium Real Estate in Hosur, Tamil Nadu" />
        </div>

        <div className="contact-glass-content-wrapper">
          <div className="hero-content-raw">
            <div className="hero-subtitle">
              <span className="hero-line"></span>
              CONNECT WITH US
            </div>

            <h1 className="hero-title">
              Get In Touch
            </h1>

            <div className="title-divider-glass">
              <span className="divider-line-glass"></span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="diamond-icon">
                <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="#d89c25" strokeWidth="2" />
                <path d="M12 6L6 12L12 18L18 12L12 6Z" fill="#d89c25" />
              </svg>
              <span className="divider-line-glass"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="contact-main-section">
        <div className="container">

          {/* Info Cards Grid */}
          <div className="contact-info-grid">

            <div className="contact-info-card">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Visit Us</h3>
              <p>Plot No.41, Rajendra Nagar<br />O.Karapalli, Hosur<br />635 109</p>
            </div>

            <div className="contact-info-card active">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>+91 89251 14477</p>
              <span className="available-text">Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>

            <div className="contact-info-card">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>skyibuildershosur<br />@gmail.com</p>
            </div>

          </div>

          {/* Form and Map Split */}
          <div className="contact-split-section">
            <div className="contact-form-wrapper">
              <h2>Send a Message</h2>
              <p className="form-subtitle">We will get back to you</p>

              <form className="luxury-contact-form" onSubmit={handleSubmit} aria-label="Contact form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required aria-required="true" aria-label="Your Name" />
                </div>
                <div className="form-group half-width">
                  <label htmlFor="contact-email" className="sr-only">Email Address</label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" aria-label="Email Address" />
                  <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
                  <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required aria-required="true" aria-label="Phone Number" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject" className="sr-only">Subject</label>
                  <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" aria-label="Subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message" className="sr-only">Your Message</label>
                  <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message (Optional)" rows="5" aria-label="Your Message"></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && (
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                </button>
                {status === 'success' && (
                  <div className="form-status-msg success-msg">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-status-msg error-msg">
                    ❌ Something went wrong. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            <div className="contact-map-wrapper">
              <img src={hosurMapImg} alt="SKYi Builders & Developers sales office location — Plot No.41, Rajendra Nagar, O.Karapalli, Hosur 635109" className="static-map-bg" />
              <div className="custom-map-popup">
                <div className="map-popup-text">
                  <h4>SKYi builder hosur</h4>
                  <p>Hosur, Tamil Nadu</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/frRaboLdcFxjNRws7?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-direction-btn"
                  title="Get Directions"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M21.41 10.59l-8-8c-.78-.78-2.05-.78-2.83 0l-8 8c-.78.78-.78 2.05 0 2.83l8 8c.78.78 2.05.78 2.83 0l8-8c.78-.79.78-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
