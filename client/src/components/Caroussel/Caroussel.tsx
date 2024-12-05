import "./Caroussel.css";

export default function Caroussel() {
  return (
    <>
      <section className="slider-container">
        <button type="button" className="slide-button">
          &#x27E8;
        </button>
        <figure className="slider-figure">
          <img
            src="https://static.cnews.fr/sites/default/files/styles/image_325_183/public/combosondage_675097801d25a_0.jpg?itok=kBhw1mTP"
            alt=""
            className="slider-img"
          />
        </figure>
        <button type="button" className="slide-button">
          &#x27E9;
        </button>
      </section>
    </>
  );
}
