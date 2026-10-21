import { useState } from "react";
import studentReading from "../assets/lady-studying.jpg";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "fr", label: "French", native: "Français" },
  { code: "sw", label: "Swahili", native: "Kiswahili" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "rn", label: "Kirundi", native: "Ikirundi" },
  { code: "rw", label: "Kinyarwanda", native: "Ikinyarwanda" },
  { code: "uk", label: "Ukrainian", native: "Українська" },
  { code: "am", label: "Amharic", native: "አማርኛ" },
  { code: "bs", label: "Bosnian", native: "Bosanski" },
  { code: "pt", label: "Portuguese", native: "Português" },
  { code: "so", label: "Somali", native: "Soomaali" },
];

const languageStorageKey = "how-to-america-language";

function getSavedLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    return languages.some(({ code }) => code === savedLanguage)
      ? savedLanguage
      : "en";
  } catch {
    return "en";
  }
}

function saveLanguage(languageCode) {
  try {
    window.localStorage.setItem(languageStorageKey, languageCode);
  } catch {
    return;
  }
}

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(getSavedLanguage);
  const selectedLanguageName = languages.find(
    ({ code }) => code === selectedLanguage,
  )?.label;

  function handleLanguageSelect(languageCode) {
    setSelectedLanguage(languageCode);
    saveLanguage(languageCode);
  }

  return (
    <div className="welcome-page">
      <header className="site-header">
        <a className="wordmark" href="./" aria-label="How to America home">
          <span>HOW TO</span> AMERICA
        </a>
        <span className="header-note">A guide to your next step</span>
      </header>

      <main className="welcome-layout">
        <section className="welcome-content" aria-labelledby="welcome-title">
          <p className="eyebrow">A NEW PLACE. A CLEARER FIRST STEP.</p>
          <h1 id="welcome-title">
            Make your next step
            <span> a little clearer.</span>
          </h1>
          <p className="welcome-intro">
            Find practical guidance for settling in, learning, working, and
            building a life in the United States.
          </p>

          <div className="language-picker">
            <div className="picker-heading">
              <div>
                <h2 id="language-heading">Choose your language</h2>
                <p id="language-help">Select the language you prefer.</p>
              </div>
              <span className="language-count">12 languages</span>
            </div>

            <div
              className="language-grid"
              role="group"
              aria-labelledby="language-heading"
              aria-describedby="language-help language-status"
            >
              {languages.map(({ code, label, native }) => (
                <button
                  className={`language-option${selectedLanguage === code ? " is-selected" : ""}`}
                  type="button"
                  aria-pressed={selectedLanguage === code}
                  key={code}
                  onClick={() => handleLanguageSelect(code)}
                >
                  <span>{native}</span>
                  {native !== label && <span className="language-label">{label}</span>}
                </button>
              ))}
            </div>

            <p className="language-status" id="language-status" aria-live="polite">
              {selectedLanguage === "en"
                ? "The current site is available in English."
                : `${selectedLanguageName} is saved as your preference. Site pages are currently in English.`}
            </p>

            <a className="continue-link" href="./home.html">
              {selectedLanguage === "en"
                ? "Explore the guide"
                : "Continue in English for now"}
              <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </section>

        <figure className="welcome-image">
          <img
            src={studentReading}
            alt="A student reading in a library"
            fetchPriority="high"
          />
          <figcaption>
            <span className="image-caption-mark" aria-hidden="true">
              01
            </span>
            Start wherever you are.
          </figcaption>
        </figure>
      </main>

      <footer className="site-footer">
        <span>HOW TO AMERICA</span>
        <span>Useful information. One step at a time.</span>
      </footer>
    </div>
  );
}