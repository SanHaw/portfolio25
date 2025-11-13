import { useState } from 'react'

type ImageItem =
  | string
  | {
      src: string
      cols?: number
      rows?: number
      align?: 'top' | 'center' | 'bottom'
    }

type Props = {
  images: ImageItem[]
  layout?: 'grid' | 'masonry' | 'carousel' | 'fixed-grid' | 'hero-grid' | 'custom-grid' | 'cham-grid' | 'purple-grid' | 'itweek-grid' | 'eds-grid' | 'tedx-grid' | 'nwsfd-grid' | 'nwsfd-grid-2' | 'bd-grid' | 'cmt-grid'
}

export default function Gallery({ images, layout = 'grid' }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!images || images.length === 0) return null

  const openImage = (src: string) => {
    setSelectedImage(src)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeImage()
    }
  }

  if (layout === 'eds-grid') {
    // Special grid for Elysan Design Studios - matches exact layout from reference
    return (
      <>
        <div className="mt-6 flex justify-center">
        <div className="w-full lg:max-w-[75%]">
          <div className="grid grid-cols-6 gap-4 w-full">
            {/* ImageSlider: col 1-2, row 1-2 */}
            <div className="col-start-1 col-span-2 row-start-1 row-span-2 rounded-lg overflow-hidden flex items-center justify-center aspect-square cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
              <img src={typeof images[0] === 'string' ? images[0] : images[0].src} alt="Gallery 1" className="w-full h-full object-cover object-right pointer-events-none" />
            </div>
            
            {/* Thyroid cancer: col 3-4, row 1 */}
            <div className="col-start-3 col-span-2 row-start-1 row-span-1 rounded-lg overflow-hidden flex items-center justify-center aspect-[2/1] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
              <img src={typeof images[1] === 'string' ? images[1] : images[1].src} alt="Gallery 2" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* Check out: col 6, row 1 */}
            <div className="col-start-6 col-span-1 row-start-1 row-span-1 rounded-lg overflow-hidden flex items-center justify-center aspect-square cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
              <img src={typeof images[2] === 'string' ? images[2] : images[2].src} alt="Gallery 3" className="w-full h-full object-cover object-right pointer-events-none" />
            </div>
            
            {/* Ethanol: col 3, row 2 */}
            <div className="col-start-3 col-span-1 row-start-2 row-span-1 rounded-lg overflow-hidden flex items-center justify-center aspect-square cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
              <img src={typeof images[3] === 'string' ? images[3] : images[3].src} alt="Gallery 4" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* Construction: col 4, row 2-3 */}
            <div className="col-start-4 col-span-1 row-start-2 row-span-2 rounded-lg overflow-hidden flex items-center justify-center aspect-[1/2] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[4] === 'string' ? images[4] : images[4].src)}>
              <img src={typeof images[4] === 'string' ? images[4] : images[4].src} alt="Gallery 5" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* Video: col 5-6, row 2-4 - videos are not clickable */}
            <div className="relative col-start-5 col-span-2 row-start-2 row-span-3 rounded-lg overflow-hidden flex items-center justify-center aspect-[2/3]">
              {images[5] && typeof images[5] === 'string' && images[5].endsWith('.mp4') ? (
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                  <source src={images[5]} type="video/mp4" />
                </video>
              ) : (
                <img src={typeof images[5] === 'string' ? images[5] : images[5].src} alt="Gallery 6" className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[5] === 'string' ? images[5] : images[5].src)} />
              )}
            </div>
            
            {/* Defend the press: col 2-3, row 3-5 */}
            <div className="col-start-2 col-span-2 row-start-3 row-span-3 rounded-lg overflow-hidden flex items-center justify-center aspect-[2/3] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[6] === 'string' ? images[6] : images[6].src)}>
              <img src={typeof images[6] === 'string' ? images[6] : images[6].src} alt="Gallery 7" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* International business: col 1, row 4 */}
            <div className="col-start-1 col-span-1 row-start-4 row-span-1 rounded-lg overflow-hidden flex items-center justify-center aspect-square cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[7] === 'string' ? images[7] : images[7].src)}>
              <img src={typeof images[7] === 'string' ? images[7] : images[7].src} alt="Gallery 8" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* Sex health: col 1, row 5-6 */}
            <div className="col-start-1 col-span-1 row-start-5 row-span-2 rounded-lg overflow-hidden flex items-center justify-center aspect-[1/2] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[8] === 'string' ? images[8] : images[8].src)}>
              <img src={typeof images[8] === 'string' ? images[8] : images[8].src} alt="Gallery 9" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* Christmas camp: col 4-5, row 5 */}
            <div className="col-start-4 col-span-2 row-start-5 row-span-1 rounded-lg overflow-hidden flex items-center justify-center aspect-[2/1] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[9] === 'string' ? images[9] : images[9].src)}>
              <img src={typeof images[9] === 'string' ? images[9] : images[9].src} alt="Gallery 10" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* F1: col 6, row 5 */}
            <div className="col-start-6 col-span-1 row-start-5 row-span-1 rounded-lg overflow-hidden flex items-center justify-center aspect-square cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[10] === 'string' ? images[10] : images[10].src)}>
              <img src={typeof images[10] === 'string' ? images[10] : images[10].src} alt="Gallery 11" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* Periodic table: col 2, row 7 */}
            <div className="col-start-2 col-span-1 row-start-7 row-span-1 rounded-lg overflow-hidden flex items-center justify-center aspect-square cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[11] === 'string' ? images[11] : images[11].src)}>
              <img src={typeof images[11] === 'string' ? images[11] : images[11].src} alt="Gallery 12" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
            
            {/* Wide image: col 3-5, row 6-7 */}
            <div className="col-start-3 col-span-3 row-start-6 row-span-2 rounded-lg overflow-hidden flex items-center justify-center aspect-[3/2] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[12] === 'string' ? images[12] : images[12].src)}>
              <img src={typeof images[12] === 'string' ? images[12] : images[12].src} alt="Gallery 13" className="w-full h-full object-cover object-top pointer-events-none" />
            </div>
          </div>
        </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'itweek-grid') {
    // Special grid for "IT Week 2024" section
    // Top: centered image (2 cols)
    // Row 2: 3 images (2 cols each)
    // Row 3: 1 image left (2 cols), 1 wide image right (4 cols)
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            {/* Top centered image */}
            <div className="col-span-2 col-start-3 flex justify-center items-center overflow-hidden -mb-4 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
              <img src={typeof images[0] === 'string' ? images[0] : images[0].src} alt="Gallery 1" className="w-max object-contain pointer-events-none" />
            </div>

            {/* Main grid */}
            <div className="w-full pt-8">
              <div className="grid grid-cols-6 gap-4 w-full">
                {/* Row 2: 3 images */}
                <div className="col-span-2 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
                  <img src={typeof images[1] === 'string' ? images[1] : images[1].src} alt="Gallery 2" className="w-max object-contain pointer-events-none" />
                </div>
                <div className="col-span-2 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
                  <img src={typeof images[2] === 'string' ? images[2] : images[2].src} alt="Gallery 3" className="w-max object-contain pointer-events-none" />
                </div>
                <div className="col-span-2 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
                  <img src={typeof images[3] === 'string' ? images[3] : images[3].src} alt="Gallery 4" className="w-max object-contain pointer-events-none" />
                </div>

                {/* Row 3: 1 left + 1 wide right */}
                <div className="col-span-2 flex justify-center items-center overflow-hidden h-full cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[4] === 'string' ? images[4] : images[4].src)}>
                  <img src={typeof images[4] === 'string' ? images[4] : images[4].src} alt="Gallery 5" className="w-full object-contain pointer-events-none" />
                </div>
                <div className="col-span-4 flex justify-center items-center overflow-hidden aspect-[2/1] cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[5] === 'string' ? images[5] : images[5].src)}>
                  <img src={typeof images[5] === 'string' ? images[5] : images[5].src} alt="Gallery 6" className="w-max object-contain pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'purple-grid') {
    // Special grid for "Purple Up: Kick-Off" section
    // Based on reference: 6-column grid with nested grids
    // Left side (2 cols): 2 stacked images
    // Right side (4 cols): 1 wide image on top, then 2x2 grid below
    // Bottom: 3 images spanning full width
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            {/* Top section: 6-column grid */}
            <div className="grid grid-cols-6 gap-4 w-full">
              {/* Left side: 2 columns with 2 stacked images */}
              <div className="col-span-2 col-start-1 flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 gap-4 w-full">
                  <div className="flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
                    <img src={typeof images[0] === 'string' ? images[0] : images[0].src} alt="Gallery 1" className="w-max object-contain pointer-events-none" />
                  </div>
                  <div className="flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
                    <img src={typeof images[1] === 'string' ? images[1] : images[1].src} alt="Gallery 2" className="w-max object-contain pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Right side: 4 columns with nested grid */}
              <div className="col-span-4 col-start-3 flex justify-items-start items-start overflow-hidden">
                <div className="grid grid-cols-6 gap-4 w-full">
                  {/* Wide image at top */}
                  <div className="col-span-6 flex justify-center items-center overflow-hidden pb-5 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
                    <img src={typeof images[2] === 'string' ? images[2] : images[2].src} alt="Gallery 3" className="w-max object-contain pointer-events-none" />
                  </div>

                  {/* Two images side by side */}
                  <div className="col-span-3 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
                    <img src={typeof images[3] === 'string' ? images[3] : images[3].src} alt="Gallery 4" className="w-max object-contain pointer-events-none" />
                  </div>
                  <div className="col-span-3 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[4] === 'string' ? images[4] : images[4].src)}>
                    <img src={typeof images[4] === 'string' ? images[4] : images[4].src} alt="Gallery 5" className="w-max object-contain pointer-events-none" />
                  </div>

                  {/* Two more images side by side */}
                  <div className="col-span-3 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[5] === 'string' ? images[5] : images[5].src)}>
                    <img src={typeof images[5] === 'string' ? images[5] : images[5].src} alt="Gallery 6" className="w-auto h-full object-contain pointer-events-none" />
                  </div>
                  <div className="col-span-3 flex justify-center items-center h-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[6] === 'string' ? images[6] : images[6].src)}>
                    <img src={typeof images[6] === 'string' ? images[6] : images[6].src} alt="Gallery 7" className="w-max object-contain pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section: 3 images spanning full width */}
            <div className="grid grid-cols-6 gap-4 w-full pt-4">
              <div className="col-span-2 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[7] === 'string' ? images[7] : images[7].src)}>
                <img src={typeof images[7] === 'string' ? images[7] : images[7].src} alt="Gallery 8" className="w-max object-contain pointer-events-none" />
              </div>
              <div className="col-span-2 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[8] === 'string' ? images[8] : images[8].src)}>
                <img src={typeof images[8] === 'string' ? images[8] : images[8].src} alt="Gallery 9" className="w-max object-contain pointer-events-none" />
              </div>
              {images[9] && (
                <div className="col-span-2 flex justify-center items-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[9] === 'string' ? images[9] : images[9].src)}>
                  <img src={typeof images[9] === 'string' ? images[9] : images[9].src} alt="Gallery 10" className="w-max object-contain pointer-events-none" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'cham-grid') {
    // Special grid for "Cham Along With Us" section
    // 6-column grid matching the reference website
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="grid grid-cols-6 gap-4 w-full lg:max-w-[75%]">
            {/* Row 1-2: Image 1 (2x2), Image 2 (2x2), Image 5 (2x4 tall) */}
            <div className="col-span-2 row-span-2 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
              <img src={typeof images[0] === 'string' ? images[0] : images[0].src} alt="Gallery 1" className="h-full w-full object-cover object-center pointer-events-none" />
            </div>
            <div className="col-span-2 row-span-2 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
              <img src={typeof images[1] === 'string' ? images[1] : images[1].src} alt="Gallery 2" className="h-full w-full object-cover object-center pointer-events-none" />
            </div>
            <div className="col-span-2 row-span-4 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[4] === 'string' ? images[4] : images[4].src)}>
              <img src={typeof images[4] === 'string' ? images[4] : images[4].src} alt="Gallery 5" className="h-full w-full object-cover object-center pointer-events-none" />
            </div>
          
            {/* Row 3-4: Image 3 (1x2), Image 4 (1x2), Image 6 (2x2) */}
            <div className="col-span-1 row-span-2 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
              <img src={typeof images[2] === 'string' ? images[2] : images[2].src} alt="Gallery 3" className="h-full w-full object-cover object-center pointer-events-none" />
            </div>
            <div className="col-span-1 row-span-2 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
              <img src={typeof images[3] === 'string' ? images[3] : images[3].src} alt="Gallery 4" className="h-full w-full object-cover object-center pointer-events-none" />
            </div>
            <div className="col-span-2 row-span-2 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[5] === 'string' ? images[5] : images[5].src)}>
              <img src={typeof images[5] === 'string' ? images[5] : images[5].src} alt="Gallery 6" className="h-full w-full object-cover object-center pointer-events-none" />
            </div>
          
            {/* Row 5: Image 7 (2x1), Image 8 (2x1) */}
            {images[6] && (
              <div className="col-span-2 row-span-1 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[6] === 'string' ? images[6] : images[6].src)}>
                <img src={typeof images[6] === 'string' ? images[6] : images[6].src} alt="Gallery 7" className="h-full w-full object-cover object-center pointer-events-none" />
              </div>
            )}
            {images[7] && (
              <div className="col-span-2 row-span-1 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[7] === 'string' ? images[7] : images[7].src)}>
                <img src={typeof images[7] === 'string' ? images[7] : images[7].src} alt="Gallery 8" className="h-full w-full object-cover object-center pointer-events-none" />
              </div>
            )}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'bd-grid') {
    // Special grid for Block Diary project
    // Row 1: 1 full-width image
    // Row 2: 3 images (2 cols each)
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="w-full pt-8">
              <div className="grid grid-cols-6 gap-4 w-full">
                {/* Row 1: Full width image */}
                <div className="col-span-6 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
                  <img
                    src={typeof images[0] === 'string' ? images[0] : images[0].src}
                    alt="Gallery 1"
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                </div>

                {/* Row 2: Three images (2 cols each) */}
                <div className="col-span-2 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
                  <img
                    src={typeof images[1] === 'string' ? images[1] : images[1].src}
                    alt="Gallery 2"
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                </div>

                <div className="col-span-2 col-start-3 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
                  <img
                    src={typeof images[2] === 'string' ? images[2] : images[2].src}
                    alt="Gallery 3"
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                </div>

                <div className="col-span-2 col-start-5 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
                  <img
                    src={typeof images[3] === 'string' ? images[3] : images[3].src}
                    alt="Gallery 4"
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'cmt-grid') {
    // Special grid for CosMediTour project
    // All images: aspect ratio 1920/1080, object-cover object-center
    // Pattern: [full], [full], [1/3][1/3][1/3], [full], [1/3][1/3][1/3]
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="w-full pt-8">
              <div className="grid grid-cols-6 gap-4 w-full">
                {/* Row 1: Image 1 - Full width */}
                {images[0] && (
                  <div className="col-span-6 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
                    <img
                      src={typeof images[0] === 'string' ? images[0] : images[0].src}
                      alt="Gallery 1"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                )}

                {/* Row 2: Image 2 - Full width */}
                {images[1] && (
                  <div className="col-span-6 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
                    <img
                      src={typeof images[1] === 'string' ? images[1] : images[1].src}
                      alt="Gallery 2"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                )}

                {/* Row 3: Images 3, 4, 5 - Three columns */}
                {images[2] && (
                  <div className="col-span-2 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
                    <img
                      src={typeof images[2] === 'string' ? images[2] : images[2].src}
                      alt="Gallery 3"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                )}

                {images[3] && (
                  <div className="col-span-2 col-start-3 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
                    <img
                      src={typeof images[3] === 'string' ? images[3] : images[3].src}
                      alt="Gallery 4"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                )}

                {images[4] && (
                  <div className="col-span-2 col-start-5 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[4] === 'string' ? images[4] : images[4].src)}>
                    <img
                      src={typeof images[4] === 'string' ? images[4] : images[4].src}
                      alt="Gallery 5"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                )}

                {/* Row 4: Image 6 - Full width */}
                {images[5] && (
                  <div className="col-span-6 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[5] === 'string' ? images[5] : images[5].src)}>
                    <img
                      src={typeof images[5] === 'string' ? images[5] : images[5].src}
                      alt="Gallery 6"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Row 5: Images 7, 8, 9 - Three columns */}
                {images[6] && (
                  <div className="col-span-2 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[6] === 'string' ? images[6] : images[6].src)}>
                    <img
                      src={typeof images[6] === 'string' ? images[6] : images[6].src}
                      alt="Gallery 7"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                )}

                {images[7] && (
                  <div className="col-span-2 col-start-3 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[7] === 'string' ? images[7] : images[7].src)}>
                    <img
                      src={typeof images[7] === 'string' ? images[7] : images[7].src}
                      alt="Gallery 8"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                )}

                {images[8] && (
                  <div className="col-span-2 col-start-5 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(typeof images[8] === 'string' ? images[8] : images[8].src)}>
                    <img
                      src={typeof images[8] === 'string' ? images[8] : images[8].src}
                      alt="Gallery 9"
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'nwsfd-grid') {
    // Special grid for SAMAHAN NewsFeed project
    // Pattern: 1 pic, 2 pics, 1 pic, 2 pics
    // All images: aspect ratio 1690/1080, object-cover object-top
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="w-full pt-8">
              <div className="grid grid-cols-6 gap-4 w-full">
                {/* Image 1: Full width */}
                {images[0] && (
                  <div className="col-span-6 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
                    <img
                      src={typeof images[0] === 'string' ? images[0] : images[0].src}
                      alt="Gallery 1"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 2: Half width */}
                {images[1] && (
                  <div className="col-span-3 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
                    <img
                      src={typeof images[1] === 'string' ? images[1] : images[1].src}
                      alt="Gallery 2"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 3: Half width */}
                {images[2] && (
                  <div className="col-span-3 col-start-4 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
                    <img
                      src={typeof images[2] === 'string' ? images[2] : images[2].src}
                      alt="Gallery 3"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 4: Full width */}
                {images[3] && (
                  <div className="col-span-6 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
                    <img
                      src={typeof images[3] === 'string' ? images[3] : images[3].src}
                      alt="Gallery 4"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 5: Half width (optional) */}
                {images[4] && (
                  <div className="col-span-3 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[4] === 'string' ? images[4] : images[4].src)}>
                    <img
                      src={typeof images[4] === 'string' ? images[4] : images[4].src}
                      alt="Gallery 5"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 6: Half width (optional) */}
                {images[5] && (
                  <div className="col-span-3 col-start-4 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[5] === 'string' ? images[5] : images[5].src)}>
                    <img
                      src={typeof images[5] === 'string' ? images[5] : images[5].src}
                      alt="Gallery 6"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'tedx-grid') {
    // Special grid for TEDxLanang Ave project
    // Row 1: Full width image
    // Row 2: Three equal square images (2 cols each)
    // Row 3: Full width image
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="w-full pt-8">
              <div className="grid grid-cols-6 gap-4 w-full">
                {/* Row 1: Full width image */}
                <div className="col-span-6 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
                  <img
                    src={typeof images[0] === 'string' ? images[0] : images[0].src}
                    alt="Gallery 1"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>

                {/* Row 2: Three equal square images */}
                <div className="col-span-2 aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
                  <img
                    src={typeof images[1] === 'string' ? images[1] : images[1].src}
                    alt="Gallery 2"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>

                <div className="col-span-2 aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
                  <img
                    src={typeof images[2] === 'string' ? images[2] : images[2].src}
                    alt="Gallery 3"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>

                <div className="col-span-2 aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
                  <img
                    src={typeof images[3] === 'string' ? images[3] : images[3].src}
                    alt="Gallery 4"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>

                {/* Row 3: Full width image */}
                <div className="col-span-6 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(typeof images[4] === 'string' ? images[4] : images[4].src)}>
                  <img
                    src={typeof images[4] === 'string' ? images[4] : images[4].src}
                    alt="Gallery 5"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'nwsfd-grid-2') {
    // Variation: 1 big image + 2 small below, repeated twice (6 images total)
    // Pattern: Full width → Half/Half → Full width → Half/Half
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="w-full pt-8">
              <div className="grid grid-cols-6 gap-4 w-full">
                {/* Image 1: Full width */}
                {images[0] && (
                  <div className="col-span-6 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[0] === 'string' ? images[0] : images[0].src)}>
                    <img
                      src={typeof images[0] === 'string' ? images[0] : images[0].src}
                      alt="Gallery 1"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 2: Half width */}
                {images[1] && (
                  <div className="col-span-3 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[1] === 'string' ? images[1] : images[1].src)}>
                    <img
                      src={typeof images[1] === 'string' ? images[1] : images[1].src}
                      alt="Gallery 2"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 3: Half width */}
                {images[2] && (
                  <div className="col-span-3 col-start-4 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[2] === 'string' ? images[2] : images[2].src)}>
                    <img
                      src={typeof images[2] === 'string' ? images[2] : images[2].src}
                      alt="Gallery 3"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 4: Full width */}
                {images[3] && (
                  <div className="col-span-6 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[3] === 'string' ? images[3] : images[3].src)}>
                    <img
                      src={typeof images[3] === 'string' ? images[3] : images[3].src}
                      alt="Gallery 4"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 5: Half width */}
                {images[4] && (
                  <div className="col-span-3 col-start-1 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[4] === 'string' ? images[4] : images[4].src)}>
                    <img
                      src={typeof images[4] === 'string' ? images[4] : images[4].src}
                      alt="Gallery 5"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}

                {/* Image 6: Half width */}
                {images[5] && (
                  <div className="col-span-3 col-start-4 flex rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1690/1080' }} onClick={() => openImage(typeof images[5] === 'string' ? images[5] : images[5].src)}>
                    <img
                      src={typeof images[5] === 'string' ? images[5] : images[5].src}
                      alt="Gallery 6"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (layout === 'custom-grid') {
    // First image spans full width, rest are in 2-column grid with 1920/1080 ratio
    const [heroImage, ...gridImages] = images
    const heroAlign = typeof heroImage === 'string' ? 'top' : (heroImage.align || 'top')
    const heroAlignClass = heroAlign === 'bottom' ? 'object-bottom' : heroAlign === 'center' ? 'object-center' : 'object-top'
    
    // Use shorter aspect ratio (2.5:1) if only one image, otherwise use standard 1920/1080
    const heroAspectRatio = gridImages.length === 0 ? '2.5/1' : '1920/1080'
    
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="flex flex-col gap-4">
              {/* Hero image at top */}
              <div className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: heroAspectRatio }} onClick={() => openImage(typeof heroImage === 'string' ? heroImage : heroImage.src)}>
                <img 
                  src={typeof heroImage === 'string' ? heroImage : heroImage.src}
                  alt="hero"
                  className={`w-full h-full object-cover ${heroAlignClass} pointer-events-none`}
                />
              </div>
              {/* Grid of images below */}
              {gridImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {gridImages.map((item, i) => {
                    const src = typeof item === 'string' ? item : item.src
                    return (
                      <div key={i} className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" style={{ aspectRatio: '1920/1080' }} onClick={() => openImage(src)}>
                        <img 
                          src={src} 
                          alt={`gallery-${i + 1}`} 
                          className="w-full h-full object-cover object-top pointer-events-none"
                        />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    )
  }

  if (layout === 'fixed-grid') {
    // Fixed 3-column grid that never changes
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="grid grid-cols-3 gap-4">
              {images.map((item, i) => {
                const src = typeof item === 'string' ? item : item.src
                // First 3 images (top row) are square, rest preserve aspect ratio
                const isTopRow = i < 3
                return (
                  <div key={i} className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(src)}>
                    <img 
                      src={src} 
                      alt={`gallery-${i}`} 
                      className={`w-full ${isTopRow ? 'aspect-square object-cover' : 'object-cover'} pointer-events-none`}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    )
  }

  if (layout === 'carousel') {
    return (
      <>
        <div className="relative mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="overflow-x-auto no-scrollbar -mx-2 md:-mx-6 px-2 md:px-6">
              <div className="inline-flex gap-4">
                {images.map((item, i) => {
                  const src = typeof item === 'string' ? item : item.src
                  return (
                    <div key={i} className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => openImage(src)}>
                      <img src={src} alt="gallery" className="h-64 shadow-sm flex-shrink-0 pointer-events-none" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    )
  }

  if (layout === 'masonry') {
    // CSS columns-based masonry
    return (
      <>
        <div className="mt-6 flex justify-center">
          <div className="w-full lg:max-w-[75%]">
            <div className="columns-3 gap-4">
              {images.map((item, i) => {
                const src = typeof item === 'string' ? item : item.src
                return (
                  <div key={i} className="cursor-pointer hover:opacity-90 transition-opacity mb-4 break-inside-avoid-column" onClick={() => openImage(src)}>
                    <img src={src} alt={`gallery-${i}`} className="w-full pointer-events-none" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <button
              onClick={closeImage}
              className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
              aria-label="Close image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </>
    )
  }

  // grid layout - check if this is a hero+grid layout (has one large image and multiple small ones)
  const heroImage = images.find((item) => {
    if (typeof item === 'string') return false
    return (item.cols && item.cols > 1) || (item.rows && item.rows > 1)
  })
  
  const gridImages = images.filter((item) => {
    if (typeof item === 'string') return true
    return !(item.cols && item.cols > 1) && !(item.rows && item.rows > 1)
  })

  // If there's a hero image and grid images, use top-bottom layout
  if (heroImage && gridImages.length > 0) {
    return (
      <div className="mt-6 flex justify-center">
        {/* Container with max-width of 85% on laptop and above */}
        <div className="w-full lg:max-w-[75%] flex flex-col gap-4">
          {/* Top: Hero Image */}
          <div className="w-full flex items-center justify-center">
            <img
              src={typeof heroImage === 'string' ? heroImage : heroImage.src}
              alt="hero"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Bottom: 2-column grid of smaller images */}
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              {gridImages.map((item, i) => {
                const src = typeof item === 'string' ? item : item.src
                return (
                  <img
                    key={i}
                    src={src}
                    alt={`gallery-${i}`}
                    className="w-full h-full object-contain"
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default grid layout (for other projects)
  return (
    <>
      <div className="mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 auto-rows-[200px] items-center">
          {images.map((item, i) => {
            const img = typeof item === 'string' ? { src: item } : item
            const cols = Math.min(5, Math.max(1, img.cols || 1))
            const rows = Math.min(5, Math.max(1, img.rows || 1))
            
            const gridColStyle = `lg:[grid-column:span_${cols}]`
            const gridRowStyle = `lg:[grid-row:span_${rows}]`
            
            return (
              <img
                key={i}
                src={img.src}
                alt={`gallery-${i}`}
                className={`w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity ${gridColStyle} ${gridRowStyle}`}
                onClick={() => openImage(img.src)}
              />
            )
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <button
            onClick={closeImage}
            className="fixed top-4 right-4 z-[101] w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
            aria-label="Close image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-[90vh] max-w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
