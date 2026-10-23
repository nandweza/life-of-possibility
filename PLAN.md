# How to America: Project Plan

## Vision

Transform **A Life of Possibility** into **How to America** (working brand name): a practical, trustworthy, interactive guide that helps immigrants, refugees, and other newcomers understand everyday life in the United States and take their next steps with confidence.

The site should make information easy to find, understandable across languages, usable on phones, and clear about where information comes from and when it may vary by location or personal circumstances.

## Goals

- Replace the collection of static HTML pages and DOM-manipulating JavaScript with a maintainable React application.
- Let visitors choose a language at entry and keep that language throughout the entire site, including on later visits.
- Organize guidance into clear topics and step-by-step pathways for settling into life in the United States.
- Help visitors actively find and track relevant next steps through useful, optional interactive tools.
- Help newcomers discover relevant, current events and services in their state from trusted community and public sources.
- Preserve and improve useful existing content, including education, scholarships, living well, and contact information.
- Make content accessible, mobile-friendly, easy to maintain, and transparent about sources and limits.

## Product Principles

- **Practical first:** prioritize actionable steps, checklists, and trusted next destinations over broad inspirational copy.
- **Respectful and inclusive:** serve varied immigration backgrounds without assuming a visitor's status, language, family, or goals.
- **Trustworthy:** show sources, review dates, and relevant state or local context; distinguish general information from legal, medical, or financial advice.
- **Language access:** use reviewed translations for important guidance. Do not depend on automatic browser translation as the site's localization system.
- **Privacy-aware:** do not ask visitors to disclose immigration status or other sensitive details unless a clearly justified feature requires it.
- **Interactive with purpose:** use interactions to help visitors find, understand, and keep track of information, not as decoration or a barrier to reading it.

## Interactive Experience

- Provide guided pathways for common goals, such as finding housing, learning English, getting healthcare, pursuing education, or looking for work. Let visitors choose what applies and show relevant steps and trusted resources.
- Make resource directories searchable and filterable by topic and, where supported, state or location. Keep source links and coverage limitations visible.
- Let visitors enter any career or job title and tailor a practical roadmap using their current education, relevant experience, target state, timeline, and main priority. Include occupation-specific research links and adjustable, checkable next steps for role research, training, licensing, funding, and experience. Clearly distinguish this personalized planning aid from verified occupation-specific requirements.
- Provide an event finder for opportunities such as legal-aid clinics, job fairs, English classes, health services, education workshops, and community events. Let visitors filter by state and useful details such as topic, date, format, cost, and language where available.
- Aggregate event listings from trusted public feeds or APIs and participating organizations; do not indiscriminately scrape websites or imply that every listing is endorsed. Show the source, event date, last-checked time, location or online format, and any stated eligibility requirements. Expire past events and provide a way to report inaccurate listings.
- Offer optional checklists with progress saved on the visitor's device. Do not require an account; explain how to clear saved progress.
- Use accessible expandable FAQs and glossaries for unfamiliar terms, while keeping essential information visible and readable without interaction.
- Provide clear feedback for actions, empty search results, errors, and incomplete translations. Support keyboard and screen-reader interaction.
- Avoid collecting immigration status or other sensitive personal details for personalization. Any location-based experience should let visitors choose a state or enter only the minimum location needed, with a clear option to skip it.

## Proposed Information Architecture

Keep the first release focused and build from the existing site:

- **Home / Start here:** choose a goal or topic and find a short, approachable first step.
- **Getting settled:** essential first steps and links to authoritative services.
- **Education:** explain education pathways, retain the existing state-based resource directory, and help visitors explore a starting roadmap for a career they enter.
- **Work and money:** employment basics, workplace resources, banking, budgeting, and taxes, with appropriate referrals to official sources.
- **Health and daily life:** healthcare access, housing, transportation, everyday communication and social customs, and community resources as content is researched and reviewed. Present cultural examples as possibilities, not universal expectations, and respect individual differences and boundaries.
- **Events and opportunities:** a state-based finder for current community events, services, workshops, and other opportunities relevant to immigrants, refugees, and newcomers.
- **Scholarships:** retain and improve education funding information.
- **About and contact:** explain the site's purpose, content standards, and how to report outdated information.

