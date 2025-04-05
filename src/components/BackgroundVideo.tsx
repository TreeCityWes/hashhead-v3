'use client'

const BackgroundVideo = () => {
  return (
    <div className="flex flex-col w-full items-center mt-24">
      {/* Video container with max width and responsive height */}
      <div className="w-full max-w-3xl mx-auto h-[250px] md:h-[350px] px-4 mb-8 md:mb-12">
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/W5tZM0NbPqY?autoplay=1&mute=1&loop=1&playlist=W5tZM0NbPqY&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      </div>

      {/* Community section with improved spacing */}
      <div className="w-full bg-base-darker py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono text-neon-blue mb-4 md:mb-6 hover-glow">
              Join The HashHeads
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-text-primary/80 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              Explore the future of blockchain technology with our growing community of developers and enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://discord.gg/kSqrzu97uU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-neon-blue/10 border border-neon-blue rounded-lg
                       text-neon-blue hover:bg-neon-blue/20 transition-all duration-300
                       transform hover:-translate-y-1 hover:shadow-neon-blue text-center"
              >
                Join Discord
              </a>
              <a
                href="https://www.youtube.com/@TreeCityWes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-base-darker border border-neon-blue rounded-lg
                       text-neon-blue hover:bg-neon-blue/10 transition-all duration-300
                       transform hover:-translate-y-1 hover:shadow-neon-blue text-center"
              >
                Subscribe on YouTube
              </a>
              <a
                href="https://buymeacoffee.com/treecitywes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-base-darker border border-neon-blue rounded-lg
                       text-neon-blue hover:bg-neon-blue/10 transition-all duration-300
                       transform hover:-translate-y-1 hover:shadow-neon-blue text-center"
              >
                Buy Me a Coffee
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundVideo 