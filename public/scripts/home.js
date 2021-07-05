title = document.querySelector('.title');
tagline = document.querySelector('.tagline');
GLOW = false;

title.addEventListener('click', function () {
	if (!GLOW) {
		addGlow();
	} else {
		this.addEventListener('animationiteration', removeGlow);
	}
});

function addGlow() {
	title.classList.remove('glow-fadeOut');
	tagline.classList.remove('glow-fadeOut');
	title.classList.add('glow');
	tagline.classList.add('glow');
	GLOW = true;
}

function removeGlow() {
	title.classList.add('glow-fadeOut');
	tagline.classList.add('glow-fadeOut');
	title.classList.remove('glow');
	tagline.classList.remove('glow');
	title.removeEventListener('animationiteration', removeGlow);
	GLOW = false;
}