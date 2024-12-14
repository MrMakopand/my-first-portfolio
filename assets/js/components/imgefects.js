document.addEventListener('DOMContentLoaded', () => {
	const images = document.querySelectorAll('.about__card--img');
	images.forEach((img) => {
		img.classList.add('animate-in');
	});
});
