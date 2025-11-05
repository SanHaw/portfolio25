// import anime from 'animejs/lib/anime.es.js'
// import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  // const dotRef = useRef<SVGCircleElement>(null)
  // const pathRef = useRef<SVGPathElement>(null)

  // useEffect(() => {
  //   if (!dotRef.current || !pathRef.current) return

  //   const path = anime.path(pathRef.current)

  //   anime({
  //     targets: dotRef.current,
  //     translateX: path('x'),
  //     translateY: path('y'),
  //     duration: 12000,
  //     easing: 'linear',
  //     loop: true
  //   })
  // }, [])

  return (
    <div className="h-[calc(100vh-88px-200px)] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Content in front */}
      <div className="max-w-2xl w-full text-center relative z-10 max-h-full -mt-60">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[200px] md:text-[300px] font-light leading-none text-site/10 select-none">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-site">
            Page Not Found
          </h2>
          <p className="text-lg text-site/70 max-w-md mx-auto">
            Hold on! I haven't gotten there 
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className="px-8 py-3 bg-accent text-site rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Decorative SVG at bottom - full width */}
      <div className="absolute left-0 right-0 w-full overflow-visible pointer-events-none z-0 flex items-center" style={{ bottom: '-50px' }}>
        <img src="/src/assets/Fill 3.svg" alt="" className="w-full h-auto opacity-100 brightness-0" />
      </div>
    </div>
  )
}
