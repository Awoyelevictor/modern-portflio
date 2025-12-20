import profilePic from "../assets/profile.jpg"
import Snowfall from "react-snowfall";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Victor Awoyele</span>
              <br />
              Web Developer
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0">
              I create beautiful, functional websites and applications with a focus on user experience and modern design principles.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Profile Blob */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div
              className="
                w-64 h-64 md:w-80 md:h-80 
                bg-gradient-to-r from-indigo-500 to-purple-500 
                shadow-xl flex items-center justify-center overflow-hidden
                [animation:morph_8s_ease-in-out_infinite]
              "
            >
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
