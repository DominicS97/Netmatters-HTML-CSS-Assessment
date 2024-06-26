const SAVE_COOKIE = "cookie"; // save key for local storage of cookies

//
// HEADER INTERACTIVITY
//

// Relevant elements
const banner_1 = document.getElementById("banner-1");
const banner_1b = document.getElementById("banner-1b");
const banner_1span = document.getElementById("icon-banner-1");

// Add a mouseover event listener
banner_1.addEventListener("mouseover", () => {
	// Change display
	banner_1b.style.display = "grid";
	banner_1.style.setProperty("--display1", "block");
});

// Add a mouseout event listener
banner_1.addEventListener("mouseout", () => {
	// Change display back to none
	banner_1b.style.display = "none";
	banner_1.style.setProperty("--display1", "none");
});

// Add a mouseover event listener
banner_1b.addEventListener("mouseover", () => {
	// Change display
	banner_1b.style.display = "grid";
	banner_1.style.setProperty("--display1", "block");
	banner_1.style.backgroundColor = "#67809f";
	banner_1span.style.color = "#fff";
});

// Add a mouseout event listener
banner_1b.addEventListener("mouseout", () => {
	// Change display back to none
	banner_1b.style.display = "none";
	banner_1.style.setProperty("--display1", "none");
	banner_1.style.backgroundColor = "";
	banner_1span.style.color = "";
});

// Relevant elements
const banner_2 = document.getElementById("banner-2");
const banner_2b = document.getElementById("banner-2b");
const banner_2span = document.getElementById("icon-banner-2");

// Add a mouseover event listener
banner_2.addEventListener("mouseover", () => {
	// Change display
	banner_2b.style.display = "grid";
	banner_2.style.setProperty("--display2", "block");
});

// Add a mouseout event listener
banner_2.addEventListener("mouseout", () => {
	// Change display back to none
	banner_2b.style.display = "none";
	banner_2.style.setProperty("--display2", "none");
});

// Add a mouseover event listener
banner_2b.addEventListener("mouseover", () => {
	// Change display
	banner_2b.style.display = "grid";
	banner_2.style.setProperty("--display2", "block");
	banner_2.style.backgroundColor = "#4183d7";
	banner_2span.style.color = "#fff";
});

// Add a mouseout event listener
banner_2b.addEventListener("mouseout", () => {
	// Change display back to none
	banner_2b.style.display = "none";
	banner_2.style.setProperty("--display2", "none");
	banner_2.style.backgroundColor = "";
	banner_2span.style.color = "";
});

// Relevant elements
const banner_3 = document.getElementById("banner-3");
const banner_3b = document.getElementById("banner-3b");
const banner_3span = document.getElementById("icon-banner-3");

// Add a mouseover event listener
banner_3.addEventListener("mouseover", () => {
	// Change display
	banner_3b.style.display = "grid";
	banner_3.style.setProperty("--display3", "block");
});

// Add a mouseout event listener
banner_3.addEventListener("mouseout", () => {
	// Change display back to none
	banner_3b.style.display = "none";
	banner_3.style.setProperty("--display3", "none");
});

// Add a mouseover event listener
banner_3b.addEventListener("mouseover", () => {
	// Change display
	banner_3b.style.display = "grid";
	banner_3.style.setProperty("--display3", "block");
	banner_3.style.backgroundColor = "#2ecc71";
	banner_3span.style.color = "#fff";
});

// Add a mouseout event listener
banner_3b.addEventListener("mouseout", () => {
	// Change display back to none
	banner_3b.style.display = "none";
	banner_3.style.setProperty("--display3", "none");
	banner_3.style.backgroundColor = "";
	banner_3span.style.color = "";
});

// Relevant elements
const banner_4 = document.getElementById("banner-4");
const banner_4b = document.getElementById("banner-4b");
const banner_4span = document.getElementById("icon-banner-4");

// Add a mouseover event listener
banner_4.addEventListener("mouseover", () => {
	// Change display
	banner_4b.style.display = "grid";
	banner_4.style.setProperty("--display4", "block");
});

// Add a mouseout event listener
banner_4.addEventListener("mouseout", () => {
	// Change display back to none
	banner_4b.style.display = "none";
	banner_4.style.setProperty("--display4", "none");
});

// Add a mouseover event listener
banner_4b.addEventListener("mouseover", () => {
	// Change display
	banner_4b.style.display = "grid";
	banner_4.style.setProperty("--display4", "block");
	banner_4.style.backgroundColor = "#d64541";
	banner_4span.style.color = "#fff";
});

// Add a mouseout event listener
banner_4b.addEventListener("mouseout", () => {
	// Change display back to none
	banner_4b.style.display = "none";
	banner_4.style.setProperty("--display4", "none");
	banner_4.style.backgroundColor = "";
	banner_4span.style.color = "";
});

