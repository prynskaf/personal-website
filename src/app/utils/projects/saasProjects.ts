export interface ProjectItem {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  webkitURL?: string;
  code?: string;
  comingSoon?: boolean;
  featured?: boolean;
  role?: string;
  status?: string;
  year?: string;
  highlights?: string[];
}

export const saasProjects: ProjectItem[] = [
  {
    title: 'CV Wiser',
    type: 'SaaS · Launched',
    description:
      'AI-powered job application platform — tailored CVs, cover letters, ATS scoring, and application tracking.',
    highlights: [
      'One profile, unlimited tailored applications',
      'ATS match score with actionable feedback',
      'PDF & Word export with in-editor AI assistant',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'OpenAI',
      'Stripe',
      'Tailwind CSS',
    ],
    image: '/cv-generator.png',
    webkitURL: 'https://cvwiser.com/',
    featured: true,
    role: 'Founder',
    status: 'Live',
    year: '2025',
  },
  {
    title: 'Code Notebook',
    type: 'SaaS · Coming Soon',
    description:
      'Developer notebook with rich text editing, Monaco syntax highlighting, and organized note-taking.',
    highlights: [
      'Monaco Editor for code blocks',
      'Rich text + structured notes',
      'Built for daily developer workflows',
    ],
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Express.js', 'Zustand'],
    image: '/Notebook.png',
    comingSoon: true,
    role: 'Founder',
    status: 'In Development',
    year: '2025',
  },
];
