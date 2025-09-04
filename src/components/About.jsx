// components/About.jsx
const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Prompt Engineering',
    'Tailwind CSS', 'Git', 'Responsive Design', 'API Integration'
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-2xl shadow-xl flex items-center justify-center">
              <i className="fas fa-code text-white text-7xl"></i>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Curious about who I am?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate frontend developer with over 5 years of experience creating digital experiences that users love. I specialize in React, JavaScript, and modern CSS frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me playing FPS games, reading tech blogs, or experimenting with new design tools. I believe in continuous learning and pushing the boundaries of what's possible on the web.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About