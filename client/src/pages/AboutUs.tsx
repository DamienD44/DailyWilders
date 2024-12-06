import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      <div className="about-us">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Spreading positivity, one story at a time.</p>
        </header>

        <section className="mission-content">
          <img
            src="https://i.pinimg.com/originals/3f/db/2d/3fdb2d5283b320a80fb39ca64f562951.jpg"
            alt="People smiling and holding hands, symbolizing positivity and unity"
            className="mission-image"
          />
          <div className="mission-text">
            <p>
              At <strong>Daily News</strong>, we believe in the power of
              positivity. In a world often overshadowed by challenges and
              negativity, our mission is to be a beacon of light, sharing
              stories that inspire hope, kindness, and resilience. We aim to
              remind everyone that even in the darkest times, there are
              countless reasons to smile.
            </p>
            <p>
              Our team works tirelessly to curate stories from around the globe
              that highlight acts of courage, innovation, and generosity.
              Whether it’s a community coming together to support those in need,
              groundbreaking scientific advancements, or personal triumphs,
              we’re here to celebrate the moments that make the world a better
              place.
            </p>
            <p>
              <strong>Why do we do this?</strong> Because we know that
              positivity is contagious. By spreading good news, we hope to
              inspire you to see the good around you, take action, and become
              part of the change we wish to see in the world.
            </p>
          </div>
        </section>

        <section className="about-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="new_profile-removebg-preview.png"
                alt="Damien"
                className="team-photo"
              />
              <h3>Damien</h3>
              <p>Founder & Editor-in-Chief</p>
              <p>
                Damien ensures every story we publish aligns with our mission of
                positivity and hope.
              </p>
            </div>
            <div className="team-member">
              <img
                src="new_profile-removebg-preview.png"
                alt="Fabrice"
                className="team-photo"
              />
              <h3>Fabrice</h3>
              <p>Content Strategist</p>
              <p>
                Fabrice curates and organizes content to bring you the best
                uplifting stories.
              </p>
            </div>
            <div className="team-member">
              <img
                src="new_profile-removebg-preview.png"
                alt="Benjamin"
                className="team-photo"
              />
              <h3>Benjamin</h3>
              <p>Lead Developer</p>
              <p>
                Benjamin is the tech wizard who makes our platform fast,
                reliable, and user-friendly.
              </p>
            </div>
            <div className="team-member">
              <img
                src="new_profile-removebg-preview.png"
                alt="Julia"
                className="team-photo"
              />
              <h3>Julia</h3>
              <p>Writer & Researcher</p>
              <p>
                Julia uncovers heartwarming stories that bring joy to our
                readers.
              </p>
            </div>
            <div className="team-member">
              <img
                src="new_profile-removebg-preview.png"
                alt="Lucas"
                className="team-photo"
              />
              <h3>Lucas</h3>
              <p>Community Manager</p>
              <p>
                Lucas engages with our community and ensures readers feel
                connected and inspired.
              </p>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <h2>Contact Us</h2>
          <p>
            Have a story to share or feedback for us? We'd love to hear from
            you! Reach out to us at{" "}
            <a href="mailto:contact@dailynews.com">contact@dailynews.com</a>.
          </p>
        </section>
      </div>
    </>
  );
}
export default AboutUs;
