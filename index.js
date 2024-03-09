function toggleMenu(shouldClose) {
	if (shouldClose) {
		document.getElementById('nav').classList.remove('expanded');
	} else {
		document.getElementById('nav').classList.add('expanded');
	}
}