import React from 'react';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import styles from '../../styles/Home.module.css';
import DelayComponent from './delayComponent';

function HomeApp() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1100px)' });

  const content = isDesktop ? <DelayComponent content="Desktop" /> : <DelayComponent content="Mobile" />;
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js for all!
        </h1>
        <br />

        {content}
      </main>

    </div>
  );
}

export default function ResponsiveReactComponent() {
  return (
    <HomeApp />
  );
}
