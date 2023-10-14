const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn")
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl= document.querySelector(".close-icon");
const welcomeEl = document.querySelector(".welcome");
const rollTideEl = document.querySelector(".rolltide");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
});

welcomeEl.innerText = "welcome to";
rollTideEl.innerText = "rolltide.com";
 

