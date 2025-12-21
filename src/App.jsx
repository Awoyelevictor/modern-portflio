// App.jsx
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Snowfall from 'react-snowfall'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a dark mode preference saved
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode')
      return savedMode ? JSON.parse(savedMode) : false
    }
    return false
  })

  const [showSnowfall, setShowSnowfall] = useState(false)

  useEffect(() => {
    // Set showSnowfall to true only on client side
    setShowSnowfall(true)
  }, [])

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode))

    // Apply or remove dark class to document element  
    if (darkMode) {  
      document.documentElement.classList.add('dark')  
    } else {  
      document.documentElement.classList.remove('dark')  
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200">
      {/* Only render Snowfall on the client side */}
      {showSnowfall && <Snowfall color="white" />}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App