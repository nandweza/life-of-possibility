import { useState } from "react";
import { Link } from "react-router-dom";
import { educationData } from "../Js/educationData.js";

const nationalResources = [
  {
    ...educationData.default.ged,
    category: "GED and high school",
    state: "National",
    description: "Learn about the GED test and preparation options.",
  },
  {
    ...educationData.default.collegeFinder,
    category: "Find a college",
    state: "National",
    description: "Search U.S. colleges using the National Center for Education Statistics.",
  },
  {
    ...educationData.default.scholarships,
    category: "Financial aid",
    state: "National",
    description: "Explore federal student aid information and application guidance.",
  },
];

const stateLabels = {
  california: "California",
  idaho: "Idaho",
};

const stateResources = Object.entries(stateLabels).flatMap(([stateKey, stateName]) => {
  const stateData = educationData[stateKey];
  const resources = [
    ...(stateData.resources || []).map((resource) => ({
      ...resource,
      category: "Adult education",
    })),
    ...(stateData.communityColleges || []).map((resource) => ({
      ...resource,
      category: "Community college",
    })),
    ...(stateData.universities || []).map((resource) => ({
      ...resource,
      category: "University",
    })),
  ];

  return resources
    .filter((resource) => resource.link && resource.link !== "#")
    .map((resource) => ({
      ...resource,
      state: stateName,
      description: `${resource.category} information from ${resource.name}. Check the institution's website for current programs and requirements.`,
    }));
});

const resources = [...nationalResources, ...stateResources];
const categories = [...new Set(resources.map(({ category }) => category))].sort();

export default function EducationPage({
  languages,
  selectedLanguage,
  onLanguageSelect,
}) {
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All locations");
  const [selectedCategory, setSelectedCategory] = useState("All topics");

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredResources = resources.filter((resource) => {
    const matchesQuery =
      !normalizedQuery ||
      `${resource.name} ${resource.description} ${resource.state} ${resource.category}`
        .toLocaleLowerCase()
        .includes(normalizedQuery);
    const matchesState =
      selectedState === "All locations" || resource.state === selectedState;
    const matchesCategory =
      selectedCategory === "All topics" || resource.category === selectedCategory;

    return matchesQuery && matchesState && matchesCategory;
  });

  function clearFilters() {
    setQuery("");
    setSelectedState("All locations");
    setSelectedCategory("All topics");
  }

  return (
    <div className="guide-page education-page">
      <header className="guide-header">
        <Link className="wordmark" to="/start" aria-label="How to America start page">
          <span>HOW TO</span> AMERICA
        </Link>
        <div className="education-header-actions">
          <Link className="education-back-link" to="/start">
            Back to your next steps
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
        </div>
      </header>

      <main className="education-main">
        <section className="guide-intro" aria-labelledby="education-title">
          <p className="eyebrow">LEARNING AND TRAINING</p>
          <h1 id="education-title">Explore education resources</h1>
          <p>
            Search national education resources and a growing directory of
            colleges and programs in selected states.
          </p>
        </section>

        <section className="resource-directory" aria-labelledby="directory-title">
          <div className="directory-heading">
            <div>
              <h2 id="directory-title">Find a resource</h2>
              <p>Choose a location or topic, or search by name.</p>
            </div>
            <p className="result-count" aria-live="polite">
              {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
            </p>
          </div>

          <div className="directory-filters">
            <label className="resource-search">
              <span>Search resources</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try a school or topic"
              />
            </label>
            <label>
              <span>Location</span>
              <select
                value={selectedState}
                onChange={(event) => setSelectedState(event.target.value)}
              >
                <option>All locations</option>
                <option>National</option>
                <option>California</option>
                <option>Idaho</option>
              </select>
            </label>
            <label>
              <span>Topic</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                <option>All topics</option>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>
          </div>

          {filteredResources.length > 0 ? (
            <ul className="resource-results" aria-label="Education resources">
              {filteredResources.map((resource) => (
                <li className="resource-result" key={`${resource.state}-${resource.name}`}>
                  <div className="resource-result-meta">
                    <span>{resource.category}</span>
                    <span>{resource.state}</span>
                  </div>
                  <h3>
                    <a href={resource.link} target="_blank" rel="noreferrer">
                      {resource.name}
                      <span className="external-indicator" aria-hidden="true">
                        &#8599;
                      </span>
                    </a>
                  </h3>
                  <p>{resource.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-results" role="status">
              <h3>No matching resources</h3>
              <p>Try another search or clear one of the filters.</p>
              <button type="button" onClick={clearFilters}>
                Clear search and filters
              </button>
            </div>
          )}

          <p className="directory-note">
            Resource availability, programs, costs, and eligibility can change.
            Confirm current details directly with each organization. State-level
            listings are currently limited to California and Idaho.
          </p>
        </section>

        <p className="language-notice" role="status">
          {selectedLanguage === "en"
            ? "Education information is currently available in English."
            : "Your language preference is saved. Education information is currently available in English."}
        </p>
      </main>

      <footer className="guide-footer">
        <span>Useful information. One step at a time.</span>
        <Link to="/start">Return to your checklist</Link>
      </footer>
    </div>
  );
}