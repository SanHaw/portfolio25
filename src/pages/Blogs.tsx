import { useState } from 'react'
import Button from '../components/Button'
import Tag from '../components/Tag'
import { getAllCategories, getOrderedBlogs } from '../data/blogs'

export default function Blogs() {
  const allBlogs = getOrderedBlogs()
  const categories = getAllCategories()
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 10

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
      <div className="content-wrap px-4 md:px-20 py-12">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-light leading-snug tracking-tight text-center mb-12">
          Blogs
        </h1>

        {/* Filters Section */}
        <div className="mb-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-4 justify-center px-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => toggleCategory(category)}
                variant={selectedCategories.includes(category) ? 'primary' : 'outline'}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Clear Categories Button */}
          {selectedCategories.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={clearCategories}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Clear categories
              </button>
            </div>
          )}
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
                  {post.linkedinUrl && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-start mt-6">
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
                      {post.id === 'fighting-chance-itweek' && (
                        <a
                          href="/projects/ux-003"
                          className="inline-flex"
                        >
                          <Button variant="secondary" className="inline-flex items-center gap-2">
                            the design that won
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
                  className="w-10 h-10 !px-0"
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
