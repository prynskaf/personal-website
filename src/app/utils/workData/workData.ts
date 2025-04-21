
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
      period: "January 2024 - March 2024",
      link: "https://www.walterclayton.com/",
      achievements: [
        "Enhanced AfitPilot blog's performance by optimizing the frontend and backend with the WordPress REST API, reducing load time by 40%, which significantly enhanced the user experience and retention",
        "Developed a Powerlifting feature that allows users to track workouts, contributing to a 15% increase in user retention",
        "Leveraged MongoDB for personalized data storage and retrieval to create a customized user experience"
      ]
    },
    {
      id: 3,
    company: "Belgium Call Center",
    role: "Full Stack Developer",
    period: "September 2024 - March 2025",
    link: "http://www.belgiecallenter.com/",
    achievements: [
      "Contributed to the Innovation team of a leading Belgian call center by spearheading the development of the completeclient-side interface for an AI-enhanced email support application. This solution streamlined email handling by analyzing content, recommending agent actions, and proposing refined responses, demonstrably reducing processing time and improving response quality",
      "My focus was on the industrialization and successful deployment of this application, which has since been adopted by fourother clients. Collaborated with an AI expert and a system expert on the team."
    ]
  },
    {
        id: 4,
      company: "PA Group",
      role: "Software Developer (Internship)",
      period: "May 2024 - December 2024",
      link: "http://www.proadvisor-group.com/",
      achievements: [
        "Collaborated with the frontend team to develop a responsive real estate website using Next.js and TypeScript, ensuring seamless UI/UX implementation from Figma designs",
        "Optimized backend functionalities by translating critical code from Python to Node.js, increasing code consistency across the stack and improving API response times by 30%",
        "Enhanced component performance and reduced loading time for key pages by 25%, contributing to a dynamic and engaging user interface"
      ]
    },
    {
        id: 5,
      company: "PA  Group",
      role: "Software Developer (Contract)",
      period: "December 2024 - Present",
      link: "http://www.proadvisor-group.com/",
      achievements: [
        "Promoted from intern to freelance developer based on strong performance and initiative.",
         "Contributed to ongoing platform performance enhancements and new feature rollouts",
      ]
    }
  ];