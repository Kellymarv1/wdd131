// Footer
const today = new Date();
const currentYear = today.getFullYear();
const lastmodified = document.lastModified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = lastmodified;

// Static weather values
const temperature = 8; // °C
const windSpeed = 12;  // km/h

// Wind chill function
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// Display wind chill
const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}