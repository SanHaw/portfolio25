import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const midnightFiles: Project = {
  id: 'gd-004',
  title: 'MIDNIGHT FILES',
  subheading: 'A Halloween-themed pop-up market by Sorelia Collettiva',
  category: 'graphic design',
  tags: ['Graphic Design', 'Branding', 'Event Design'],
  image: workImages.mf.mf000,
  website: '',
  figma: '',
  role: 'Graphic Designer',
  date: '2024',
  organization: 'Sorelia Collettiva',
  description: text`
    Midnight Files is a Halloween pop-up market inspired by classic detective thrillers, crime documentaries, and investigative procedurals. Organized by Sorelia Collettiva, the event transformed Paramount Coffee at Crocodile Park into a full-scale mystery experience — complete with case files, red-string boards, evidence bags, and interrogation-style visuals.

    As the lead designer, I was responsible for building a cohesive visual world that tied the entire event together: from teaser releases and merchant calls to Instagram carousels, in-event materials, and narrative clues woven into the game.
  `,
  tech: 'Figma, Canva',
  gallerySections: [
    {
      title: '',
      description: '',
      images: [
        workImages.mf.mf000
      ]
    },
    {
      title: 'The Design Challenge',
      description: text`
        The goal was to create a visual identity that:
        Captured the suspense of investigative noir, without relying on typical horror tropes
        Felt immersive and narrative-driven, as if guests were stepping into an active case
        Supported the event's gameplay component, where visitors acted as investigators collecting clues
        Remained flexible across posters, social content, and various event assets
        
        I leaned heavily into textured surfaces, forensic symbols, polaroids, classified files, and handwritten notes—balancing chaos with clarity to mimic real investigative boards.
        
        Visual Direction
        The aesthetic draws from:
        Crime scene documentation — polaroids, evidence markers, body outlines
        Detective war-room boards — pinned photos, red string connections, scribbled annotations
        Old-school noir — grainy textures, muted palettes, deep shadows
        Official case file ephemera — folders, stamps, clipped documents, confidential pages
        
        Red became the accent color to hint at urgency and danger, while parchment tones and desaturated grays help ground everything in realism.
      `,
      images: [
        workImages.mf.mf001,
        workImages.mf.mf002
      ],
      layout: 'grid'
    },
    {
      title: 'Process & Approach',
      description: text`
        The project began with defining a visual direction that felt cohesive, recognizable, and adaptable across multiple formats. I started by identifying key elements that could anchor the identity — textured surfaces, layered objects, emphasis on composition, and a controlled color palette. These became the foundation for the system.
        
        From there, I built a modular layout approach that allowed each graphic to feel dynamic while still belonging to the same family. I experimented with arrangements of documents, photographs, and props to create depth and visual interest without overwhelming the content. Balancing detail and clarity was a priority, especially for social media where information needs to be readable at a glance.
        
        Lighting, shadows, and texture played an important role in creating realism and grounding the compositions. Each asset was designed with a consistent hierarchy, ensuring titles, dates, and calls-to-action remained clear regardless of the complexity of the background.
        
        Throughout the process, I iterated based on platform needs — adapting designs for Instagram posts, carousels, and video frames. This allowed the visual identity to remain flexible while maintaining a unified look across the entire campaign.
      `,
      images: [
        workImages.mf.mf003,
        workImages.mf.mf004
      ],
      layout: 'grid'
    }
  ]
}
