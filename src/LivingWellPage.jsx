import { Link } from "react-router-dom";
import community from "../assets/community.jpg";
import flag from "../assets/person-with-american-flag.jpg";
import GuideLayout from "./GuideLayout.jsx";

const stabilitySteps = [
  {
    title: "Learn the system",
    description: "Understand how local services, workplaces, and daily life operate.",
  },
  {
    title: "Stay connected",
    description: "Build relationships in your community and ask for support when needed.",
  },
  {
    title: "Stay focused",
    description: "Set manageable goals for education, work, and personal growth.",
  },
];

const legalResources = [
  {
    name: "ImmigrationLawHelp.org",
    href: "https://www.immigrationlawhelp.org/",
    description:
      "Search for free or low-cost immigration legal services by state and county.",
  },
  {
    name: "ACLU: Immigrants’ rights",
    href: "https://www.aclu.org/know-your-rights/immigrants-rights",
    description: "Review know-your-rights information for immigrants.",
  },
  {
    name: "Global Refuge Legal Services",
    href: "https://www.globalrefuge.org/what-we-do/immigration-legal-services/",
    description:
      "Learn about legal services for humanitarian relief, work permits, and naturalization.",
  },
];

const workResources = [
  {
    title: "Sample resume",
    href: "https://docs.google.com/document/d/1F4P1oQVVB3rMK-e_As4lixg15v_HsA76QGt8KocDrqw/edit?usp=sharing",
  },
  {
    title: "Interview tips",
    href: "https://docs.google.com/document/d/1FUnLvKn5PPzUMbf9QJHxrvilxxiNQRvXRXCWdu4s6aM/edit?usp=sharing",
  },
  {
    title: "Sample budget",
    href: "https://docs.google.com/document/d/1CTTMYMG11tqLIzRZKuMgKkI5V34azU55V0aIk-n2Sp4/edit?usp=sharing",
  },
  {
    title: "Money tips",
    href: "https://docs.google.com/document/d/1pEp6y0NcaOQDsSq-h_2-5W8UKICEQ3PnfxSt_FPhsEI/edit?usp=sharing",
  },
];

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> &#8599;</span>
    </a>
  );
}

