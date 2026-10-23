import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout.jsx";

const topics = [
  {
    title: "Education",
    description: "Explore schools, adult learning, and education resources.",
    to: "/education",
    label: "Explore education",
  },
  {
    title: "Scholarships",
    description: "Find starting points for education funding.",
    to: "/scholarships",
    label: "View scholarships",
  },
  {
    title: "Living well",
    description: "Review practical information for everyday life.",
    to: "/living-well",
    label: "Explore living well",
  },
];

export default function ContactPage(props) {
  return (
    <GuideLayout {...props}>
      <main className="content-main">
        <section className="guide-intro" aria-labelledby="contact-title">
          <p className="eyebrow">WE’RE HERE TO HELP</p>
          <h1 id="contact-title">Get in touch</h1>
          <p>
            Have a question or want to connect? Email us and tell us how we can
            help you find the right information.
          </p>
        </section>

        <section className="contact-panel" aria-label="Contact information">
          <div>
            <h2>Email</h2>
            <a href="mailto:contact@alifeofpossibility.org">
              contact@alifeofpossibility.org
            </a>
          </div>
          <div>
            <h2>Response time</h2>
            <p>We usually respond within 24–48 hours.</p>
          </div>
          <p className="contact-note">
            Email opens in your email application. This website does not store
            or submit contact messages.
          </p>
        </section>

        <section className="content-section" aria-labelledby="contact-topics-title">
          <p className="eyebrow">FIND INFORMATION</p>
          <h2 id="contact-topics-title">Looking for something specific?</h2>
          <div className="content-card-grid">
            {topics.map(({ title, description, to, label }) => (
              <article className="content-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="step-resource-link" to={to}>
                  {label} <span aria-hidden="true">&#8594;</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </GuideLayout>
  );
}
