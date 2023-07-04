const menu = document.querySelector(".nav-responsive");
const navBar = document.querySelector(".nav-bar");


menu.onclick = function () {
    navBar.classList.toggle("active")
}

function seleccionar() {
    navBar.classList.remove("active")
}

document.addEventListener("touchmove", function () {
    navBar.classList.remove("active")
});


//Languages

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML= texts[section][value];
    }
}

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})