Treat this as a proposed structure, not a commitment to publish every topic in the first release. Prioritize content that can be sourced, reviewed, and translated reliably.

## Language Experience

The existing landing page lists English, French, Swahili, Spanish, Arabic, Kirundi, Kinyarwanda, Ukrainian, Amharic, Bosnian, Portuguese, and Somali. Use this list as an initial candidate set, then confirm priorities and translation capacity before promising full-site support.

- Show a clear language selector on the first visit; let visitors change language later from every page.
- Remember the selected language across navigation and future visits, with a visible way to change it.
- Use stable language codes and centralized translation resources rather than duplicating page markup.
- Translate navigation, controls, page titles, error and empty states, and core guidance consistently; label any content that is not yet available in a selected language.
- Set the document language correctly and support right-to-left layout and reading order for Arabic.
- Allow for longer translated text, appropriate fonts, date/number formatting, and keyboard and screen-reader use.
- Have qualified speakers review high-impact translations, especially safety, healthcare, legal-process, and financial content. Do not present machine translation as reviewed advice.

## Technical Direction

- Adopt React with a lightweight build tool such as Vite, subject to confirming the hosting environment and deployment needs.
- Use a shared application shell for navigation, footer, page layout, and language controls; represent pages as React components rather than separate HTML documents.
- Add client-side routing for the site's major sections and ensure direct links and refreshes work on nested routes.
- Move localized UI strings into structured translation files and keep non-UI content in a format editors can maintain.
- Convert existing education data and page interactions into typed/validated data and React state; remove direct DOM mutation and Google Translate widget dependencies.
- Provide a career-roadmap interaction that accepts arbitrary career titles and adapts steps to the visitor's education, experience, state, timeline, and priority. Link to occupation-specific research and authoritative external resources, but do not imply that the generated roadmap confirms licensing or qualification requirements.
- Define an event data model and ingestion process that supports trusted feeds, APIs, and partner submissions, with source attribution, duplicate handling, freshness checks, event expiration, and a correction/reporting path. Respect source terms and avoid collecting visitors' immigration status.
- Keep the existing stylesheet and visual identity as a migration starting point; update branding and design deliberately rather than coupling redesign to the framework conversion.
- Choose and document test, lint, and build commands when the app scaffold and package manager are selected.

## Phased Roadmap

### 1. Discovery and decisions

- Use **How to America** as the working brand; confirm final styling and check domain and name availability before public launch.
- Identify the initial audience, top user needs, launch topics, and geographic scope.
- Audit existing pages, links, images, education data, and content for accuracy, duplication, accessibility, and migration value.
- Confirm hosting, existing analytics/privacy constraints, and whether any services or forms need a backend.
- Identify reliable event providers and permitted data sources; determine initial state coverage, update frequency, event review responsibilities, and whether partner submissions or a backend are needed.
- Prioritize initial languages based on audience needs and the ability to obtain human review.

**Exit criteria:** brand direction, initial scope, language priorities, hosting constraints, and an initial event-source/coverage plan are documented.

### 2. React foundation

- Create the React app and establish local development, production build, and deployment workflows.
- Implement shared layout, navigation, routing, responsive behavior, and accessible page landmarks.
- Prototype one guided pathway and one searchable resource directory to validate the interactive experience early.
- Assess event-data sources and document a small, maintainable pilot before promising broad or nationwide coverage.
- Migrate the current pages and preserve working links and useful features.
- Replace imperative JavaScript behavior, including the state-based education results, with React components and state.
- Add an accessible career-roadmap builder that accepts any career title and uses the visitor's education, experience, target state, timeline, and priority to create tailored research, training, licensing, funding, and experience steps; allow visitors to mark steps complete and link to authoritative resources.

**Exit criteria:** migrated pages build successfully, are reachable directly by URL, and work on mobile and desktop; the guided pathway, resource search, and personalized career plan work with keyboard and touch input and clearly distinguish tailored guidance from verified occupation-specific requirements.

