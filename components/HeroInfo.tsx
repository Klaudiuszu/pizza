import React from "react";
import Image from "next/image";
import Button from "./Button";

const HeroInfo = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div className="hero-info-images flex gap-5 flexCenter flex-col xl:flex-row md:flex-row">
          <div>
            <figure className="snip0016">
              <Image
                src="/heroPizza1.png"
                alt="A LOT OF PIZZA"
                width={400}
                height={40}
              />
              <figcaption>
                <h2>
                  Wypiek pizzy trwa jedynie<span> 3minuty! </span>
                </h2>
                <p>
                  Używamy do tego pieca OODA KONI 16 która osiąga temperaturę
                  około 500st przez co ciasto jest idealnie dopieczone a dodatki
                  na pizzy nie są podpalone.
                </p>
                <a href="#"></a>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-5">
            <figure className="snip0016">
              <Image
                src="/heroPizza2.png"
                alt="A LOT OF PIZZA"
                width={400}
                height={40}
              />
              <figcaption>
                <h2>
                  Ciasto z klasycznej<span> mąki Caputo </span>
                </h2>
                <p>
                  Używamy jednej z najbardziej rekomendowanych marek do pizzy
                  neapolitańskiej czy też cannoto.
                </p>
                <a href="#"></a>
              </figcaption>
            </figure>
            <figure className="snip0016 ">
              <Image
                src="/heroPizza3.png"
                alt="A LOT OF PIZZA"
                width={400}
                height={40}
              />
              <figcaption>
                <h2>
                  Wypiekamy pizzę z<span> pasji do niej</span>
                </h2>
                <p>
                  Wszystko zaczęło się od pomocy mojemu tacie przy budowie pieca
                  chlebowego w którym później sam wypiekał pizze.
                </p>
                <a href="#"></a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="relative justify-center z-20 flex flex-1 flex-col xl:w-1/2">
          <span className="hero-info-right-first-content text-3xl">
            W kilku słowach o nas
          </span>
          <header className="hero-info-right-header">Wypiekamy pizzę z pasji do niej</header>
          <span className="hero-info-right-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
      </div>
    </section>
  );
};

export default HeroInfo;
