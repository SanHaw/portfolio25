import { workImages } from '../../assets'
import type { Project } from '../projects'
import { text } from '../projects'

export const djPos: Project = {
  id: 'ux-004',
  title: 'Divine Jewel POS',
  subheading: 'Custom Point of Sales System for our Software Engineering Project',
  category: 'uxui',
  tags: ['UI Design', 'System Design', 'Case Study', 'Figma'],
  image: workImages.djpos.djpos001,
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
    { src: workImages.djpos.djpos001, cols: 2, rows: 2 },
    { src: workImages.djpos.djpos003, cols: 1, rows: 1 },
    { src: workImages.djpos.djpos004, cols: 1, rows: 1 },
    { src: workImages.djpos.djpos005, cols: 1, rows: 1 },
    { src: workImages.djpos.djpos007, cols: 1, rows: 1 }
  ],
  galleryLayout: 'grid'
}
