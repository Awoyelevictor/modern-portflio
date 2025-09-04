// components/Navbar.jsx
import { useState } from 'react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 transition-colors duration-300 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Portfolio.
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-indigo-600 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-indigo-600 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 hover:text-indigo-600 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-indigo-600 transition-colors dark:text-gray-200 dark:hover:text-indigo-400"
            >
              Contact
            </button>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 transition-colors dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-gray-700"></i>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-4 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-gray-700"></i>
              )}
            </button>
            
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-2xl"></i>
              ) : (
                <i className="fas fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded transition-colors dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded transition-colors dark:text-gray-200 dark:hover:bg-gray-700"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded transition-colors dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded transition-colors dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Contact 
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar