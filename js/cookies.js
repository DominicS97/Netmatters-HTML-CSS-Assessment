const SAVE_COOKIE = "cookie"; // save key for local storage of cookies

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
