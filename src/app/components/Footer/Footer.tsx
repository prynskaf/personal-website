'use client';

import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { GoStar, GoRepoForked } from 'react-icons/go';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE_EMAIL, GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL } from '@/app/utils/siteConfig';

interface GitHubInfo {
  stars: number;
  forks: number;
}

export default function Footer() {
  const [githubInfo, setGitHubInfo] = useState<GitHubInfo | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/prynskaf/personal-website')
      .then(response => response.json())
      .then(json => {
        setGitHubInfo({
          stars: json.stargazers_count ?? 0,
          forks: json.forks_count ?? 0,
        });
      })
      .catch(console.error);
  }, []);

  const socialLinks = [
    { href: GITHUB_URL, icon: FiGithub, label: 'GitHub' },
    { href: INSTAGRAM_URL, icon: FiInstagram, label: 'Instagram' },
    { href: LINKEDIN_URL, icon: FiLinkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__mobile_social}>
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </Link>
          ))}
        </div>
        <p className={styles.footer__email}>
          <Link href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</Link>
        </p>
        <div className={styles.footer__credits}>
          <Link href="https://github.com/prynskaf/personal-website" target="_blank" rel="noopener noreferrer">
            <span>Designed & Built by Prince Kyei</span>
            <div className={styles.footer__stats}>
              <span><GoStar /> {githubInfo ? githubInfo.stars : '—'}</span>
              <span><GoRepoForked /> {githubInfo ? githubInfo.forks : '—'}</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
