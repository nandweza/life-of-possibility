import { Link } from "react-router-dom";

const navigation = [
  { to: "/start", label: "Start here" },
  { to: "/education", label: "Education" },
  { to: "/living-well", label: "Living well" },
  { to: "/scholarships", label: "Scholarships" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function GuideLayout({
  children,
  languages,
  selectedLanguage,
  onLanguageSelect,
}) {
  return (
    <div className="guide-page">
      <header className="guide-header">
        <Link className="wordmark" to="/start" aria-label="How to America start page">
          <span>HOW TO</span> AMERICA
        </Link>
        <nav className="guide-nav" aria-label="Main navigation">
          {navigation.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>
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
      <p className="language-notice" role="status">
        {selectedLanguage === "en"
          ? "Page content is currently available in English."
          : "Your language preference is saved. Page content is currently available in English."}
      </p>
      {children}
      <footer className="guide-footer">
        <span>Useful information. One step at a time.</span>
        <Link to="/">Change language</Link>
      </footer>
    </div>
  );
}
