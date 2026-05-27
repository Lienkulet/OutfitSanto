import React from 'react'

const CornerTL = () => {
    return (
        <svg
            className="
          absolute
          left-7
          top-22.5
          z-5
          pointer-events-none
          max-[700px]:hidden
        "
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
        >
            <path
                d="M6 66 L6 6 L66 6"
                stroke="oklch(0.70 0.22 330 / 0.45)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="square"
            />
            <path
                d="M6 6 m8 0 L22 6"
                stroke="oklch(0.70 0.22 330 / 0.25)"
                strokeWidth="1"
                fill="none"
            />
            <path
                d="M6 6 L6 22"
                stroke="oklch(0.70 0.22 330 / 0.25)"
                strokeWidth="1"
                fill="none"
            />
            <rect
                x="3"
                y="3"
                width="6"
                height="6"
                fill="oklch(0.52 0.27 325 / 0.6)"
            />
        </svg>
    )
}

export default CornerTL