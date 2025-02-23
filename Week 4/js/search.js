const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("search-results");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

// Add all movies here
const movies = [
    { name: "Amaran", src: "assets/images/amaran.jpg" },
    { name: "Lucky Bhaskar", src: "assets/images/lucky.jpg" },
    { name: "Open Heilmer", src: "assets/images/open.jpg" },
    { name: "Avengers End Game", src: "assets/images/avan.jpg" },
    { name: "Lubber Pandhu", src: "assets/images/lb.jpg" },
    { name: "LGM", src: "assets/images/lgm.jpg" },
    { name: "96", src: "assets/images/jj.jpg" },
    { name: "Karnan", src: "assets/images/karnan.jpg" },
    { name: "Master", src: "assets/images/mas.jpg" },
    { name: "Sulthan", src: "assets/images/sul.jpg" },
    { name: "Ayalaan", src: "assets/images/ay.jpg" },
    { name: "Mersal", src: "assets/images/mersal.jpg" },
    { name: "LEO", src: "assets/images/leo.jpg" },
    { name: "Lal Salaam", src: "assets/images/ls.jpg" }
];

// Function to display search results
searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query) {
        const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(query));

        if (filteredMovies.length > 0) {
            searchResults.style.display = "block";
            filteredMovies.forEach(movie => {
                const div = document.createElement("div");
                div.classList.add("search-result-item");

                // Movie Image
                const img = document.createElement("img");
                img.src = movie.src;
                img.alt = movie.name;
                img.classList.add("search-result-img");

                // Movie Name
                const span = document.createElement("span");
                span.textContent = movie.name;

                // Click Event to open modal
                div.addEventListener("click", () => openModal(movie));

                div.appendChild(img);
                div.appendChild(span);
                searchResults.appendChild(div);
            });
        } else {
            searchResults.style.display = "none";
        }
    } else {
        searchResults.style.display = "none";
    }
});

// Function to open modal
function openModal(movie) {
    modalImage.src = movie.src;
    modalCaption.textContent = movie.name;
    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside the image
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
