'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Intro.scss';
import Link from 'next/link';
import { MdDownload, MdOutlineKeyboardArrowDown, MdOutlineOpenInNew } from 'react-icons/md';
import { CV_WISER_URL } from '@/app/utils/siteConfig';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Intro = () => {
  const handleScrollToAbout = () => {
    if (typeof window === 'undefined') return;
    const aboutSection = document.querySelector('#About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="intro-wrapper">
      <motion.div
        className="intro-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="intro-headline" variants={itemVariants}>
          <p>Hi, my name is</p>
          <h1 className="name">Prince Kyei.</h1>
          <p className="intro-role">Founder &amp; Frontend Engineer</p>
          <h2 className="description">
            I build AI-powered SaaS that helps people land jobs faster.
          </h2>
        </motion.div>

        <motion.div className="intro-subHeadline" variants={itemVariants}>
          <p>
            Currently shipping{' '}
            <Link className="link-underline" href={CV_WISER_URL} target="_blank" rel="noopener noreferrer">
              CV Wiser
            </Link>
            {' '}— tailored CVs, cover letters, ATS scoring, and application tracking for job seekers.
          </p>
        </motion.div>

        <motion.div className="intro-ctas" variants={itemVariants}>
          <Link
            href={CV_WISER_URL}
            className="intro-cta intro-cta--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV Wiser
            <span className="intro-cta__icon" aria-hidden="true">
              <MdOutlineOpenInNew />
            </span>
          </Link>
          <Link
            href="/my-resume.pdf"
            className="intro-cta intro-cta--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="intro-cta__icon" aria-hidden="true">
              <MdDownload />
            </span>
            Resume
          </Link>
          <button
            type="button"
            className="intro-cta intro-cta--secondary intro-cta--icon-only"
            onClick={handleScrollToAbout}
            aria-label="Scroll to about section"
          >
            <MdOutlineKeyboardArrowDown aria-hidden />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
