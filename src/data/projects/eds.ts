import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const eds: Project = {
  id: 'gd-001',
  title: 'Elysan Design Studios',
  subheading: 'Online Business',
  category: 'graphic design',
  tags: ['Graphic Design', 'Social Media', 'Canva'],
  image: workImages.eds.eds,
  facebook: 'https://web.facebook.com/elysan.designstudios',
  instagram: 'https://www.instagram.com/elysan.designstudios/',
  tiktok: 'https://www.tiktok.com/@elysan.designstudios',
  role: 'Founder | Graphic Designer | Customer Service | Social Media Manager',
  date: 'ongoing since 2022',
  organization: '',
  description: text`Elysan Design Studios, a digital design brand I launched 
                in 2022 on TikTok. What started as a creative outlet has now 
                grown into a small business with over 3,000 followers, 73,000 
                likes, and 200+ recurring clients. With Elysan Design Studios, 
                I create posters, infographics— information designs and even 
                branding kits for people in the academe and small businesses.`,
  process: text``,
  tech: text`At EDS, we keep things streamlined and creative with a flexible, 
                purpose-driven toolkit. Most projects are crafted in Canva, 
                offering quick turnaround without compromising design quality. 
                Google Workspace—particularly Docs and Sheets—keeps our administrative 
                side organized and collaborative.

                For content and client engagement, we use Meta Business Suite 
                to stay responsive across Instagram and Facebook. Video editing 
                is handled through CapCut, iMovie, and Canva, depending on the 
                complexity of the project.

                When a commission calls for something extra, we bring in tools 
                like Figma for interface design and Procreate for more detailed, 
                hand-drawn elements. Our stack adapts to what each project needs—
                balancing efficiency, creativity, and quality every step of the way.`,
  images: [
    workImages.eds.eds001, // ImageSlider placeholder
    workImages.eds.eds101,
    workImages.eds.eds002,
    workImages.eds.eds103,
    workImages.eds.eds116,
    workImages.eds.eds000, // video
    workImages.eds.eds107,
    workImages.eds.eds105,
    workImages.eds.eds110,
    workImages.eds.eds114,
    workImages.eds.eds108,
    workImages.eds.eds102,
    workImages.eds.eds112
  ],
  galleryLayout: 'eds-grid'
}
