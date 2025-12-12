import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import ProjectBackground from '../components/project-sections/ProjectBackground'
import ProjectDescription from '../components/project-sections/ProjectDescription'
import ProjectDesignSolution from '../components/project-sections/ProjectDesignSolution'
import ProjectFigmaEmbed from '../components/project-sections/ProjectFigmaEmbed'
import ProjectGallery from '../components/project-sections/ProjectGallery'
import ProjectHeader from '../components/project-sections/ProjectHeader'
import ProjectLinks from '../components/project-sections/ProjectLinks'
import ProjectProblemSolution from '../components/project-sections/ProjectProblemSolution'
import ProjectProcess from '../components/project-sections/ProjectProcess'
import ProjectTechStack from '../components/project-sections/ProjectTechStack'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!project) return <div className="content-wrap px-3 md:px-6 py-12">Project not found</div>

  const closeImage = () => setSelectedImage(null)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeImage()
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 bg-site-bg pt-24 pb-2">
        <div className="content-wrap px-3 md:px-6">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900" aria-label="Back to projects">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-base">Back to projects</span>
          </Link>
        </div>
      </div>
      
      <div className="content-wrap px-3 md:px-6 py-12">
        <ProjectHeader project={project} />
        
        {project.description && <ProjectDescription description={project.description} />}
        
        <ProjectLinks project={project} />
        
        {/* Special handling for Midnight Files - inline gallery rendering */}
        {project.id === 'gd-004' && project.gallerySections ? (
          <>
            {project.gallerySections.map((section, idx) => (
              <div key={idx} className={idx > 0 ? 'mt-12' : 'mt-8'}>
                {/* Gallery images - single column */}
                <div className="mt-6 flex justify-center">
                  <div className="w-full lg:max-w-[75%]">
                    <div className="flex flex-col gap-4">
                      {section.images.map((item, i) => {
                        const src = typeof item === 'string' ? item : item.src
                        return (
                          <div 
                            key={i} 
                            className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage(src)}
                          >
                            <img 
                              src={src} 
                              alt={`gallery-${i + 1}`} 
                              className="w-full h-auto object-contain pointer-events-none" 
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Section title and description */}
                {(section.title || section.description) && (
                  <div className={`mt-6 ${section.title ? 'text-left' : 'text-center'}`}>
                    {section.title && <h3 className="text-3xl font-extralight mb-4">{section.title}</h3>}
                    {section.description && (
                      <div className="text-lg leading-relaxed whitespace-pre-line">
                        {section.description}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </>
        ) : project.id === 'ux-007' && project.gallerySections ? (
          <>
            {project.gallerySections.slice(0, 1).map((section, idx) => (
              <div key={idx} className="mt-8">
                <ProjectGallery project={{ ...project, gallerySections: [section] }} />
              </div>
            ))}
            
            {project.problemSolution && <ProjectProblemSolution rows={project.problemSolution} />}
            
            {project.gallerySections.slice(1).map((section, idx) => (
              <div key={idx + 1} className="mt-12">
                <ProjectGallery project={{ ...project, gallerySections: [section] }} />
              </div>
            ))}
          </>
        ) : (
          <>
            <ProjectGallery project={project} />
            
            {project.background && <ProjectBackground background={project.background} />}
            
            {project.problemSolution && <ProjectProblemSolution rows={project.problemSolution} />}
          </>
        )}
        
        {project.uxInsights && (
          <ProjectDesignSolution
            insights={project.uxInsights.insights}
            solutionIntro={project.uxInsights.solutionIntro}
            coreFeatures={project.uxInsights.coreFeatures}
            closingText={project.uxInsights.closingText}
          />
        )}
        
        {project.process && <ProjectProcess process={project.process} />}
        
        {project.tech && <ProjectTechStack tech={project.tech} />}
        
        {project.figma && <ProjectFigmaEmbed figmaUrl={project.figma} />}
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
