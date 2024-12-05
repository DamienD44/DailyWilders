import { useEffect, useState } from "react";
import "./Caroussel.css";
import Slider from "./Slider/Slider";

const image = [
  {
    id: 1,
    src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP",
  },
  {
    id: 2,
    src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/adobestock_164519039-taille1200_674ff6737ea47_0.jpg?itok=u-GIo7kn",
  },
  {
    id: 3,
    src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP",
  },
  {
    id: 4,
    src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/adobestock_164519039-taille1200_674ff6737ea47_0.jpg?itok=u-GIo7kn",
  },
  {
    id: 5,
    src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP",
  },
  {
    id: 6,
    src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/adobestock_164519039-taille1200_674ff6737ea47_0.jpg?itok=u-GIo7kn",
  },
  {
    id: 7,
    src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP",
  },
  {
    id: 8,
    src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/adobestock_164519039-taille1200_674ff6737ea47_0.jpg?itok=u-GIo7kn",
  },
];

export default function Caroussel() {
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => toggleImage(1), 4000);
    return () => clearInterval(interval);
  }, []);

  function toggleImage(increaseIndex: number) {
    setIndexImage((index) => {
      let result: number;

      result = increaseIndex + index;

      if (increaseIndex + index < 0) {
        result = image.length - 1;
      } else if (increaseIndex + index >= image.length) {
        result = 0;
      }

      return result;
    });
  }

  return (
    <>
      <section className="slider-container">
        <p>{indexImage}</p>
        <section className="slide-animation">
          <Slider imageSrc={image[indexImage].src} />
        </section>
        <section className="slider-button-wrapper">
          <button
            type="button"
            className="slide-button"
            onClick={() => toggleImage(-1)}
          >
            &#x27E8;
          </button>
          <button
            type="button"
            className="slide-button"
            onClick={() => toggleImage(1)}
          >
            &#x27E9;
          </button>
        </section>
      </section>

      {/* <figure className="slider-figure">
        <img src={imageSrc} alt="" className="slider-img" />
      </figure> */}
    </>
  );
}
