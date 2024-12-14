document.addEventListener('DOMContentLoaded', function () {
	const homeButton = document.getElementById('homeButton');
	const header = document.querySelector('.header');

	homeButton.addEventListener('click', function () {
		if (header.style.display === 'none') {
			header.style.display = 'block';
		} else {
			header.style.display = 'none';
		}
	});
});
