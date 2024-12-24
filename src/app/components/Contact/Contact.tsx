'use client';

import Link from 'next/link';
import styles from './Contact.module.scss';
import Button from '../Button/Button';

export default function Contact() {
  return (
    <section id='Contact' className={styles.contact}>
      <h2 className={styles.contact__tag}>04. What&apos;s Next?</h2>
      <h1 className={styles.contact__title}>Get In Touch</h1>
      <p className={styles.contact__description}>
      I&apos;m currently looking for new 
      opportunities, and my inbox is always open.
       Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <Link href="mailto:prynskaf.12@gmail.com" className={styles.contact__button} >
       <Button>Say Hello</Button>
      </Link>
    </section>
  );
}