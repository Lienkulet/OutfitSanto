import React from 'react'

const Overlay = () => {
  return (
    <div
        className="absolute inset-0 z-2"
        style={{
          background: `
            linear-gradient(
              to bottom,
              oklch(0.04 0.03 305 / 0.55) 0%,
              transparent 22%,
              transparent 48%,
              oklch(0.05 0.03 305 / 0.55) 62%,
              oklch(0.05 0.03 305 / 0.90) 76%,
              oklch(0.05 0.03 305 / 1.00) 88%
            )
          `,
        }}
      />
  )
}

export default Overlay