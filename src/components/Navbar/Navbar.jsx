import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import Logo from '../../assets/logo2.png';
import Logo3 from '../../assets/logo3.jpg';
import Logo4 from '../../assets/logo4.png';
// import companyLogo from '../../assets/companyLogo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Define routes that have a dark hero section
  const isDarkHero = location.pathname === '/about' || location.pathname === '/services';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Overlay for mobile menu */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isDarkHero ? 'dark-bg' : ''}`}>
        <div className="navbar-content">
          <NavLink to="/" className="logo-container" onClick={closeMenu}>
            <div className="logo-icon">
              <img src={Logo4} alt="SKYi Builders & Developers — Real Estate Company Hosur" className="logo-img" />
            </div>
            <span className="logo-text">SKYi Builders & Developers</span>
          </NavLink>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {/* Close button inside sidebar */}
            <div className="close-btn" onClick={closeMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>

            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About Us</NavLink>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Services</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact Us</NavLink>
          </div>

          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="hamburger-text">MENU</span>
            <div className="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
