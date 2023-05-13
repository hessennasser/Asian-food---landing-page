const menuIcon = document.querySelector(".menu-icon");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
    header.classList.toggle("active");
})