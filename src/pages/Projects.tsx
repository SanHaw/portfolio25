import { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const allTags = [
    'UI Design',
    'Case Study',
    'QA Testing',
    'Project Management',
    'Graphic Design',
    'Branding Design',
    'System Design',
    'Web Design',
    'Mobile Design',
    'Social Media',
    'Figma',
    'Canva'
  ]

  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false)
  const filterRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!isTagDropdownOpen) return

      const target = event.target as Node | null
      if (filterRef.current && target && !filterRef.current.contains(target)) {
        setIsTagDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isTagDropdownOpen])

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const clearSelection = () => {
    setSelectedTags([])
  }

  const selectedTagLabel = selectedTags.length === 0
    ? 'All tags'
    : selectedTags.length === 1
      ? selectedTags[0]
      : `${selectedTags.length} tags selected`

  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project => 
        project.tags?.some(tag => selectedTags.includes(tag))
      )

  return (
    <>
      <div className="content-wrap px-4 md:px-20 py-12">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-light leading-snug tracking-tight text-center mb-8">Projects</h1>
        
        {/* Tag Filter Section */}
        <div className="mb-4 flex justify-end">
          <div ref={filterRef} className="relative flex w-full items-start justify-end gap-4 md:gap-5">
            <div className="pt-2 md:pt-2.5 shrink-0 text-right">
              <span className="text-sm uppercase tracking-wide text-gray-700">Filter by tags</span>
            </div>

            <div className="relative w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] min-w-0">
              <button
                type="button"
                onClick={() => setIsTagDropdownOpen((open) => !open)}
                className="w-full flex items-center justify-between gap-3 px-3 md:px-4 py-2 md:py-2.5 rounded-xl border border-gray-700 bg-site-bg text-gray-800 text-left shadow-sm transition-colors hover:bg-gray-900/5"
                aria-expanded={isTagDropdownOpen}
                aria-haspopup="listbox"
              >
                <span className="text-sm md:text-base font-medium truncate">{selectedTagLabel}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`shrink-0 transition-transform ${isTagDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {isTagDropdownOpen && (
                <div className="absolute right-0 mt-3 z-20 w-[min(32rem,90vw)] rounded-2xl border border-gray-700 bg-site-bg shadow-xl overflow-hidden">
                  <div className="max-h-80 overflow-y-auto p-4 md:p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {allTags.map((tag) => {
                        const checked = selectedTags.includes(tag)

                        return (
                          <label
                            key={tag}
                            className="flex items-center gap-3 rounded-xl border border-gray-300 px-3 py-2 cursor-pointer hover:bg-gray-900/5 transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleTag(tag)}
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
                            <span className="text-sm md:text-base text-gray-700">{tag}</span>
                          </label>
                        )
                      })}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 pt-4 border-t border-gray-300">
                      <button
                        type="button"
                        onClick={clearSelection}
                        className="text-sm text-gray-600 hover:text-gray-800 underline disabled:no-underline disabled:text-gray-300"
                        disabled={selectedTags.length === 0}
                      >
                        Clear selection
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsTagDropdownOpen(false)}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            No projects match the selected tags.
          </p>
        )}
      </div>

      {/* CTA Section */}
      <div className="w-full py-16 md:py-20 bg-gray-900 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight mb-6 text-white">
          Let's build something amazing together
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-2 md:px-6">
          Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
        </p>
        <a
          href="mailto:itssarahhaw@gmail.com"
          className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
