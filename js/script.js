const body = document.body;

const burgerWrapper = document.querySelector(".burger");
const burgerBody = document.querySelector(".header__burger");
const blur = document.querySelector(".blur");
const linksContainer = document.querySelector(".header__links");

const toggleElement = () => {
	burgerBody.classList.toggle("active");
	linksContainer.classList.toggle("active");
	body.classList.toggle("active");
	blur.classList.toggle("active");
};

burgerWrapper.addEventListener("click", () => {
	toggleElement();
});
blur.addEventListener("click", () => {
	if (blur.classList.contains("active")) toggleElement();
});
