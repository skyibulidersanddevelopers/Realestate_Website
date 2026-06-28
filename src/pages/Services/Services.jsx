import React, { useEffect } from 'react';
import SEO from '../../components/SEO/SEO';
import './Services.css';
import ServicesHeroImage from '../../assets/impressive_services_bg.png'; 
import Logo from '../../assets/logo2.png';
import WwdBgImage from '../../assets/hero_desktop_building_v6.png';
import WwdResImage from '../../assets/hero_desktop_building_v6.png';
import WwdCommImage from '../../assets/hero_desktop_building_v4.png';
import WwdPlanImage from '../../assets/hero_desktop_building_v5.png';
import WwdVastuImage from '../../assets/hero_desktop_building_v3.png';
import WwdLayoutImage from '../../assets/hero_desktop_building_v2.png';
import WwdInteriorImage from '../../assets/luxury_interior_renovation.png';
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider';

const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.skyibuildersanddevelopers.com/services#webpage",
  "name": "Our Services — SKYi Builders & Developers",
  "url": "https://www.skyibuildersanddevelopers.com/services",
  "description": "SKYi Builders & Developers offers residential construction, commercial projects, planning & design, Vastu consultation, layout development and interior renovation services.",
  "isPartOf": { "@id": "https://www.skyibuildersanddevelopers.com/#website" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.skyibuildersanddevelopers.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.skyibuildersanddevelopers.com/services" }
    ]
  }
};

