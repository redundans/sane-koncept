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


		let nav_toggle_mob = document.querySelector('#nav_toggle_mob');
		let nav_mob = document.querySelector('#nav_mob');
		nav_toggle_mob.addEventListener('click', function() {
			nav_mob.classList.toggle('hidden');
			nav_toggle_mob.classList.toggle('open');
		}, false);


		let nav_first_toggle_mob = document.querySelector('#nav_first_toggle_mob');
		let nav_first_mob = document.querySelector('#nav_first_mob');
		nav_first_toggle_mob.addEventListener('click', function() {
			nav_first_toggle_mob.classList.toggle('bg-white');
			nav_first_toggle_mob.classList.toggle('text-black');
			nav_first_mob.classList.toggle('hidden');
		}, false);
	}
);