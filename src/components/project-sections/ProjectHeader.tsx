import type { Project } from '../../data/projects'

type Props = {
  project: Project
}

export default function ProjectHeader({ project }: Props) {
  return (
    <>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-snug tracking-tight">
        {project.title}
      </h1>
      
      {(project.role || project.date || project.organization) && (
        <div className="text-base text-gray-600 mt-2">
          {[project.role, project.date, project.organization].filter(Boolean).join(' • ')}
        </div>
      )}
    </>
  )
}
