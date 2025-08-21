
export interface WorkExperience {
    id: number; 
    company: string;
    role: string;
    link: string;
    period: string;
    achievements: string[];
  }
  
  

// export const workData: WorkExperience[] = [
   
//     {
//     id: 1,
//       company: "BeCode",
//       role: "Junior Web Developer",
//       period: "May 2023 - November 2023",
//       link: "https://becode.org",
//       achievements: [
//         "Led frontend development for Beqanda Quiz App using React and Tailwind CSS, achieving a 30% improvement in user engagement by enhancing interactivity and responsiveness",
//         "Collaborated with backend teams to integrate real-time data synchronization, reducing response time by 25%, which boosted the app’s performance and user satisfaction"
//       ]
//     },
//     {
//         id: 2,
//       company: "Clayton Dev",
//       role: "Full Stack Developer Intern",
//       period: "January 2024 - March 2024",
//       link: "https://www.walterclayton.com/",
//       achievements: [
//         "Enhanced AfitPilot blog's performance by optimizing the frontend and backend with the WordPress REST API, reducing load time by 40%, which significantly enhanced the user experience and retention",
//         "Developed a Powerlifting feature that allows users to track workouts, contributing to a 15% increase in user retention",
//         "Leveraged MongoDB for personalized data storage and retrieval to create a customized user experience"
//       ]
//     },
//     {
//       id: 3,
//     company: "Belgium Call Center",
//     role: "Full Stack Developer",
//     period: "September 2024 - March 2025",
//     link: "http://www.belgiecallenter.com/",
//     achievements: [
//       "Contributed to the Innovation team of a leading Belgian call center by spearheading the development of the completeclient-side interface for an AI-enhanced email support application. This solution streamlined email handling by analyzing content, recommending agent actions, and proposing refined responses, demonstrably reducing processing time and improving response quality",
//       "My focus was on the industrialization and successful deployment of this application, which has since been adopted by fourother clients. Collaborated with an AI expert and a system expert on the team."
//     ]
//   },
//     {
//         id: 4,
//       company: "PA Group",
//       role: "Software Developer (Internship)",
//       period: "May 2024 - December 2024",
//       link: "http://www.proadvisor-group.com/",
//       achievements: [
//         "Collaborated with the frontend team to develop a responsive real estate website using Next.js and TypeScript, ensuring seamless UI/UX implementation from Figma designs",
//         "Optimized backend functionalities by translating critical code from Python to Node.js, increasing code consistency across the stack and improving API response times by 30%",
//         "Enhanced component performance and reduced loading time for key pages by 25%, contributing to a dynamic and engaging user interface"
//       ]
//     },
//     {
//         id: 5,
//       company: "PA  Group",
//       role: "Software Developer (Contract)",
//       period: "December 2024 - Present",
//       link: "http://www.proadvisor-group.com/",
//       achievements: [
//         "Following successful completion of the internship, promoted to freelance developer role. Awaiting next project phase while actively seeking new opportunities to grow professionally and contribute to diverse work environments. ",
//          "Contributed to ongoing platform performance enhancements and new feature rollouts",
//       ]
//     }
//   ];



  
export const workData: WorkExperience[] = [
  {
    id: 1,
    company: "BeCode [Brussels]",
    role: "Web Designer & Web Developer Trainee",
    period: "May 2023 – Nov 2023",
    link: "https://becode.org",
    achievements: [
      "Started all projects with design in Figma/Adobe XD before coding.",
      "Built and tested prototypes such as the Quiz App (React, Tailwind CSS), enhancing engagement.",
      "Applied UI/UX principles and worked in full stack teams for production-ready results."
    ]
  },
  {
    id: 2,
    company: "Walter Clayton Dev [Brussels]",
    role: "Webmaster Intern & Full Stack Web Developer",
    period: "Jan – Mar 2024",
    link: "https://www.walterclayton.com/",
    achievements: [
      "Managed WordPress content and REST API integrations, improving site speed and usability.",
      "Worked closely with Figma designs to turn mockups into working web features.",
      "Handled both frontend and backend development tasks to support complete workflows.",
      "Oversaw end-to-end website management, from content and design to hosting and deployment."
    ]
  },
  {
    id: 3,
    company: "Pro Advisor Group [Remote]",
    role: "Digital Designer & Web Development (Freelance)",
    period: "May 2024 – Present",
    link: "http://www.proadvisor-group.com/",
    achievements: [
      "Collaborated with the UI team to design prototypes and wireframes in Figma before development.",
      "Designed layouts and adapted visuals aligned with brand identity.",
      "Later joined frontend and backend development teams to merge designs with production code.",
      "Contributed to a real estate platform project, balancing digital design with web development."
    ]
  },
  {
    id: 4,
    company: "Belgian Call Center [Hybrid]",
    role: "Webmaster / Frontend Web Development Team",
    period: "Sep 2024 – Mar 2025",
    link: "http://www.belgiecallenter.com/", // placeholder
    achievements: [
      "Worked as part of a three-person frontend team to integrate new features into client websites.",
      "Updated and maintained digital content within CMS systems.",
      "Supported user interface improvements and web development integration.",
      "Assisted with CMS publishing and troubleshooting."
    ]
  }
];
