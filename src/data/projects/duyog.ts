import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const duyog: Project = {
  id: 'ux-001',
  title: 'Duyog 2025 Website',
  subheading: 'An official event microsite for Ateneo U-Fest 2025',
  category: 'uxui',
  tags: ['UI Design', 'Web Design','Mobile Design', 'Figma', 'QA Testing'],
  image: workImages.duyog.duyog000,
  website: 'https://duyog2025.addu.edu.ph',
  figma: 'https://embed.figma.com/design/n7At6dIqG4GtaT4BL7Y6Ds/%F0%9F%8C%BB-Showcase--Duyog?node-id=0-1&embed-host=share',
  role: 'Lead UX/UI Designer',
  date: '2025',
  organization: 'SAMAHAN Systems Development',
  description: text`Duyog is the theme of this year's Ateneo U-Fest, the university's
                biggest annual festival. The official website serves as the event's
                digital hub — a multi-page platform covering everything from
                U-Fest's history, branding, and schedule, to featured games,
                winners, and a dedicated ticketing page for the main show.`,
  process: text`We had just a month to design, build, and test the entire site. I
                took charge of the overall design direction — sketching wireframes,
                building reusable components, and overseeing the visual identity
                across both mobile and desktop layouts. Collaboration with the
                frontend and backend teams was constant; we synced daily to ensure
                each transition from design to code was seamless.
                
                My work didn't stop there. After handing off the design and after the devs had finished
                the website, I also assisted both in quality assurance testing and Usability testing. 
                unfortunately due to the time constraints, the website isn't as polished as I wouldv'e
                hoped, and as a designer there are definetly things I notice that I would much rather have
                had fixed, but the end result is still something I'm proud of given the time constraints 
                and resources we had.`,
  tech: 'Figma, React, Tailwind',
  images: [
    workImages.duyog.duyog000,
    workImages.duyog.duyog004,
    workImages.duyog.duyog005,
    workImages.duyog.duyog003,
    workImages.duyog.duyog002,
    workImages.duyog.duyog006
  ],
  galleryLayout: 'nwsfd-grid'
}
