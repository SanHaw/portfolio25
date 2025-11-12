import { useState } from 'react'
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

  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project => 
        project.tags?.some(tag => selectedTags.includes(tag))
      )

  return (
    <>
      <div className="content-wrap px-20 py-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-snug tracking-tight text-center mb-12">Projects</h1>
        
        {/* Tag Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4 justify-center px-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-6 py-3 rounded-full text-base font-medium transition-colors border-2 ${
                  selectedTags.includes(tag)
                    ? 'bg-yellow-400 border-yellow-400 text-gray-900'
                    : 'bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Clear Selection Button */}
          {selectedTags.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={clearSelection}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Clear selection
              </button>
            </div>
          )}
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-snug tracking-tight mb-6 text-white">
          Let's build something amazing together
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-6">
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
