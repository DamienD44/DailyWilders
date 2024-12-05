import "./styles/Globals.css";
import Caroussel from "./components/Caroussel/Caroussel.tsx";
import { Card } from "./components/card";
import Footer from "./components/footer/Footer";

import Header from "./components/header/Header";
const article = {
  title: "Breaking News: New Developments in Technology",
  urlToImage:
    "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2024/11/toaster-xbox-series-s-cyber-monday-2024.jpg?resize=1600,900&key=3c2ed27a&watermark",
  author: "BBC News",
  description:
    "Recent advancements in AI are changing the way we interact with machines.",
  publishedAt: "2024-12-03T13:27:40Z",
};

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Caroussel />
      <Card article={article} />
      <Footer />
    </>
  );
}
export default App;