const Services = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 10);
  }, []);

  return (
    <div className="services-page">
      <SEO
        title="Build Your Dream Home | Villas, Apartments & Construction in Hosur"
        description="From concept to keys — SKYi Builders & Developers offers complete real estate services: Residential Construction, Luxury Villas, 2 & 3 BHK Apartments, Commercial Projects, Architectural Planning, Vastu Consultation and Premium Interior Design in Hosur."
        canonical="/services"
        keywords="Construction Services Hosur, Build Villa Hosur, Residential Construction Hosur, Commercial Projects Hosur, Architectural Planning, Vastu Consultation Hosur, Interior Design Hosur, Layout Development, Real Estate Services Hosur, Dream Home Builder"
        schemaData={SERVICES_SCHEMA}
      />

      {/* NEW HERO SECTION INSPIRED BY REFERENCE */}
      <section className="services-hero-glass">
        <div className="hero-glass-bg">
           <img src={ServicesHeroImage} alt="SKYi Builders & Developers premium construction services — residential, commercial and interior projects in Hosur" />
        </div>
        
        <div className="hero-glass-content-wrapper">
          <div className="hero-content-raw">
            <div className="hero-subtitle">
              <span className="hero-line"></span>
              PREMIUM REAL ESTATE
            </div>
            
            <h1 className="hero-title">
              <span className="text-white">Our</span><br />
              <span className="text-gold">Services</span>
            </h1>
            
            <p className="hero-description">
              From visionary architectural planning and meticulous construction to bespoke interior design — SKYi delivers unparalleled excellence. We don't just build properties; we craft homes that elevate your lifestyle.
            </p>
            
            <div className="hero-tags">
              <span className="hero-tag">PLANNING</span>
              <span className="hero-tag">CONSTRUCTION</span>
              <span className="hero-tag">INTERIORS</span>
            </div>
          </div>
          
          <div className="hero-image-right">
            <img src={Logo} alt="SKYi Builders & Developers — Trusted Real Estate Company Logo" />
          </div>
        </div>

      </section>

      {/* WHAT WE DO SECTION (IMAGE DESIGN) */}
      <section className="what-we-do-section" style={{ backgroundImage: `url(${WwdBgImage})` }}>
        <div className="wwd-dark-overlay"></div>
        
        <div className="container wwd-container">
          <div className="wwd-header-new">
            <svg viewBox="0 0 24 24" className="wwd-top-icon" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 22V12h8v10"></path>
              <path d="M12 12V4"></path>
              <path d="M12 4L8 8"></path>
              <path d="M12 4l4 4"></path>
            </svg>
            <h2>What We <span>Do</span></h2>
            <div className="wwd-divider">
              <div className="wwd-diamond"></div>
            </div>
            <p>Our strength lies in offering complete solutions under one roof.<br />From planning to interiors, every service is tailored to suit<br />the unique needs of each client.</p>
          </div>
          
          <div className="wwd-grid-new">
            <div className="wwd-card-new">
              <div className="wwd-card-content">
                <div className="wwd-icon-new">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                <h3>Residential<br />Construction</h3>
                <p>Building dream homes with quality, transparency & timely delivery.</p>
              </div>
              <div className="wwd-card-image" style={{ backgroundImage: `url(${WwdResImage})` }}>
                <div className="wwd-card-arrow">
                </div>
              </div>
            </div>
            
            <div className="wwd-card-new">
              <div className="wwd-card-content">
                <div className="wwd-icon-new">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                  </svg>
                </div>
                <h3>Commercial<br />Projects</h3>
                <p>Creating functional and future-ready commercial spaces.</p>
              </div>
              <div className="wwd-card-image" style={{ backgroundImage: `url(${WwdCommImage})` }}>
                <div className="wwd-card-arrow">
                </div>
              </div>
            </div>
            
            <div className="wwd-card-new">
              <div className="wwd-card-content">
                <div className="wwd-icon-new">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <path d="m2 22 1-1h3l9-9"></path>
                    <path d="M22 2h-5l-4.5 4.5 5 5L22 7Z"></path>
                  </svg>
                </div>
                <h3>Planning &<br />Designing</h3>
                <p>Smart planning and innovative designs that bring ideas to life.</p>
              </div>
              <div className="wwd-card-image" style={{ backgroundImage: `url(${WwdPlanImage})` }}>
                <div className="wwd-card-arrow">
                </div>
              </div>
            </div>
            
            <div className="wwd-card-new">
              <div className="wwd-card-content">
                <div className="wwd-icon-new">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                  </svg>
                </div>
                <h3>Vastu<br />Consultation</h3>
                <p>Vastu-compliant solutions for harmony, positivity and prosperity.</p>
              </div>
              <div className="wwd-card-image" style={{ backgroundImage: `url(${WwdVastuImage})` }}>
                <div className="wwd-card-arrow">
                </div>
              </div>
            </div>
            
            <div className="wwd-card-new wwd-card-wide">
              <div className="wwd-card-content-row">
                <div className="wwd-icon-new">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <div className="wwd-text-row">
                  <h3>Layout Development</h3>
                  <p>Efficient space utilization with well-structured and practical layouts.</p>
                </div>
              </div>
              <div className="wwd-card-image" style={{ backgroundImage: `url(${WwdLayoutImage})` }}>
                <div className="wwd-card-arrow">
                </div>
              </div>
            </div>
            
            <div className="wwd-card-new wwd-card-wide">
              <div className="wwd-card-content-row">
                <div className="wwd-icon-new">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="wwd-text-row">
                  <h3>Interiors & Renovation</h3>
                  <p>Elegant interiors and seamless renovations to elevate every space.</p>
                </div>
              </div>
              <div className="wwd-card-image" style={{ backgroundImage: `url(${WwdInteriorImage})` }}>
                <div className="wwd-card-arrow">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYI SECTION (GLASSMORPHISM) */}
      <section className="why-choose-section">
        {/* Background Decorative Elements */}
        <div className="wwd-bg-orb orb-1"></div>
        <div className="wwd-bg-orb orb-2"></div>
        
        <div className="container">
          <div className="why-choose-header">
            <h2>Why Choose SKYi</h2>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-content glass-panel-horizontal">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <div className="timeline-text">
                  <h3>Detailed Portfolio</h3>
                  <p>All-in-one project documentation covering plans, structural details, 3D models, and working drawings-prepared in advance for error-free execution.</p>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-content glass-panel-horizontal">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="m9 15 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="timeline-text">
                  <h3>Design Approval</h3>
                  <p>Work starts only after clients approve the portfolio with complete confidence.</p>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-content glass-panel-horizontal">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="timeline-text">
                  <h3>Quality Checklist</h3>
                  <p>Our site engineers follow a strict checklist with over 200+ points, ensuring precision from excavation to finishing.</p>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-content glass-panel-horizontal">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="timeline-text">
                  <h3>Custom Options</h3>
                  <p>Clients can select from multiple structured packages, designed to suit different budgets and specific requirements.</p>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-connector"></div>
              <div className="timeline-content glass-panel-horizontal">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
                <div className="timeline-text">
                  <h3>Specifications</h3>
                  <p>Once a package is chosen, we provide a clear specification sheet outlining materials, finishes, and inclusions in detail.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-choose-footer">
            <p>With every promise backed by official documentation, every detail is tailored to the client, ensuring confidence before construction begins.</p>
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY SECTION (GLASSMORPHISM) */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>What Our Clients Say</h2>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default Services;
