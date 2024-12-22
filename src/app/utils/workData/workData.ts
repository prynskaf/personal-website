
export interface WorkExperience {
    id: number; 
    company: string;
    role: string;
    link: string;
    period: string;
    achievements: string[];
  }
  
  

export const workData: WorkExperience[] = [
   
    {
    id: 1,
      company: "BeCode",
      role: "Junior Web Developer",
      period: "May 2023 - November 2023",
      link: "https://becode.org",
      achievements: [
        "Led frontend development for Beqanda Quiz App using React and Tailwind CSS, achieving a 30% improvement in user engagement by enhancing interactivity and responsiveness",
        "Collaborated with backend teams to integrate real-time data synchronization, reducing response time by 25%, which boosted the app’s performance and user satisfaction"
      ]
    },
    {
        id: 2,
      company: "Clayton Dev",
      role: "Full Stack Developer Intern",
      period: "January - March 2024",
      link: "https://www.walterclayton.com/",
      achievements: [
        "Enhanced AfitPilot blog's performance by optimizing the frontend and backend with the WordPress REST API, reducing load time by 40%, which significantly enhanced the user experience and retention",
        "Developed a Powerlifting feature that allows users to track workouts, contributing to a 15% increase in user retention",
        "Leveraged MongoDB for personalized data storage and retrieval to create a customized user experience"
      ]
    },
    {
        id: 3,
      company: "PA Group",
      role: "Software Developer (Internship)",
      period: "May - December 2024",
      link: "http://www.proadvisor-group.com/",
      achievements: [
        "Collaborated with the frontend team to develop a responsive real estate website using Next.js and TypeScript, ensuring seamless UI/UX implementation from Figma designs",
        "Optimized backend functionalities by translating critical code from Python to Node.js, increasing code consistency across the stack and improving API response times by 30%",
        "Enhanced component performance and reduced loading time for key pages by 25%, contributing to a dynamic and engaging user interface"
      ]
    },
    {
        id: 4,
      company: "PA  Group",
      role: "Software Developer (Contract)",
      period: "December 2024 - Present",
      link: "http://www.proadvisor-group.com/",
      achievements: [
        "Continuing to contribute to the global real estate platform by implementing advanced frontend optimizations and maintaining a seamless API integration workflow",
        "Focusing on scalable architecture and collaborating with cross-functional teams to deliver high-quality, user-friendly features",
        "Supporting ongoing performance improvements to ensure fast and reliable application performance for end users"
      ]
    }
  ];