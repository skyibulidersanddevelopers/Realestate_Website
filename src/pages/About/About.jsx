import React, { useEffect } from 'react';
import SEO from '../../components/SEO/SEO';
import './About.css';
import Logo from '../../assets/logo2.png';
import AboutImage from '../../assets/aboutImage2.png';
import founderImage from '../../assets/founderImage.png';
import qrCode from '../../assets/qrCode.jpeg';

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.skyibuildersanddevelopers.com/about#webpage",
  "name": "About SKYi Builders & Developers",
  "url": "https://www.skyibuildersanddevelopers.com/about",
  "description": "Learn about SKYi Builders & Developers — established in 2012 in Hosur, Tamil Nadu. CREDAI member with 150+ completed projects, 2,50,000+ sq.ft delivered. Trusted builders led by Managing Director Mr. Sampath Kumar S.",
  "isPartOf": { "@id": "https://www.skyibuildersanddevelopers.com/#website" },
  "about": { "@id": "https://www.skyibuildersanddevelopers.com/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.skyibuildersanddevelopers.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.skyibuildersanddevelopers.com/about" }
    ]
  }
};

const About = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 10);
  }, []);

  return (
    <div className="about-page">
      <SEO
        title="Trusted Builders Since 2012 | 150+ Projects | CREDAI Member — Hosur"
        description="Meet SKYi Builders & Developers — Hosur's most trusted real estate company since 2012. CREDAI Member. 150+ completed projects. 2,50,000+ sq.ft delivered. Led by Mr. Sampath Kumar S. Design | Detail | Destiny."
        canonical="/about"
        keywords="About SKYi Builders, Trusted Builders Hosur, Real Estate Company Hosur, Builders Since 2012, CREDAI Member, Best Real Estate Company, Property Developers Hosur, Sampath Kumar SKYi, 150 projects Hosur"
        schemaData={ABOUT_SCHEMA}
      />
      {/* SECTION 1: HERO SECTION */}
      <section className="about-hero-section">

        <div className="about-hero-content">

          <div className="hero-owner-image-container">
            <img src={AboutImage} alt="SKYi Builders premium residential project in Hosur, Tamil Nadu" className="hero-owner-image" />
          </div>

          <div className="hero-text-container">
            <div className="hero-brand-block">
              <img src={Logo} alt="SKYi Builders & Developers logo — Premium Real Estate Company" className="hero-logo" />
              
              <div className="hero-text">
                <h1>SKYi</h1>
                <h2>BUILDERS & DEVELOPERS</h2>
                <p className="hero-tagline">DESIGN | DETAIL | DESTINY</p>
              </div>
            </div>
            
            <p className="hero-promise">Every Dream is a Promise Kept. Every Home is a Story Begun.</p>
          </div>

        </div>
      </section>

      {/* SECTION 2: COMPANY OVERVIEW */}
      <section className="about-overview-section">
        <div className="container">
          <div className="overview-header">
            <h2 className="section-title">Who We Are :</h2>
          </div>
          <div className="overview-content">
            <p>At SKYi Builders & Developers, every project is more than construction-it's a story of trust and destiny. Established in Hosur, we have built our reputation on honest service, transparent processes, and meaningful client relationships.</p>
            <p>What sets us apart is not just what we build, but how we build it-through care, detailing, and integrity at every step. For us, every handover is not an ending, but the beginning of a lifelong bond, because homes are not just built-they are destined to be cherished for generations.</p>

            <div className="vision-mission-grid">
              <div className="vm-card">
                <h3>Our Vision:</h3>
                <p>To ensure every project is completed with clarity, quality, and timely delivery crafting homes that reflect dreams and relationships built on trust.</p>
              </div>
              <div className="vm-card">
                <h3>Our Mission:</h3>
                <p>To make construction a transparent, worry-free experience by guiding clients with clarity, innovation, and genuine care at every step.</p>
              </div>
            </div>

            <div className="core-values">
              <h3>Our Core Values:</h3>
              <p className="values-intro">At SKYi, our Philosophy is built on three pillars:</p>
              <ul className="values-list">
                <li className="value-item">
                  <span className="value-icon icon-design" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.6 12-9-9" />
                      <path d="m14 18-9-9" />
                      <path d="M17 22 3 8" />
                      <path d="M3 8V3h5l14 14v5h-5z" />
                    </svg>
                  </span>
                  <span className="value-content">
                    <strong>Design</strong> - Crafting spaces that reflect every client's vision.
                  </span>
                </li>
                <li className="value-item">
                  <span className="value-icon icon-detail" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </span>
                  <span className="value-content">
                    <strong>Detail</strong> - Precision, transparency, and integrity in every step.
                  </span>
                </li>
                <li className="value-item">
                  <span className="value-icon icon-destiny" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                    </svg>
                  </span>
                  <span className="value-content">
                    <strong>Destiny</strong> - Homes that are more than structures - they are legacies.
                  </span>
                </li>
              </ul>
              <p className="values-outro">These principles are strengthened by our commitment to Quality, Transparency, Innovation, and Timely Delivery in every project we undertake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP & TEAM SECTION */}
      <section className="about-leadership-section">
        <div className="container">
          <div className="leadership-grid">
            <div className="leadership-left">
              <div className="owner-placeholder">
                {/* <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="Owner Placeholder" /> */}
                <img src={founderImage} alt="Mr. Sampath Kumar S — Managing Director, SKYi Builders & Developers, Hosur" />
              </div>
            </div>
            <div className="leadership-right">
              <h2 className="section-title">The Man Behind SKYi:</h2>
              <p className="leadership-quote">Every vision needs a leader, every success needs a team.</p>

              <div className="director-info">
                <h3>Mr.SAMPATH KUMAR S</h3>
                <p className="designation">Managing Director</p>
                <p>He drives SKYi with the belief that construction is not just about buildings, but about trust, detail, and destiny.</p>
              </div>

              <div className="team-info">
                <p>Behind him stands a passionate team of Architects, Engineers, Managers, and on-site professionals, each contributing their expertise to transform every plan into reality. SKYi delivers projects that blend Design, Detail, and Destiny.</p>
              </div>

              <div className="qr-section">
                <p className="qr-text">Discover SKYi in one scan - and Get the Detailed Brochure</p>
                <div className="qr-card">
                  <img src={qrCode} alt="SKYi Builders & Developers QR Code — Scan to download company brochure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COUNTER / STATISTICS SECTION */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-header">
            <h2 className="section-title">SKYi by Numbers:</h2>
            <p className="stats-subtitle">
              Since 2012<br />
              Building trust and transforming skylines
            </p>
          </div>

          <div className="stats-cards-grid">
            <div className="stat-card">
              <div className="stat-number">150+ Projects</div>
              <div className="stat-label">Completed Across Hosur & surroundings</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2,50,000+ Sq.ft</div>
              <div className="stat-label">Space delivered, trust earned</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Credai Member</div>
              <div className="stat-label">Part of India's leading real estate body</div>
            </div>
          </div>

          <div className="stats-footer">
            <p>With a decade of dedication, SKYi Builders & Developers has grown into a firm known for scale, precision, and lasting impact.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
