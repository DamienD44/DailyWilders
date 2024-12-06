interface SliderProps {
  urlToImage: string;
}
export default function Slider({ urlToImage }: SliderProps) {
  return (
    <figure className="caroussel-figure">
      <img src={urlToImage} alt="" className="caroussel-img" />
    </figure>
  );
}
