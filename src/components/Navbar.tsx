import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo2.svg'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-site-bg z-50">
      <div className="content-wrap px-3 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          <img src={logo} alt="logo" className="h-10" />
        </Link>
        <div className="space-x-8">
          <Link to="/projects" className="text-site">Projects</Link>
          <Link to="/blogs" className="text-site">Blogs</Link>
          <Link to="/about" className="text-site">About</Link>
        </div>
      </div>
    </nav>
  )
}
