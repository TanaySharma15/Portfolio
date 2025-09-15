"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      setTrail((prev) => {
        const newTrail = [{ ...newPosition, id: trailId++ }, ...prev.slice(0, 8)]
        return newTrail
      })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <>
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="cursor-trail-dot"
          style={{
            left: dot.x - 2,
            top: dot.y - 2,
            opacity: (8 - index) / 8,
            transform: `scale(${(8 - index) / 8})`,
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}
    </>
  )
}
