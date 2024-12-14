let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
toggle.addEventListener('change', (event) => {
	let checked = event.target.checked;
	document.body.classList.toggle('dark');
});
