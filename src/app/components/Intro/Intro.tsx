'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Intro.scss';
import Link from 'next/link';
import { FiCornerRightDown } from 'react-icons/fi';
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
          <h2 className="description">I build SaaS web applications.</h2>
        </motion.div>

        <motion.div className="intro-subHeadline" variants={itemVariants}>
          <p>
            Founder @{' '}
            <Link className="link-underline" href={CV_WISER_URL} target="_blank" rel="noopener noreferrer">
              CV Wiser
            </Link>
            {' '}— helping job seekers beat ATS &amp; land interviews faster with an AI CV &amp; cover letter builder.
          </p>
          <p className="intro-subHeadline__secondary">
            Frontend-focused developer specializing in React, Next.js, and TypeScript — building real-world
            apps from idea to deployment.
          </p>
        </motion.div>

        <motion.div className="intro-btn" variants={itemVariants}>
          <button
            type="button"
            className="intro-scroll-btn"
            onClick={handleScrollToAbout}
            aria-label="Scroll to about section"
          >
            <FiCornerRightDown aria-hidden />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
