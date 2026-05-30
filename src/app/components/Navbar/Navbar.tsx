'use client'
import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import Link from 'next/link';
import { navlinks } from '@/app/utils/navlinks/navlinks';
import Resume from '../Resume/Resume';

const SECTIONS = [
  { href: '#About', id: 'About' },
  { href: '#Experience', id: 'Experience' },
  { href: '#SaaS', id: 'SaaS' },
  { href: '#Work', id: 'Work' },
  { href: '#Contact', id: 'Contact' },
] as const;

const Navbar: React.FC = () => {
  const [nav] = navlinks;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
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

  const navLinkClass = (sectionId: string) =>
    `links-col${activeSection === sectionId ? ' active' : ''}`;

  const renderNavLink = (href: string, sectionId: string, id: string, title: string, onNavigate?: () => void) => (
    <Link href={href} className={navLinkClass(sectionId)} onClick={onNavigate}>
      <span className="nav-ids-styles">{id}.</span>
      <span className="nav-title-styles">{title}</span>
    </Link>
  );

  return (
    <header className={`Navbar-wrapper ${isScrolled ? 'scrolled' : ''}`} suppressHydrationWarning>
      <Link href="/" className="Navbar-logo" aria-label="Prince Kyei — Home">
        <span className="Navbar-logo__initial">P</span>
        <span className="Navbar-logo__divider" aria-hidden="true" />
        <span className="Navbar-logo__initial Navbar-logo__initial--muted">K</span>
      </Link>

      <div className="Navbar-items">
        <nav className="Navbar-links" aria-label="Main navigation">
          {renderNavLink('#About', 'About', nav.about.id, nav.about.title)}
          {renderNavLink('#Experience', 'Experience', nav.experience.id, nav.experience.title)}
          {renderNavLink('#SaaS', 'SaaS', nav.saas.id, nav.saas.title)}
          {renderNavLink('#Work', 'Work', nav.work.id, nav.work.title)}
          {renderNavLink('#Contact', 'Contact', nav.contact.id, nav.contact.title)}
        </nav>
        <Resume />
      </div>

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

        <div
          ref={overlayRef}
          id="mobile-menu"
          className={`menu-overlay ${menuOpen ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(e) => {
            if (e.target === overlayRef.current) closeMenu();
          }}
        >
          <div
            ref={panelRef}
            className="menu-links"
            onClick={(e) => e.stopPropagation()}
          >
            {renderNavLink('#About', 'About', nav.about.id, nav.about.title, closeMenu)}
            {renderNavLink('#Experience', 'Experience', nav.experience.id, nav.experience.title, closeMenu)}
            {renderNavLink('#SaaS', 'SaaS', nav.saas.id, nav.saas.title, closeMenu)}
            {renderNavLink('#Work', 'Work', nav.work.id, nav.work.title, closeMenu)}
            {renderNavLink('#Contact', 'Contact', nav.contact.id, nav.contact.title, closeMenu)}
            <Resume />
          </div>
        </div>
      </div>

      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
};

export default Navbar;
