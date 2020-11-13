import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import DelayComponent from './delayComponent';

function HomeApp() {
  const content = (
    <>
      <div className={styles.responsiveDesktop}>
        <DelayComponent content="Desktop" />
      </div>
      <div className={styles.responsiveMobile}>
        <DelayComponent content="Mobile" />
      </div>
    </>
  );
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

export default function ResponsiveCssComponent() {
  return (
    <HomeApp />
  );
}
