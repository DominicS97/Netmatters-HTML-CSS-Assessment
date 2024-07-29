//
// CLIENT SLIDER
//

window.onresize = reportWindowSize;
let visible = 2;
let started = false;
const CAROUSEL_1 = document.getElementsByClassName("carousel-item1");

function reportWindowSize() {
	let width = window.innerWidth;
	if (width >= 1260) {
		visible = 5;
	} else if (width >= 992) {
		visible = 4;
	} else if (width >= 768) {
		visible = 3;
	} else {
		visible = 2;
	}
	if (started) {
		updateSlider();
	}
}

function sliderStartup() {
	let counter = 0;
	for (let i = 0; i < CAROUSEL_1.length; i++) {
		counter++;
		if (counter > visible) {
			CAROUSEL_1[i].style.display = "none";
		} else {
			CAROUSEL_1[i].style.display = "block";
		}
	}
	started = true;
}

reportWindowSize();
sliderStartup();

function updateSlider() {
	let display = CAROUSEL_1[0].style.display;
	if (display === "block") {
		let counter = 0;
		for (let i = 0; i < CAROUSEL_1.length; i++) {
			counter++;
			if (counter > visible) {
				CAROUSEL_1[i].style.display = "none";
			} else {
				CAROUSEL_1[i].style.display = "block";
			}
		}
	} else if (display === "none") {
		for (let i = 1; i < CAROUSEL_1.length; i++) {
			let display2 = CAROUSEL_1[i].style.display;
			if (display2 === "block") {
				let counter = 0;
				for (let j = i; j < CAROUSEL_1.length; j++) {
					counter++;
					if (counter > visible) {
						CAROUSEL_1[j].style.display = "none";
					} else {
						CAROUSEL_1[j].style.display = "block";
					}
				}
				if (counter < visible) {
					let counter2 = visible - counter;
					for (let j = 0; j < counter2; j++) {
						CAROUSEL_1[j].style.display = "block";
					}
				}
			}
		}
	}
}

setInterval(nextCarousel1, 3000);

function nextCarousel1() {
	for (let i = 0; i < CAROUSEL_1.length; i++) {
		let display = CAROUSEL_1[i].style.display;
		if (display === "block") {
			for (let j = i + 1; j < CAROUSEL_1.length; j++) {
				let display2 = CAROUSEL_1[j].style.display;
				if (display2 === "none") {
					CAROUSEL_1[j].style.display = "block";
					for (let k = j + 1; k < CAROUSEL_1.length; k++) {
						let display3 = CAROUSEL_1[k].style.display;
						if (display3 === "block") {
							CAROUSEL_1[k].style.display = "none";
							return;
						}
					}
					for (let k = 0; k < CAROUSEL_1.length; k++) {
						let display3 = CAROUSEL_1[k].style.display;
						if (display3 === "block") {
							CAROUSEL_1[k].style.display = "none";
							return;
						}
					}
				}
			}
			for (let j = 0; j < CAROUSEL_1.length; j++) {
				let display2 = CAROUSEL_1[j].style.display;
				if (display2 === "none") {
					CAROUSEL_1[j].style.display = "block";
					for (let k = j + 1; k < CAROUSEL_1.length; k++) {
						let display3 = CAROUSEL_1[k].style.display;
						if (display3 === "block") {
							CAROUSEL_1[k].style.display = "none";
							return;
						}
					}
					for (let k = 0; k < CAROUSEL_1.length; k++) {
						let display3 = CAROUSEL_1[k].style.display;
						if (display3 === "block") {
							CAROUSEL_1[k].style.display = "none";
							return;
						}
					}
				}
			}
		}
	}
}
