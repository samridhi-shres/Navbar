
const icon = document.querySelector(".fa-list");
const navbar = document.querySelector(".navbar");

icon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
