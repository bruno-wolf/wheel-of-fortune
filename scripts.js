(function() {
	function qs(sel, ctx) {
		ctx = ctx || document;
		return ctx.querySelector(sel);
	}

	const app = qs('#app');
	const wheel = qs('#wheel', app);
	const marker = qs('#marker', app);
	const startButton = qs('#start');
	const msgBoard = qs('#message');
	const score = qs('h1 span', msgBoard);
	let deg = 0;
	let startDeg = 5000;
	let rotationTime = 2000;

	function rotateWheel() {
		msgBoard.classList.remove('show');
		startButton.style.pointerEvents = 'none';
		deg = Math.floor(startDeg + Math.random() * startDeg);
		wheel.style.transition = `transform ${rotationTime}ms ease-out`;
		wheel.style.transform = `rotate(${deg}deg)`;
		wheel.classList.add('blur');
		marker.classList.add('rotate');
	}

	function checkResult(actualDeg) {
		// var rotation = wheel.style.transform;
		// rotation = parseInt(rotation.match(/\d+/g));
		// console.warn(rotation);

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

	startButton.addEventListener('click', rotateWheel);

	wheel.addEventListener('transitionend', () => {
		marker.classList.remove('rotate');
		startButton.style.pointerEvents = 'auto';
		// clear the transition to handle the angle change on the next
		wheel.style.transition = 'none';
		// check actual angle
		const actualDeg = deg % 360;
		// apply the actual angle
		wheel.style.transform = `rotate(${actualDeg}deg)`;
		let result = checkResult(actualDeg);
		score.innerHTML = result;
		msgBoard.classList.add('show');
		setTimeout(() => {
			msgBoard.classList.remove('show');
		}, 3000);
	});
})();
