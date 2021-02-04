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

    tl.to('.intro-overlay', 1.6, {
      delay: 1,
      width: 0,
      ease: 'expo.inOut',
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
