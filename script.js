
const shareTab = document.querySelector(".card__author__share");
const shareButton = document.querySelector(".card__author__sharebutton");

const toggleTab = () => {
	shareTab.classList.toggle("card__author__share--show");
	shareButton.classList.toggle("card__author__sharebutton--show");
};

shareButton.addEventListener("click", toggleTab);