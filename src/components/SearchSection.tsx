'use client'

import { useState, useEffect } from 'react'

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setCommandHistory(prev => [...prev, `> xenblocks search ${searchQuery}`])
    const explorerUrl = `https://explorer.xenblocks.io/leaderboard/${searchQuery}`
    window.open(explorerUrl, '_blank', 'noopener,noreferrer')
    setSearchQuery('')
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="terminal-window p-6 relative scanline static-noise">
        <div className="flex items-center gap-2 mb-4 text-neon-blue/70 text-sm">
          <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
          <span className="ml-2 font-mono">xenblocks-terminal</span>
        </div>

        <div className="space-y-2 mb-6">
          {commandHistory.map((cmd, index) => (
            <div key={index} className="font-mono text-text-primary/70 cmd-prompt">
              {cmd}
            </div>
          ))}
        </div>
      
        <form 
          onSubmit={handleSearch}
          className="relative"
        >
          <div className="flex items-center font-mono text-neon-blue mb-2">
            <span className="mr-2">$</span>
            <span className="text-text-primary/70">xenblocks search</span>
          </div>
          
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setIsTyping(true)
                  setTimeout(() => setIsTyping(false), 100)
                }}
                placeholder="Enter ETH address or ENS name"
                className="w-full px-4 py-2 bg-transparent border border-neon-blue/30 rounded
                         font-mono text-text-primary placeholder-text-primary/30
                         focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,191,255,0.2)]
                         transition-all duration-300"
              />
              {!isTyping && searchQuery && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 terminal-cursor"></span>
              )}
            </div>
            
            <button
              type="submit"
              className="px-6 py-2 bg-neon-blue/10 border border-neon-blue rounded
                     font-mono text-neon-blue hover:bg-neon-blue/20
                     transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,191,255,0.3)]
                     data-stream"
            >
              Execute
            </button>
          </div>
        </form>

        <div className="mt-4 font-mono text-xs text-text-primary/50">
          Type an address or ENS name and press Enter or click Execute
        </div>
      </div>
    </section>
  )
} 