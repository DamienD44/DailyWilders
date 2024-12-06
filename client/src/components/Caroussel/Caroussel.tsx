import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Caroussel.css";
import "./Button.css";
import type { SliderI } from "../../types/caroussel";
import Slider from "./Slider/Slider.tsx";

export default function Caroussel() {
  const data = useLoaderData() as SliderI;
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => toggleImage(1), 4000);
    return () => clearInterval(interval);
  }, []);

  function toggleImage(increaseIndex: number) {
    setIndexImage((index) => {
      let result = increaseIndex + index;
      if (increaseIndex + index < 0) {
        result = data.articles.length - 1;
      } else if (increaseIndex + index >= data.articles.length) {
        result = 0;
      }
      return result;
    });
  }

  return (
    <>
      <section className="caroussel-container">
        <Fragment>
          <Slider urlToImage={data.articles[indexImage].urlToImage} />
          {
            <section className="caroussel-button-wrapper">
              <button
                type="button"
                className="button-caroussel"
                onClick={() => toggleImage(-1)}
              >
                &#x27E8;
              </button>
              <button
                type="button"
                className="button-caroussel"
                onClick={() => toggleImage(1)}
              >
                &#x27E9;
              </button>
            </section>
          }
        </Fragment>
      </section>
    </>
  );
}
