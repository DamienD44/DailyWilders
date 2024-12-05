import type { CardProps } from "./Card.types";

import "./Card.css";

export const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <article className="whole-card-container">
      <header className="title-grid">
        <h1>{article.title}</h1>
      </header>
      <figure className="fig-box">
        <img
          className="fig-img"
          src={article.urlToImage}
          alt="description de l'image"
        />
      </figure>
      <figcaption className="author-name">
        {" "}
        Auteur : {article.author}{" "}
      </figcaption>
      <section className="article-box">
        <p>{article.description}</p>
      </section>
      <p className="publication-date">publié le {article.publishedAt}</p>
    </article>
  );
};
export default Card;
