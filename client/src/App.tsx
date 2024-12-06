import "./styles/Globals.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="the-main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
export default App;
