import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Snowfall from 'react-snowfall'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showSnowfall, setShowSnowfall] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Initialize dark mode & seasonal snow
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) setDarkMode(JSON.parse(savedMode))

    // Show snow only in December (11) or January (0)
    const month = new Date().getMonth()
    if (month === 11 || month === 0) setShowSnowfall(true)

    // Set initial viewport dimensions
    const updateSize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      {/* Snow overlay */}
      {showSnowfall && dimensions.width > 0 && (
        <Snowfall
          snowflakeCount={85}
          color="white"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: dimensions.width,
            height: dimensions.height,
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Main content */}
      <div className="min-h-screen bg-gray-50 text-gray-800 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App