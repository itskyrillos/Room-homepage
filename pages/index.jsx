import Image from "next/image";
import Header from "components/header";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <section className="about">
        <div className="about__image-container about__image-container--left">
          <Image
            className="about__image"
            src="/static/image-about-dark.webp"
            alt="Goashape"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
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
          <Image
            className="about__image"
            src="/static/image-about-light.webp"
            alt="Ellen Qin"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>
    </div>
  );
}
