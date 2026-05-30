import { CV_WISER_SIGNUP_URL, CV_WISER_URL } from '@/app/utils/siteConfig';

export const cvWiserCaseStudy = {
  title: 'CV Wiser',
  badge: 'Live Product',
  tagline: 'AI-tailored CVs and cover letters that help job seekers beat ATS filters and land interviews faster.',
  url: CV_WISER_URL,
  signupUrl: CV_WISER_SIGNUP_URL,
  image: '/cv-generator.png',
  problem:
    'Job seekers waste hours rewriting CVs for every role, often missing ATS keywords and sending mismatched application packages.',
  solution:
    'One profile, paste a job description, and generate matched CV + cover letter packages with ATS scoring, an in-editor AI assistant, and PDF/DOCX export.',
  role: 'Founder & lead developer — product vision, UI/UX, full-stack architecture, payments, and deployment.',
  metrics: [
    { value: '7+', label: 'CV templates' },
    { value: 'ATS', label: 'Match scoring' },
    { value: 'PDF', label: '& Word export' },
    { value: 'Live', label: 'At cvwiser.com' },
  ],
  technologies: [
    'Next.js',
    'TypeScript',
    'Supabase',
    'OpenAI',
    'Stripe',
    'Tailwind CSS',
  ],
};
