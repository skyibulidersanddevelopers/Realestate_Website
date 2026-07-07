import React from 'react';
import ProjectsSection from '../../components/Projects/ProjectsSection';
import SEO from '../../components/SEO/SEO';
import './Home.css';
import hosurMapImg from '../../assets/mapImage.png';

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.skyibuildersanddevelopers.com/#webpage",
  "name": "SKYi Builders & Developers — Home",
  "url": "https://www.skyibuildersanddevelopers.com/",
  "description": "SKYi Builders & Developers — Premium real estate company in Hosur. Explore luxury villas, apartments, residential plots and commercial properties.",
  "isPartOf": { "@id": "https://www.skyibuildersanddevelopers.com/#website" },
  "about": { "@id": "https://www.skyibuildersanddevelopers.com/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.skyibuildersanddevelopers.com/" }]
  }
};

const Home = () => {
  return (
    <div className="home-container">
      <SEO
        description="Trusted Builders in Hosur — Premium Villas, Luxury Apartments, Residential Plots. 150+ Projects Delivered. CREDAI Member. Transparent processes, timely delivery. Book a site visit today."
        canonical="/"
        keywords="Real Estate in Hosur, Builders in Hosur, Luxury Villas Hosur, Apartments in Hosur, Residential Plots, Premium Real Estate, Buy Villas, Buy Flats, Dream Home, Property Investment, SKYi Builders"
        schemaData={HOME_SCHEMA}
      />
      {/* Top section with background image */}
      <div className="hero-section">


        {/* Hero Text */}
        <div className="hero-text-container">
          <div className="script-text">Discover</div>
          <div className="serif-text line-1">Thoughtful</div>
          <div className="serif-text line-2">LIVING</div>
        </div>

      </div>
      {/* Premium Map Section */}
      <section className="map-section">
        <div className="map-content">
          <h2 className="map-heading">Building Trust, Creating Landmarks</h2>
          <p className="map-description">
            Every SKYi project reflects thoughtful design. We bring you the finest real estate solutions designed to elevate your lifestyle and provide a truly premium living experience.
          </p>

          <div className="map-details">
            <div className="map-detail-item">
              <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div className="detail-text">
                <span className="detail-title">Sales Office</span>
                <span className="detail-subtitle">Plot No-41, Rajendra Nagar, O, Karapalli, Hosur, Tamil Nadu 635109 </span>
              </div>
            </div>

            <div className="map-detail-item">
              <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div className="detail-text">
                <span className="detail-title">Office Visit</span>
                <span className="detail-subtitle">Open Daily: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <a href="https://maps.app.goo.gl/frRaboLdcFxjNRws7?g_st=iw" target="_blank" rel="noopener noreferrer" className="map-button">
            View Location
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="map-image-container">
          <img src={hosurMapImg} alt="SKYi Builders & Developers office location map — Plot No.41, Rajendra Nagar, Hosur, Tamil Nadu" className="map-image" />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* <div className="bottom-section">
        <div className="scroll-arrow">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="4" x2="12" y2="20"></line>
            <polyline points="19 13 12 20 5 13"></polyline>
          </svg>
        </div>

        <div className="rera-text">
          PRM/KA/RERA/1250/304/PR/300923/006296
        </div>
      </div> */}
    </div>
  );
};

export default Home;
