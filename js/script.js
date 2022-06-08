const burgerWrapper = document.querySelector(".burger");
const burgerBody = document.querySelector(".header__burger");
burgerWrapper.addEventListener("click", () => {
	burgerBody.classList.toggle("active");
});
