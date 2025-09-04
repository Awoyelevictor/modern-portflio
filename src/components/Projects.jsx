import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;