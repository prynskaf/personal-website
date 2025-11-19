'use client'
import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import Link from 'next/link';
import { navlinks } from '@/app/utils/navlinks/navlinks';
import Resume from '../Resume/Resume';

const Navbar: React.FC = () => {
  const [nav] = navlinks;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen || typeof window === 'undefined') return;

    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedInsidePanel = panelRef.current?.contains(target);
      const clickedButton = buttonRef.current?.contains(target);
      if (!clickedInsidePanel && !clickedButton) {
        closeMenu();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header className={`Navbar-wrapper ${isScrolled ? 'scrolled' : ''}`} suppressHydrationWarning>
      <Link href="/" className="logo-box">
        <div className="logo-box Navbar-logo">
          {nav.logo}
        </div>
      </Link>

      {/* Large screen navigation */}
      <div className="Navbar-items">
        <div className="Navbar-links">
          <Link href="#About" className="links-col">
            <span className="nav-ids-styles">{nav.about.id}.</span>
            <span className="nav-title-styles">{nav.about.title}</span>
          </Link>
          <Link href="#Experience" className="links-col">
            <span className="nav-ids-styles">{nav.experience.id}.</span>
            <span className="nav-title-styles">{nav.experience.title}</span>
          </Link>
          <Link href="#Work" className="links-col">
            <span className="nav-ids-styles">{nav.work.id}.</span>
            <span className="nav-title-styles">{nav.work.title}</span>
          </Link>
          <Link href="#Contact" className="links-col">
            <span className="nav-ids-styles">{nav.contact.id}.</span>
            <span className="nav-title-styles">{nav.contact.title}</span>
          </Link>
        </div>
        <Resume />
      </div>

      {/* Hamburger menu for small screens */}
      <div className="Hamburger-menu">
        <button
          ref={buttonRef}
          className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        {/* Backdrop overlay (clicking this closes the menu) */}
        <div
          ref={overlayRef}
          id="mobile-menu"
          className={`menu-overlay ${menuOpen ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            // Close only when clicking the backdrop, not inside the panel
            if (e.target === overlayRef.current) closeMenu();
          }}
        >
          <div
            ref={panelRef}
            className="menu-links"
            onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking inside
          >
            <Link className="links-col" href="#About" onClick={closeMenu}>
              <span className="nav-ids-styles">{nav.about.id}.</span>
              <span className="nav-title-styles">{nav.about.title}</span>
            </Link>
            <Link className="links-col" href="#Experience" onClick={closeMenu}>
              <span className="nav-ids-styles">{nav.experience.id}.</span>
              <span className="nav-title-styles">{nav.experience.title}</span>
            </Link>
            <Link className="links-col" href="#Work" onClick={closeMenu}>
              <span className="nav-ids-styles">{nav.work.id}.</span>
              <span className="nav-title-styles">{nav.work.title}</span>
            </Link>
            <Link className="links-col" href="#Contact" onClick={closeMenu}>
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
