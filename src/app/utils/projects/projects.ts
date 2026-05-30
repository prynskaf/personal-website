import { ProjectItem } from './saasProjects';

export const projects: ProjectItem[] = [
  {
    title: 'AlwaysApply',
    type: 'Featured Project',
    description:
      'AlwaysApply is a modern web-based job portal that helps job seekers find and apply for jobs, and enables employers to post and manage job listings. The platform offers advanced search and filtering options, personalized job recommendations, and secure authentication for both job seekers and employers.',
    technologies: [
      'Next.js',
      'Firebase (Firestore, Auth)',
      'Scss',
      'TypeScript',
      'Cloudinary',
      'Redux Toolkit',
    ],
    image: '/alwaysApply.png',
    code: 'https://github.com/prynskaf/job-portal.git',
    webkitURL: 'https://job-portal-eta-taupe.vercel.app/',
  },
  {
    title: 'Shopper',
    type: 'Featured Project',
    description:
      'Shopper is a full-stack e-commerce application with product browsing, cart management, and Stripe checkout. Built with Next.js, Sanity CMS, and Clerk authentication for a seamless shopping experience.',
    technologies: ['Next.js', 'TypeScript', 'Sanity', 'Clerk', 'Stripe'],
    image: '/shopper.png',
    code: 'https://github.com/prynskaf/shoppr',
    webkitURL: 'https://shopper-eta-five.vercel.app/',
  },
  {
    title: 'SocialConnect',
    type: 'Featured Project',
    description:
      'A social connect app where users post updates and comments to foster community engagement. Built with React and MongoDB with secure authentication and real-time interaction.',
    technologies: ['React', 'MongoDB', 'Express', 'TypeScript'],
    image: '/socialNew.png',
    code: 'https://github.com/prynskaf/SocialApp',
    webkitURL: 'https://social-app-silk-nine.vercel.app',
  },
];
