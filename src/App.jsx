import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode')
      return savedMode ? JSON.parse(savedMode) : false
    }
    return false
  })

  const [Snowfall, setSnowfall] = useState(null)

  useEffect(() => {
    // Save dark mode
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Dynamically import Snowfall on client only
    if (typeof window !== 'undefined') {
      import('react-snowfall').then((mod) => {
        setSnowfall(() => mod.default)
      }).catch(console.error)
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 relative">
      {/* Only render Snowfall if dynamically loaded */}
      {Snowfall && <Snowfall color="white" />}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App