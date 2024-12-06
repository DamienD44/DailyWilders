import type { sliderI } from "../../../types/caroussel";

export default function Slider({ imageSrc }: sliderI) {
  return (
    <figure>
      <img src={imageSrc} alt="" className="caroussel-img" />
    </figure>
  );
}
