export interface Project {
    year: string;
    title: string;
    madeAt: string;
    builtWith: string[];
    links: {
      github?: string;
      external?: string;
    };
  }
  
  export const projects: Project[] = [
    {
      year: "2022",
      title: "Harvard Business School Design System",
      madeAt: "Upstatement",
      builtWith: ["Storybook", "React", "TypeScript"],
      links: { external: "#" }
    },
    {
      year: "2022",
      title: "Threadable",
      madeAt: "Upstatement",
      builtWith: ["React Native", "Ruby on Rails", "Firebase"],
      links: { external: "#", github: "#" }
    }
    // Add more projects...
  ];