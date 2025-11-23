import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const cssec: Project = {
  id: 'gd-002',
  title: 'CSSEC',
  subheading: 'All the projects I handled as the Computer Studies Student Executive Council Creatives Head',
  category: 'uxui',
  tags: ['Graphic Design', 'Social Media', 'Branding Design', 'Canva'],
  image: workImages.cssec.cssec000,
  facebook: 'https://www.facebook.com/addu.cs',
  instagram: 'https://www.instagram.com/addu_cs/',
  role: 'UX/UI Designer',
  date: '2023 - 2024',
  organization: 'Computer Studies Student Executive Council (CSSEC)',
  description: text`The Computer Studies Student Executive Council (CSSEC) at 
                Ateneo de Davao University is the official student leadership 
                body representing the Computer Studies Cluster. Through organizing 
                tech-focused events, offering peer support, and fostering leadership 
                development, the council empowers students to excel inside and 
                outside the classroom. With competence, dedication, and a passion 
                for innovation, CSSEC strives to unite the Computer Studies community 
                and create a positive, lasting impact on its members

                As the Creative's Head, it's my job to shape and elevate our 
                cluster's narrative through imaginative visual storytelling and 
                engaging media. I develop the creative vision behind our promotional 
                materials, such as event posters, social media campaigns, and 
                workshop branding—with one clear aim: to capture and inspire our 
                Computer Studies community. I lead a passionate team of designers 
                and content creators, overseeing the entire creative process from 
                concept to final design. By ensuring brand consistency and injecting 
                innovation into every project, I help bring CSSEC's mission and 
                initiatives to life in a way that resonates with students and 
                faculty alike
`,
  process: text`Most visual assets were created using Canva, making it easy to 
                produce clean, on-brand graphics quickly. For projects that required 
                more flexibility or custom illustration, Figma and Procreate were 
                occasionally used—ideal for precision layout work and hand-drawn 
                elements. Organization was handled through Google Docs, Sheets, and 
                Drive, which kept feedback, asset links, and timelines centralized 
                and accessible for the entire team. This setup ensured fast turnarounds, 
                consistent branding, and a smooth design-review process.`,
  tech: 'Canva, Figma, Procreate',
  gallerySections: [
    {
      title: 'Temporary Branding',
      images: [
        workImages.cssec.cssec001,
        workImages.cssec.cssec103,
        workImages.cssec.cssec101,
        workImages.cssec.cssec105,
        workImages.cssec.cssec106,
        workImages.cssec.cssec107,
        workImages.cssec.cssec108,
        workImages.cssec.cssec109,
        workImages.cssec.cssec104
      ],
      layout: 'fixed-grid'
    },
    {
      title: 'Main Branding',
      images: [
        workImages.cssec.cssec003,
        workImages.cssec.cssec300,
        workImages.cssec.cssec301,
        workImages.cssec.cssec303,
        workImages.cssec.cssec304,
        workImages.cssec.cssec305,
        workImages.cssec.cssec308,
        workImages.cssec.cssec307,
        workImages.cssec.cssec306
      ],
      layout: 'masonry'
    },
    {
      title: 'Cham Along With Us',
      images: [
        workImages.cssec.cssec401,
        workImages.cssec.cssec406,
        workImages.cssec.cssec403,
        workImages.cssec.cssec404,
        workImages.cssec.cssec408,
        workImages.cssec.cssec405
      ],
      layout: 'cham-grid'
    },
    {
      title: 'Purple Up: Kick-Off',
      images: [
        workImages.cssec.cssec501,//
        workImages.cssec.cssec500,//
        workImages.cssec.cssec509, ///
        workImages.cssec.cssec505,
        workImages.cssec.cssec507,
        workImages.cssec.cssec510,
        workImages.cssec.cssec512,
        workImages.cssec.cssec502,//
        workImages.cssec.cssec508,
        workImages.cssec.cssec514
      ],
      layout: 'purple-grid'
    },
    {
      title: 'IT Week 2024',
      images: [
        workImages.cssec.cssec605, // top center image
        workImages.cssec.cssec601, // row 2 left
        workImages.cssec.cssec602, // row 2 center
        workImages.cssec.cssec603, // row 2 right
        workImages.cssec.cssec604, // row 3 left
        workImages.cssec.cssec606  // row 3 right (wide)
      ],
      layout: 'itweek-grid'
    }
  ]
}
