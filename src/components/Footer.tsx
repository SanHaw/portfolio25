import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(/src/assets/hero_bg.png)`
        }}
      />
      
      {/* Content overlay */}
      <div className="content-wrap px-6 pt-8 pb-16 flex flex-col gap-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Logo and Navigation Column */}
        <div className="flex flex-col md:flex-row justify-start gap-16">
          <div className="flex items-center">
          <img src="/src/assets/logo/logo2.svg" alt="logo" className="h-16 brightness-0 invert" />
        </div>
        
        {/* Navigation Column */}
        <div className="text-white">
          <h4 className="font-bold mt-7">Quick Links</h4>
          <nav className="flex flex-col mt-2">
            <Link to="/" className="block">Home</Link>
            <Link to="/projects" className="block">Projects</Link>
            <Link to="/about" className="block">About</Link>
          </nav>
        </div>
        </div>
        
        {/* Social Column */}
        <div className="text-white">
          <h4 className="font-bold mt-7">Socials</h4>
          <div className="mt-2">
            <a href="#" className="block">Instagram</a>
            <a href="#" className="block">Linkedin</a>
            <a href="#" className="block">Twitter</a>
            <a href="#" className="block"></a>
          </div>
        </div>
        </div>
        
        {/* Copyright */}
        <div className="text-white text-right text-sm">
          <p>© {new Date().getFullYear()} Sarah Haw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
