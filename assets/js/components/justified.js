document.addEventListener('DOMContentLoaded', function () {
	const textElements = document.querySelectorAll('p, h1, h2, h3, li');

	textElements.forEach((element) => {
		let wordCount = element.textContent.trim().split(/\s+/).length;

		if (wordCount > 8) {
			element.classList.add('justified-text');
		}
	});
});
