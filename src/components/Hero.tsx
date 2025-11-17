import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Full Stack Developer | Photographer | Traveler | Cook | Problem Solver'
  
  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, 100)

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Zhixiang Huo</span>
          </h1>
          <p className="hero-subtitle">
            {displayedText}
            <span className="cursor">|</span>
          </p>
          <p className="hero-description">
            Full Stack Developer who crafts code by day, 
            captures light by lens, explores the world by heart, 
            and solves problems wherever they appear.
          </p>
          <div className="hero-buttons">
            
            <button className="btn-secondary" onClick={() => navigate('/about')}>
              About Me
            </button>
            <button className="btn-primary" onClick={() => navigate('/experience')}>
              View Experience
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/portfolio/personalImage.png" alt="Zhixiang Huo" className="hero-portrait" />
        </div>
      </div>
    </section>
  )
}

export default Hero

