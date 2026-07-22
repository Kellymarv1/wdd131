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



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
   templeName: "Lagos Nigeria",
   location: "Lagos, Nigeria",
   dedicated: "May 11, 2025",
   area: 19800,
   imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lagos-nigeria-temple/lagos-nigeria-temple-58577.jpg"
  },
  {
   templeName: "Maceio Brazil",
   location: "Maceio, Brazil",
   dedicated: "June 11, 2000",
   area: 27871,
   imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/maceio-brazil-temple/maceio-brazil-temple-48800.jpg"
  },
  {
   templeName: "Accra Ghana",
   location: "Accra, Ghana",
   dedicated: "January 11, 2004",
   area: 17500,
   imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-71217.jpg"
  }
];


document.querySelector("#home").addEventListener("click", () => {
   document.querySelector("h1").textContent = "Home";
   displayTemples(temples);
});


document.querySelector("#old").addEventListener("click", () => {

   const oldTemples = temples.filter(temple => {
       return Number(temple.dedicated.split(",")[0]) < 1900;
   });

   document.querySelector("h1").textContent = "Old Temples";
   displayTemples(oldTemples);
});


document.querySelector("#new").addEventListener("click", () => {

   const newTemples = temples.filter(temple => {
       return Number(temple.dedicated.split(",")[0]) > 2000;
   });

   document.querySelector("h1").textContent = "New Temples";
   displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {

   const largeTemples = temples.filter(temple => temple.area > 90000);

   document.querySelector("h1").textContent = "Large Temples";
   displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {

   const smallTemples = temples.filter(temple => temple.area < 10000);

   document.querySelector("h1").textContent = "Small Temples";
   displayTemples(smallTemples);
});

const gallery = document.querySelector(".gallery");

function displayTemples(temples) {
   gallery.innerHTML = "";

   temples.forEach((temple) => {

       const card = document.createElement("section");

       const name = document.createElement("h3");
       name.textContent = temple.templeName;

       const location = document.createElement("p");
       location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

       const dedicated = document.createElement("p");
       dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

       const area = document.createElement("p");
       area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

       const img = document.createElement("img");
       img.src = temple.imageUrl;
       img.alt = temple.templeName;
       img.loading = "lazy";
       img.width = 400;
       img.height = 250;

       card.append(name);
       card.append(location);
       card.append(dedicated);
       card.append(area);
       card.append(img);

       gallery.append(card);
   });
}

displayTemples(temples);


