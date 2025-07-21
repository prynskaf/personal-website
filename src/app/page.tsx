'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Work';
import Project from './components/Project/Project';
import NoteWorthy from './components/NoteWorthy/NoteWorthy';
import Contact from './components/Contact/Contact';
import './styles/home.scss';
import GoogleAnalytics from './lib/googleAnalytics';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// 👇 Simplified Section wrapper — no useInView
const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="section-wrapper"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <main className="home-wrapper">
      <GoogleAnalytics />
      <Section>
        <Intro />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Experience />
      </Section>
      <Section>
        <Project />
      </Section>
      <Section>
        <NoteWorthy />
      </Section>
      <Section>
        <Contact />
      </Section>
    </main>
  );
};

export default Home;
