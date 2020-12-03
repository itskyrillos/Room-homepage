import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper className="header__slider">
      <SwiperSlide className="header__image-container">
        <Image
          className="header__image"
          src="/assets/keagan-henman-iFBIdX54BOk-unsplash.jpg"
          alt="logo"
          width={1920}
          height={1281}
          layout="responsive"
        ></Image>
      </SwiperSlide>
      <SwiperSlide className="header__image-container">
        <Image
          className="header__image"
          src="/assets/ellen-qin-bxLhqZIp2LI-unsplash.jpg"
          alt="logo"
          layout="fill"
        ></Image>
      </SwiperSlide>

      <div className="header__btn-container">
        <button className="btn-slider btn-slider--previous">previous</button>
        <button className="btn-slider btn-slider--next">next</button>
      </div>
    </Swiper>
  );
}
