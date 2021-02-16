import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export default function Header() {
  return (
    <header className="header">
      <div className="header__slider-container">
        <Swiper
          navigation={{
            nextEl: ".btn-slider--next",
            prevEl: ".btn-slider--previous"
          }}
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

      <div className="header__content">
        <h1 className="header__title">Discover innovative ways to decorate</h1>

        <p className="header__text">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <a className="header__link" href="/">
          SHOP NOW
        </a>
      </div>
    </header>
  );
}
