import Head from "next/head";
import { useEffect, useState } from "react";
import Nav from "components/navigation";
import IntroOverlay from "components/introOverlay";
import gsap from "gsap";
import "styles/main.scss";

let tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".intro-overlay__logo", 1.8, {
    delay: 0.5,
    y: 150,
    skewY: 7,
    ease: "power4.out"
  })
    .to(".intro-overlay", 1.6, {
      delay: 0.4,
      width: 0,
      ease: "expo.inOut"
    })
    .to(".intro-overlay__logo", 1.2, {
      delay: -1.6,
      opacity: 0,
      ease: "power4.out"
    })
    .to(".intro-overlay__logo", 0, {
      delay: -1,
      display: "none"
    })
    .from(".header__image", 1.6, {
      scale: 1.3,
      delay: -1.7,
      ease: "expo.inOut"
    })
    .from(".about__image", 1.6, {
      scale: 1.3,
      delay: -1.7,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    });
};

function App({ Component, pageProps }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });

  useEffect(() => {
    //On load timeline
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      <Head>
        <title>Room</title>
      </Head>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
