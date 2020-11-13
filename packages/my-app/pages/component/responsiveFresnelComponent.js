import React from 'react';
import Head from 'next/head';
import { createMedia } from '@artsy/fresnel';
import styles from '../../styles/Home.module.css';
import DelayComponent from './delayComponent';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

function HomeApp() {
  const content = (
    <>
      <Media greaterThanOrEqual="lg">
        <DelayComponent content="Desktop" />
      </Media>
      <Media lessThan="lg">
        <DelayComponent content="Mobile" />
      </Media>
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

export default function ResponsiveFresnelComponent() {
  return (
    <MediaContextProvider>
      <HomeApp />
    </MediaContextProvider>
  );
}
