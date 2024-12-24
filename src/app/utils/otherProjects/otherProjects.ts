export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    githubLink?: string;
    externalLink?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Integrating Ecommerce Filtering App",
        description: "This project allows users to explore a variety of products, filter items based on product names, and easily find the desired results.",
        tech: ["React", "Vanilla CSS"],
        githubLink: "https://github.com/prynskaf/ecommerce-filtering",
        externalLink: "https://magnificent-banoffee-e2bd6b.netlify.app"
    },
    {
        id: 2,
        title: "Car Rental App",
        description: "Built on the powerful Next.js framework and styled with the elegance of Tailwind CSS, this application brings car renting to a whole new level",
        tech: ["Next.js", "Tailwind CSS", "TypeScript"],
        githubLink: "https://github.com/prynskaf/car-rentals",
        externalLink: "car-rentals-pi.vercel.app/"
    },
    {
        id: 3,
        title: "Bed'N Blues HOTEL",
        description: "This static website offers a snapshot of inviting rooms, transparent pricing, and streamlined booking process connected through the Booking.com API.",
        tech: ["Vanilla JS", "Vanilla CSS"],
        githubLink: "https://github.com/prynskaf/bednblues",
        externalLink: "https://sad-banach-0a9477.netlify.app/"
    },
];
