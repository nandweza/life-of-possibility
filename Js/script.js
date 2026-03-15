"use-strict";

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
