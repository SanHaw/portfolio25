import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo/logo2.svg'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.hash === '#projects') {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          projectsSection.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/#projects')
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-site-bg z-50">
      <div className="content-wrap px-3 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          <img src={logo} alt="logo" className="h-10" />
        </Link>
        <div className="space-x-8">
          <Link to="/#projects" onClick={handleProjectsClick} className="text-site">Projects</Link>
          <Link to="/blogs" className="text-site">Blogs</Link>
          <Link to="/about" className="text-site">About</Link>
        </div>
      </div>
    </nav>
  )
}
