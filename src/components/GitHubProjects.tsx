'use client'

import { useState, useEffect } from 'react'

interface GitHubRepo {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
  updated_at: string
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeRepo, setActiveRepo] = useState<number | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/TreeCityWes/repos?per_page=100')
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const allRepos = await response.json()
        
        const sortedRepos = allRepos
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)
        
        setRepos(sortedRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (error) {
    return (
      <div className="terminal-window p-6 mx-4 text-center text-red-500">
        <div className="cmd-prompt">Error: {error}</div>
      </div>
    )
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-mono text-neon-blue text-center mb-12 hover-glow relative terminal-cursor">
        Latest GitHub Projects
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-neon-blue/20 data-stream" />
      </h2>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="terminal-window h-[280px] animate-pulse"
            >
              <div className="h-6 bg-neon-blue/10 rounded w-3/4 mb-4" />
              <div className="h-4 bg-neon-blue/10 rounded w-full mb-2" />
              <div className="h-4 bg-neon-blue/10 rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-window p-6 group relative scanline h-[280px] flex flex-col"
              onMouseEnter={() => setActiveRepo(index)}
              onMouseLeave={() => setActiveRepo(null)}
            >
              {/* Digital Rain Effect when hovered */}
              {activeRepo === index && <div className="digital-rain" />}

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4 text-neon-blue/70 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
                  <span className="font-mono">{repo.language || 'No language'}</span>
                </div>

                <h3 className="text-xl font-mono text-neon-blue mb-3 cmd-prompt truncate">
                  {repo.name}
                </h3>
                
                <p className="text-text-primary/80 mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics?.slice(0, 3).map(topic => (
                    <span 
                      key={topic}
                      className="text-xs px-2 py-1 rounded-full bg-neon-blue/10 text-neon-blue
                               font-mono transition-all duration-300 group-hover:bg-neon-blue/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-neon-blue/20">
                  <div className="flex items-center justify-between text-sm text-text-primary/60 font-mono">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
} 