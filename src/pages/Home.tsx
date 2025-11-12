import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Tag from '../components/Tag'
import { projects } from '../data/projects'

export default function Home() {
  const recent = projects.slice(0, 3)

  return (
    <div className="w-full px-6">
      <Hero />

      <section className="py-16 bg-gray-900 text-white -mx-6 px-6 min-h-[85vh] flex items-center">
        <div className="content-wrap">
          <div className="mt-8">
            <h2 className="text-6xl font-light text-white text-center">Recent Projects</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {recent.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link to="/projects">
                <Button size="lg">View all projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 min-h-[65vh] max-w-[80vw] mx-auto flex items-center">
        <div className="content-wrap">
          <h2 className="text-6xl font-light mb-8">About me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            
            {/* L column - Image */}
            <div className="flex items-center justify-center">
              <img src="/src/assets/about_me.GIF" alt="Profile photo" className="w-auto h-auto rounded-lg" />
            </div>
          
          {/* R column - Text */}
            <div className="flex flex-col justify-center">
              <p className="text-xl text-gray-600" >Hi, I'm Sarah („• ᴗ •„)♡ 
                            An artist and designer from Davao City, Philippines. 
                            ･ʚ˚✧˖ With a background in graphic design, ux/ui design, 
                            front-end development, project management, social media 
                            marketing, and customer service. (*´∇｀*)♡ I actively 
                            participate in organizations within and outside of school 
                            and have led numerous projects since entering college. ⋆✺⋆｡
                            </p>
                            <br />
                            <p className="text-xl text-gray-600">
                            When I'm not rushing off to the next project, I'm 
                            collecting smiskis, reading, playing games, watching 
                            movies, and--my favorite-- writing in my burn book 
                            (scrapbooking in my journal).</p>
            </div></div>

            

          {/* Tags and button below the grid */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              <Tag>UX/UI Design</Tag>
              <Tag>Figma</Tag>
              <Tag>Prototyping</Tag>
              <Tag>Project Management</Tag>
              <Tag>QA Testing</Tag>
              <Tag>Agile</Tag>
              <Tag>Wireframing</Tag>
              <Tag>Canva</Tag>
            </div>

            <div className="mt-6 flex justify-center">
              <Link to="/about">
                <Button size="lg">Read more about me</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 min-h-[65vh] max-w-[80vw] mx-auto">
        <div className="content-wrap">
          <h2 className="text-6xl font-light mb-12">Affiliations and Involvement</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* SAMAHAN SYSDEV - Active */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full bg-yellow-400 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">SAMAHAN SYSDEV</p>
                <p className="text-gray-600 ml-4">UX/UI Head</p>
                <p className="text-gray-600 ml-4">QA Tester</p>
                <p className="text-gray-600 ml-4">Project Manager</p>
                <p className="text-gray-600 ml-4">UX/UI Member</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2024 - present</p>
                <p className="text-gray-600">2025 - present</p>
                <p className="text-gray-600">2025 - present</p>
                <p className="text-gray-600">2024 - 2025</p>
              </div>
            </div>

            {/* UX Davao - Active */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full bg-yellow-400 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">UX Davao</p>
                <p className="text-gray-600 ml-4">Creatives Volunteer</p>
                <p className="text-gray-600 ml-4">Video Editor</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2025 - present</p>
                <p className="text-gray-600">2025 - present</p>
              </div>
            </div>

            {/* No-Code PH - Active */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full bg-yellow-400 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">No-Code PH</p>
                <p className="text-gray-600 ml-4">Creatives Volunteer</p>
                <p className="text-gray-600 ml-4">UX/UI Designer</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2025 - present</p>
                <p className="text-gray-600">2025 - present</p>
              </div>
            </div>

            {/* AFCC - Inactive */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full bg-yellow-400 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">AFCC</p>
                <p className="text-gray-600 ml-4">Deputy Creatives Director</p>
                <p className="text-gray-600 ml-4">Creatives Director</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2025 - present</p>
                <p className="text-gray-600">2024 - 2025</p>
              </div>
            </div>

            {/* Pycon - Inactive */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">Durian Py</p>
                <p className="text-gray-600 ml-4">UX/UI Designer</p>
                <p className="text-gray-600 ml-4">Graphic Designer</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2025</p>
                <p className="text-gray-600">2025</p>
              </div>
            </div>

            {/* Tactiv - Inactive */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">Tactiv</p>
                <p className="text-gray-600 ml-4">Usability Testing Intern</p>
                <p className="text-gray-600 ml-4">UX/UI Intern</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2025</p>
                <p className="text-gray-600">2025</p>
              </div>
            </div>

            {/* AWSUG Davao - Inactive */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">AWSUG Davao</p>
                <p className="text-gray-600 ml-4">Creatives Volunteer</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2025</p>
              </div>
            </div>

            {/* Borderline Travel and Tours - Inactive */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">Borderline Travel and Tours</p>
                <p className="text-gray-600 ml-4">Creatives Lead</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2024</p>
              </div>
            </div>

            {/* CSSEC - Inactive */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">CSSEC</p>
                <p className="text-gray-600 ml-4">Creatives Head</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2023 - 2024</p>
              </div>
            </div>

            {/* POWER AdDU - Inactive */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">POWER AdDU</p>
                <p className="text-gray-600 ml-4">CS Liaison</p>
                <p className="text-gray-600 ml-4">Project Head</p>
                <p className="text-gray-600 ml-4">Undersecretary</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2022 - 2023</p>
                <p className="text-gray-600">2022 - 2023</p>
                <p className="text-gray-600">2023 - 2024</p>
              </div>
            </div>

            {/* Cosmik Digital Solutions - Inactive */}
            <div className="grid items-start gap-x-3 gap-y-1 justify-center" style={{ gridTemplateColumns: '1rem minmax(200px, 350px) minmax(120px, 150px)' }}>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-1"></div>
              <div>
                <p className="font-semibold text-lg">Cosmik Digital Solutions</p>
                <p className="text-gray-600 ml-4">Graphic Design</p>
                <p className="text-gray-600 ml-4">Video Editor</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-gray-600 invisible">.</p>
                <p className="text-gray-600">2022</p>
                <p className="text-gray-600">2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
