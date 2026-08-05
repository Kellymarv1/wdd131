const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

   menuButton.addEventListener("click", () => {

       navigation.classList.toggle("open");

       menuButton.textContent =
           navigation.classList.contains("open")
           ? "✖"
           : "☰";

   });

}

const year = document.querySelector("#year");

if (year) {

   year.textContent = new Date().getFullYear();

}

const aiTools = [

   {
       name: "ChatGPT",
       category: "Writing",
       image: "images/chatgpt.jpg",
       description: "Excellent for writing, research, coding, brainstorming, and learning."
   },

   {
       name: "Gemini",
       category: "Research",
       image: "images/gemini.jpg",
       description: "Google's AI assistant for research, documents, and productivity."
   },

   {
       name: "Claude",
       category: "Writing",
       image: "images/claude.jpg",
       description: "Known for long conversations, document analysis, and coding."
   },

   {
       name: "GitHub Copilot",
       category: "Coding",
       image: "images/copilot.jpg",
       description: "AI coding assistant that helps developers write code faster."
   },

   {
       name: "Midjourney",
       category: "Image",
       image: "images/midjourney.jpg",
       description: "Generates high-quality AI artwork from text prompts."
   }

];

function displayTools(toolList) {

   const container = document.querySelector("#tool-container");

   if (!container) return;

   container.innerHTML = "";

   toolList.forEach(tool => {

       container.innerHTML += `

       <article class="tool-card">

           <img
               src="${tool.image}"
               alt="${tool.name}"
               width="600"
               height="400"
               loading="lazy">

           <div class="tool-info">

               <h3>${tool.name}</h3>

               <p>
                   <strong>Category:</strong>
                   ${tool.category}
               </p>

               <p>${tool.description}</p>

               <button
                   class="button favorite-btn"
                   data-tool="${tool.name}">

                   Save Favorite

               </button>

           </div>

       </article>

       `;

   });

}

function displayFeaturedTools() {

   const featured = document.querySelector("#featured-tools");

   if (!featured) return;

   featured.innerHTML = "";

   aiTools.slice(0, 3).forEach(tool => {

       featured.innerHTML += `

       <article class="tool-card">

           <img
               src="${tool.image}"
               alt="${tool.name}"
               width="600"
               height=" 400"
               loading="lazy">

           <div class="tool-info">

               <h3>${tool.name}</h3>

               <p>${tool.description}</p>

           </div>

       </article>

       `;

   });

}

displayTools(aiTools);

displayFeaturedTools();

const searchInput = document.querySelector("#search");

if (searchInput) {

   searchInput.addEventListener("input", () => {

       const searchText = searchInput.value.toLowerCase();

       const filteredTools = aiTools.filter(tool =>

           tool.name.toLowerCase().includes(searchText) ||
           tool.category.toLowerCase().includes(searchText)

       );

       displayTools(filteredTools);

       addFavoriteListeners();

   });

}

function addFavoriteListeners() {

   const buttons = document.querySelectorAll(".favorite-btn");

   buttons.forEach(button => {

       button.addEventListener("click", () => {

           const favorite = button.dataset.tool;

           localStorage.setItem("favoriteTool", favorite);

           showFavorite();

       });

   });

}

function showFavorite() {

   const message = document.querySelector("#favorite-message");

   if (!message) return;

   const favorite = localStorage.getItem("favoriteTool");

   if (favorite) {

       message.textContent =
           `Your favorite AI tool is ${favorite}.`;

   } else {

       message.textContent =
           "You haven't selected a favorite AI tool yet.";

   }

}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

   contactForm.addEventListener("submit", function(event) {

       event.preventDefault();

       const fullname =
           document.querySelector("#fullname").value.trim();

       const thankYou =
           document.querySelector("#thankyou");

       if (fullname === "") {

           alert("Please enter your full name.");

           return;

       }

       localStorage.setItem("visitorName", fullname);

       thankYou.textContent =
           `Thank you, ${fullname}! Your message has been received.`;

       contactForm.reset();

   });

}

const storedName = localStorage.getItem("visitorName");

if (storedName && document.querySelector("#thankyou")) {

   document.querySelector("#thankyou").textContent =
       `Welcome back, ${storedName}! Feel free to send another message.`;

}

showFavorite();

addFavoriteListeners();