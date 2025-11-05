import { useEffect } from 'react'

type ImageModalProps = {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop with blur and dark overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        aria-hidden="true"
      />
      
      {/* Image container */}
      <div 
        className="relative z-10 max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
          aria-label="Close image"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
