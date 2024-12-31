let menu = document.querySelector(".menuicon");
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    navbar.classList.toggle("openmenu")
    menu.classList.toggle("move");
};

window.onscroll = () => {
    navbar.classList.remove("openmenu")
    menu.classList.remove("move");
}

let container = document.querySelector(".navbarcontainer");

window.addEventListener("scroll", () => {
    container.classList.toggle("navbarcontaineractive", window.scrollY > 0);
}); 