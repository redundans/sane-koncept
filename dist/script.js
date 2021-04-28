document.addEventListener(
	'DOMContentLoaded',
	function(event) {
		
		let nav_toggle = document.querySelector('#nav_toggle');
		let nav = document.querySelector('#nav');
		nav_toggle.addEventListener('click', function() {
			nav.classList.toggle('hidden');
			nav_toggle.classList.toggle('bg-white');
			nav_toggle.classList.toggle('text-black');
		}, false);
	}
);