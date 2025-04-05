'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
  isImageLeft?: boolean
}

export default function ProjectCard({ title, description, imageUrl, link, isImageLeft = true }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transform transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative flex flex-col md:flex-row items-center gap-6 p-6 
                      bg-base-darker border border-neon-blue rounded-lg
                      transition-all duration-300
                      ${isImageLeft ? '' : 'md:flex-row-reverse'}
                      ${isHovered ? 'shadow-[0_0_30px_rgba(0,191,255,0.3)]' : ''}`}>
        
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-blue 
                      transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-blue 
                      transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-blue 
                      transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-blue 
                      transition-all duration-300 opacity-0 group-hover:opacity-100" />
        
        {/* Image Container */}
        <div className="relative w-full md:w-1/3 aspect-square rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-neon-blue/10 z-10 
                        transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-all duration-500 
                     group-hover:scale-110 group-hover:rotate-2"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 space-y-4">
          <h3 className="text-2xl font-mono text-neon-blue transition-all duration-300
                       group-hover:text-light-blue group-hover:translate-x-1">
            {title}
          </h3>
          <p className="text-text-primary/80 transition-all duration-300
                     group-hover:text-text-primary group-hover:translate-x-1">
            {description}
          </p>
          
          {/* View Project Button */}
          <div className="inline-flex items-center space-x-2 text-neon-blue 
                       transition-all duration-300 group-hover:translate-x-2">
            <span>View Project</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  )
} 