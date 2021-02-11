import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";

export default function Navigation() {
  const [state, setState] = useState({
    initial: false,
    clicked: null
  });

  const [menuState, setMenuState] = useState({ menuOpened: false });

  const [disabled, setDisabled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const closeMenu = () => {
      setState({ clicked: false });
    };

    router.events.on("routeChangeStart", closeMenu);
  });

  const handleMenu = () => {
    disableMenu();

    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true
      });

      setMenuState({ menuOpened: true });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked
      });

      setMenuState({ menuOpened: false });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked
      });

      setMenuState({ menuOpened: true });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // Menu Animation
  let tl = gsap.timeline();
  // let menu = useRef(null);

  const openMenuAnimation = () => {
    tl.to(".nav__list-container", 0, {
      display: "block"
    })
      .to(".nav__list-container", 0.5, {
        opacity: 1
      })
      .from(".nav__item", 0.5, {
        y: -20,
        delay: -0.2,
        opacity: 0,
        stagger: {
          amount: 0.1
        }
      });
  };

  const closeMenuAnimation = () => {
    tl.to(".nav__list-container", 0.5, {
      opacity: 0
    }).to(".nav__list-container", 0, {
      display: "none"
    });
  };

  useEffect(() => {
    if (state.clicked === false) {
      // close our menu
      // menu.style.visibility = "hidden";
      closeMenuAnimation();
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open our menu
      // menu.style.visibility = "visible";
      openMenuAnimation();
    }
  });

  return (
    <nav className="nav">
      <button
        className={
          menuState.menuOpened === true ? "btn-burger open" : "btn-burger"
        }
        disabled={disabled}
        onClick={handleMenu}
      >
        <span className="btn-burger__line"></span>
        <span className="btn-burger__line"></span>
        <span className="btn-burger__line"></span>
      </button>

      <img className="nav__logo" src="logo.svg" alt="logo Room" />

      <div className="nav__list-container">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">home</a>
            </Link>
          </li>

          <li className="nav__item">
            <Link href="/shop">
              <a className="nav__link">shop</a>
            </Link>
          </li>

          <li className="nav__item">
            <Link href="/about">
              <a className="nav__link">about</a>
            </Link>
          </li>

          <li className="nav__item">
            <Link href="/contact">
              <a className="nav__link">contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
