import type { sliderI } from "../../../types/caroussel";

export default function Slider({ imageSrc }: sliderI) {
  return (
    <figure className="slider-figure">
      <img src={imageSrc} alt="" className="slider-img" />
    </figure>
  );
}
