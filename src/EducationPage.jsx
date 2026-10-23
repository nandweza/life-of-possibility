import { useState } from "react";
import { educationData } from "../Js/educationData.js";
import GuideLayout from "./GuideLayout.jsx";

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

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

const educationLabels = {
  "no-diploma": "I have not completed high school or an equivalent yet",
  "high-school": "High school diploma or equivalent",
  "some-college": "Some college or training",
  associate: "Associate degree",
  bachelor: "Bachelor's degree",
  graduate: "Graduate or professional degree",
  trade: "Trade certificate, license, or apprenticeship",
};

const experienceLabels = {
  new: "I am new to this field",
  related: "I have experience in a related field",
  experienced: "I already work in this career",
  international: "I have education or experience from another country",
};

const timelineLabels = {
  soon: "As soon as possible",
  year: "Within 6–12 months",
  longer: "I can take more time to prepare",
};

const priorityLabels = {
  requirements: "Understanding requirements",
  training: "Finding training",
  cost: "Paying for training",
  credentials: "Using education or experience from another country",
  experience: "Getting relevant experience",
};

function buildCareerSteps(plan) {
  const { career, state, education, experience, timeline, priority } = plan;
  const stateText = state
    ? `in ${state}`
    : "in the state where you plan to work";
  const educationText = educationLabels[education];

  const startingPoint = {
    "no-diploma":
      "Check whether a high-school diploma or equivalent is required. If it is, include adult education or an equivalency program in your plan before selecting further training.",
    "high-school":
      "Use your high-school diploma as a starting point. Compare entry-level roles, certificates, and degree programs to see which matches the role you want.",
    "some-college":
      "Gather transcripts and course descriptions. Ask schools whether prior credits can transfer before paying for another program.",
    associate:
      "Compare your associate degree with the role's stated requirements. Ask programs about transfer credit or bridge options before starting over.",
    bachelor:
      "Check whether your bachelor's degree meets education requirements or whether a focused certificate, graduate program, or supervised practice is needed.",
    graduate:
      "Compare your graduate or professional education with the role's requirements, and identify any state-specific licensing, examination, or supervised-practice steps.",
    trade:
      "Collect your training records and credentials. Ask employers and the relevant licensing authority whether your certificate or apprenticeship meets local requirements.",
  }[education];

  const experienceText = {
    new: `Since you are new to ${career}, look for genuine entry-level roles, introductory courses, or supervised ways to try the work before committing to a longer program.`,
    related: `List the tasks and skills from your related experience that apply to ${career}. Ask training providers whether they offer credit for prior learning or a bridge route.`,
    experienced: `Ask about advancement routes for ${career}, including higher-level credentials, specialty areas, and whether your current experience can count toward requirements.`,
    international: `Gather diplomas, transcripts, employment records, and credential details from your previous country. Ask the relevant U.S. school or licensing authority what evaluation or translation it accepts before ordering one.`,
  }[experience];

  const timelineText = {
    soon: "For a faster first step, compare immediately available entry roles and short, recognized training options. Verify that a quick course actually meets employer or licensing requirements before enrolling.",
    year: "For a 6–12 month target, work backward from application dates and prerequisites. Check whether the training and any required examinations can realistically fit this schedule.",
    longer:
      "With a longer preparation timeline, compare multiple routes, prerequisites, costs, and opportunities to gain experience while studying.",
  }[timeline];

  const priorityAction = {
    requirements: `First, confirm the exact job title and requirements for ${career}; similar titles can have different duties or qualifications.`,
    training: `First, compare at least two training routes for ${career}, including prerequisites, length, and whether employers recognize the credential.`,
    cost: `First, estimate the full cost of preparing for ${career}, including tuition, exam fees, materials, and time away from work; then ask schools about aid and payment options.`,
    credentials: `First, contact the school, employer, or licensing board responsible for ${career} ${stateText} and ask how it evaluates international education and experience.`,
    experience: `First, identify one low-risk way to gain relevant experience for ${career}, such as an informational interview, supervised practice, apprenticeship, or entry-level role.`,
  }[priority];

  const encodedCareer = encodeURIComponent(career);
  const priorityResource = {
    requirements: {
      label: "Review occupation details and requirements",
      href: `https://www.bls.gov/ooh/search.htm?query=${encodedCareer}`,
    },
    training: {
      label: "Compare training programs",
      href: "https://www.careeronestop.org/Toolkit/Training/find-training.aspx",
    },
    cost: {
      label: "Explore federal student aid",
      href: "https://studentaid.gov/",
    },
    credentials: {
      label: "Research state license requirements",
      href: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx",
    },
    experience: {
      label: "Find registered apprenticeships",
      href: "https://www.apprenticeship.gov/career-seekers",
    },
  }[priority];

  return [
    {
      title: "Narrow down the exact role",
      description: `Search for “${career}” and compare job titles, day-to-day tasks, work settings, and related occupations. Save one or two exact titles to research; requirements can differ even within a field.`,
      resource: "Compare O*NET occupation profiles",
      href: `https://www.onetonline.org/find/quick?s=${encodedCareer}`,
    },
    {
      title: "Map your starting point",
      description: `You said your current education is: ${educationText}. ${startingPoint}`,
      resource: "Review typical U.S. occupation requirements",
      href: `https://www.bls.gov/ooh/search.htm?query=${encodedCareer}`,
    },
    {
      title: "Connect prior experience to the role",
      description: `${experienceText} ${timelineText}`,
      resource: "Explore registered apprenticeships",
      href: "https://www.apprenticeship.gov/career-seekers",
    },
    {
      title: "Verify local requirements",
      description: `Check whether ${career} requires a license, certification, exam, background check, or supervised hours ${stateText}. Ask the official state licensing board or employer; not every career requires a license.`,
      resource: "Search occupational license requirements",
      href: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx",
    },
    {
      title: "Choose a training route",
      description: `Compare programs for ${career} by entry requirements, accreditation or recognition, schedule, completion time, and outcomes. Confirm directly with the provider that the program supports your intended role ${stateText}.`,
      resource: "Find education and training",
      href: "https://www.careeronestop.org/Toolkit/Training/find-training.aspx",
    },
    {
      title: "Plan costs and funding",
      description: `Estimate tuition, fees, books, transportation, and exam costs for your ${career} plan. Ask each school about grants, scholarships, payment plans, and aid eligibility before committing.`,
      resource: "Explore federal student aid",
      href: "https://studentaid.gov/",
    },
    {
      title: "Take your first tailored action",
      description: priorityAction,
      resource: priorityResource.label,
      href: priorityResource.href,
    },
  ];
}

