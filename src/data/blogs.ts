import { blogImages } from '../assets'

export type Blog = {
  id: string
  title: string
  date: string
  category: string[]
  image: string
  preview: string
  content: string
  linkedinUrl?: string
}

// All blog posts with their full content
export const blogPosts: Record<string, Blog> = {
  'uxph-mini-davao': {
    id: 'uxph-mini-davao',
    title: 'UXPH Mini in Davao',
    date: '2025-08-23',
    category: ['UX/UI', 'Volunteering', 'Events','Community','Tech'],
    image: blogImages.uxphMiniDavao,
    preview: `Last August, I had the pleasure of volunteering for UXPH Mini in 
        Davao, on behalf of UX Davao!

        It was a whirlwind of new experiences—a new org, new role, new people, 
        and above all, new opportunities. I had the joy of working alongside my 
        dear friends, while also meeting so many amazing speakers, volunteers, 
        and mentors.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7370809546702991360/'
  },
  'the-frame-ai-design': {
    id: 'the-frame-ai-design',
    title: 'Designing with AI: Lessons from The Frame x UX Davao',
    date: '2025-08-09',
    category: ['Volunteering', 'Community','AI','Tech'],
    image: blogImages.theFrameAiDesign,
    preview: `Attending The Frame's event with UX Davao opened my eyes to how AI is reshaping the design landscape. What started as curiosity turned into a deep appreciation for how technology like AI and vibe coding can enhance, not replace, human creativity.

        The talks on AR/VR, AI-driven design, and workflow efficiency reminded me that while tools evolve, creativity and empathy remain at the heart of what we do as designers.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/posts/sanhaw_another-event-withux-davao-this-time-with-activity-7364312966306934785-i2B-?utm_source=social_share_send&utm_medium=member_desktop_web'
  },
  'beyond-the-wireframe': {
    id: 'beyond-the-wireframe',
    title: 'Beyond the Wireframe: Exploring Design and Leadership',
    date: '2025-07-19',
    category: ['Volunteering', 'Community','Leadership','Tech'],
    image: blogImages.beyondTheWireframe,
    preview: `What started as uncertainty turned into one of my proudest college achievements — discovering my path in design, leading the UX/UI team for SAMAHAN SYSDEV, and growing alongside people who inspired and challenged me every step of the way.

        This journey taught me the value of passion, collaboration, and creativity — lessons I'll carry beyond the wireframe.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/posts/sanhaw_samahansysdev-sysdever-activity-7352192480248811520-05C_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEka1JEBxHaiWphlT2C_qlFXY_c0meLf9aA'
  },
  'building-forward-sysdev': {
    id: 'building-forward-sysdev',
    title: 'Building Forward: Learning with SysDev',
    date: '2025-10-30',
    category: ['Events', 'Volunteering' , 'Community', 'Leadership','Tech'],
    image: blogImages.buildingForwardSysdev,
    preview: `As the semester wrapped up, our SAMAHAN Systems Development team closed another chapter of growth — this time through a two-part event that brought together talented speakers from inside and outside the org.

        Helping organize it reminded me how powerful shared knowledge can be — that learning never really stops, and the best rooms are the ones that challenge you to keep growing.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/posts/sanhaw_if-youre-the-smartest-person-in-the-room-activity-7389625595426615296-QOXp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEka1JEBxHaiWphlT2C_qlFXY_c0meLf9aA'
  },
  'tactiv-internship': {
    id: 'tactiv-internship',
    title: 'Designing with Intention: My UX/UI Internship at Tactiv',
    date: '2025-06-30',
    category: ['UX/UI', 'Internship','Tech'],
    image: blogImages.tactivInternship,
    preview: `Wrapping up my internship at Tactiv was a deep dive into the world of UX research, usability testing, and UI design. Guided by mentors who emphasized empathy and critical thinking, I learned how real users shape digital experiences — from identifying pain points to designing intuitive, purposeful interfaces.

        It was a short but transformative journey that redefined how I see design, not just on screens, but in everyday life.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/posts/sanhaw_last-month-ellyanna-du-and-i-wrapped-up-activity-7348923285096583188-M3d0?utm_source=social_share_send&utm_medium=member_desktop_web'
  },
  'sohwakhaeng-journaling': {
    id: 'sohwakhaeng-journaling',
    title: 'Sohwakhaeng (小確幸): Finding Joy in the Little Things',
    date: '2025-07-02',
    category: ['Personal'],
    image: blogImages.sohwakhaengJournaling,
    preview: `"Sohwakhaeng" — a word that means small but certain happiness — perfectly captures what journaling has always been for me. After years away, I've rediscovered the quiet joy of slowing down, documenting moments, and finding comfort in the ordinary. It's not about perfection or productivity; it's about presence — remembering that even on uneventful days, there's still beauty in the small, fleeting things that make life feel full.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/posts/sanhaw_%EC%86%8C%ED%99%95%ED%96%89-%E5%B0%8F%E7%A2%BA%E5%B9%B8-sohwakhaeng-shoukakkou-noun-activity-7347562266994667520-BbFb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEka1JEBxHaiWphlT2C_qlFXY_c0meLf9aA'
  },
  'fighting-chance-itweek': {
    id: 'fighting-chance-itweek',
    title: 'A Fighting Chance: IT Week 2025',
    date: '2025-02-21',
    category: ['Events','Competition','Tech'],
    image: blogImages.fightingChanceItweek,
    preview: `At IT Week 2025, what struck me most wasn't the talks or tools — it was the crowd. A packed room of aspiring designers made me realize just how competitive the UX/UI field really is. For a moment, doubt crept in. But less than a day later, our team won first place in a UX/UI design competition — proof that growth isn't about having everything figured out, but about showing up, trying anyway, and giving yourself a fighting chance.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/posts/sanhaw_during-the-it-week-2025-event-at-ateneo-de-activity-7301449003093696512-O8po?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEka1JEBxHaiWphlT2C_qlFXY_c0meLf9aA'
  },
  'ux-davao-project-management': {
    id: 'ux-davao-project-management',
    title: 'Project Management: Leading, Learning, and Growing with UX Davao',
    date: '2025-02-15',
    category: ['Project Management', 'Events', 'Community'],
    image: blogImages.uxDavaoProjectManagement,
    preview: `My first event with UX Davao was an eye-opener into the world of project management — from learning leadership insights from Chiam Canda and Whitney Agunday to collaborating with fellow creatives on event production. It reminded me that being a project manager isn't about starting perfect, but about growing through experience, teamwork, and the drive to uplift others along the way.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/posts/sanhaw_project-management-efficient-execution-from-activity-7296874219433250816-ULNY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEka1JEBxHaiWphlT2C_qlFXY_c0meLf9aA'
  },
  'gdg-davao-innovation': {
    id: 'gdg-davao-innovation',
    title: 'Innovation with GDG Davao: Flutter, LangChain, and Beyond',
    date: '2024-07-20',
    category: ['Events', 'Tech'], // Already has 'Tech', no change needed
    image: blogImages.gdgDavaoInnovation,
    preview: `My first Google Developer Group Davao event was an inspiring deep dive into the future of tech — from learning about Flutter and LangChain on Vertex AI to understanding the importance of accessibility and leadership in design. Grateful to the incredible speakers for sharing their insights and sparking new ideas I can't wait to explore further.`,
    content: ``,
    linkedinUrl: 'https://www.linkedin.com/posts/sanhaw_attended-my-first-google-developer-group-activity-7220430906908459010-TYGH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEka1JEBxHaiWphlT2C_qlFXY_c0meLf9aA'
  }
  // Add more blog posts here
}

// Define the display order here - just reorder these IDs to change arrangement
export const blogDisplayOrder = [
  'building-forward-sysdev',
  'beyond-the-wireframe',
  'sohwakhaeng-journaling',
  'tactiv-internship',
  'fighting-chance-itweek',
  'ux-davao-project-management',
  'uxph-mini-davao',
  'the-frame-ai-design'
  // Add more IDs in the order you want them displayed
]

// Get blogs in display order (sorted by date, most recent first)
export const getOrderedBlogs = (): Blog[] => {
  return Object.values(blogPosts).sort((a, b) => {
    // Convert date strings to Date objects and sort in descending order (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

// Custom display order for categories
export const categoryDisplayOrder = [
  'AI',
  'UX/UI',
  'Project Management',
  'Competition',
  'Internship',
  'Events',
  'Community',
  'Leadership',
  'Tech',
  'Volunteering',
  'Reflection',
  'Personal',
]

// Get all unique categories in custom display order
export const getAllCategories = (): string[] => {
  const categories = new Set<string>()
  Object.values(blogPosts).forEach(post => {
    post.category.forEach((cat: string) => categories.add(cat))
  })
  // Only include categories that exist in the data, in the custom order
  return categoryDisplayOrder.filter(cat => categories.has(cat))
}
