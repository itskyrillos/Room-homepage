import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use(Navigation)

export default function Home () {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header__slider-container'>
          <Swiper
            navigation={{
              nextEl: '.btn-slider--next',
              prevEl: '.btn-slider--previous'
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='header__slider'
          >
            <SwiperSlide className='header__image-container'>
              <Image
                className='header__image'
                src='/assets/image-hero-1.webp'
                alt='chair wood'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </SwiperSlide>

            <SwiperSlide className='header__image-container'>
              <Image
                className='header__image'
                src='/assets/image-hero-2.webp'
                alt='chair black'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </SwiperSlide>

            <SwiperSlide className='header__image-container'>
              <Image
                className='header__image'
                src='/assets/image-hero-3.webp'
                alt='chair black'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </SwiperSlide>
          </Swiper>
          <div className='header__btn-container'>
            <button className='btn-slider btn-slider--previous'>
              previous
            </button>
            <button className='btn-slider btn-slider--next'>next</button>
          </div>
        </div>

        <div className='header__content'>
          <h1 className='header__title'>
            Discover innovative ways to decorate
          </h1>

          <p className='header__text'>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <a className='header__link' href='/'>
            SHOP NOW
          </a>
        </div>
      </header>

      <section className='about'>
        <div className='about__image-container about__image-container--left'>
          <Image
            className='about__image'
            src='/assets/image-about-dark.webp'
            alt=''
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>

        <div className='about__content'>
          <h2 className='about__title'>About our furniture</h2>

          <p className='about__text'>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>

        <div className='about__image-container about__image-container--right'>
          <Image
            className='about__image'
            src='/assets/image-about-light.webp'
            alt=''
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
      </section>
    </div>
  )
}
