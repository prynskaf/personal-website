'use client';

import React from 'react';
import Archive from '../components/Archive/Archive';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const ArchivePage = () => {
  return (
    <div>
      <Section>
        <Archive />
      </Section>
    </div>
  );
};

export default ArchivePage;