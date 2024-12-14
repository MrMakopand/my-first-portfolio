document.addEventListener('DOMContentLoaded', () => {
	const homeDOM = document.querySelector('.home');
	const iconsDOM = document.querySelectorAll('.home__layer');

	if (!homeDOM || iconsDOM.length === 0) return;

	homeDOM.addEventListener('mousemove', (event) => {
		const rect = homeDOM.getBoundingClientRect();
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const x = event.clientX - rect.left - centerX;
		const y = event.clientY - rect.top - centerY;

		iconsDOM.forEach((icon) => {
			const speed = parseFloat(icon.getAttribute('data-speed')) || 0;
			const translateX = (x * speed) / 100;
			const translateY = (y * speed) / 100;

			icon.style.transform = `translate(${translateX}px, ${translateY}px)`;
		});
	});
});
