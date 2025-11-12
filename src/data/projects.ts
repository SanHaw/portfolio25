export type ProjectImage =
  | string
  | {
      src: string
      cols?: number
      rows?: number
      align?: 'top' | 'center' | 'bottom'
    }

export type GallerySection = {
  title: string
  images: ProjectImage[]
  layout?: 'grid' | 'masonry' | 'carousel' | 'fixed-grid' | 'hero-grid' | 'cham-grid' | 'purple-grid' | 'itweek-grid' | 'eds-grid' | 'tedx-grid' | 'nwsfd-grid' | 'cmt-grid' | 'custom-grid'
}

export type ProblemSolutionRow = {
  problem: string
  solution: string
}

export type UxInsight = {
  title: string
  description: string
}

export type CoreFeature = {
  title: string
  description: string
}

export type UxInsightsData = {
  insights: UxInsight[]
  solutionIntro: string
  coreFeatures: CoreFeature[]
  closingText: string
}

export type Project = {
  id: string
  title: string
  subheading?: string
  category?: string
  tags?: string[]
  image?: string
  website?: string
  figma?: string
  facebook?: string
  instagram?: string
  tiktok?: string
  role?: string
  date?: string
  organization?: string
  description?: string
  background?: string
  problemSolution?: ProblemSolutionRow[]
  uxInsights?: UxInsightsData
  process?: string
  tech?: string
  images?: ProjectImage[]
  gallerySections?: GallerySection[]
  galleryLayout?: 'grid' | 'masonry' | 'carousel' | 'fixed-grid' | 'hero-grid' | 'eds-grid' | 'tedx-grid' | 'nwsfd-grid' | 'cmt-grid' | 'bd-grid' | 'custom-grid'
}

export function text(strings: TemplateStringsArray, ...values: any[]) {
  const raw = String.raw(strings, ...values)
  const normalized = raw.replace(/\r\n/g, '\n').replace(/^\n+|\n+$/g, '')
  const lines = normalized.split('\n')
  const indents = lines.filter(Boolean).map((l) => l.match(/^\s*/)?.[0].length || 0)
  const minIndent = indents.length ? Math.min(...indents) : 0
  return lines.map((l) => l.slice(minIndent)).join('\n')
}

