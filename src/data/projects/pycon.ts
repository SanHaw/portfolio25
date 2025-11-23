import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const pycon: Project = {
  id: 'ux-002',
  title: 'PYCON 2025 Website',
  subheading: 'An official event microsite for PYCON Davao2025',
  category: 'uxui',
  tags: ['UI Design', 'Case Study','System Design', 'Web Design','Mobile Design', 'Figma'],
  image: workImages.pycon.pycon000,
  website: 'https://pycon-davao.durianpy.org/',
  secondaryWebsite: {
    url: '/projects/ux-002',
    label: 'View Project'
  },
  figma: 'https://embed.figma.com/design/pU0eCPgtF0TmdfG2PYChdc/%F0%9F%8C%BB-Showcase--PYCON-2025?node-id=0-1&embed-host=share',
  role: 'UX/UI Designer',
  date: '2025',
  organization: 'Durian Py',
  description: text`PyCon Davao 2025 is the first-ever regional Python Conference
                in Mindanao — a two-day celebration of technology, collaboration,
                and community. The official website served as the digital face of
                the event, providing attendees with access to key information
                like the program schedule, speaker lineup, venue details, sponsors,
                and registration links — all while capturing the creativity and
                energy that define Davao's growing tech scene.`,
  process: text`This was a large-scale project, and working on it alongside two
                other ongoing website builds pushed my multitasking and organization
                skills to their limits. Our team was composed of people I had
                never collaborated with before, which meant communication had
                to be clear, consistent, and respectful. I made sure to document
                every design decision, explain design intentions to the developers,
                and stay open to feedback during the implementation process.`,
  tech: 'Figma',
  images: [
    { src: workImages.pycon.pycon000, align: 'bottom' },
    workImages.pycon.pycon002,
    workImages.pycon.pycon003,
    workImages.pycon.pycon004,
    workImages.pycon.pycon005
  ],
  galleryLayout: 'custom-grid'
}
