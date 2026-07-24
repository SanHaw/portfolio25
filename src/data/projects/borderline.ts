import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const borderline: Project = {
  id: 'gd-005',
  title: 'Borderline',
  subheading: 'A travel and tours brand identity with social-ready creative direction',
  category: 'uxui',
  tags: ['Branding', 'Social Media', 'Travel', 'Graphic Design'],
  image: workImages.borderline.borderline001,
  role: 'Creatives Lead',
  organization: 'Borderline Travel and Tours',
  description: text`Borderline Travel and Tours is a Davao-based travel agency 
      offering domestic and international tour packages, ticketing, visa assistance, 
      travel insurance, transportation, and other travel-related services.

      As Head Graphic Designer, I created promotional materials and social media 
      graphics that presented travel packages in a clear, engaging, and visually 
      appealing way. I conducted market research to align the designs with current 
      travel trends and customer preferences, while collaborating with suppliers 
      and partners to maintain consistent branding across campaigns.

      Through stronger promotional visuals and a more cohesive social media presence, 
      my work contributed to a 750% increase in client engagement and conversions 
      and a 320% improvement in online visibility.`,
  process: text``,
  tech: 'Canva',
  images: [
    workImages.borderline.borderline001,
    workImages.borderline.borderline002,
    workImages.borderline.borderline003,
  
  ],
  galleryLayout: 'masonry',
}
