const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
      <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
        <i className={`${project.icon} text-white text-5xl`}></i>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-2">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-center"
          >
            View Project
          </a>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors flex items-center justify-center"
              title="View on GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;