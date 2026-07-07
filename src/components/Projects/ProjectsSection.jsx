import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Glimpse Of Our Projects:</h2>
      </div>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={`${project.title} — ${project.shortDesc} by SKYi Builders & Developers`} className="project-image" loading="lazy" />
            </div>
            <div className="project-info">
              {/* <h3 className="project-card-title">{project.title}</h3> */}
              {/* <p className="project-card-desc">{project.shortDesc}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
