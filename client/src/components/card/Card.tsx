import type { CardProps } from "./Card.d";
import "./Card.css";

export const Card: React.FC<CardProps> = ({ article }) => {
  const { title, urlToImage, author, description, publishedAt, url } = article;
  const handleImageClick = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      <article className="whole-card-container">
        <header className="title-grid">
          <h1>{title}</h1>
        </header>
        <figure className="fig-box">
          <button className="fig-img" type="button" onClick={handleImageClick}>
            <img className="fig-img" src={urlToImage} alt={title} />
          </button>{" "}
        </figure>
        <figcaption className="author-name">Auteur : {author}</figcaption>
        <section className="article-box">
          <p>{description}</p>
        </section>
        <p className="publication-date">Publié le {publishedAt}</p>
      </article>
    </>
  );
};
export default Card;
