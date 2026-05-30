'use client';

import Link from 'next/link';
import { FiGithub, FiMail, FiGlobe } from 'react-icons/fi';
import styles from './Contact.module.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { SITE_EMAIL, GITHUB_URL, CV_WISER_URL } from '@/app/utils/siteConfig';

const contactLinks = [
  { href: `mailto:${SITE_EMAIL}`, icon: FiMail, label: 'Email me' },
  { href: CV_WISER_URL, icon: FiGlobe, label: 'Visit CV Wiser' },
  { href: GITHUB_URL, icon: FiGithub, label: 'View GitHub profile' },
];

export default function Contact() {
  return (
    <section id='Contact' className={styles.contact}>
      <SectionHeading number="05." title="What's Next?" centered />
      <h1 className={styles.contact__title}>Get In Touch</h1>
      <p className={styles.contact__description}>
        I&apos;m open to opportunities where I can contribute to meaningful products and collaborate
        with strong teams. Whether you have a question or just want to say hi, my inbox is always open.
      </p>
      <div className={styles.contact__actions}>
        {contactLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            className={styles.contact__iconLink}
            aria-label={label}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          >
            <Icon aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}
