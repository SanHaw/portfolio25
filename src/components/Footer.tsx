import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-site-bg">
      <div className="content-wrap px-6 py-8 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo Column */}
        <div className="content-wrap px-6 py-8 flex flex-col md:flex-row justify-start gap-8">
          <div>
          <img src="/src/assets/logo/logo2.svg" alt="logo" className="h-10" />
        </div>
        
        {/* Navigation Column */}
        <div className="text-site">
          <nav className="flex flex-col">
            <Link to="/" className="block">Home</Link>
            <Link to="/projects" className="block">Projects</Link>
            <Link to="/about" className="block">About</Link>
            <Link to="/contact" className="block">Contact</Link>
          </nav>
        </div>
        </div>
        
        {/* Social Column */}
        <div className="text-site ml-12">
          <h4 className="font-bold mt-7">Socials</h4>
          <div className="mt-2">
            <a href="#" className="block accent-text">Instagram</a>
            <a href="#" className="block accent-text">Linkedin</a>
            <a href="#" className="block accent-text">Twitter</a>
            <a href="#" className="block accent-text"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
