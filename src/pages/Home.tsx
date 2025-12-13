import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import uxCert from '../assets/certs/UX.png'
import networksCert from '../assets/certs/Networks.png'

// Certifications data - add your certificate images and links here
const certifications = [
  {
    id: 1,
    title: 'Foundations of User Experience (UX) Design',
    image: uxCert,
    link: 'https://www.coursera.org/account/accomplishments/verify/OUFFRSB9HJGF',
    issued: 'November 2025'
  },
  {
    id: 2,
    title: 'CCNA: Introduction to Networks',
    image: networksCert,
    link: 'https://www.credly.com/badges/3d701633-29b5-474f-b5ea-34395a2585d3/public_url',
    issued: 'May 2025'
  }
]

export default function Home() {
  // Featured projects to display on home page - add your project IDs here
  const featuredProjectIds = [
    'ux-007', // Cosmeditour
    'ux-008', // PyCon
    'ux-003', // Block Diary
    'gd-001', // Elysan Design Studio
    'gd-004', // Midnight Files
    'ux-001'  // Duyog
  ]
  
  // Filter projects to show only featured ones
  const featuredProjects = projects.filter(p => featuredProjectIds.includes(p.id))

  return (
    <div className="w-full px-2 md:px-6">
      <Hero />
      
      {/* Projects Section */}
      <section id="projects" className="pt-24 pb-16 bg-site-bg text-gray-900 -mx-2 md:-mx-6 px-2 md:px-6">
        <div className="content-wrap">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-center">
            Recent Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-center mt-12">
            <Link
              to="/projects"
              className="px-8 py-4 bg-gray-900 text-gray-50 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              See More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Training Section */}
      <section className="py-16 md:py-20 bg-site-bg -mx-2 md:-mx-6 px-2 md:px-6">
        <div className="content-wrap">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-center">
            Certifications & Training
          </h2>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex flex-col h-full">
                <div className="relative w-full aspect-[4/3] rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {cert.title}
                </h3>
                <div className="mt-auto space-y-2">
                  <p className="text-sm text-gray-600">
                    Issued: {cert.issued}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-900 underline hover:text-gray-700 inline-flex items-center gap-1"
                  >
                    View Certificate
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 text-center bg-site-bg">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight mb-6">
          Let's build something amazing together
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-2 md:px-6">
          Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
        </p>
        <a
          href="mailto:itssarahhaw@gmail.com"
          className="inline-block px-8 py-4 bg-gray-900 text-gray-50 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get in touch
        </a>
      </section>
    </div>
  )
}
