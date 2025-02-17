'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Work';
import Project from './components/Project/Project';
import NoteWorthy from './components/NoteWorthy/NoteWorthy';
import Contact from './components/Contact/Contact';import './styles/home.scss';
import GoogleAnalytics from './lib/googleAnalytics';


const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariant}
      initial="hidden"
      animate={controls}
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
