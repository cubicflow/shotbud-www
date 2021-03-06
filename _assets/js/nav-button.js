!(function () {
	const navButton = document.querySelector(".nav-button");
	const sidebar = document.querySelector(".sidebar");
	const fixture = document.querySelector(".head__fixture");
	const pageContent = document.querySelector(".content");
	
	navButton.addEventListener("click", () => {
		navButton.classList.toggle("active");
		sidebar.classList.toggle("active");
		fixture.classList.toggle("active");
		pageContent.classList.toggle("active");
	});




	///
	const accordions = Array.from(document.querySelectorAll(".nav__item"));
	const accordionLabels = Array.from(
		document.querySelectorAll(".nav__item__label")
	);
	const mobileBreakpoint = 640; // Needs to be kept in sync with css

	accordions.forEach(accordion => {
		accordion.addEventListener("click", () => {
			accordions.forEach(accordion => accordion.classList.remove("active--mobile"));
			accordion.classList.toggle("active--mobile");
		});
	});

	accordionLabels.forEach(label => {
		label.addEventListener("click", event => {
			if (
				window.innerWidth < mobileBreakpoint &&
				!label.classList.contains("nav__item__label--no-accordion")
			) {
				event.preventDefault();
			}
		});
	});
})();
