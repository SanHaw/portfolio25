import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const cosmeditour: Project = {
  id: 'ux-007',
  title: 'CosMediTour',
  subheading: 'A modern, responsive website redesign for CosMediTour.',
  category: 'uxui',
  tags: ['UI Design', 'Web Design', 'Figma'],
  image: workImages.cmt.cmt000,
  website: '',
  figma: 'https://embed.figma.com/design/OdoqbDS41EDMAMNeam3AA6/%F0%9F%8C%BB-Showcase--CosMediTour-Website?node-id=0-1&embed-host=share',
  role: 'UX/UI Designer',
  date: '2025',
  organization: '',
  description: text``,
  background: text`CosMediTour's website serves as the first touchpoint for potential clients seeking cosmetic surgery packages abroad. However, their previous design lacked cohesion and failed to visually convey the brand's blend of medical professionalism and luxurious travel experience.
                
                The redesign aimed to build trust through an elevated user experience — improving readability, accessibility, and aesthetics while aligning with the brand's premium image.`,
  problemSolution: [
    {
      problem: 'Outdated and inconsistent website visuals failed to reflect a premium, trusted medical brand.',
      solution: 'Create a refined visual identity combining modern luxury and clinical credibility through consistent color, imagery, and typography.'
    },
    {
      problem: 'Navigation and content layout made it difficult for users to explore services and destinations.',
      solution: 'Design an intuitive information hierarchy and responsive layout with clear CTAs, easy-to-read sections, and a guided browsing experience.'
    },
    {
      problem: 'Lack of accessible, mobile-friendly experience for international clients browsing on smartphones.',
      solution: 'Develop responsive desktop and mobile interfaces following WCAG accessibility standards and modern UI patterns.'
    }
  ],
  uxInsights: {
    insights: [
      {
        title: 'Trust and reassurance',
        description: 'Users expect trust and reassurance from medical tourism websites — professional tone, credible imagery, and testimonials build confidence.'
      },
      {
        title: 'High-quality imagery',
        description: 'High-quality imagery of destinations and clinics increases perceived reliability.'
      },
      {
        title: 'Clear typography and visual hierarchy',
        description: 'Clear typography and visual hierarchy help clients quickly compare procedures and packages.'
      },
      {
        title: 'Minimal, breathable layouts',
        description: 'Minimal, breathable layouts outperform dense text blocks when explaining surgical information.'
      }
    ],
    solutionIntro: 'The final design integrates premium aesthetics and usability through structured content, clean typography, and elegant visual cues.\n\nBoth desktop and mobile versions emphasize clarity, balance, and conversion-focused CTAs.\n\nKey design choices included:',
    coreFeatures: [
      {
        title: 'Neutral, calm color palette',
        description: 'A neutral, calm color palette inspired by soft medical tones (cadet gray, blush pink, white).'
      },
      {
        title: 'Large hero banners',
        description: 'Large hero banners featuring serene imagery of Thailand and post-surgery confidence.'
      },
      {
        title: 'Scrollable sections',
        description: 'Scrollable sections that combine lifestyle photography with clear text content.'
      },
      {
        title: 'Trustworthy, elegant, and user-centered',
        description: 'The redesign modernized CosMediTour\'s online identity, presenting it as trustworthy, elegant, and user-centered.'
      },
      {
        title: 'Improved readability and navigation',
        description: 'Improved readability and navigation encourage users to explore more pages.'
      },
      {
        title: 'Medical professionalism and lifestyle appeal',
        description: 'The layout now highlights both medical professionalism and lifestyle appeal, resonating with target audiences seeking safe yet aspirational transformation experiences.'
      }
    ],
    closingText: ''
  },
  process: text``,
  tech: 'Figma',
  gallerySections: [
    {
      title: 'Background',
      description: `CosMediTour's website serves as the first touchpoint for potential clients seeking cosmetic surgery packages abroad. However, their previous design lacked cohesion and failed to visually convey the brand's blend of medical professionalism and luxurious travel experience.\n\nThe redesign aimed to build trust through an elevated user experience — improving readability, accessibility, and aesthetics while aligning with the brand's premium image.`,
      images: [
        { src: workImages.cmt.cmt000, align: 'center' }
      ],
      layout: 'custom-grid'
    },
    {
      title: '',
      description: 'Design #1: Focusing more on nude tones, keeping the color palette and style of the original website.',
      images: [
        workImages.cmt.cmt101,
        workImages.cmt.cmt100
      ],
      layout: 'cmt-grid'
    },
    {
      title: '',
      description: 'Design #2: A reinterpretation with a different take on their color palette and a slightly different style.',
      images: [
        workImages.cmt.cmt201,
        workImages.cmt.cmt200
      ],
      layout: 'cmt-grid'
    }
  ]
}
