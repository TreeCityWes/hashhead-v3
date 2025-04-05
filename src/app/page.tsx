'use client'

import { useState, useEffect } from 'react'
import SearchSection from '@/components/SearchSection'
import GitHubProjects from '@/components/GitHubProjects'
import CuratedLinks from '@/components/CuratedLinks'
import Footer from '@/components/Footer'
import DynamicBackground from '@/components/DynamicBackground'
import BackgroundVideo from '@/components/BackgroundVideo'

// Simulated typing effect for terminal-style text
function useTypewriter(text: string, speed = 50) {
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
    
    return () => clearInterval(timer)
  }, [text, speed])
  
  return displayText
}

export default function Home() {
  const [isGlitching, setIsGlitching] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <DynamicBackground />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen p-4 relative">
        {/* Animated Background Element */}
        <div className="absolute inset-0 bg-gradient-to-b from-base-darker via-base-darker/50 to-transparent" />
        
        <div className={`relative transition-all duration-1000 transform
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-6 text-center
                     text-neon-blue ${isGlitching ? 'animate-glitch' : ''} hover-glow`}
            onMouseEnter={() => setIsGlitching(true)}
            onMouseLeave={() => setIsGlitching(false)}
          >
            Building for X1 and<br />The Xen Ecosystem
          </h1>
          
          <p className="text-xl text-text-primary/80 text-center max-w-2xl mb-12
                     transition-all duration-500 hover:text-text-primary">
            Welcome to HashHead.io, your central hub for XenBlocks mining tools, 
            X1 development resources, and community projects.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.gg/kSqrzu97uU"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-neon-blue/10 border border-neon-blue rounded-lg
                     text-neon-blue hover:bg-neon-blue/20 transition-all duration-300
                     transform hover:-translate-y-1 hover:shadow-neon-blue"
            >
              Join Discord
            </a>
            <a
              href="https://github.com/TreeCityWes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-base-darker border border-neon-blue rounded-lg
                     text-neon-blue hover:bg-neon-blue/10 transition-all duration-300
                     transform hover:-translate-y-1 hover:shadow-neon-blue"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections with proper spacing */}
      <div className="relative z-10 bg-gradient-to-b from-base-darker to-base-dark">
        <div className="pt-24"> {/* Added padding to push content down */}
          <SearchSection />
        </div>
        <GitHubProjects />
        <CuratedLinks />
        <BackgroundVideo />
        <Footer />
      </div>
    </div>
  )
} 