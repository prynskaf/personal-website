export interface NavItem {
    id: string;
    title: string;
}

export interface NavTypes {
    logo: string;
    about: NavItem;
    experience: NavItem;
    saas: NavItem;
    work: NavItem;
    contact: NavItem;
}

export const navlinks: NavTypes[] = [
    {
        logo: 'P-k',
        about: {
            id: "01",
            title: 'About',
        },
        experience: {
            id: "02",
            title: 'Experience',
        },
        saas: {
            id: "03",
            title: 'SaaS',
        },
        work: {
            id: "04",
            title: 'Work',
        },
        contact: {
            id: "05",
            title: 'Contact',
        }
    }
];
