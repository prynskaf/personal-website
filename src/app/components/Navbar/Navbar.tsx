'use client'

import React, { useState } from 'react';
import './Navbar.scss';
import Link from 'next/link';
import { NavTypes } from '@/app/utils/navlinks/navlinks';
import Resume from '../Resume/Resume';

interface NavbarProps {
    navlinks: NavTypes[];
}

const Navbar: React.FC<NavbarProps> = ({ navlinks }) => {
    const [nav] = navlinks;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="Navbar-wrapper">
            <Link href="/"  className="logo-box">
                <div className="logo-box  Navbar-logo" >
                    {nav.logo}
                </div>
            </Link>

            {/* Large screen navigation */}
            <div className="Navbar-items">
                <div className="Navbar-links">
                    <Link href="#About" className='links-col'>
                        <span className="nav-ids-styles">{nav.about.id}.</span>
                        <span className="nav-title-styles">{nav.about.title}</span>
                    </Link>
                    <Link href="#Experience"  className='links-col'>
                        <span className="nav-ids-styles">{nav.experience.id}.</span>
                        <span className="nav-title-styles">{nav.experience.title}</span>
                    </Link>
                    <Link href="#Work" className='links-col'>
                        <span className="nav-ids-styles">{nav.work.id}.</span>
                        <span className="nav-title-styles">{nav.work.title}</span>
                    </Link>
                    <Link href="#Contact" className='links-col'>
                        <span className="nav-ids-styles">{nav.contact.id}.</span>
                        <span className="nav-title-styles">{nav.contact.title}</span>
                    </Link>
                </div>
                <Resume />
            </div>

            {/* Hamburger menu for small screens */}
            <div className="Hamburger-menu">
                <button
                    className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>

                <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
                    <div className="menu-links">
                        <Link  className='links-col' href="#About" onClick={closeMenu}>
                            <span className="nav-ids-styles">{nav.about.id}.</span>
                            <span className="nav-title-styles">{nav.about.title}</span>
                        </Link>
                        <Link className='links-col'  href="#Experience" onClick={closeMenu}>
                            <span className="nav-ids-styles">{nav.experience.id}.</span>
                            <span className="nav-title-styles">{nav.experience.title}</span>
                        </Link>
                        <Link className='links-col'  href="#Work" onClick={closeMenu}>
                            <span className="nav-ids-styles">{nav.work.id}.</span>
                            <span className="nav-title-styles">{nav.work.title}</span>
                        </Link>
                        <Link  className='links-col' href="#Contact" onClick={closeMenu}>
                            <span className="nav-ids-styles">{nav.contact.id}.</span>
                            <span className="nav-title-styles">{nav.contact.title}</span>
                        </Link>
                        <Resume />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;



