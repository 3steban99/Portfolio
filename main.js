const menu = document.querySelector(".nav-responsive");

menu.onclick = function(){
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}