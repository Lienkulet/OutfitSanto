import React from 'react'

const CornerBR = () => {
    return (
        <svg
            className="
          absolute
          bottom-7
          right-7
          z-5
          pointer-events-none
          scale-x-[-1]
          scale-y-[-1]
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

export default CornerBR