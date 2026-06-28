import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all pages for code splitting & faster initial load
const Home        = lazy(() => import('./pages/Home/Home'));
const About       = lazy(() => import('./pages/About/About'));
const Services    = lazy(() => import('./pages/Services/Services'));
const Contact     = lazy(() => import('./pages/Contact/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail/ProjectDetail'));

// Minimal loading fallback — invisible spinner keeps layout stable
const PageLoader = () => (
  <div style={{ minHeight: '100vh', background: '#fdfaf6' }} aria-label="Loading page" />
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/about"         element={<About />} />
        <Route path="/services"      element={<Services />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/projects/:id"  element={<ProjectDetail />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