export default function EducationPage({
  languages,
  selectedLanguage,
  onLanguageSelect,
}) {
  const [careerInput, setCareerInput] = useState("");
  const [careerPlan, setCareerPlan] = useState(null);
  const [careerState, setCareerState] = useState("");
  const [careerEducation, setCareerEducation] = useState("");
  const [careerExperience, setCareerExperience] = useState("");
  const [careerTimeline, setCareerTimeline] = useState("");
  const [careerPriority, setCareerPriority] = useState("");
  const [completedCareerSteps, setCompletedCareerSteps] = useState([]);
  const [careerError, setCareerError] = useState("");
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

  function handleCareerSubmit(event) {
    event.preventDefault();
    const normalizedCareer = careerInput.trim();

    if (!normalizedCareer) {
      setCareerError("Enter a career or job title to build a roadmap.");
      setCareerPlan(null);
      return;
    }

    setCareerError("");
    setCareerPlan({
      career: normalizedCareer,
      state: careerState,
      education: careerEducation,
      experience: careerExperience,
      timeline: careerTimeline,
      priority: careerPriority,
    });
    setCompletedCareerSteps([]);
  }

  return (
    <GuideLayout
      languages={languages}
      selectedLanguage={selectedLanguage}
      onLanguageSelect={onLanguageSelect}
    >
      <main className="education-main">
        <section className="guide-intro" aria-labelledby="education-title">
          <p className="eyebrow">LEARNING AND TRAINING</p>
          <h1 id="education-title">Explore education resources</h1>
          <p>
            Search national education resources and a growing directory of
            colleges and programs in selected states.
          </p>
        </section>

        <section className="career-roadmap" aria-labelledby="career-roadmap-title">
          <div className="career-roadmap-heading">
            <div>
              <p className="eyebrow">PLAN YOUR NEXT STEP</p>
              <h2 id="career-roadmap-title">Explore a career path</h2>
              <p>
                Enter a career and tell us about your starting point. Your
                answers shape a practical plan with research links and a
                first-action priority.
              </p>
            </div>
          </div>

          <form className="career-search-form" onSubmit={handleCareerSubmit}>
            <label htmlFor="career-search">Career or job title</label>
            <div className="career-search-controls">
              <input
                id="career-search"
                type="text"
                value={careerInput}
                onChange={(event) => {
                  setCareerInput(event.target.value);
                  setCareerError("");
                  setCareerPlan(null);
                }}
                placeholder="For example, nurse, electrician, or teacher"
                maxLength={100}
                aria-describedby={
                  careerError ? "career-search-error" : "career-search-help"
                }
              />
              <button type="submit">
                {careerPlan ? "Update my roadmap" : "Build my roadmap"}
              </button>
            </div>
            <div className="career-profile-fields">
              <label>
                <span>Where do you plan to work? (optional)</span>
                <select
                  value={careerState}
                  onChange={(event) => setCareerState(event.target.value)}
                >
                  <option value="">I have not chosen a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Your current education</span>
                <select
                  value={careerEducation}
                  onChange={(event) => setCareerEducation(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose your highest completed level
                  </option>
                  {Object.entries(educationLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Your experience in this field</span>
                <select
                  value={careerExperience}
                  onChange={(event) => setCareerExperience(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose the closest match
                  </option>
                  {Object.entries(experienceLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>When would you like to make progress?</span>
                <select
                  value={careerTimeline}
                  onChange={(event) => setCareerTimeline(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose a timeline
                  </option>
                  {Object.entries(timelineLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>What would help you most right now?</span>
                <select
                  value={careerPriority}
                  onChange={(event) => setCareerPriority(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose a priority
                  </option>
                  {Object.entries(priorityLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {careerError ? (
              <p className="career-form-error" id="career-search-error" role="alert">
                {careerError}
              </p>
            ) : (
              <p className="career-form-help" id="career-search-help">
                These answers are used only to build this plan. They stay in
                this browser and your answers and checklist progress are not
                saved.
              </p>
            )}
          </form>

          {careerPlan && (
            <div className="career-roadmap-results" aria-live="polite">
              <h3>
                Your plan for <span>{careerPlan.career}</span>
              </h3>
              <p className="career-roadmap-note">
                Tailored using your answers: {educationLabels[careerPlan.education]},
                {" "}{experienceLabels[careerPlan.experience].toLocaleLowerCase()},
                {" "}{timelineLabels[careerPlan.timeline].toLocaleLowerCase()}
                {careerPlan.state ? `, in ${careerPlan.state}` : ""}. This is a
                planning aid, not a verified list of requirements for this
                occupation. Confirm details with schools, employers, and
                licensing authorities.
              </p>
              <p className="career-progress" aria-live="polite">
                {completedCareerSteps.length} of 7 steps marked complete
              </p>
              <ol className="career-roadmap-steps">
                {buildCareerSteps(careerPlan).map(
                  ({ title, description, resource, href }, index) => (
                    <li className="career-roadmap-step" key={title}>
                      <div className="career-step-main">
                        <label className="career-step-check">
                          <input
                            type="checkbox"
                            checked={completedCareerSteps.includes(index)}
                            onChange={(event) =>
                              setCompletedCareerSteps((current) =>
                                event.target.checked
                                  ? [...current, index]
                                  : current.filter((step) => step !== index),
                              )
                            }
                          />
                          <span className="career-step-number" aria-hidden="true">
                            {index + 1}
                          </span>
                          <span className="career-step-content">
                            <span className="career-step-title">{title}</span>
                            <span className="career-step-description">{description}</span>
                          </span>
                        </label>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="career-step-resource"
                        >
                          {resource}
                          <span aria-hidden="true"> &#8599;</span>
                        </a>
                      </div>
                    </li>
                  ),
                )}
              </ol>
            </div>
          )}
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

      </main>

    </GuideLayout>
  );
}