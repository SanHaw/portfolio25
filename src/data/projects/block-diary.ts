import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const blockDiary: Project = {
  id: 'ux-003',
  title: 'Block Diary',
  subheading: 'A mobile companion app for Minecraft players',
  category: 'uxui',
  tags: ['UI Design', 'Mobile Design', 'Prototype', 'Figma'],
  image: workImages.bd.bd001,
  website: '',
  figma: 'https://embed.figma.com/design/4GeasETcLd8s7pIyNNZAyj/%F0%9F%8C%BB-Showcase--Block-Diary-%7C-Minecraft-Companion-App?node-id=8-1597&embed-host=share',
  role: 'Lead UX/UI Designer',
  date: '2025',
  organization: '',
  description: text`Block Diary is a mobile companion app for Minecraft players designed to help
                them log adventures, track coordinates, and save build ideas. Created in just four
                days for the IT Week 2025 UI/UX Competition, the app includes a journal feed,
                a location tracker, and a build library.`,
  process: text`Given the brief, we hit the ground running—breaking down requirements, mapping
                user flows, and dividing tasks. I led the design process: sketching wireframes,
                crafting reusable components, and turning layouts into animated prototypes.
                We tested, tweaked, and polished within four days.`,
  tech: 'Figma, Mobile Development, App Development, Prototype',
  images: [
    workImages.bd.bd001,
    workImages.bd.bd008,
    workImages.bd.bd004,
    workImages.bd.bd005
  ],
  galleryLayout: 'bd-grid'
}
