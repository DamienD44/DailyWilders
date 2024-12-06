import { Link } from "react-router-dom";
import "./News.css";
function News() {
  return (
    <>
      <section className="news-page">
        <h1>Latest Good News</h1>
        <p className="news-intro">
          Discover inspiring stories from around the world. From acts of
          kindness to groundbreaking innovations, our curated news highlights
          the positive moments that make a difference.
        </p>
        <div className="news-grid">
          {/* Article 1 */}
          <article className="news-item">
            <img
              src="https://media.sciencephoto.com/image/f0242443/800wm/F0242443-Volunteers_planting_tree_in_park.jpg"
              alt="Volunteers planting trees in a community park"
              className="news-image"
            />
            <div className="news-content">
              <h2>Community Unites to Reforest Local Park</h2>
              <p>
                Hundreds of volunteers gathered to plant over 10,000 trees in a
                local park, creating a green space for future generations.
              </p>
              <Link to="/Home" className="news-link">
                Read More
              </Link>
            </div>
          </article>

          {/* Article 2 */}
          <article className="news-item">
            <img
              src="https://th.bing.com/th/id/OIP.7C9Fdrl_xwHCyXpGnvjbPwHaE7?rs=1&pid=ImgDetMain"
              alt="A smiling young girl holding a certificate of achievement"
              className="news-image"
            />
            <div className="news-content">
              <h2>Young Innovator Wins Award for Sustainable Invention</h2>
              <p>
                A 12-year-old student developed a device that turns plastic
                waste into reusable building materials, receiving international
                recognition.
              </p>
              <Link to="/Home" className="news-link">
                Read More
              </Link>
            </div>
          </article>

          {/* Article 3 */}
          <article className="news-item">
            <img
              src="https://th.bing.com/th/id/OIP.Rjf1P2Dal0cN0tHBruaocAHaE8?rs=1&pid=ImgDetMain"
              alt="Doctors celebrating a medical breakthrough in a hospital"
              className="news-image"
            />
            <div className="news-content">
              <h2>Medical Breakthrough Brings Hope to Millions</h2>
              <p>
                Researchers have developed a new treatment for a rare disease,
                offering hope to patients and families worldwide.
              </p>
              <Link to="/Home" className="news-link">
                Read More
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
export default News;
