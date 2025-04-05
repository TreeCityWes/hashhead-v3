'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Discord', href: 'https://discord.gg/kSqrzu97uU' },
    { name: 'X', href: 'https://x.com/TreeCityWes' },
    { name: 'GitHub', href: 'https://github.com/TreeCityWes/' },
    { name: 'YouTube', href: 'https://www.youtube.com/@TreeCityWes/videos' },
    { name: 'Store', href: 'https://store.hashhead.io' },
    { name: 'XenBubbles', href: 'https://bubbles.hashhead.io' },
    { name: 'Buy Coffee', href: 'https://buymeacoffee.com/treecitywes' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300
                     ${scrolled ? 'bg-base-darker/95 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl sm:text-3xl font-mono font-bold text-neon-blue relative group"
          >
            <span className="relative z-10 group-hover:animate-glitch">HashHead.io</span>
            {/* Logo Background Effect */}
            <div className="absolute inset-0 bg-neon-blue/5 -skew-x-12 scale-x-0 group-hover:scale-x-110
                         transition-transform duration-300" />
            {/* Glitch Lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-blue/30 transform -translate-y-1
                         scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-neon-blue/30 transform translate-y-1
                         scale-x-0 group-hover:scale-x-100 transition-transform duration-200 delay-100" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-neon-blue transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary hover:text-neon-blue"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                      ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-text-primary hover:text-neon-blue
                       relative group overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover Background */}
                <div className="absolute inset-0 bg-neon-blue/5 -translate-x-full
                             group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r 
                   from-transparent via-neon-blue/30 to-transparent" />
    </header>
  )
}

// Add this to your globals.css
// @keyframes shimmer {
//   0% { transform: translateX(-100%) }
//   100% { transform: translateX(100%) }
// } 