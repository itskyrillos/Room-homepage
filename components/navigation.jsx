export default function Navigation() {
  return (
    <nav className="nav">
      <button className="nav__btn-burger">menu</button>

      <img className="nav__logo" src="logo.svg" alt="logo" />

      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="/">
            home
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="/shop">
            shop
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="/about">
            about
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="/contact">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
