'use client';

import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi';
import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__social_left}>
        <ul>
          <li><Link href="https://github.com/prynskaf"><FiGithub /></Link></li>
          <li><Link href="#"><FiInstagram /></Link></li>
          <li><Link href="#"><FiTwitter /></Link></li>
          <li><Link href="https://www.linkedin.com/in/prince-kyei/"><FiLinkedin /></Link></li>
          <li><Link href="#"><FiCodepen /></Link></li>
          <li className={styles.footer__line}></li>
        </ul>
      </div>

      <div className={styles.footer__social_right}>
        <Link href="mailto:prynskaf.12@gmail.com">prynskaf.12@gmail.com</Link>
        <div className={styles.footer__line}></div>
      </div>

      <div className={styles.footer__content}>
        <div className={styles.footer__mobile_social}>
          <Link  href="https://github.com/prynskaf"><FiGithub /></Link>
          <Link href="#"><FiInstagram /></Link>
          <Link href="#"><FiTwitter /></Link>
          <Link href="https://www.linkedin.com/in/prince-kyei/"><FiLinkedin /></Link>
          <Link href="#"><FiCodepen /></Link>
        </div>
        <div className={styles.footer__credits}>
         <Link href="https://github.com/prynskaf/personal-website"  target="_blank" rel="noopener noreferrer" >
         <span>Designed & Built by Prince Kyei</span>
          <div className={styles.footer__stats}>
            <span><FiGithub /> 7,644</span>
            <span><FiGithub /> 3,805</span>
          </div>
         </Link>
        </div>
      </div>
    </footer>
  );
}