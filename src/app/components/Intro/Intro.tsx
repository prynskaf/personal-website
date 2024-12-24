'use client';

import React from 'react';
import './Intro.scss';
import Link from 'next/link';
import Button from '../Button/Button';
import { FiCornerRightDown } from 'react-icons/fi';

const Intro = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="intro-wrapper">
      <div className="intro-headline">
        <p>Hi, my name is</p>
        <h1 className="name">Prince Kyei.</h1>
        <h1 className="description">I build things for the web.</h1>
      </div>

      <div className="intro-subHeadline">
        <p>
          I&apos;m a software engineer specializing in creating exceptional digital experiences. Currently, I&apos;m
          focused on building accessible, human-centered products at {''}
          <Link className="link-style" href="https://proadvisor-group.com/" target="_blank" rel="noopener noreferrer">
            Pro Advisor Group.
          </Link>
        </p>
      </div>
      <div className="intro-btn">
        <Button onClick={handleScrollToAbout}>
          <div className="button-text">
            <span>Read More </span>
            <FiCornerRightDown />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default Intro;
