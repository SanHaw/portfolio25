import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import Tag from '../components/Tag'
import { getAllCategories, getOrderedBlogs } from '../data/blogs'

export default function Blogs() {
  const allBlogs = getOrderedBlogs()
  const categories = getAllCategories()
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const filterRef = useRef<HTMLDivElement | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 10

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!isCategoryDropdownOpen) return

      const target = event.target as Node | null
      if (filterRef.current && target && !filterRef.current.contains(target)) {
        setIsCategoryDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isCategoryDropdownOpen])

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
    setCurrentPage(1) // Reset to first page when filtering
  }

  const clearCategories = () => {
    setSelectedCategories([])
    setCurrentPage(1) // Reset to first page when clearing
  }

  const selectedCategoryLabel = selectedCategories.length === 0
    ? 'All categories'
    : selectedCategories.length === 1
      ? selectedCategories[0]
      : `${selectedCategories.length} categories selected`

  // Filter by categories
  const filteredBlogs = selectedCategories.length === 0
    ? allBlogs
    : allBlogs.filter(post => 
        post.category.some(cat => selectedCategories.includes(cat))
      )

  // Pagination calculations
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const endIndex = startIndex + blogsPerPage
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-site-bg">
      <div className="content-wrap px-4 md:px-20 pt-12 pb-4">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-light leading-snug tracking-tight text-center mb-12">
          Blogs
        </h1>

        {/* Filters Section */}
        <div className="mb-4 flex justify-end">
          <div ref={filterRef} className="relative flex w-full items-start justify-end gap-4 md:gap-5">
            <div className="pt-2 md:pt-2.5 shrink-0 text-right">
              <span className="text-sm uppercase tracking-wide text-gray-700">Filter by categories</span>
            </div>

            <div className="relative w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] min-w-0">
              <button
                type="button"
                onClick={() => setIsCategoryDropdownOpen((open) => !open)}
                className="w-full flex items-center justify-between gap-3 px-3 md:px-4 py-2 md:py-2.5 rounded-xl border border-gray-700 bg-site-bg text-gray-800 text-left shadow-sm transition-colors hover:bg-gray-900/5"
                aria-expanded={isCategoryDropdownOpen}
                aria-haspopup="listbox"
              >
                <span className="text-sm md:text-base font-medium truncate">{selectedCategoryLabel}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`shrink-0 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute right-0 mt-3 z-20 w-[min(32rem,90vw)] rounded-2xl border border-gray-700 bg-site-bg shadow-xl overflow-hidden">
                  <div className="max-h-80 overflow-y-auto p-4 md:p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {categories.map((category) => {
                        const checked = selectedCategories.includes(category)

                        return (
                          <label
                            key={category}
                            className="flex items-center gap-3 rounded-xl border border-gray-300 px-3 py-2 cursor-pointer hover:bg-gray-900/5 transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => {
                                toggleCategory(category)
                                setCurrentPage(1)
                              }}
                              className="sr-only"
                            />
                            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors ${checked ? 'border-yellow-400 bg-yellow-400' : 'border-gray-500 bg-site-bg'}`}>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-opacity ${checked ? 'opacity-100' : 'opacity-0'}`}
                              >
                                <path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700" />
                              </svg>
                            </span>
                            <span className="text-sm md:text-base text-gray-700">{category}</span>
                          </label>
                        )
                      })}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 pt-4 border-t border-gray-300">
                      <button
                        type="button"
                        onClick={clearCategories}
                        className="text-sm text-gray-600 hover:text-gray-800 underline disabled:no-underline disabled:text-gray-300"
                        disabled={selectedCategories.length === 0}
                      >
                        Clear categories
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsCategoryDropdownOpen(false)}
                        className="px-4 py-2 rounded-full bg-gray-700 text-site-bg text-sm font-medium hover:bg-gray-600 transition-colors"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Blog Articles - Full Width */}
      <div className="flex flex-col gap-0">
        {currentBlogs.map((post, index) => (
          <article 
            key={post.id}
            className="w-full py-8"
          >
            <div className="content-wrap px-4 md:px-20">
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
                {/* Image - Left Column */}
                <div className="w-full relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                  {/* Overlay with Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-lg flex flex-col justify-end p-6">
                    <h2 className="text-2xl md:text-3xl font-light text-white">{post.title}</h2>
                  </div>
                </div>

                {/* Content - Right Column */}
                <div className="w-full flex flex-col justify-between">
                  <div>
                    {/* Categories */}
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {post.category.map(cat => (
                        <Tag key={cat}>
                          {cat}
                        </Tag>
                      ))}
                    </div>

                    {/* Date */}
                    <p className="text-lg text-gray-700 mb-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    {/* Article Snippet */}
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        {post.preview}
                      </p>
                    </div>
                  </div>

                  {/* Read Full Article Button - Fixed at Bottom */}
                  {(post.linkedinUrl || post.secondaryLink) && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-start mt-6">
                      {post.linkedinUrl && (
                        <a
                          href={post.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                        >
                          <Button size="lg" className="inline-flex items-center gap-2">
                            Read full article here
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Button>
                        </a>
                      )}
                      {post.secondaryLink && (
                        <a
                          href={post.secondaryLink.url}
                          className="inline-flex"
                        >
                          <Button variant="secondary" className="inline-flex items-center gap-2 hover:!bg-gray-900 hover:!text-white">
                            {post.secondaryLink.label}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="content-wrap px-4 md:px-20 py-12">
          <div className="flex justify-center items-center gap-2">
            {/* Previous Button */}
            <Button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              size="sm"
            >
              Previous
            </Button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => goToPage(page)}
                  variant={currentPage === page ? 'primary' : 'outline'}
                  className="w-10 h-10 !px-0 !py-0 flex items-center justify-center leading-none"
                >
                  {page}
                </Button>
              ))}
            </div>

            {/* Next Button */}
            <Button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              size="sm"
            >
              Next
            </Button>
          </div>

          {/* Page Info */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} articles
          </p>
        </div>
      )}

      {/* No Results Message */}
      {filteredBlogs.length === 0 && (
        <div className="content-wrap px-4 md:px-20">
          <p className="text-center text-gray-500 mt-12">
            No blog posts match the selected categories.
          </p>
        </div>
      )}
    </div>
  )
}
