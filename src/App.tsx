import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import BlogArticle from './pages/BlogArticle'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-site-bg text-site-text font-sans">
      <Navbar />
      <main className="flex-1 pt-[88px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  )
}
