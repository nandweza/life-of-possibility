import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout.jsx";

const scholarshipTypes = [
  {
    title: "Merit-based",
    description: "Recognize academic achievement, skills, or talents.",
  },
  {
    title: "Need-based",
    description: "Offer financial support based on a student's circumstances.",
  },
  {
    title: "Community and organization",
    description: "Are offered by nonprofits, local organizations, and community groups.",
  },
  {
    title: "Field-specific",
    description: "Support students pursuing particular careers or programs.",
  },
];

const scholarshipResources = [
  {
    name: "Federal Student Aid",
    description:
      "Official U.S. government information about federal student aid, grants, and loans.",
    href: "https://studentaid.gov",
  },
  {
    name: "Scholarships.com",
    description:
      "Search scholarship opportunities based on your background, interests, and education goals.",
    href: "https://www.scholarships.com",
  },
  {
    name: "Fastweb",
    description:
      "Search for scholarship opportunities that may fit your profile.",
    href: "https://www.fastweb.com",
  },
];

export default function ScholarshipsPage(props) {
  return (
    <GuideLayout {...props}>
      <main className="content-main">
        <section className="guide-intro" aria-labelledby="scholarships-title">
          <p className="eyebrow">FUNDING YOUR EDUCATION</p>
          <h1 id="scholarships-title">Scholarships and financial support</h1>
          <p>
            Paying for education can feel challenging. Start by learning about
            different funding options and checking directly with schools and
            organizations about current requirements.
          </p>
        </section>

        <section className="content-section" aria-labelledby="getting-started-title">
          <p className="eyebrow">A PRACTICAL START</p>
          <h2 id="getting-started-title">How to get started</h2>
          <ol className="scholarship-steps">
            <li>
              <strong>Search for opportunities.</strong>
              <p>
                Look by field of study, location, or other eligibility criteria
                using trusted websites and local resources.
              </p>
            </li>
            <li>
              <strong>Prepare your materials.</strong>
              <p>
                Gather items such as transcripts, personal statements, and
                recommendation letters when they are required.
              </p>
            </li>
            <li>
              <strong>Apply and track deadlines.</strong>
              <p>
                Keep a list of applications, requirements, and deadlines.
                Applying to more than one opportunity may give you more options.
              </p>
            </li>
          </ol>
        </section>

        <section className="content-section content-section-muted" aria-labelledby="types-title">
          <p className="eyebrow">KNOW YOUR OPTIONS</p>
          <h2 id="types-title">Types of scholarships</h2>
          <div className="content-card-grid">
            {scholarshipTypes.map(({ title, description }) => (
              <article className="content-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="eligibility-title">
          <p className="eyebrow">CHECK THE DETAILS</p>
          <h2 id="eligibility-title">Opportunities for newcomers</h2>
          <p className="content-copy">
            Some scholarships and programs are intended for immigrants,
            refugees, or first-generation students. Community organizations,
            nonprofits, schools, and local programs may be able to point you to
            opportunities.
          </p>
          <p className="content-caution">
            Eligibility rules vary. Always confirm current requirements,
            deadlines, and whether an opportunity is appropriate for your
            situation with the organization offering it.
          </p>
        </section>

        <section className="content-section content-section-muted" aria-labelledby="resources-title">
          <p className="eyebrow">TRUSTED STARTING POINTS</p>
          <h2 id="resources-title">Find scholarship opportunities</h2>
          <div className="content-card-grid">
            {scholarshipResources.map(({ name, description, href }) => (
              <article className="content-card" key={name}>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={href} target="_blank" rel="noreferrer">
                  Visit {name} <span aria-hidden="true">&#8599;</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section content-cta">
          <div>
            <h2>Take the next step</h2>
            <p>Explore education resources or ask us a question.</p>
          </div>
          <div className="content-cta-links">
            <Link className="continue-link" to="/education">
              Explore education <span aria-hidden="true">&#8594;</span>
            </Link>
            <Link className="continue-link" to="/contact">
              Contact us <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </section>
      </main>
    </GuideLayout>
  );
}
