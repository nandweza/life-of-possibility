import { Link } from "react-router-dom";
import studentReading from "../assets/lady-studying.jpg";
import GuideLayout from "./GuideLayout.jsx";

const values = [
  {
    title: "Community matters",
    description: "Support networks help people find connection and thrive.",
  },
  {
    title: "Education opens doors",
    description: "Learning creates opportunities and builds confidence.",
  },
  {
    title: "Growth takes time",
    description: "Every step forward matters, even when progress feels slow.",
  },
];

export default function AboutPage(props) {
  return (
    <GuideLayout {...props}>
      <main className="content-main">
        <section className="content-hero about-hero" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">ABOUT HOW TO AMERICA</p>
            <h1 id="about-title">Turning ambition into opportunity</h1>
            <p>
              How to America is a practical guide for people building a new life
              in the United States. Starting over can feel confusing and
              overwhelming; our goal is to make useful information easier to
              find and understand.
            </p>
            <p>
              We bring together guidance on education, everyday life, and
              opportunities to help people take their next steps with
              confidence.
            </p>
          </div>
          <img src={studentReading} alt="A student reading in a library" />
        </section>

        <section className="content-section" aria-labelledby="mission-title">
          <p className="eyebrow">OUR PURPOSE</p>
          <h2 id="mission-title">Our mission</h2>
          <p className="content-copy">
            We provide practical information and encouragement for newcomers
            pursuing education, opportunity, and stability. We aim to make
            complex systems easier to navigate and point visitors toward
            resources that can support their goals.
          </p>
        </section>

        <section className="content-section content-section-muted" aria-labelledby="values-title">
          <p className="eyebrow">WHAT GUIDES US</p>
          <h2 id="values-title">What we believe</h2>
          <div className="content-card-grid">
            {values.map(({ title, description }) => (
              <article className="content-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section content-cta">
          <div>
            <h2>Start exploring opportunities</h2>
            <p>
              Choose a topic and find a manageable next step for your journey.
            </p>
          </div>
          <Link className="continue-link" to="/start">
            Explore your next steps <span aria-hidden="true">&#8594;</span>
          </Link>
        </section>
      </main>
    </GuideLayout>
  );
}
