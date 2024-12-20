export interface NavItem {
    id: string;
    title: string;
}

export interface NavTypes {
    logo: string;
    about: NavItem;
    experience: NavItem;
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
        work: {
            id: "03",
            title: 'Work',
        },
        contact: {
            id: "04",
            title: 'Contact',
        }
    }
];