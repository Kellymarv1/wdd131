// Hamnburger menu
const menubutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menubutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menubutton.classList.toggle("open");
});


const today = new Date();
const currentYear = today.getFullYear();
const lastmodified = document.lastmodified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = lastmodified;