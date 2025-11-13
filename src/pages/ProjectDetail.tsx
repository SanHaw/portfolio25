import { Link, useParams } from 'react-router-dom'
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

  if (!project) return <div className="content-wrap px-3 md:px-6 py-12">Project not found</div>

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
        
        {/* Special handling for CosMediTour to insert problem table after first gallery (Background) */}
        {project.id === 'ux-007' && project.gallerySections ? (
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
    </>
  )
}
