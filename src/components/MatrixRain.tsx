'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set initial dimensions
    const setDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setDimensions()

    // Matrix rain configuration
    const chars = '0123456789ABCDEF'
    const fontSize = 12  // Even smaller font
    const columns = Math.ceil(canvas.width / fontSize)
    const drops = new Array(columns).fill(1)

    // Optimize performance by pre-calculating styles
    const fadeStyle = 'rgba(13, 13, 13, 0.12)'  // Increased fade for more subtlety
    const textStyle = 'rgba(0, 191, 255, 0.15)'  // Very transparent neon blue
    const lightTextStyle = 'rgba(64, 224, 255, 0.2)'  // Very transparent light blue
    const fontStyle = `${fontSize}px monospace`

    function draw() {
      if (!ctx || !canvas) return

      // Apply fade effect
      ctx.fillStyle = fadeStyle
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw characters
      drops.forEach((drop, i) => {
        // Only draw if random check passes (creates more sparse effect)
        if (Math.random() > 0.3) {  // Increased threshold for even more sparsity
          const text = chars[Math.floor(Math.random() * chars.length)]
          const x = i * fontSize
          const y = drop * fontSize

          // Leading character in light blue
          ctx.fillStyle = lightTextStyle
          ctx.font = fontStyle
          ctx.fillText(text, x, y)

          // Shorter trail in darker blue (only 2 characters)
          ctx.fillStyle = textStyle
          for (let j = 1; j < 2; j++) {  // Reduced trail length to 1
            if (y - j * fontSize > 0) {
              const trailChar = chars[Math.floor(Math.random() * chars.length)]
              ctx.fillText(trailChar, x, y - j * fontSize)
            }
          }
        }

        // Reset drop when it reaches bottom with random chance
        if (drop * fontSize > canvas.height && Math.random() > 0.99) {  // Reduced reset frequency
          drops[i] = 0
        }
        drops[i]++
      })
    }

    // Slow down the animation
    let animationId: number
    let lastDraw = 0
    const fps = 15  // Reduced FPS for slower animation

    function animate(timestamp: number) {
      if (timestamp - lastDraw > 1000 / fps) {
        draw()
        lastDraw = timestamp
      }
      animationId = requestAnimationFrame(animate)
    }
    animate(0)

    // Handle window resize
    const handleResize = () => {
      setDimensions()
      drops.length = Math.ceil(canvas.width / fontSize)
      for (let i = 0; i < drops.length; i++) {
        drops[i] = 1
      }
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-15 pointer-events-none"
      aria-hidden="true"
    />
  )
} 