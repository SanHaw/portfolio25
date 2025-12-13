import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const nwsfd: Project = {
  id: 'pm-001',
  title: 'SAMAHAN NEWSFEED',
  subheading: 'An annual publication and web platform by SAMAHAN Communications',
  category: 'web development',
  tags: ['Web Development', 'Project Management', 'UX/UI', 'QA Testing', 'Agile'],
  image: workImages.nwsfd.nwsfd000,
  website: 'https://samahan.addu.edu.ph/newsfeed/',
  figma: 'https://embed.figma.com/design/5NhXWcr44GGvOvLbpW2cWr/-SYSDEV--NewsFeed-Website--Copy-?node-id=446-871&embed-host=share',
  role: 'Project Manager',
  date: '2025',
  organization: 'SAMAHAN',
  description: text`
    The SAMAHAN NewsFeed is an annual publication led by the SAMAHAN Communications, the official public affairs and information arm of SAMAHAN.
    
    Over the years, the SAMAHAN NewsFeed has become more than just a publication—it has evolved into a space where Ateneans see their journeys reflected not as isolated experiences, but as shared milestones of a tightly knit community.
  `,
  process: text`
    This website was built as part of our ongoing initiatives. What started as a simple archive for articles evolved into a self-sustaining platform, after we realized the team needed to manage content independently with minimal dev support. Alongside my co-manager Ellyanna, I helped lead the project from planning to release. As the project manager, I primarily negotiated technicalities with clients, organized documents, and oversaw the UX/UI process — while also assisting with QA testing to ensure a smooth user experience.
  `,
  tech: text`
    Our tech stack supports efficient collaboration across all roles. Project management and documentation are handled using Google Docs and Sheets for task tracking, content planning, and progress updates. For UI/UX design, we use Figma to create and iterate on wireframes and mockups. The frontend is built with Next.js and TypeScript, styled with CSS modules, and optimized using next/font and Vercel's Geist font. On the backend, we use TypeScript with Supabase for authentication and PostgreSQL storage, and Prisma for database management.
  `,
  gallerySections: [
    {
      title: '',
      description: '',
      images: [
        workImages.nwsfd.smhnnwsfd002,
        workImages.nwsfd.smhnnwsfd002,
        workImages.nwsfd.smhnnwsfd001,
        workImages.nwsfd.smhnnwsfd003,
        workImages.nwsfd.smhnnwsfd004,
        workImages.nwsfd.smhnnwsfd005
      ],
      layout: 'nwsfd-grid'
    }
  ]
}
