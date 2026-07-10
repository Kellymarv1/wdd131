// Hamnburger menu
const menubutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menubutton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menubutton.classList.toggle("show");
})


const today = new Date();
const currentYear = today.getFullYear();
const lastmodified = document.lastModified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = lastmodified;