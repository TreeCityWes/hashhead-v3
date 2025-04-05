'use client'

import { useState } from 'react'

// Organized by category: X1 Tools, Xen Tools, and Community/Meme Tools
const links = [
  // X1 Tools
  { name: 'X1 Docs', url: 'https://docs.x1.xyz' },
  { name: 'X1 Wiki', url: 'https://x1.wiki/' },
  { name: 'X1 Validators', url: 'https://x1val.online' },
  { name: 'X1 PrimeMiner', url: 'https://primeminer.xyz' },
  { name: 'X1 Token Launcher', url: 'https://pumpx1.fun' },
  { name: 'Memories on X1', url: 'https://memo.rip' },
  
  // Xen Tools
  { name: 'Xen Bubbles', url: 'https://bubbles.hashhead.io' },
  { name: 'Xen.Pub', url: 'https://xen.pub' },
  { name: 'XenMon', url: 'https://xenmon.com' },
  { name: 'XDex', url: 'https://xdex.xyz' },
  { name: 'Xenducation', url: 'https://www.youtube.com/@xenducation' },
  { name: 'WenBlocks', url: 'https://x.com/WENBlocks' },
  
  // Community/Meme Tools
  { name: 'XenBlocks Miner', url: 'https://woodyminer.com' },
  { name: 'Emoji Dracula', url: 'https://emojidracula.win' },
  { name: 'XenCat', url: 'https://xencat.tech' },
  { name: 'BoomTown Meme', url: 'https://www.boomtown.meme/' },
  { name: 'SolXen', url: 'https://solxen.io' },
  { name: 'PotatoVampire', url: 'https://potatovampire.com' }
]

export default function CuratedLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-mono text-neon-blue text-center mb-12 hover-glow relative">
        TreeCityWes.eth&apos;s Favorite Xen Tools
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-neon-blue/20" />
      </h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Background Grid Animation */}
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-none">
          {links.map((_, index) => (
            <div
              key={`grid-${index}`}
              className={`border border-neon-blue/10 rounded-lg transition-all duration-500
                        ${hoveredIndex === index ? 'bg-neon-blue/5' : 'bg-transparent'}`}
            />
          ))}
        </div>

        {/* Links */}
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-lg transition-all duration-300
                     hover:transform hover:-translate-y-1 z-10
                     bg-base-darker/50 backdrop-blur-sm border border-neon-blue/20"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Category Indicator */}
            <div className={`absolute top-0 left-0 w-1 h-full rounded-l-lg transition-all duration-300
                          ${index < 6 ? 'bg-deep-blue' : // X1 Tools
                            index < 12 ? 'bg-neon-blue' : // Xen Tools
                            'bg-light-blue'} // Community/Meme Tools
                          opacity-30 group-hover:opacity-60`}
            />

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-lg transition-all duration-300
                          bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0
                          opacity-0 group-hover:opacity-100" 
                 style={{
                   backgroundSize: '200% 100%',
                   animation: 'shimmer 2s infinite linear'
                 }}
            />

            {/* Content */}
            <div className="relative">
              <span className="block font-mono text-lg text-text-primary transition-all duration-300
                           group-hover:text-neon-blue text-center">
                {link.name}
              </span>
              
              {/* Hover Indicator */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                           w-0 h-0.5 bg-neon-blue transition-all duration-300
                           group-hover:w-full" />
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
} 