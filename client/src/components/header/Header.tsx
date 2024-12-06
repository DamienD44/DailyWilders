import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="header">
        <section className="header-top">
          <section>
            <img
              className="dailywilders-logo"
              src="Logo-daily-wilder.png"
              alt="Logo du site Daily Wilder"
            />
            <ul>
              <li>
                <Link to="/">Français</Link>
              </li>
              <li>
                <p>|</p>
              </li>
              <li>
                <Link to="/">English</Link>
              </li>
            </ul>
          </section>
          {/* <img
            className="dailywilders-logo"
            src="Logo-daily-wilder.png"
            alt="Logo du site Daily Wilder"
          /> */}
          <h2>Daily Wilders</h2>
        </section>
        <section className="header-bottom">
          <ul>
            <li>
              {" "}
              <Link to="/">
                <img
                  src="Logo Home (1).png"
                  alt="Logo pour aller à la page d'acceuil"
                />
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/">About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="/">News</Link>
            </li>
          </ul>
          <img src="logo_recherche-removebg-preview.png" alt="" />
        </section>
      </nav>
    </>
  );
}
export default Header;
