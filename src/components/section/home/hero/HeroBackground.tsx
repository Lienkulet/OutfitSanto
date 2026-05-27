import React from 'react'

const HeroBackground = () => {
    return (
        <div
            className="
          absolute
          inset-0
          z-0
          bg-cover
          bg-no-repeat
          animate-[kenBurns_22s_ease-in-out_infinite_alternate]
        "
            style={{
                backgroundImage: "url('/images/hero6.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center 10%',
                transformOrigin: 'center center',
            }}
        />
    )
}

export default HeroBackground