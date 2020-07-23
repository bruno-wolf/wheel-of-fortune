(function() {
	const app = document.querySelector('#app');
	const wheel = app.querySelector('#wheel');
	const marker = app.querySelector('#marker');
	const startButton = document.querySelector('#start');
	let deg = 0;
	let startDeg = 5000;
	let rotationTime = 2000;

	startButton.addEventListener('click', () => {
		startButton.style.pointerEvents = 'none';
		deg = Math.floor(startDeg + Math.random() * startDeg);
		wheel.style.transition = `transform ${rotationTime}ms ease-out`;
		wheel.style.transform = `rotate(${deg}deg)`;
		wheel.classList.add('blur');
		marker.classList.add('rotate');
	});

	wheel.addEventListener('transitionend', () => {
		marker.classList.remove('rotate');
		startButton.style.pointerEvents = 'auto';
		// clear the transition to handle the angle change on the next
		wheel.style.transition = 'none';
		// check actual angle
		const actualDeg = deg % 360;
		// apply the actual angle
		wheel.style.transform = `rotate(${actualDeg}deg)`;
		checkResult(actualDeg);
	});

	// get positions
	// function getPositions(el) {
	// 	var top, left, width, height;
	// 	top = el.offsetTop;
	// 	left = el.offsetLeft;
	// 	width = el.offsetWidth;
	// 	height = el.offsetHeight;
	// 	return {
	// 		left: left,
	// 		right: left + width,
	// 		top: top,
	// 		bottom: top + height
	// 	};
	// }
	function checkResult(actualDeg) {
		// var rotation = wheel.style.transform;
		// rotation = parseInt(rotation.match(/\d+/g));
		// console.warn(rotation);

		if ((actualDeg > 337 && actualDeg < 360) || (actualDeg > 0 && actualDeg <= 22)) {
			console.warn(350);
		}

		if (actualDeg > 23 && actualDeg <= 68) {
			console.warn(100);
		}
		if (actualDeg > 69 && actualDeg <= 112) {
			console.warn(50);
		}
		if (actualDeg > 113 && actualDeg <= 158) {
			console.warn(300);
		}
		if (actualDeg > 159 && actualDeg <= 202) {
			console.warn(250);
		}
		if (actualDeg > 203 && actualDeg <= 247) {
			console.warn(0);
		}
		if (actualDeg > 248 && actualDeg <= 292) {
			console.warn(150);
		}
		if (actualDeg > 293 && actualDeg <= 337) {
			console.warn(200);
		}
	}
})();
