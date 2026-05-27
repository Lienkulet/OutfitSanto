import React from 'react'

const ScrollIndicator = () => {
    return (
        <div
            className="
          absolute
          bottom-6.5
          left-1/2
          z-10
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-1.75
          opacity-0
          animate-[riseIn_1.2s_ease_1.4s_forwards]
        "
        >
            <div
                className="
            h-11
            w-px
            animate-[drip_2.2s_ease-in-out_infinite]
          "
                style={{
                    background:
                        'linear-gradient(to bottom, var(--magenta-dim), transparent)',
                }}
            />
        </div>
    )
}

export default ScrollIndicator