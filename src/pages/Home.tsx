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
    </div>
  )
}
