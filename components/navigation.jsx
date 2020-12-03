import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

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
        clicked: true,
        menuName: "Close",
      });
      console.log(1);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      console.log(2);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      console.log(3);
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  let menu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close our menu
      menu.style.visibility = "hidden";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open our menu
      menu.style.visibility = "visible";
    }
  });

  return (
    <nav className="nav">
      <button
        className="nav__btn-burger"
        disabled={disabled}
        onClick={handleMenu}
      >
        Menu
      </button>

      <img className="nav__logo" src="logo.svg" alt="logo" />

      <ul className="nav__list" ref={(el) => (menu = el)}>
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
          <Link href="/shop" href="/about">
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
