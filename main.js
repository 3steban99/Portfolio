const menu = document.querySelector(".nav-responsive");
const navBar = document.querySelector(".nav-bar");

menu.onclick = function () {
    navBar.classList.toggle("active")
}

function seleccionar(){
    navBar.classList.remove("active")
}

document.addEventListener("touchmove", function () {
    navBar.classList.remove("active")
});