### 3. Localization foundation and language landing

- Implement the language-selection experience and language persistence.
- Add centralized translation resources for the shared interface and an initial end-to-end language.
- Verify language switching works on every route and the selected language survives refresh and navigation.
- Add right-to-left layout support and test Arabic before declaring it supported.
- Establish translation review, terminology, and content-update workflows.

**Exit criteria:** a visitor can choose a supported language, navigate the entire released experience in it, change languages at any time, and receive an honest fallback where translation is incomplete.

### 4. Content redesign and trusted guidance

- Rewrite and reorganize content around common newcomer tasks and clear next steps.
- Build interactive pathways and checklists from reviewed content, keeping each step understandable when read on its own.
- Add source links and review dates; define an owner and update cadence for time-sensitive information.
- Review sensitive topics with qualified organizations or subject-matter reviewers and provide appropriate official referrals.
- Publish additional topics only as their sourcing and review process is ready.

**Exit criteria:** every launch topic has a clear audience, actionable guidance, credible sources, and a review owner.

### 5. Event finder: source pilot and release

- Start with a limited set of states and trusted organizations or public event feeds; expand only when sources can be maintained reliably.
- Define event categories and a consistent listing format for title, description, date and time zone, state/location or online access, cost, language, audience/eligibility when stated, source link, and last-checked date.
- Ingest only from sources that permit reuse, such as documented APIs, public feeds, or explicit partner submissions. Keep source attribution and link visitors to the original listing for details and registration.
- Filter and search listings by state, topic, and date, with optional filters for format, cost, or language when source data supports them. Let visitors skip location selection.
- Establish validation, duplicate detection, update cadence, automatic expiry for past events, and a visible correction/reporting process. Label listings as informational rather than guaranteeing suitability, safety, availability, or eligibility.

**Exit criteria:** the pilot displays attributable, current listings from permitted sources for its declared state coverage; visitors can filter results and reach the original provider; expired and reported listings have a defined handling process; no immigration-status information is requested.

### 6. Quality, release, and iteration

- Check keyboard navigation, screen-reader semantics, color contrast, responsive layouts, and right-to-left rendering.
- Test routing, language selection and persistence, missing translations, forms, and data-driven resource views.
- Test guided pathways, resource search and filters, and optional checklist persistence, including clearing saved progress.
- Test event search and filters, state selection, source attribution, stale and expired listings, correction reports, and privacy-preserving behavior.
- Check links, page metadata, loading performance, and production deployment behavior.
- Release a limited set of reviewed content and languages, gather newcomer and community-partner feedback, and prioritize improvements.

**Exit criteria:** launch checks pass, support and content ownership are clear, and feedback can be collected without requiring sensitive personal information.

## Migration Notes

- Current pages include `index.html`, `home.html`, `about.html`, `contact.html`, `education.html`, `livingwell.html`, and `scholarships.html`.
- The current language chooser is not connected for most languages; a language prompt cycles through translated sentences, while the interior pages include a Google Translate widget.
- `Js/script.js` contains navigation, state-based education rendering, and contact-form behavior. Migrate these features intentionally and confirm whether form submissions need a real service; the current handler only displays a local confirmation.
- `Js/educationData.js` is a useful starting dataset, but resource links and state coverage need verification before reuse.
- The `jp/` directory currently contains a Japanese page; assess whether it is a legacy translation and decide whether Japanese belongs in the supported launch languages.

## Success Measures

- Visitors can select, change, and retain a supported language across all released pages.
- Visitors can find a relevant first step and navigate to an authoritative resource without needing to understand English.
- Visitors can find current, source-attributed events and opportunities for a selected state, with clear coverage limits and eligibility details where known.
- Visitors can complete a guided pathway, find relevant resources with search or filters, and optionally track checklist progress without creating an account.
- Core tasks work with keyboard and assistive technology and on small screens.
- Published guidance has traceable sources, review dates, and an update owner.
- Feedback identifies confusing or missing steps, and the team can update content and translations without duplicating page implementations.
