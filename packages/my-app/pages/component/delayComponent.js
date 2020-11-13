import React from 'react';
import styles from '../../styles/Home.module.css';

function DelayComponent({ content, contentRemote }) {
  const contentRepeat = new Array(1000).fill(
    <h1 className={styles.title}>
      {`Welcome to Next.js ${content}!`}
    </h1>,
  );

  return (
    <>
      {`content : ${contentRemote}`}
      <br />
      {contentRepeat}
    </>
  );
}

export async function getServerSideProps(context) {
  const contentRemote = await fetch('www.baidu.com');
  return {
    props: {
      contentRemote,
    }, // will be passed to the page component as props
  };
}

export default DelayComponent;
