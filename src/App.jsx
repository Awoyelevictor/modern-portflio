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

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) setDarkMode(JSON.parse(savedMode))

    const month = new Date().getMonth() // 0 = Jan, 11 = Dec
    if (month === 11 || month === 0) {
      setShowSnowfall(true)
    }

    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      {showSnowfall && dimensions.width > 0 && (
        <Snowfall
          width={dimensions.width}
          height={dimensions.height}
          snowflakeCount={85}
          color="white"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        />
      )}

      <div className="min-h-screen bg-gray-50 text-gray-800 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200">
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