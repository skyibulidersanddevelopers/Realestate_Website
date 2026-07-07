import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import SEO from '../../components/SEO/SEO';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const galleryRef = useRef(null);

  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 10);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-cycle hero image
  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % project.images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [project]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % project.images.length);
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + project.images.length) % project.images.length);
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isLightboxOpen, project]);

  if (!project) {
    return (
      <div className="pd-not-found">
        <div className="pd-not-found-inner">
          <span className="pd-nf-icon">🏛</span>
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="pd-back-home-btn">Return Home</button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="pd-page">
      {/* ── DYNAMIC PER-PROJECT SEO ── */}
      <SEO
        title={`${project.title} | ${project.offering} — ${project.shortDesc}`}
        description={`✅ ${project.status} — ${project.title} by SKYi Builders & Developers. ${project.shortDesc}. ${project.offering}. Transparent pricing, quality construction & timely delivery. Book your free site visit today!`}
        canonical={`/projects/${project.id}`}
        keywords={`${project.title}, ${project.shortDesc}, SKYi Builders, Real Estate Projects, ${project.offering}, Luxury Homes Hosur, Premium Real Estate Hosur`}
        ogImage={project.images[0]}
        ogType="article"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "@id": `https://www.skyibuildersanddevelopers.com/projects/${project.id}`,
          "name": project.title,
          "description": `${project.shortDesc}. ${project.offering}. ${project.status}.`,
          "url": `https://www.skyibuildersanddevelopers.com/projects/${project.id}`,
          "image": project.images[0],
          "offers": {
            "@type": "Offer",
            "name": project.offering,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          },
          "provider": {
            "@id": "https://www.skyibuildersanddevelopers.com/#organization"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.skyibuildersanddevelopers.com/" },
              { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.skyibuildersanddevelopers.com/" },
              { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://www.skyibuildersanddevelopers.com/projects/${project.id}` }
            ]
          }
        }}
      />

      {/* ── HERO SECTION ── */}
      <div className="pd-hero">
        {/* Background images with crossfade */}
        {project.images.map((img, i) => (
          <div
            key={i}
            className={`pd-hero-bg ${i === activeImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Dark gradient overlay */}
        <div className="pd-hero-overlay" />

        {/* Floating back button */}
        <button
          className={`pd-back-btn ${scrolled ? 'pd-back-btn--scrolled' : ''}`}
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back</span>
        </button>

        {/* Hero content */}
        <div className="pd-hero-content">
          {/* <div className="pd-hero-eyebrow">
            <span className="pd-eyebrow-dot" />
            Completed Project
          </div> */}


          {/* <h1 className="pd-hero-title">{project.title}</h1> */}
          {/* <p className="pd-hero-subtitle">{project.shortDesc}</p> */}

          <div className="pd-hero-meta">
            {/* <div className="pd-meta-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {project.date}
            </div> */}
            {/* <div className="pd-meta-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              {project.offering}
            </div> */}
          </div>

          {/* Image dot indicators */}
          <div className="pd-hero-dots">
            {project.images.map((_, i) => (
              <button
                key={i}
                className={`pd-hero-dot ${i === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pd-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="pd-scroll-line" />
        </div>
      </div>

      {/* ── STATUS BAND ── */}
      {/* <div className="pd-status-band">

        <div className="pd-status-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <div>
            <span className="pd-status-label">Project Status</span>
            <span className="pd-status-value">{project.status}</span>
          </div>
        </div>


        <div className="pd-status-divider" />
        <div className="pd-status-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          <div>
            <span className="pd-status-label">Bank Loan Approvals</span>
            <span className="pd-status-value">{project.bankLoans}</span>
          </div>
        </div>


        <div className="pd-status-divider" />
        <div className="pd-status-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <div>
            <span className="pd-status-label">Offering</span>
            <span className="pd-status-value">{project.offering}</span>
          </div>
        </div>


      </div> */}

      {/* ── ABOUT SECTION ── */}
      <section className="pd-about-section">
        <div className="pd-about-inner">
          <div className="pd-section-tag">About This Project</div>
          <h2 className="pd-about-title">A Vision Brought to Life</h2>
          <p className="pd-about-text">To ensure every project is completed with clarity, quality, and timely delivery crafting homes that reflect dreams and relationships built on trust.</p>
        </div>
      </section>

      {/* ── GALLERY SECTION ── */}
      <section className="pd-gallery-section" ref={galleryRef}>
        <div className="pd-gallery-header">
          <div className="pd-section-tag">Project Gallery</div>
          <h2 className="pd-gallery-title">Explore site views</h2>
          <p className="pd-gallery-subtitle">Click any image to view in full screen</p>
        </div>

        <div className={`pd-gallery-grid pd-gallery-count-${project.images.length}`}>
          {project.images.map((img, i) => (
            <div
              key={i}
              className={`pd-gallery-item pd-gallery-item--${i}`}
              onClick={() => openLightbox(i)}
            >
              <img src={img} alt={`${project.title} — View ${i + 1}`} loading={i < 3 ? 'eager' : 'lazy'} />
              <div className="pd-gallery-item-overlay">
                <div className="pd-gallery-zoom-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="pd-cta-section">
        <div className="pd-cta-bg" style={{ backgroundImage: `url(${project.images[0]})` }} />
        <div className="pd-cta-overlay" />
        <div className="pd-cta-content">
          <div className="pd-section-tag pd-section-tag--light">Interested?</div>
          <h2 className="pd-cta-title">Schedule a Site Visit</h2>
          <p className="pd-cta-text">Our team is ready to walk you through this project in person. Book a visit today.</p>
          <div className="pd-cta-actions">
            <a href="/contact" className="pd-cta-btn pd-cta-btn--primary">Book a Visit</a>
            <button onClick={() => navigate(-1)} className="pd-cta-btn pd-cta-btn--ghost">← Back to Projects</button>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {isLightboxOpen && (
        <div className="pd-lightbox" onClick={closeLightbox}>
          <div className="pd-lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="pd-lb-close" onClick={closeLightbox} aria-label="Close">✕</button>

            <button
              className="pd-lb-nav pd-lb-nav--prev"
              onClick={() => setLightboxIndex(i => (i - 1 + project.images.length) % project.images.length)}
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <img
              src={project.images[lightboxIndex]}
              alt={`${project.title} — ${lightboxIndex + 1}`}
              className="pd-lb-image"
            />

            <button
              className="pd-lb-nav pd-lb-nav--next"
              onClick={() => setLightboxIndex(i => (i + 1) % project.images.length)}
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <div className="pd-lb-counter">{lightboxIndex + 1} / {project.images.length}</div>

            <div className="pd-lb-thumbs">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  className={`pd-lb-thumb ${i === lightboxIndex ? 'active' : ''}`}
                  onClick={() => setLightboxIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
