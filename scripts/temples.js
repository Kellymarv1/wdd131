const today = new Date();
const currentYear = today.getFullYear();
const lastmodified = document.lastmodified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = lastmodified;