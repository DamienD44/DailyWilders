import { Link } from "react-router-dom";

interface SliderProps {
  urlToImage: string;
  url: string;
}
export default function Slider({ urlToImage, url }: SliderProps) {
  return (
    <figure className="caroussel-figure">
      <Link to={url} target="_blank">
        <img src={urlToImage} alt="" className="caroussel-img" />
      </Link>
    </figure>
  );
}
