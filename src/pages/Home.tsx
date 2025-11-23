import { useState } from 'react'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
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
    <div className="w-full px-2 md:px-6">
      <Hero />
      
      {/* Projects Section */}
      <section id="projects" className="pt-24 pb-16 bg-gray-50 text-gray-900 -mx-2 md:-mx-6 px-2 md:px-6">
        <div className="content-wrap">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-center">
            Projects
          </h2>

          {/* Tag Filter Section */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4 justify-center px-2 md:px-12">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors border-2 ${
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
            <p className="text-center text-gray-600 mt-12">
              No projects match the selected tags.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 text-center bg-gray-50">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight mb-6">
          Let's build something amazing together
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-2 md:px-6">
          Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
        </p>
        <a
          href="mailto:itssarahhaw@gmail.com"
          className="inline-block px-8 py-4 bg-gray-900 text-gray-50 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get in touch
        </a>
      </section>
    </div>
  )
}
