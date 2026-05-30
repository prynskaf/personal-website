export type WorkExperience = {
  id: number;
  company: string;
  role: string;
  period: string;
  link?: string;
  achievements: string[];
};

export const workData: WorkExperience[] = [
  {
    id: 5,
    company: "CV Wiser",
    role: "FOUNDER & DEVELOPER",
    period: "2025 - Present",
    link: "https://cvwiser.com/",
    achievements: [
      "Founded and launched CV Wiser — a SaaS platform that helps job seekers generate AI-tailored CVs and cover letters, beat ATS filters, and track applications from a single dashboard.",
      "Built the full product from idea to deployment: profile builder, job-description matching, ATS score breakdown, in-editor AI assistant, and PDF/DOCX export.",
      "Shipped and maintain the live product at cvwiser.com using Next.js, TypeScript, Supabase, OpenAI, and Stripe.",
    ]
  },
  {
    id: 1,
    company: "BeCode [Brussels]",
    role: "JUNIOR WEB DEVELOPER",
    period: "May 2023 - November 2023",
    link: "https://becode.org",
    achievements: [
      "Led frontend development for Beqanda Quiz App using React and Tailwind CSS, achieving a 30% improvement in user engagement by enhancing interactivity and responsiveness.",
      "Collaborated with backend teams to integrate real-time data synchronization, reducing response time by 25%, which boosted the app’s performance and user satisfaction."
    ]
  },
  {
    id: 2,
    company: "Walter Clayton Dev [Brussels]",
    role: "FULL STACK DEVELOPER INTERNSHIP",
    period: "January - March 2024",
    link: "https://www.walterclayton.com/",
    achievements: [
      "Enhanced AfitPilot blog's performance by optimizing the frontend and backend with the WordPress REST API, reducing load time by 40%, which significantly enhanced the user experience and retention.",
      "Developed a Powerlifting feature that allows users to track workouts, contributing to a 15% increase in user retention.",
      "Leveraged MongoDB for personalized data storage and retrieval to create a customized user experience."
    ]
  },
  {
    id: 3,
    company: "PRO ADVISOR GROUP [REMOTE]",
    role: "SOFTWARE DEVELOPER",
    period: "May 2024 - Present",
    link: "http://www.proadvisor-group.com/",
    achievements: [
      "Following successful completion of the internship, promoted to freelance developer role. Awaiting next project phase while actively seeking new opportunities to grow professionally and contribute to diverse work environments.",
      "Demonstrated initiative and strong technical skills that led to early promotion from intern to freelancer.",
      "Supported initial development of a real estate platform using Next.js, TypeScript, and Node.js.",
      "Built scalable frontend components and contributed to performance optimization during the internship phase."
    ]
  },
  {
    id: 4,
    company: "BELGIAN CALL CENTER [HYBRID]",
    role: "FULL STACK DEVELOPER",
    period: "September 2024 - March 2025",
    link: "http://www.belgiecallenter.com/",
    achievements: [
      "Contributed to the Innovation team of a leading Belgian call center by spearheading the development of the complete client-side interface for an AI-enhanced email support application. This solution streamlined email handling by analyzing content, recommending agent actions, and proposing refined responses, demonstrably reducing processing time and improving response quality.",
      "My focus was on the industrialization and successful deployment of this application, which has since been adopted by four other clients. Collaborated with an AI expert and a system expert on the team."
    ]
  }
];

