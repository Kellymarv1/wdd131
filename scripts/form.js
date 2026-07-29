const products = [
   {
       id: "fc-1888",
       name: "Flux Capacitor"
   },
   {
       id: "fc-2050",
       name: "Power Laces"
   },
   {
       id: "fs-1987",
       name: "Time Circuits"
   },
   {
       id: "ac-2000",
       name: "Low Voltage Reactor"
   },
   {
       id: "jj-1969",
       name: "Warp Equalizer"
   }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
   const option = document.createElement("option");

   option.value = product.id;
   option.textContent = product.name;

   productSelect.appendChild(option);
});

// Footer

const today = new Date();
const currentYear = today.getFullYear();
const lastmodified = document.lastModified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = lastmodified;