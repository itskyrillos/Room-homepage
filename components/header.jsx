import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Controller, EffectFade } from "swiper";

SwiperCore.use([Navigation, Controller, EffectFade]);

export default function Header() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <header className="header">
      <div className="header__slider-container">
        <Swiper
          navigation={{
            nextEl: ".btn-slider--next",
            prevEl: ".btn-slider--previous"
          }}
          controller={{ control: controlledSwiper }}
          effect="fade"
          className="header__slider-image"
        >
          <SwiperSlide className="header__image-container">
            <Image
              className="header__image"
              src="/static/image-hero-1.webp"
              alt="Davide Cantelli"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </SwiperSlide>

          <SwiperSlide className="header__image-container">
            <Image
              className="header__image"
              src="/static/image-hero-2.webp"
              alt="Jean-Philippe Delberghe"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </SwiperSlide>

          <SwiperSlide className="header__image-container">
            <Image
              className="header__image"
              src="/static/image-hero-3.webp"
              alt="Keagan Henman"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="header__btn-container">
        <button className="btn-slider btn-slider--previous">previous</button>
        <button className="btn-slider btn-slider--next">next</button>
      </div>

      <Swiper onSwiper={setControlledSwiper} className="header__content">
        <SwiperSlide className="header__text-container">
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
        </SwiperSlide>
        <SwiperSlide className="header__text-container">
          <h1 className="header__title">
            We are available all across the globe
          </h1>

          <p className="header__text">
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
          </p>
          <a className="header__link" href="/">
            SHOP NOW
          </a>
        </SwiperSlide>
        <SwiperSlide className="header__text-container">
          <h1 className="header__title">
            Manufactured with the best materials
          </h1>

          <p className="header__text">
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p>
          <a className="header__link" href="/">
            SHOP NOW
          </a>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}
