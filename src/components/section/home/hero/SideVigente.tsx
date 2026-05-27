import React from 'react'

const SideVigente = () => {
    return (
        <div
            className="absolute inset-0 z-2"
            style={{
                background: `
            radial-gradient(
              ellipse 90% 80% at 50% 42%,
              transparent 55%,
              oklch(0.04 0.03 305 / 0.5) 100%
            )
          `,
            }}
        />
    )
}

export default SideVigente