import "./styles/Globals.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";

function App() {
  return (
    <>
      <header className="header-container">
        <Header />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
