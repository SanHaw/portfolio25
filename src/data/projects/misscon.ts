import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const misscon: Project = {
  id: 'ux-006',
  title: 'MISSCON 2024',
  subheading: "Official website for the Mindanao-wide International Studies Students' Convention",
  category: 'uxui',
  tags: ['UI Design', 'Web Design', 'Mobile Design', 'Figma'],
  image: workImages.mssc.mssc001,
  website: 'https://misscon2025.info',
  figma: '',
  role: 'UX/UI Designer',
  date: '2024',
  organization: '',
  description: text`The official website for MISSCon 2025 provides a sleek, responsive platform for
                attendees to explore event details, speaker highlights, and program timelines.
                Designed with clarity and professionalism in mind, the site offers a seamless
                user experience while reflecting the innovation and leadership spirit behind the
                Mindanao-wide International Studies Students' Convention.`,
  process: text`We were briefed on the event's progress and provided with the official branding
                and content. From there, we explored the best layout approach to present
                everything clearly and cohesively. After aligning structure with visual identity, we
                designed the final interface with both clarity and engagement in mind.`,
  tech: text`Project assets and content were organized through Google Docs, streamlining
                collaboration from the start. With the branding kit on hand, we designed the full
                user interface in Figma—translating ideas into clean, functional visuals while
                keeping everything aligned with the event's identity.`,
  images: [
    workImages.mssc.mssc001,
    workImages.mssc.mssc003,
    workImages.mssc.mssc002,
    workImages.mssc.mssc004,
    workImages.mssc.mssc005,
    workImages.mssc.mssc006
  ],
  galleryLayout: 'nwsfd-grid'
}
