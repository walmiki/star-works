// Sticky Nav
window.addEventListener("scroll", function () {
	var nav = document.querySelector("header");
	nav.classList.toggle("responsive__header", window.scrollY >= 50);
});

// Toaster msg
let button = document.getElementById("submitBtn");
let msg = document.getElementById("successMsg");

button.addEventListener("click", (e) => {
	e.preventDefault();
	msg.style.display = "block";
	setTimeout((e) => {
		msg.style.display = "none";
	}, 3500);
});

//  Whatsapp
$(function () {
	$("#myButton").floatingWhatsApp({
		phone: "917066299276",
		popupMessage: "Hello, how can we help you?",
		message: "Can we connect?",
		showPopup: true,
		showOnIE: false,
		headerTitle: "Welcome!",
		headerColor: "rgb(37,211,102)",
		backgroundColor: "rgb(37,211,102)",
		buttonImage: '<img src="./assets/images/whatsapp/whatsapp.svg" />',
	});
});