export default function LivingWellPage(props) {
  return (
    <GuideLayout {...props}>
      <main className="content-main">
        <section className="guide-intro" aria-labelledby="living-title">
          <p className="eyebrow">EVERYDAY LIFE</p>
          <h1 id="living-title">Living well</h1>
          <p>
            Starting a new life in a different country brings challenges and
            opportunities. Explore practical ideas for building a safe, stable,
            and meaningful future. Needs and local rules vary, so seek
            location-specific guidance when you need it.
          </p>
        </section>

        <section className="content-section" aria-labelledby="stability-title">
          <p className="eyebrow">START WITH A FEW BASICS</p>
          <h2 id="stability-title">Build a stable life</h2>
          <div className="content-card-grid">
            {stabilitySteps.map(({ title, description }) => (
              <article className="content-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section content-section-muted" aria-labelledby="laws-title">
          <p className="eyebrow">INFORMATION AND SUPPORT</p>
          <h2 id="laws-title">Understand laws and responsibilities</h2>
          <div className="content-card-grid">
            <article className="content-card">
              <h3>Important things to know</h3>
              <ul>
                <li>Follow local, state, and federal laws.</li>
                <li>Understand traffic rules if you drive.</li>
                <li>Follow workplace and public rules.</li>
                <li>Ask a trusted, qualified source if you are unsure about a law.</li>
              </ul>
              <p className="content-caution">
                This general information is not legal advice. Immigration and
                other legal situations are individual; contact a qualified
                legal provider for guidance.
              </p>
            </article>
            <article className="content-card">
              <h3>Legal information and services</h3>
              <ul className="resource-link-list">
                {legalResources.map(({ name, href, description }) => (
                  <li key={name}>
                    <ExternalLink href={href}>{name}</ExternalLink>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section" aria-labelledby="choices-title">
          <p className="eyebrow">TAKE CARE OF YOURSELF</p>
          <h2 id="choices-title">Make safe and thoughtful choices</h2>
          <div className="content-card-grid">
            <article className="content-card">
              <h3>Pause and get information</h3>
              <p>Take time to understand a situation before making a decision.</p>
            </article>
            <article className="content-card">
              <h3>Ask for help</h3>
              <p>
                If you feel unsure or pressured, seek support from someone you
                trust or a relevant community organization.
              </p>
            </article>
            <article className="content-card">
              <h3>Stay connected</h3>
              <p>
                Community centers, nonprofits, cultural organizations, and
                support groups may help you find local services.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section content-section-muted" aria-labelledby="work-title">
          <p className="eyebrow">WORK AND FINANCES</p>
          <h2 id="work-title">Build financial stability</h2>
          <div className="content-card-grid">
            <article className="content-card">
              <h3>Getting and keeping a job</h3>
              <ul>
                <li>Create a clear resume and prepare for interviews.</li>
                <li>Apply to opportunities that fit your goals.</li>
                <li>Be reliable and communicate respectfully at work.</li>
              </ul>
              <ul className="resource-link-list">
                {workResources.slice(0, 2).map(({ title, href }) => (
                  <li key={title}>
                    <ExternalLink href={href}>{title}</ExternalLink>
                  </li>
                ))}
              </ul>
            </article>
            <article className="content-card">
              <h3>Managing money</h3>
              <ul>
                <li>Make a basic budget for income and expenses.</li>
                <li>Save when you can and understand borrowing costs.</li>
                <li>Use trusted sources when making financial decisions.</li>
              </ul>
              <ul className="resource-link-list">
                {workResources.slice(2).map(({ title, href }) => (
                  <li key={title}>
                    <ExternalLink href={href}>{title}</ExternalLink>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section
          className="content-section everyday-culture"
          aria-labelledby="culture-title"
        >
          <div className="everyday-culture-intro">
            <div>
              <p className="eyebrow">EVERYDAY CULTURE</p>
              <h2 id="culture-title">Communicating and connecting</h2>
              <p>
                There is no single way people in the United States talk,
                socialize, or behave. Customs vary by person, region, family,
                workplace, and community. These examples describe things you
                may encounter—not rules you have to follow.
              </p>
            </div>
            <figure>
              <img
                src={community}
                alt="People spending time together in a community"
                loading="lazy"
              />
              <figcaption>
                Joining a community activity can be one way to meet people.
              </figcaption>
            </figure>
          </div>

          <div className="culture-examples">
            <article className="content-card">
              <h3>Greetings and small talk</h3>
              <p>
                A brief “Hi, how are you?” is often a friendly greeting. People
                may expect a short answer, such as “Good, thanks. How are you?”
                rather than a detailed update.
              </p>
              <p className="culture-example">
                <strong>Try:</strong> “Hi, I’m [name]. Nice to meet you.”
              </p>
            </article>
            <article className="content-card">
              <h3>Conversation and listening</h3>
              <p>
                In some settings, people take turns speaking and may use
                first names. If you are unsure how formal to be, you can start
                politely and follow the other person’s lead.
              </p>
              <p className="culture-example">
                <strong>Try:</strong> “What name would you like me to use?”
              </p>
            </article>
            <article className="content-card">
              <h3>Invitations and plans</h3>
              <p>
                Invitations may include a time and place. It is usually helpful
                to reply, even if you cannot attend. For appointments or work,
                contact the person if you may be late or need to reschedule.
              </p>
              <p className="culture-example">
                <strong>Try:</strong> “Thank you for inviting me. What time
                should I arrive?”
              </p>
            </article>
            <article className="content-card">
              <h3>Personal space and boundaries</h3>
              <p>
                Preferences about touch, hugs, and personal space differ. A
                smile or verbal greeting is fine; asking before a hug or other
                touch can help everyone feel comfortable.
              </p>
              <p className="culture-example">
                <strong>Try:</strong> “Would you be comfortable with a hug?”
              </p>
            </article>
          </div>
          <p className="culture-note">
            You can ask questions and keep the customs that matter to you.
            Mutual respect goes both ways, and it is okay to set boundaries or
            ask someone to explain an unfamiliar expectation.
          </p>
        </section>

        <section className="content-section family-section" aria-labelledby="family-title">
          <div>
            <p className="eyebrow">FAMILY AND COMMUNITY</p>
            <h2 id="family-title">Find support as you build your future</h2>
            <p>
              Communicate openly, share responsibilities where possible, and
              make time for both work and family. Connecting with local groups
              can provide practical guidance and a sense of belonging.
            </p>
          </div>
          <img src={flag} alt="A person holding an American flag" />
          <img src={community} alt="People gathered together in their community" />
        </section>

        <section className="content-section content-cta">
          <div>
            <h2>Choose your next step</h2>
            <p>Explore education resources or find scholarship information.</p>
          </div>
          <div className="content-cta-links">
            <Link className="continue-link" to="/education">
              Education <span aria-hidden="true">&#8594;</span>
            </Link>
            <Link className="continue-link" to="/scholarships">
              Scholarships <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </section>
      </main>
    </GuideLayout>
  );
}
