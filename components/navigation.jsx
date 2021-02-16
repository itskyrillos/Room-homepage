import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";

export default function Navigation() {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  const [disabled, setDisabled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const closeMenu = () => {
      setMenuState({ menuOpened: false });
    };

    router.events.on("routeChangeStart", closeMenu);
  });

  const handleMenu = () => {
    disableMenu();

    if (menuState.menuOpened === false) {
      setMenuState({ menuOpened: true });
    } else if (menuState.menuOpened === true) {
      setMenuState({ menuOpened: false });
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

  const openMenuAnimation = () => {
    tl.to(".nav__list", 0, {
      display: "flex"
    })
      .to(".nav__list", 0.5, {
        opacity: 1
      })
      .from(".nav__item", 0.5, {
        y: -20,
        delay: -0.2,
        opacity: 1
      });
  };

  const closeMenuAnimation = () => {
    tl.to(".nav__item", 0.5, {
      y: -20,
      opacity: 0
    })
      .to(".nav__list", 0.5, {
        opacity: 0,
        delay: -0.2
      })
      .to(".nav__list", 0, {
        display: "none",
        delay: 1
      });
  };

  return (
    <nav className={menuState.menuOpened === true ? "nav open" : "nav"}>
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
    </nav>
  );
}
