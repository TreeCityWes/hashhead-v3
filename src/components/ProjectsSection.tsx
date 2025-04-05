'use client'

import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'XenBlocks Mining Assistant',
    description: 'A Python script to assist with XenBlocks mining operations, helping optimize your mining setup and monitor performance.',
    imageUrl: '/images/xenblocks-assistant.png', // We'll need to add these images
    link: 'https://github.com/TreeCityWes/XenBlocks-Assistant'
  },
  {
    title: 'XenFT Calendar Export Script',
    description: 'Export your XenFT events directly to Google Calendar with this Python script, never miss important dates.',
    imageUrl: '/images/xenft-calendar.png',
    link: 'https://github.com/TreeCityWes/XenFT-Calendar-Export'
  },
  {
    title: 'Xolana Python and Bash Scripts',
    description: 'Collection of scripts for working with X1 Testnet, streamlining development and testing processes.',
    imageUrl: '/images/xolana-scripts.png',
    link: 'https://github.com/TreeCityWes/Xolana-Scripts'
  },
  {
    title: 'Xolana Validator Check',
    description: 'Monitor and ensure the health of your Xolana validators with this comprehensive checking tool.',
    imageUrl: '/images/validator-check.png',
    link: 'https://validator.hashhead.io'
  }
]

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-mono text-neon-blue text-center mb-12 hover-glow">
        GitHub Projects
      </h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            isImageLeft={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  )
} 