// Relevant elements
const banner_5 = document.getElementById("banner-5");
const banner_5b = document.getElementById("banner-5b");
const banner_5span = document.getElementById("icon-banner-5");

// Add a mouseover event listener
banner_5.addEventListener("mouseover", () => {
	// Change display
	banner_5b.style.display = "grid";
	banner_5.style.setProperty("--display5", "block");
});

// Add a mouseout event listener
banner_5.addEventListener("mouseout", () => {
	// Change display back to none
	banner_5b.style.display = "none";
	banner_5.style.setProperty("--display5", "none");
});

// Add a mouseover event listener
banner_5b.addEventListener("mouseover", () => {
	// Change display
	banner_5b.style.display = "grid";
	banner_5.style.setProperty("--display5", "block");
	banner_5.style.backgroundColor = "#926fb1";
	banner_5span.style.color = "#fff";
});

// Add a mouseout event listener
banner_5b.addEventListener("mouseout", () => {
	// Change display back to none
	banner_5b.style.display = "none";
	banner_5.style.setProperty("--display5", "none");
	banner_5.style.backgroundColor = "";
	banner_5span.style.color = "";
});

// Relevant elements
const banner_6 = document.getElementById("banner-6");
const banner_6b = document.getElementById("banner-6b");
const banner_6span = document.getElementById("icon-banner-6");

// Add a mouseover event listener
banner_6.addEventListener("mouseover", () => {
	// Change display
	banner_6b.style.display = "grid";
	banner_6.style.setProperty("--display6", "block");
});

// Add a mouseout event listener
banner_6.addEventListener("mouseout", () => {
	// Change display back to none
	banner_6b.style.display = "none";
	banner_6.style.setProperty("--display6", "none");
});

// Add a mouseover event listener
banner_6b.addEventListener("mouseover", () => {
	// Change display
	banner_6b.style.display = "grid";
	banner_6.style.setProperty("--display6", "block");
	banner_6.style.backgroundColor = "#f62459";
	banner_6span.style.color = "#fff";
});

// Add a mouseout event listener
banner_6b.addEventListener("mouseout", () => {
	// Change display back to none
	banner_6b.style.display = "none";
	banner_6.style.setProperty("--display6", "none");
	banner_6.style.backgroundColor = "";
	banner_6span.style.color = "";
});

// Relevant elements
const banner_7 = document.getElementById("banner-7");
const banner_7b = document.getElementById("banner-7b");
const banner_7span = document.getElementById("icon-banner-7");

// Add a mouseover event listener
banner_7.addEventListener("mouseover", () => {
	// Change display
	banner_7b.style.display = "grid";
	banner_7.style.setProperty("--display7", "block");
});

// Add a mouseout event listener
banner_7.addEventListener("mouseout", () => {
	// Change display back to none
	banner_7b.style.display = "none";
	banner_7.style.setProperty("--display7", "none");
});

// Add a mouseover event listener
banner_7b.addEventListener("mouseover", () => {
	// Change display
	banner_7b.style.display = "grid";
	banner_7.style.setProperty("--display7", "block");
	banner_7.style.backgroundColor = "#ce4125";
	banner_7span.style.color = "#fff";
});

// Add a mouseout event listener
banner_7b.addEventListener("mouseout", () => {
	// Change display back to none
	banner_7b.style.display = "none";
	banner_7.style.setProperty("--display7", "none");
	banner_7.style.backgroundColor = "";
	banner_7span.style.color = "";
});

//
// NAVBAR
//
const navbar = document.getElementById("navbar");
const navbutt = document.getElementById("icon-nav");
navbar.style.display = "none";
// prettier-ignore not working
function navbarToggle() {
	if (navbar.style.display === "none") {
		navbar.style.display = "block";
		// 		navbutt.style.setProperty("--navCont", "\2716");
	} else {
		navbar.style.display = "none";
		// 		navbutt.style.setProperty("--navCont", "\e90d");
	}
}

//
// COOKIES
//

const popup = document.getElementById("cookie-popup");
let cookie = localStorage.getItem(SAVE_COOKIE);

if (!cookie) {
	localStorage.setItem(SAVE_COOKIE, false);
}

function acceptCookie() {
	cookie = true;
	localStorage.setItem(SAVE_COOKIE, cookie);
	popup.style.display = "none";
}

function popupCookie() {
	popup.style.display = "grid";
}

if (cookie) {
	popup.style.display = "none";
}

//
// SCROLLING HEADER
//

let lastsscrollPos = window.pageYOffset;
let header = document.getElementById("header");
let headerBtm = header.offsetTop + header.offsetHeight;

window.onscroll = function () {
	let scrollPos = window.pageYOffset;

	if (lastsscrollPos > scrollPos || scrollPos < headerBtm) {
		header.style.top = "0";
	} else {
		header.style.top = "-202px";
	}

	lastsscrollPos = scrollPos;
};

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
