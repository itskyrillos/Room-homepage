import Head from 'next/head';
import { useEffect } from 'react';
import Nav from 'components/navigation';
import IntroOverlay from 'components/introOverlay';
import gsap from 'gsap';
import 'styles/main.scss';

function App({ Component, pageProps }) {
  useEffect(() => {
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    const tl = gsap.timeline();

    tl.from('.intro-overlay__logo', 1.6, {
      delay: 0.5,
      y: 150,
      skewX: 0.7,
      ease: 'expo.out',
    }).from('.intro-overlay', 1.6, {
      delay: 0.7,
      left: 0,
      ease: 'expo.in',
    });
  });

  return (
    <>
      <Head>
        <title>Room</title>
      </Head>
      <IntroOverlay />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
