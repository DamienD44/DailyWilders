import "../Footer/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <img src="daily-wilder.png" alt="logo of website" />

      <div className="txtFooter">
        <Link className="politique" to="/Politique">
          Politique de confidentialité
        </Link>
        <span className="footerSpan"> | </span>
        <Link className="condition" to="/Conditions">
          Conditions générales
        </Link>
      </div>
      <section className="icones">
        <a
          href="https://www.facebook.com/?locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Icones\facebook.png" alt="logo facebook" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="Icones\Instagram.png" alt="logo insta" />
        </a>
        <a
          href="https://x.com/?lang=fr"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="public\Icones\Twitter.png" alt="logo twitter" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="Icones\youtube.png" alt="logo youtube" />
        </a>
      </section>
    </footer>
  );
}
export default Footer;
