var lost = document.querySelector(".you-lost");
var lost_popup = document.querySelector(".popup-write");
var lost_close = document.querySelector(".popup-write-close");
var forma = lost_popup.querySelector("form");
var login = lost_popup.querySelector("[name=name]");
var email = lost_popup.querySelector("[name=e-mail]");

lost.addEventListener("click", function(event) {
	event.preventDefault();
	lost_popup.classList.add("popup-write-show");
	login.focus();
});

lost_close.addEventListener("click", function(event) {
	event.preventDefault();
	lost_popup.classList.remove("popup-write-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		if (lost_popup.classList.contains("popup-write")) {
			lost_popup.classList.remove("popup-write");
		}
	}
});

