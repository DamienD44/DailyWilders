interface SliderProps {
  urlToImage: string;
}
export default function Slider({ urlToImage }: SliderProps) {
  console.info(urlToImage);
  return (
    <figure className="caroussel-figure">
      <img src={urlToImage} alt="" className="caroussel-img" />
    </figure>
  );
}
