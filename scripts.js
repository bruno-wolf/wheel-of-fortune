// (function() {
// utils
function qs(sel, ctx) {
	ctx = ctx || document;
	return ctx.querySelector(sel);
}

// well
const wheel = {
	container: qs('#app'),
	element: qs('#wheel'),
	marker: qs('#marker'),
	button: qs('#start'),
	deg: 0,
	startDeg: 5000,
	rotationTime: 2000
};

const message = {
	board: qs('#message'),
	score: 0
};

function rotateWheel() {
	message.board.classList.remove('show');
	wheel.button.style.pointerEvents = 'none';
	wheel.deg = Math.floor(wheel.startDeg + Math.random() * wheel.startDeg);
	wheel.element.style.transition = `transform ${wheel.rotationTime}ms ease-out`;
	wheel.element.style.transform = `rotate(${wheel.deg}deg)`;
	wheel.element.classList.add('blur');
	wheel.marker.classList.add('rotate');
}

function stopWheel() {
	wheel.marker.classList.remove('rotate');
	wheel.button.style.pointerEvents = 'auto';
	// clear the transition to handle the angle change on the next
	wheel.element.style.transition = 'none';
	// get actual angle
	const actualDeg = wheel.deg % 360;
	// apply the actual angle
	wheel.element.style.transform = `rotate(${actualDeg}deg)`;
	const result = checkResult(actualDeg);
	showScore(result);
}

function showScore(result) {
	message.score = result;

	if (selectedLang === 'pt') {
		message.board.innerHTML = `<h1>ganhou <span>${message.score}</span> pontos</h1>`;
	} else {
		message.board.innerHTML = `<h1>you won <span>${message.score}</span> points</h1>`;
	}
	message.board.classList.add('show');
	setTimeout(() => {
		message.board.classList.remove('show');
	}, 3000);
}

function checkResult(actualDeg) {
	if (actualDeg > 337 && actualDeg < 360) {
		return 350;
	}
	if (actualDeg > 0 && actualDeg <= 22) {
		return 350;
	}
	if (actualDeg > 23 && actualDeg <= 68) {
		return 100;
	}
	if (actualDeg > 69 && actualDeg <= 112) {
		return 50;
	}
	if (actualDeg > 113 && actualDeg <= 158) {
		return 300;
	}
	if (actualDeg > 159 && actualDeg <= 202) {
		return 250;
	}
	if (actualDeg > 203 && actualDeg <= 247) {
		return 0;
	}
	if (actualDeg > 248 && actualDeg <= 292) {
		return 150;
	}
	if (actualDeg > 293 && actualDeg <= 337) {
		return 200;
	}
}

//
// language selection
var selectedLang = 'en';

const langPT = {
	button: 'rodar',
	message: `<h1>ganhou <span>${message.score}</span> pontos</h1>`
};

const langEN = {
	button: 'start',
	message: `<h1>you won <span>${message.score}</span> points</h1>`
};

const buttons = document.querySelectorAll('#lang button');

function selectLanguage(language) {
	if (language === 'pt') {
		selectedLang = 'pt';
		wheel.button.innerHTML = langPT.button;
		message.board.innerHTML = langPT.message;
	} else {
		selectedLang = 'en';
		wheel.button.innerHTML = langEN.button;
		message.board.innerHTML = langEN.message;
	}
	removeLanguageScreen();
}

function removeLanguageScreen() {
	const screen = qs('#lang');
	screen.classList.remove('show');
}

// listeners
wheel.button.addEventListener('click', rotateWheel);
wheel.element.addEventListener('transitionend', stopWheel);
for (const button of buttons) {
	button.addEventListener('click', () => {
		selectLanguage(button.dataset.language);
	});
}
// })();
