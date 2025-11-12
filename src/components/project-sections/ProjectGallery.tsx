import type { Project } from '../../data/projects'
import Gallery from '../Gallery'

type Props = {
  project: Project
}

export default function ProjectGallery({ project }: Props) {
  // For projects with gallery sections (like CSSEC)
  if (project.gallerySections && project.gallerySections.length > 0) {
    return (
      <div className="mt-8">
        {project.gallerySections.map((section, idx) => (
          <div key={idx} className={idx > 0 ? 'mt-12' : ''}>
            <Gallery images={section.images} layout={section.layout || 'masonry'} />
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
      </div>
    )
  }

  // For regular projects with single gallery
  if (project.images && project.images.length > 0) {
    return <Gallery images={project.images} layout={project.galleryLayout} />
  }

  return null
}
