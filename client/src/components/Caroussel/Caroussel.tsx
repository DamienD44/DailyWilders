import { Fragment } from "react";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Caroussel.css";
import "./Button.css";
import type { SliderI } from "../../types/caroussel";
import Slider from "./Slider/Slider.tsx";

// const image = [
//   {
//     id: 1,
//     src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP",
//   },
//   {
//     id: 2,
//     src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/adobestock_164519039-taille1200_674ff6737ea47_0.jpg?itok=u-GIo7kn",
//   },
//   {
//     id: 3,
//     src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP",
//   },
//   {
//     id: 4,
//     src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/adobestock_164519039-taille1200_674ff6737ea47_0.jpg?itok=u-GIo7kn",
//   },
//   {
//     id: 5,
//     src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP",
//   },
//   {
//     id: 6,
//     src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/adobestock_164519039-taille1200_674ff6737ea47_0.jpg?itok=u-GIo7kn",
//   },
//   {
//     id: 7,
//     src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP",
//   },
//   {
//     id: 8,
//     src: "https://static.cnews.fr/sites/default/files/styles/image_325_183/public/adobestock_164519039-taille1200_674ff6737ea47_0.jpg?itok=u-GIo7kn",
//   },
// ];

export default function Caroussel() {
  const data = useLoaderData() as SliderI;
  console.info("coucou", data);

  // const [indexImage, setIndexImage] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => toggleImage(1), 4000);
  //   return () => clearInterval(interval);
  // }, []);

  // function toggleImage(increaseIndex: number) {
  //   setIndexImage((index) => {
  //     let result: number;

  //     result = increaseIndex + index;

  //     if (increaseIndex + index < 0) {
  //       result = image.length - 1;
  //     } else if (increaseIndex + index >= image.length) {
  //       result = 0;
  //     }

  //     return result;
  //   });
  // }

  return (
    <>
      <section className="caroussel-container">
        {data.articles.map((el) => {
          return (
            <Fragment key={el.title}>
              <Slider urlToImage={el.urlToImage} />
              {
                <section className="caroussel-button-wrapper">
                  <button
                    type="button"
                    className="button-caroussel"
                    // onClick={() => toggleImage(-1)}
                  >
                    &#x27E8;
                  </button>
                  <button
                    type="button"
                    className="button-caroussel"
                    // onClick={() => toggleImage(1)}
                  >
                    &#x27E9;
                  </button>
                </section>
              }
            </Fragment>
          );
        })}
        {/* <Slider imageSrc={image[indexImage].src} /> */}
      </section>
    </>
  );
}
