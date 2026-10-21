import { useState } from "react";
import { Link } from "react-router-dom";

const pathways = {
  education: {
    title: "Explore education",
    description: "Find a place to learn, continue school, or earn a credential.",
    steps: [
      {
        text: "Explore education options and adult learning.",
        href: "./education.html",
        label: "View education resources",
      },
      {
        text: "Look for schools and learning resources in your state.",
        href: "./education.html",
        label: "Browse state resources",
      },
      {
        text: "Check funding opportunities for your next step.",
        href: "./scholarships.html",
        label: "Explore scholarships",
      },
    ],
  },
  work: {
    title: "Build everyday stability",
    description: "Explore practical topics that support day-to-day life.",
    steps: [
      {
        text: "Choose one daily-life topic you want to work on first.",
      },
      {
        text: "Review the current living-well information and its resources.",
        href: "./livingwell.html",
        label: "Explore living-well resources",
      },
      {
        text: "Save questions you want to ask a local organization or service.",
      },
    ],
  },
  funding: {
    title: "Look for education funding",
    description: "Take a first look at scholarships and education support.",
    steps: [
      {
        text: "Decide what education or training goal you are exploring.",
      },
      {
        text: "Review scholarship information and eligibility details.",
        href: "./scholarships.html",
        label: "View scholarship resources",
      },
      {
        text: "Confirm deadlines and requirements with the organization offering aid.",
      },
    ],
  },
};

const progressStorageKey = "how-to-america-pathway-progress";

function readProgress() {
  try {
    return JSON.parse(window.localStorage.getItem(progressStorageKey) || "{}");
  } catch {
    return {};
  }
}

export default function HomePage({
  languages,
  selectedLanguage,
  onLanguageSelect,
}) {
  const [activePathway, setActivePathway] = useState("education");
  const [progress, setProgress] = useState(readProgress);
  const pathway = pathways[activePathway];
  const checkedSteps = progress[activePathway] || [];
  const completedCount = checkedSteps.filter(Boolean).length;

  function updateStep(index, checked) {
    const nextProgress = {
      ...progress,
      [activePathway]: pathway.steps.map((_, stepIndex) =>
        stepIndex === index ? checked : Boolean(checkedSteps[stepIndex]),
      ),
    };

    setProgress(nextProgress);
    try {
      window.localStorage.setItem(
        progressStorageKey,
        JSON.stringify(nextProgress),
      );
    } catch {
      return;
    }
  }

  function clearProgress() {
    const nextProgress = { ...progress, [activePathway]: [] };
    setProgress(nextProgress);
    try {
      window.localStorage.setItem(
        progressStorageKey,
        JSON.stringify(nextProgress),
      );
    } catch {
      return;
    }
  }

  return (
    <div className="guide-page">
      <header className="guide-header">
        <Link className="wordmark" to="/" aria-label="How to America language selection">
          <span>HOW TO</span> AMERICA
        </Link>
        <label className="guide-language-control">
          <span>Preferred language</span>
          <select
            value={selectedLanguage}
            onChange={(event) => onLanguageSelect(event.target.value)}
          >
            {languages.map(({ code, label, native }) => (
              <option value={code} key={code}>
                {native === label ? label : `${label} (${native})`}
              </option>
            ))}
          </select>
        </label>
      </header>

      <main className="guide-main">
        <section className="guide-intro" aria-labelledby="guide-title">
          <p className="eyebrow">START HERE</p>
          <h1 id="guide-title">What would you like to work on?</h1>
          <p>
            Choose a topic to see a few manageable next steps. You can change
            your choice at any time.
          </p>
        </section>

        <section className="pathway-section" aria-label="Choose a topic">
          <div className="pathway-choices">
            {Object.entries(pathways).map(([key, item], index) => (
              <button
                className={`pathway-choice${activePathway === key ? " is-active" : ""}`}
                type="button"
                aria-pressed={activePathway === key}
                key={key}
                onClick={() => setActivePathway(key)}
              >
                <span className="pathway-number">0{index + 1}</span>
                <span className="pathway-choice-title">{item.title}</span>
                <span className="pathway-choice-description">
                  {item.description}
                </span>
              </button>
            ))}
          </div>

          <div className="pathway-detail" aria-live="polite">
            <div className="pathway-detail-header">
              <div>
                <p className="eyebrow">YOUR NEXT STEPS</p>
                <h2>{pathway.title}</h2>
                <p>{pathway.description}</p>
              </div>
              <p className="progress-count" aria-live="polite">
                {completedCount} of {pathway.steps.length} complete
              </p>
            </div>

            <ol className="step-list">
              {pathway.steps.map((step, index) => (
                <li className="guide-step" key={`${activePathway}-${index}`}>
                  <label className="step-check">
                    <input
                      type="checkbox"
                      checked={Boolean(checkedSteps[index])}
                      onChange={(event) => updateStep(index, event.target.checked)}
                    />
                    <span>{step.text}</span>
                  </label>
                  {step.href && (
                    <a href={step.href} className="step-resource-link">
                      {step.label}
                      <span aria-hidden="true">&#8599;</span>
                    </a>
                  )}
                </li>
              ))}
            </ol>

            <div className="pathway-footer">
              <p>Progress is saved only in this browser. No account is needed.</p>
              <button type="button" className="clear-progress" onClick={clearProgress}>
                Clear this checklist
              </button>
            </div>
          </div>
        </section>

        <p className="language-notice" role="status">
          {selectedLanguage === "en"
            ? "This guide is currently available in English."
            : "Your language preference is saved. This guide is currently available in English."}
        </p>
      </main>

      <footer className="guide-footer">
        <span>Useful information. One step at a time.</span>
        <Link to="/">Change language</Link>
      </footer>
    </div>
  );
}