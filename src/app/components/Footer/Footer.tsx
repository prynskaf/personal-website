'use client';
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi';
import { GoStar, GoRepoForked } from 'react-icons/go';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface GitHubInfo {
  stars: number;
  forks: number;
}

export default function Footer() {
  const [githubInfo, setGitHubInfo] = useState<GitHubInfo>({ stars: 0, forks: 0 });

  useEffect(() => {
    fetch('https://api.github.com/repos/prynskaf/personal-website')
      .then(response => response.json())
      .then(json => {
        setGitHubInfo({
          stars: json.stargazers_count,
          forks: json.forks_count,
        });
      })
      .catch(console.error);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__social_left}>
        <ul>
          <li><Link href="https://github.com/prynskaf" target="_blank" rel="noopener noreferrer"><FiGithub /></Link></li>
          <li><Link href="https://www.instagram.com/trendsandtarget/"><FiInstagram /></Link></li>
          <li><Link href="https://x.com/"   target="_blank" rel="noopener noreferrer"><FiTwitter /></Link></li>
          <li><Link href="https://www.linkedin.com/in/prince-kyei/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></Link></li>
          <li><Link href="https://codepen.io/" target="_blank" rel="noopener noreferrer"><FiCodepen /></Link></li>
          <li className={styles.footer__line}></li>
        </ul>
      </div>

      <div className={styles.footer__social_right}>
        <Link href="mailto:prynskaf.12@gmail.com">prynskaf.12@gmail.com</Link>
        <div className={styles.footer__line}></div>
      </div>

      <div className={styles.footer__content}>
        <div className={styles.footer__mobile_social}>
          <Link href="https://github.com/prynskaf" target="_blank" rel="noopener noreferrer"><FiGithub /></Link>
          <Link href="https://www.instagram.com/trendsandtarget/"><FiInstagram /></Link>
          <Link href="https://x.com/"  target="_blank" rel="noopener noreferrer"><FiTwitter /></Link>
          <Link href="https://www.linkedin.com/in/prince-kyei/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></Link>
          <Link href="https://codepen.io/"  target="_blank" rel="noopener noreferrer"><FiCodepen /></Link>
        </div>
        <div className={styles.footer__credits}>
          <Link href="https://github.com/prynskaf/personal-website" target="_blank" rel="noopener noreferrer">
            <span>Designed & Built by Prince Kyei</span>
            <div className={styles.footer__stats}>
              <span><GoStar /> {githubInfo.stars}</span>
              <span><GoRepoForked /> {githubInfo.forks}</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}