import { useLoaderData } from "react-router-dom";
import Caroussel from "../../components/Caroussel/Caroussel.tsx";
import { Card } from "../../components/card/Card.tsx";

type Article = {
  title: string;
  urlToImage: string;
  author: string;
  description: string;
  publishedAt: string;
};

type LoaderData = {
  articles: Article[];
};

export default function Home() {
  const { articles } = useLoaderData() as LoaderData;

  return (
    <>
      <main className="main-container">
        <Caroussel />
        <section className="card-container">
          {articles.map((article) => (
            <Card key={article.title} article={article} />
          ))}
        </section>
      </main>
    </>
  );
}
