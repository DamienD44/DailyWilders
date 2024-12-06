import "./Header.css";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useLanguage } from "../traduction/LanguageContext";
// import { translations } from "../traduction/translations";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
  };

  // const { language, toggleLanguage } = useLanguage();
  // const t = translations[language]; // Texte traduit

  return (
    <>
      <section className="header">
        <section className="header-top">
          <section>
            <img
              className="dailywilders-logo"
              src="Logo renard.png"
              alt="Logo du site Daily Wilder"
            />
            <ul>
              <li>
                <Link className="french" to="/home">
                  Français
                </Link>
              </li>
              <li>
                <p>|</p>
              </li>
              <li>
                <Link className="english" to="/Home">
                  English
                </Link>
              </li>
            </ul>
            <h2>Daily Wilders</h2>
          </section>
        </section>
        <nav className="header-bottom">
          <ul className="nav-bar">
            <li>
              {" "}
              <NavLink className="to-home" to="/">
                <img
                  src="Logo Home (1).png"
                  alt="Logo pour aller à la page d'acceuil"
                />
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="to-about-us" to="/AboutUs">
                About Us
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="to-news" to="/News">
                News
              </NavLink>
            </li>
          </ul>
          <div className="search-container">
            <button
              type="button"
              className={`search-button ${isSearchOpen ? "hidden" : ""}`}
              onClick={handleSearchToggle}
            >
              <img
                src="logo_recherche-removebg-preview.png"
                alt="Search Icon"
              />
            </button>
            <input
              type="text"
              ref={searchRef}
              className={`search-input ${isSearchOpen ? "open" : ""}`}
              placeholder="Recherche..."
            />
          </div>
        </nav>
      </section>
    </>
  );
}
export default Header;
