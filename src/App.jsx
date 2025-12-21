import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showSnowfall, setShowSnowfall] = useState(false)
  const [Snowfall, setSnowfall] = useState(null)

  useEffect(() => {
    // Dark mode
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) setDarkMode(JSON.parse(savedMode))
    document.documentElement.classList.toggle('dark', savedMode === 'true')

    // Seasonal snow
    const month = new Date().getMonth()
    if (month === 11 || month === 0) setShowSnowfall(true)

    // Dynamically import Snowfall only on client
    import('react-snowfall').then((mod) => setSnowfall(() => mod.default))
  }, [])

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <>
      {/* Snow overlay */}
      {showSnowfall && Snowfall && (
        <Snowfall
          snowflakeCount={85}
          color="white"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
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