import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Gallery from '../components/Gallery'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) return <div className="content-wrap px-6 py-12">Project not found</div>
  // Render text where a closing </br> indicates a paragraph break
  // and <br> / <br/> indicates a single line break.
  function renderWithBrTags(value?: string, className = 'mt-4 text-lg text-gray-700') {
    if (!value) return null

    // closing </br> -> paragraph break (two newlines), opening <br> or <br/> -> single newline
    let normalized = value
      .replace(/<\s*\/\s*br\s*>/gi, '\n\n')
      .replace(/<\s*br\s*\/?\s*>/gi, '\n')

    // Collapse single newlines (introduced by pasted text) into spaces so paragraphs
    // flow naturally; preserve double-newlines which represent paragraph breaks.
    normalized = normalized.replace(/\n{1}(?!\n)/g, ' ')

    const paragraphs = normalized.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)

    return paragraphs.map((p, idx) => (
      <p key={idx} className={`${className} ${idx > 0 ? 'mt-4' : ''}`}>
        {p.split(/\n/).map((line, i) => (
          i > 0 ? (<React.Fragment key={i}><br />{line}</React.Fragment>) : line
        ))}
      </p>
    ))
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 bg-site-bg pt-24 pb-2">
        <div className="content-wrap px-6">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900" aria-label="Back to projects">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-base">Back to projects</span>
          </Link>
        </div>
      </div>
      
      <div className="content-wrap px-6 py-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-snug tracking-tight">{project.title}</h1>
      
      {/* Only show metadata if at least one field exists */}
      {(project.role || project.date || project.organization) && (
        <div className="text-base text-gray-600 mt-2">
          {[project.role, project.date, project.organization].filter(Boolean).join(' • ')}
        </div>
      )}

      {/* Only render description section if content exists */}
      {project.description && renderWithBrTags(project.description, 'mt-4 text-lg text-gray-700')}

      {/* Social media and external links - show before gallery */}
      {(project.website || project.figma || project.facebook || project.instagram || project.tiktok) && (
        <div className="mt-6 flex gap-3 flex-wrap">
          {project.website && (
            <a 
              href={project.website} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-site-text rounded-full font-medium hover:bg-accent-600 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Website
            </a>
          )}
          {project.figma && (
            <a 
              href={project.figma} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-site-text rounded-full font-medium hover:bg-accent-600 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Figma
            </a>
          )}
          {project.facebook && (
            <a 
              href={project.facebook} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-site-text rounded-full font-medium hover:bg-accent-600 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          )}
          {project.instagram && (
            <a 
              href={project.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-site-text rounded-full font-medium hover:bg-accent-600 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
              Instagram
            </a>
          )}
          {project.tiktok && (
            <a 
              href={project.tiktok} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-site-text rounded-full font-medium hover:bg-accent-600 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>
          )}
        </div>
      )}

  {/* Gallery Sections (for projects with multiple sub-projects like CSSEC) */}
  {project.gallerySections && project.gallerySections.length > 0 && (
    <div className="mt-8">
      {project.gallerySections.map((section, idx) => (
        <div key={idx} className={idx > 0 ? 'mt-12' : ''}>
          <h3 className="text-3xl font-semibold mb-4">{section.title}</h3>
          <Gallery images={section.images} layout={section.layout || 'masonry'} />
        </div>
      ))}
    </div>
  )}

  {/* Gallery (per-project). layout can be 'grid' | 'masonry' | 'carousel' */}
  {!project.gallerySections && project.images && project.images.length > 0 && (
    <Gallery images={project.images} layout={project.galleryLayout} />
  )}

  {/* Only show Process section if content exists */}
  {project.process && (
    <>
      <h3 className="text-3xl mt-8">Process</h3>
      {renderWithBrTags(project.process, 'mt-2 text-lg text-gray-700')}
    </>
  )}

  {/* Only show Figma iframe if link exists */}
  {project.figma && (
    <div className="mt-6">
      <iframe title="figma" src={project.figma} className="w-full border" style={{ height: '80vh' }} />
    </div>
  )}

  {/* Only show Tech stack section if content exists */}
  {project.tech && (
    <>
      <h3 className="text-3xl mt-6">Tech stack</h3>
      <p className="mt-2 text-lg text-gray-700">{project.tech}</p>
    </>
  )}
    </div>
    </>
  )
}
