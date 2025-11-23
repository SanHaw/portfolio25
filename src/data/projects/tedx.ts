import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const tedx: Project = {
  id: 'gd-003',
  title: 'TEDxLanang Ave',
  subheading: 'The Official Branding for TEDxLanang Ave 2024',
  category: 'graphic design',
  tags: ['Graphic Design', 'Social Media', 'Branding Design', 'Canva', 'Figma'],
  image: workImages.tedx.tedx001,
  website: '',
  figma: '',
  facebook: 'https://www.facebook.com/TEDxLanang',
  role: 'Branding Head',
  date: '2024',
  organization: '',
  description: text`TEDxLanang Ave is an independently organized TEDx event 
                held in Davao City that brings together thought leaders, creatives, 
                and changemakers to share ideas worth spreading. Rooted in the 
                spirit of innovation and community, the event features diverse 
                speakers who inspire progress through powerful storytelling 
                and local impact.

                As the Branding Head for TEDxLanang Ave, my goal was to place 
                Mindanao's vibrant cultural identity at the heart of the event's 
                visual direction. I carefully balanced traditional elements—such 
                as indigenous patterns, regional color palettes, and symbolic 
                imagery—with TEDx's globally recognized branding standards. 
                This approach ensured that while the event reflected the uniqueness 
                and richness of Mindanao, it remained consistent with TEDx's 
                professional and minimalist aesthetic. The result was a cohesive 
                and culturally grounded visual experience that resonated with 
                both local audiences and the broader TEDx community`,
  process: text``,
  tech: text`All visual assets were created using Figma, which real-time collaboration 
                seamless across the team. With Figma's live editing capabilities, 
                multiple contributors could work on the same file simultaneously—
                perfect for refining layouts, sharing feedback, and making quick 
                iterations without versioning headaches.`,
  images: [
    workImages.tedx.tedx001,
    workImages.tedx.tedx008,
    workImages.tedx.tedx005,
    workImages.tedx.tedx004,
    workImages.tedx.tedx006
  ],
  galleryLayout: 'tedx-grid'
}