export const projects: Project[] = [
  {
    id: 'ux-001',
    title: 'Duyog 2025 Website',
    subheading: 'An official event microsite for Ateneo U-Fest 2025',
    category: 'uxui',
    tags: ['UI Design', 'Web Design','Mobile Design', 'Figma'],
    image: '/src/assets/work/duyog/duyog001.png',
    website: 'https://duyog2025.addu.edu.ph',
    figma: 'https://embed.figma.com/design/n7At6dIqG4GtaT4BL7Y6Ds/%F0%9F%8C%BB-Showcase--Duyog?node-id=0-1&embed-host=share',
    role: 'Lead UX/UI Designer',
    date: '2025',
    organization: 'SAMAHAN Systems Development',
    description: text`Duyog is the theme of this year's Ateneo U-Fest, the university's
                  biggest annual festival. The official website serves as the event's
                  digital hub — a multi-page platform covering everything from
                  U-Fest's history, branding, and schedule, to featured games,
                  winners, and a dedicated ticketing page for the main show.`,
    process: text`We had just a month to design, build, and test the entire site. I
                  took charge of the overall design direction — sketching wireframes,
                  building reusable components, and overseeing the visual identity
                  across both mobile and desktop layouts. Collaboration with the
                  frontend and backend teams was constant; we synced daily to ensure
                  each transition from design to code was seamless.`,
    tech: 'Figma, React, Tailwind',
    images: [
      '/src/assets/work/duyog/duyog001.png',
      '/src/assets/work/duyog/duyog004.png',
      '/src/assets/work/duyog/duyog005.png',
      '/src/assets/work/duyog/duyog003.png',
      '/src/assets/work/duyog/duyog002.png',
      '/src/assets/work/duyog/duyog006.png'
    ],
    galleryLayout: 'nwsfd-grid'
  },
  {
    id: 'ux-002',
    title: 'PYCON 2025 Website',
    subheading: 'An official event microsite for PYCON Davao2025',
    category: 'uxui',
    tags: ['UI Design', 'Web Design','Mobile Design', 'Figma'],
    image: '/src/assets/work/pycon/pycon000.png',
    website: 'https://pycon-davao.durianpy.org/',
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
      { src: '/src/assets/work/pycon/pycon000.png', align: 'bottom' },
      '/src/assets/work/pycon/pycon002.png',
      '/src/assets/work/pycon/pycon003.png',
      '/src/assets/work/pycon/pycon004.png',
      '/src/assets/work/pycon/pycon005.png'
    ],
    galleryLayout: 'custom-grid'
  },
  {
    id: 'ux-003',
    title: 'Block Diary',
    subheading: 'A mobile companion app for Minecraft players',
    category: 'uxui',
    tags: ['UI Design', 'Case Study', 'Mobile Design', 'Prototype', 'Figma'],
    image: '/src/assets/work/bd/bd001.jpg',
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
      '/src/assets/work/bd/bd001.jpg',
      '/src/assets/work/bd/bd008.jpg',
      '/src/assets/work/bd/bd004.jpg',
      '/src/assets/work/bd/bd005.jpg'
    ],
    galleryLayout: 'bd-grid'
  },
  {
    id: 'ux-004',
    title: 'Divine Jewel POS',
    subheading: 'Custom Point of Sales System for our Software Engineering Project',
    category: 'uxui',
    tags: ['UI Design', 'UI Design', 'Case Study', 'Figma'],
    image: '/src/assets/work/djpos/djpos001.jpg',
    website: '',
    figma: 'https://embed.figma.com/design/Nq800CNDFQMzJnFhkHWNRa/Divine-Jewels-POS?node-id=0-1&embed-host=share',
    role: 'UX/UI Designer',
    date: '2023',
    organization: '-',
    description: text`Divine Jewels is a local small business specializing in handcrafted
                  trinkets and accessories. As the business grew, so did the need
                  for a more organized and scalable way to manage operations. To
                  support this expansion, we proposed and developed a custom Point
                  of Sales (POS) system with integrated inventory management.
                  `,
    background: text`Divine Jewel is a small accessories business in Davao City known for handmade beaded jewelry and charms.
                  
                  As the business grew, its owner still relied on pen, paper, and Excel to manage sales and inventory. This caused constant problems — stock errors, lost records, and confusion among new staff.
                  
                  Our team was asked to design a Point of Sales (POS) and Inventory Management System that could simplify daily operations and reduce errors while keeping things easy for the team to use.`,
    problemSolution: [
      {
        problem: 'Manual Inventory Management – Inventory tracking is done using pen and paper, which is prone to errors, data loss, and inefficiencies.',
        solution: 'Develop a digital inventory management system that allows the admin to add, view, edit, and delete products, automatically update stock levels after transactions, and generate real-time inventory reports.'
      },
      {
        problem: 'Lack of Online Visibility and Accessibility – Customers have limited awareness of the shop\'s online ordering options due to the absence of a proper online catalog or store.',
        solution: 'Create an online product catalog or e-commerce platform integrated with social media, allowing customers to browse, view product availability, and place orders easily.'
      },
      {
        problem: 'Inefficient Sales Tracking – Sales are recorded manually, making it difficult to analyze performance or identify sales trends.',
        solution: 'Implement a Point-of-Sale (POS) system that records every transaction, stores data in sales history, and provides daily, weekly, monthly, and annual sales summaries for performance tracking.'
      },
      {
        problem: 'Employee Management Challenges – Adding, editing, or removing staff information is unstructured and not recorded systematically.',
        solution: 'Integrate an employee management module that enables admins to securely manage employee accounts, assign roles, and monitor access to system features.'
      },
      {
        problem: 'Hiring and Training Difficulties Due to Manual Processes – Manual systems are difficult to use for new employees and lead to training inefficiencies.',
        solution: 'Introduce a user-friendly interface with guided features to simplify employee onboarding and operations through an automated, organized system.'
      }
    ],

    uxInsights: {
      insights: [
        {
          title: 'Centralize everything',
          description: 'Staff wanted inventory, sales, and transactions in one place to avoid switching between notebooks and spreadsheets.'
        },
        {
          title: 'Reduce errors',
          description: 'Too many mistakes happened during manual entry and calculation.'
        },
        {
          title: 'Make data visual',
          description: 'Owners wanted to see trends clearly — like which products are selling fast or which month had the best sales.'
        }
      ],
      solutionIntro: "We created a role-based POS system that's simple, visual, and aligned with how the business already works.",
      coreFeatures: [
        {
          title: 'Inventory Management',
          description: 'Track all products in one table. Quickly update stock after each sale. Add new items fast.'
        },
        {
          title: 'Transactions',
          description: 'Record sales in real-time. Automatically adjust inventory. Keep a full sales history.'
        },
        {
          title: 'Sales Dashboard',
          description: 'See total sales, revenue, and trends at a glance. Filter by day, week, or month.'
        },
        {
          title: 'Employee Management',
          description: 'Manage staff accounts with role-based access. Keep track of who did what and when.'
        }
      ],
      closingText: 'The design focused on clarity — clean layouts, easy navigation, and confirmation messages to assure users their actions were successful.'
    },
  
    tech: 'Figma',
    images: [
      { src: '/src/assets/work/djpos/djpos001.jpg', cols: 2, rows: 2 },
      { src: '/src/assets/work/djpos/djpos003.jpg', cols: 1, rows: 1 },
      { src: '/src/assets/work/djpos/djpos004.jpg', cols: 1, rows: 1 },
      { src: '/src/assets/work/djpos/djpos005.jpg', cols: 1, rows: 1 },
      { src: '/src/assets/work/djpos/djpos007.jpg', cols: 1, rows: 1 }
    ],
    galleryLayout: 'grid'
  },
  {
    id: 'ux-007',
    title: 'CosMediTour',
    subheading: '',
    category: 'uxui',
    tags: ['UI Design', 'UI Design', 'Case Study', 'Figma'],
    image: '/src/assets/work/cmt/cmt000.png',
    website: '',
    figma: 'https://embed.figma.com/design/OdoqbDS41EDMAMNeam3AA6/%F0%9F%8C%BB-Showcase--CosMediTour-Website?node-id=0-1&embed-host=share',
    role: 'UX/UI Designer',
    date: '2025',
    organization: '-',
    description: text``,
    process: text``,
    tech: 'Figma',
    images: [
      '/src/assets/work/cmt/cmt000.png',
      '/src/assets/work/cmt/cmt001.png',
      '/src/assets/work/cmt/cmt002.png',
      '/src/assets/work/cmt/cmt003.png',
      '/src/assets/work/cmt/cmt004.png',
      '/src/assets/work/cmt/cmt005.png',
      '/src/assets/work/cmt/cmt007.png',
      '/src/assets/work/cmt/cmt006.png',
      '/src/assets/work/cmt/cmt008.png'
    ],
    galleryLayout: 'cmt-grid'
  },
  
  {
    id: 'gd-001',
    title: 'Elysan Design Studios',
    subheading: 'Online Business',
    category: 'graphic design',
    tags: ['UI Design', 'Graphic Design', 'Social Media', 'Customer Service', 'Canva'],
    image: 'src/assets/work/eds/eds.jpg',
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
      '/src/assets/work/eds/eds001.jpg', // ImageSlider placeholder
      '/src/assets/work/eds/eds101.jpg',
      '/src/assets/work/eds/eds002.jpg',
      '/src/assets/work/eds/eds103.jpg',
      '/src/assets/work/eds/eds116.jpg',
      '/src/assets/work/eds/eds000.mp4', // video
      '/src/assets/work/eds/eds107.jpg',
      '/src/assets/work/eds/eds105.jpg',
      '/src/assets/work/eds/eds110.jpg',
      '/src/assets/work/eds/eds114.jpg',
      '/src/assets/work/eds/eds108.jpg',
      '/src/assets/work/eds/eds102.jpg',
      '/src/assets/work/eds/eds112.jpg'
    ],
    galleryLayout: 'eds-grid'
  },
  {
    id: 'ux-005',
    title: 'SAMAHAN NewsFeed',
    subheading: 'An annual publication space for Ateneans to see their journeys reflected',
    category: 'uxui',
    tags: ['UI Design', 'QA Testing', 'Web Design', 'Project Management', 'QA Testing', 'Figma', 'Agile'],
    image: '/src/assets/work/nwsfd/nwsfd000.jpg',
    website: 'https://samahan.addu.edu.ph/newsfeed/archive/2025/',
    figma: 'https://embed.figma.com/design/VI1gzBAvqDpcXRVFTxJrOP/%F0%9F%8C%BB-Showcase--SMHN-Newsfeed?node-id=0-1&embed-host=share',
    role: 'Project Manager | QA Tester | UX/UI Consultant',
    date: '2025',
    organization: 'SAMAHAN Communications',
    description: text`The SAMAHAN NewsFeed is an annual publication led by the SAMAHAN Communications,
                  the official public affairs and information arm of SAMAHAN. Over the years, the
                  SAMAHAN NewsFeed has become more than just a publication—it has evolved into a
                  space where Ateneans see their journeys reflected not as isolated experiences,
                  but as shared milestones of a tightly knit community.`,
    process: text`This website was built as part of our ongoing initiatives. What started as a simple 
                  archive for articles evolved into a self-sustaining platform, after we realized the 
                  team needed to manage content independently with minimal dev support. Alongside my 
                  co-manager Ellyanna, I helped lead the project from planning to release. As the 
                  project manager, I primarily negotiated technicalities with clients, organized 
                  documents, and oversaw the UX/UI process—while also assisting with QA testing to 
                  ensure a smooth user experience.`,
    tech: text`Our tech stack supports efficient collaboration across all roles. Project
                  management and documentation are handled using Google Docs and Sheets for task
                  tracking, content planning, and progress updates. For UI/UX design, we use Figma to
                  create and iterate on wireframes and mockups. The frontend is built with Next.js
                  and TypeScript, styled with CSS modules, and optimized using next/font and
                  Vercel's Geist font. On the backend, we use TypeScript with Supabase for authentication
                  and PostgreSQL storage, and Prisma for database management.`,
    images: [
      '/src/assets/work/nwsfd/nwsfd000.jpg',
      '/src/assets/work/nwsfd/smhnnwsfd001.jpg',
      '/src/assets/work/nwsfd/smhnnwsfd003.jpg',
      '/src/assets/work/nwsfd/smhnnwsfd004.jpg',
      '/src/assets/work/nwsfd/smhnnwsfd005.jpg'
    ],
    galleryLayout: 'custom-grid'
  },
  
  {
    id: 'gd-002',
    title: 'CSSEC',
    subheading: 'All the projects I handled as the Computer Studies Student Executive Council Creatives Head',
    category: 'uxui',
    tags: ['UI Design', 'Graphic Design', 'Social Media', 'Project Management', 'Canva', 'Figma'],
    image: 'src/assets/work/cssec/cssec000.jpg',
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

                  As the Creative’s Head, it’s my job to shape and elevate our 
                  cluster’s narrative through imaginative visual storytelling and 
                  engaging media. I develop the creative vision behind our promotional 
                  materials, such as event posters, social media campaigns, and 
                  workshop branding—with one clear aim: to capture and inspire our 
                  Computer Studies community. I lead a passionate team of designers 
                  and content creators, overseeing the entire creative process from 
                  concept to final design. By ensuring brand consistency and injecting 
                  innovation into every project, I help bring CSSEC’s mission and 
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
          '/src/assets/work/cssec/cssec001.jpg',
          '/src/assets/work/cssec/cssec103.jpg',
          '/src/assets/work/cssec/cssec101.jpg',
          '/src/assets/work/cssec/cssec105.jpg',
          '/src/assets/work/cssec/cssec106.jpg',
          '/src/assets/work/cssec/cssec107.jpg',
          '/src/assets/work/cssec/cssec108.jpg',
          '/src/assets/work/cssec/cssec109.jpg',
          '/src/assets/work/cssec/cssec104.jpg'
        ],
        layout: 'fixed-grid'
      },
      {
        title: 'Main Branding',
        images: [
          '/src/assets/work/cssec/cssec003.jpg',
          '/src/assets/work/cssec/cssec300.jpg',
          '/src/assets/work/cssec/cssec301.jpg',
          '/src/assets/work/cssec/cssec303.jpg',
          '/src/assets/work/cssec/cssec304.jpg',
          '/src/assets/work/cssec/cssec305.jpg',
          '/src/assets/work/cssec/cssec308.jpg',
          '/src/assets/work/cssec/cssec307.jpg',
          '/src/assets/work/cssec/cssec306.jpg'
        ],
        layout: 'masonry'
      },
      {
        title: 'Cham Along With Us',
        images: [
          '/src/assets/work/cssec/cssec401.jpg',
          '/src/assets/work/cssec/cssec406.jpg',
          '/src/assets/work/cssec/cssec403.jpg',
          '/src/assets/work/cssec/cssec404.jpg',
          '/src/assets/work/cssec/cssec408.jpg',
          '/src/assets/work/cssec/cssec405.jpg'
        ],
        layout: 'cham-grid'
      },
      {
        title: 'Purple Up: Kick-Off',
        images: [
          '/src/assets/work/cssec/cssec501.jpg',//
          '/src/assets/work/cssec/cssec500.jpg',//
          '/src/assets/work/cssec/cssec509.jpg', ///
          '/src/assets/work/cssec/cssec505.jpg',
          '/src/assets/work/cssec/cssec507.jpg',
          '/src/assets/work/cssec/cssec510.jpg',
          '/src/assets/work/cssec/cssec512.jpg',
          '/src/assets/work/cssec/cssec502.jpg',//
          '/src/assets/work/cssec/cssec508.jpg',
          '/src/assets/work/cssec/cssec514.jpg'
        ],
        layout: 'purple-grid'
      },
      {
        title: 'IT Week 2024',
        images: [
          '/src/assets/work/cssec/cssec605.jpg', // top center image
          '/src/assets/work/cssec/cssec601.jpg', // row 2 left
          '/src/assets/work/cssec/cssec602.jpg', // row 2 center
          '/src/assets/work/cssec/cssec603.jpg', // row 2 right
          '/src/assets/work/cssec/cssec604.jpg', // row 3 left
          '/src/assets/work/cssec/cssec606.jpg'  // row 3 right (wide)
        ],
        layout: 'itweek-grid'
      }
    ]
  },
  {
    id: 'gd-003',
    title: 'TEDxLanang Ave',
    subheading: 'The Official Branding for TEDxLanang Ave 2024',
    category: 'graphic design',
    tags: ['UI Design', 'Graphic Design', 'Branding', 'Event Branding', 'Poster Design', 'Figma', 'Procreate'],
    image: '/src/assets/work/tedx/tedx001.jpg',
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
                  Mindanao’s vibrant cultural identity at the heart of the event’s 
                  visual direction. I carefully balanced traditional elements—such 
                  as indigenous patterns, regional color palettes, and symbolic 
                  imagery—with TEDx’s globally recognized branding standards. 
                  This approach ensured that while the event reflected the uniqueness 
                  and richness of Mindanao, it remained consistent with TEDx’s 
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
      '/src/assets/work/tedx/tedx001.jpg',
      '/src/assets/work/tedx/tedx008.jpg',
      '/src/assets/work/tedx/tedx005.jpg',
      '/src/assets/work/tedx/tedx004.jpg',
      '/src/assets/work/tedx/tedx006.jpg'
    ],
    galleryLayout: 'tedx-grid'
  },
  {
    id: 'ux-006',
    title: 'MISSCON 2024',
    subheading: "Official website for the Mindanao-wide International Studies Students' Convention",
    category: 'uxui',
    tags: ['UI Design', 'UI Design', 'Web Design', 'Figma', 'Agile'],
    image: '/src/assets/work/mssc/mssc001.jpg',
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
      '/src/assets/work/mssc/mssc001.jpg',
      '/src/assets/work/mssc/mssc003.jpg',
      '/src/assets/work/mssc/mssc002.jpg',
      '/src/assets/work/mssc/mssc004.jpg',
      '/src/assets/work/mssc/mssc005.jpg',
      '/src/assets/work/mssc/mssc006.jpg'
    ],
    galleryLayout: 'nwsfd-grid'
  },

  // {
  //   id: 'gd-004',
  //   title: '',
  //   subheading: '',
  //   category: '',
  //   tags: [],
  //   image: '',
  //   website: '',
  //   figma: '',
  //   role: '',
  //   date: '',
  //   organization: '',
  //   description: text``,
  //   process: text``,
  //   tech: '',
  //   images: [],
  //   galleryLayout: 'masonry'
  // },
  // {
  //   id: 'gd-005',
  //   title: '',
  //   subheading: '',
  //   category: '',
  //   tags: [],
  //   image: '',
  //   website: '',
  //   figma: '',
  //   role: '',
  //   date: '',
  //   organization: '',
  //   description: text``,
  //   process: text``,
  //   tech: '',
  //   images: [],
  //   galleryLayout: 'masonry'
  // }
]
