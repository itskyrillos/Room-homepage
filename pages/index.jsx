import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__slider">
          <div className="header__image-container">
            <Image
              className="header__image"
              src="/assets/desktop-image-hero-2.jpg"
              alt="logo"
              width={1260}
              height={1010}
              layout="responsive"
            />
          </div>

          <div className="header__btn-container">
            <button className="btn-slider btn-slider--previous">
              previous
            </button>
            <button className="btn-slider btn-slider--next">next</button>
          </div>
        </div>

        <div className="header__content">
          <h1 className="header__title">
            Discover innovative ways to decorate
          </h1>

          <p className="header__text">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <a className="header__link" href="/">
            SHOP NOW
          </a>
        </div>
      </header>

      <section className="about">
        <div className="about__image-container about__image-container--left">
          <img
            className="about__image"
            src="/assets/image-about-dark.jpg"
            alt=""
          />
        </div>

        <div className="about__content">
          <h2 className="about__title">About our furniture</h2>

          <p className="about__text">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>

        <div className="about__image-container about__image-container--right">
          <img
            className="about__image"
            src="/assets/image-about-light.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
