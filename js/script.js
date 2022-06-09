const body = document.body;

const burgerWrapper = document.querySelector(".burger");
const burgerBody = document.querySelector(".header__burger");
const blur = document.querySelector(".blur");
const linksContainer = document.querySelector(".header__links");

burgerWrapper.addEventListener("click", () => {
	burgerBody.classList.toggle("active");
	linksContainer.classList.toggle("active");
	body.classList.toggle("active");
	blur.classList.toggle("active");
});
blur.addEventListener("click", () => {
	if (blur.classList.contains("active")) {
		burgerBody.classList.toggle("active");
		linksContainer.classList.toggle("active");
		body.classList.toggle("active");
		blur.classList.toggle("active");
	}
});

const modal = document.querySelector(".modal");
const form = document.querySelector(".fifth__form");
const closeButt = document.querySelector("#modal-close");
const formBlur = document.querySelector(".blur-form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	modal.classList.toggle("active");
	body.classList.toggle("active");
	formBlur.classList.toggle("active");
});
closeButt.addEventListener("click", () => {
	modal.classList.toggle("active");
	body.classList.toggle("active");
	formBlur.classList.toggle("active");
});
formBlur.addEventListener("click", () => {
	formBlur.classList.toggle("active");
	modal.classList.toggle("active");
	body.classList.toggle("active");
});
