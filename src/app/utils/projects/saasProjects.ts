export interface ProjectItem {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  webkitURL?: string;
  code?: string;
  comingSoon?: boolean;
}

export const saasProjects: ProjectItem[] = [
  {
    title: 'CV Wiser',
    type: 'SaaS · Launched',
    description:
      'CV Wiser is my live SaaS product for job seekers — build from one profile, paste any job description, and generate AI-tailored CVs and cover letters. Includes an in-editor AI assistant, ATS match scoring, PDF & Word export, and an application tracker dashboard. Founder-built from idea to deployment at cvwiser.com.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase (PostgreSQL)',
      'OpenAI',
      'Tailwind CSS',
      'Stripe',
      'Puppeteer',
    ],
    image: '/cv-generator.png',
    webkitURL: 'https://cvwiser.com/',
  },
  {
    title: 'Code Notebook',
    type: 'SaaS · Coming Soon',
    description:
      'A developer-focused notebook app in active development — rich text editing, Monaco Editor syntax highlighting, and organized note-taking with a responsive UI. Currently building the core experience before launch.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Express.js', 'Zustand'],
    image: '/Notebook.png',
    comingSoon: true,
  },
];
