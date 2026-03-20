import { educationData } from "./educationData.js";

function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{
			pageLanguage: 'en',
			includedLanguages: 'es,fr,ar,am,sw,pt',
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE
		},
		'google_translate_element'
	);
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
	navLinks.classList.toggle("active");
});

let timeout;
const header = document.querySelector(".header");

document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("scroll", () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			if(window.scrollY > 80) {
				header.classList.add("scrolled");
			} else {
				header.classList.remove("scrolled");
			}
		}, 20); // adjust delay; fixed header shaky
	});
});

/**
 * renderState function updates the education page (The section about education path) 
 * based on selected state
 * @param stateKey
 */

function renderState(stateKey) {
	const data = educationData[stateKey];

	if (!data) return;

	document.getElementById("educationResults").innerHTML = `
		<h3>Education in ${data.name}</h3>
		<div class="grid">
			<div class="card">
			<h4><i class="fa-solid fa-building-columns icons"></i>&nbsp;Community Colleges</h4>
			<ul>
				${data.communityColleges.map(c => `
					<li><a href="${c.link}" target="_blank">${c.name}</a></li>
				`).join("")}
			</ul>
		</div>
		<div class="card">
			<h4><i class="fa-solid fa-graduation-cap icons"></i>&nbsp;Universities</h4>
		</div>
		</div>
	`;
}

/* select event listener */
document.getElementById("stateSelect").addEventListener("change", function () {
	renderState(this.value);
});
