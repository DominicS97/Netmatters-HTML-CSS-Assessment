//
// IMAGE SLIDER
//

let currentSlide = 1;
changeSlide(1);

function changeSlide(n) {
	let slides = document.getElementsByClassName("slider-item");
	let dots = document.getElementsByClassName("dot");
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	currentSlide = n;
	slides[n - 1].style.display = "flex";
	dots[n - 1].className += " active";
}

function nextSlide() {
	let m = currentSlide;
	if ((m = 7)) {
		m = 1;
	} else {
		m++;
	}
	changeSlide(m);
}
setInterval(nextSlide(), 1000);
