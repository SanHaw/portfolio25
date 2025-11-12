import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Project } from '../data/projects'
import IconCircle from './IconCircle'

export function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate()

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement
    // don't intercept clicks on interactive elements (links, buttons, svgs, inputs)
    if (target.closest('a,button,input,textarea,svg')) return
    navigate(`/projects/${project.id}`)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      const target = e.target as HTMLElement
      if (target.closest('a,button,input,textarea,svg')) return
      e.preventDefault()
      navigate(`/projects/${project.id}`)
    }
  }

  return (
  <div
    className="border rounded overflow-hidden shadow-sm bg-site card cursor-pointer flex flex-col h-full"
    role="link"
    tabIndex={0}
    onClick={handleClick}
    onKeyDown={handleKeyDown}
    aria-label={`Open ${project.title} details`}
  >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-44 object-cover" 
        style={{ objectPosition: (project.id === 'gd-001' || project.id === 'ux-007') ? '50% 50%' : '50% 7%' }} 
      />
      <div className="p-4 text-site flex flex-col flex-grow">
      <h3 className="font-semibold text-2xl md:text-3xl leading-snug">{project.title}</h3>
      <p className="text-base text-site/70 mt-1">{project.subheading}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            {/* For graphic design projects, show Facebook and Instagram icons */}
            {project.tags?.includes('Graphic Design') ? (
              <>
                {/* Facebook icon */}
                {project.facebook && (
                  <a href={project.facebook} target="_blank" rel="noreferrer" aria-label="visit facebook">
                    <IconCircle>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </IconCircle>
                  </a>
                )}

                {/* Instagram icon */}
                {project.instagram && (
                  <a href={project.instagram} target="_blank" rel="noreferrer" aria-label="visit instagram">
                    <IconCircle>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="18" cy="6" r="1" fill="currentColor"/>
                      </svg>
                    </IconCircle>
                  </a>
                )}

                {/* TikTok icon */}
                {project.tiktok && (
                  <a href={project.tiktok} target="_blank" rel="noreferrer" aria-label="visit tiktok">
                    <IconCircle>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </IconCircle>
                  </a>
                )}
              </>
            ) : (
              <>
                {/* For non-graphic design projects, show Website and Figma icons */}
                {/* clearer website icon: external-link box */}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer" aria-label="visit website">
                    <IconCircle>
                      {/* Inlined globe SVG (converted from provided file) */}
                      <svg width="18" height="18" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <circle cx="15" cy="15" r="11" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
                        <ellipse cx="15" cy="15" rx="5" ry="11" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
                        <line x1="4.5" x2="25.5" y1="11" y2="11" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
                        <line x1="4.5" x2="25.5" y1="19" y2="19" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
                      </svg>
                    </IconCircle>
                  </a>
                )}

                {/* single-color Figma mark (five stacked circles) for clarity */}
                {project.figma && (
                  <a href={project.figma} target="_blank" rel="noreferrer" aria-label="open figma">
                    <IconCircle>
                      {/* Inlined Figma SVG from provided file (uses currentColor) */}
                      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M8.5 2C6.84315 2 5.5 3.34315 5.5 5C5.5 6.65685 6.84315 8 8.5 8H15.5C17.1569 8 18.5 6.65685 18.5 5C18.5 3.34315 17.1569 2 15.5 2H8.5Z" fill="currentColor" />
                        <path d="M15.5 9C13.8431 9 12.5 10.3431 12.5 12C12.5 13.6569 13.8431 15 15.5 15C17.1569 15 18.5 13.6569 18.5 12C18.5 10.3431 17.1569 9 15.5 9Z" fill="currentColor" />
                        <path d="M5.5 12C5.5 10.3431 6.84315 9 8.5 9H11.5V15H8.5C6.84315 15 5.5 13.6569 5.5 12Z" fill="currentColor" />
                        <path d="M8.5 16C6.84315 16 5.5 17.3431 5.5 19C5.5 20.6569 6.84315 22 8.5 22C10.1569 22 11.5 20.6569 11.5 19V16H8.5Z" fill="currentColor" />
                      </svg>
                    </IconCircle>
                  </a>
                )}
              </>
            )}
          </div>

          {/* Details link with larger top-right arrow icon (twice size) */}
          <Link to={`/projects/${project.id}`} className="text-site flex items-center gap-2 details-link">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
