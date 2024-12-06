import "./styles/Globals.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";

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
