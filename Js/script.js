import { educationData } from "./educationData.js";

// google translate
window.googleTranslateElementInit = function() {
	new google.translate.TranslateElement(
		{
			pageLanguage: 'en',
			includedLanguages: 'en,es,fr,ar,am,sw,pt,rw,rn,so',
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE
		},
		'google_translate_element'
	);
}

// interactive navigation header
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const header = document.querySelector(".header");

menuToggle.addEventListener("click", () => {
	navLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
	if(window.scrollY > 80) {
		if (!header.classList.contains("scrolled")) {
			header.classList.add("scrolled");
		}
	} else {
		if (header.classList.contains("scrolled")) {
			header.classList.remove("scrolled");
		}
	}
});

/**
 * renderState function updates the education page (education path section) 
 * based on selected state
 * @param stateKey - the state to get education data for.
 */

function renderState(stateKey) {
	const defaultData = educationData.default || {};

	const stateData = educationData[stateKey] || {};

	const data = {
		name: stateData.name || stateKey.replace("_", " ").toUpperCase(),
		ged: stateData.ged || defaultData.ged || {},
		resources: stateData.resources || [],
		communityColleges: stateData.communityColleges || [],
		universities: stateData.universities || []
	};

	document.getElementById("educationResults").innerHTML = `
		<h3>Education in ${data.name}</h3>
		<div class="grid">
			<div class="card">
				<i class="fa-solid fa-handshake icons"></i>
				<h4>Local Resources</h4>
				<ul>
					${data.resources.length > 0
						? data.resources.map(r => `
							<li><a href="${r.link}" target="_blank">${r.name}</a></li>
						`).join("")
						: `<li><a href="${defaultData.collegeFinder?.link || "#"}" target="_blank">
							${defaultData.collegeFinder?.name || "Find Education Resources"}</a></li>`
					}
				</ul>
			</div>
			<div class="card">
				<i class="fa-solid fa-building-columns icons"></i>
				<h4>Community Colleges</h4>
				<ul>
					${data.communityColleges.length > 0
						? data.communityColleges.map(c => `
							<li><a href="${c.link}" target="_blank">${c.name}</a></li>
						`).join("")
						: `<li><a href"=${defaultData.collegeFinder?.link || "#"}" target="_blank">
							Search Community Colleges</a></li>`
					}
				</ul>
			</div>
			<div class="card">
				<i class="fa-solid fa-graduation-cap icons"></i>
				<h4>Universities</h4>
				<ul>
					${data.universities.length > 0
						? data.universities.map(u => `
						<li><a href="${u.link}" target="_blank">${u.name}</a></li>
						`).join("")
						: `<li><a href="${defaultData.collegeFinder?.link || "#"}" target="_blank">
						Search Universities</a></li>`
					}
				</ul>
			</div>
		</div>
	`;
}

/* select event listener */
document.getElementById("stateSelect")?.addEventListener("change", function () {
	renderState(this.value);
});

/**
 * contactUs() - 
 * 
 */
// document.getElementById("btn")?.addEventListener("click", function () {
// 	alert("Thank you");
// });

const form = document.querySelector('#contact-form');

if (form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		const formData = new FormData(form);
		
		// convert to object values
		const values = Object.fromEntries(formData.entries());
		
		console.log(values);
		alert("Thank you for contacting us....");
	});

} else {
	console.log("form element not found....");
}
