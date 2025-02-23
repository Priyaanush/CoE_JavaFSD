document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const reviewList = document.getElementById("review-list");
    const submitButton = document.getElementById("submit-review");
    let selectedRating = 0;  

    // Handle Star Clicks
    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            selectedRating = index + 1; 
            updateStarRating(selectedRating);
        });
    });

    function updateStarRating(rating) {
        stars.forEach((star, index) => {
            star.style.color = index < rating ? "gold" : "gray"; // Highlight selected stars
        });
    }

    submitButton.addEventListener("click", function () {
        const nameInput = document.getElementById("name").value.trim();
        const reviewInput = document.getElementById("review").value.trim();

        if (nameInput === "" || reviewInput === "" || selectedRating === 0) {
            alert("⚠️ Please fill out all fields and select a rating!");
            return;
        }

        // Create Review List Item
        const newReview = document.createElement("li");
        newReview.innerHTML = `<strong>${nameInput}</strong> (${selectedRating}⭐): ${reviewInput}`;
        reviewList.appendChild(newReview);

        console.log("✅ Review Submitted:", newReview.innerHTML);

        // Clear input fields after submission
        document.getElementById("name").value = "";
        document.getElementById("review").value = "";
        selectedRating = 0;
        updateStarRating(selectedRating);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const viewAllButton = document.getElementById("view-all-reviews");

    if (viewAllButton) {
        viewAllButton.addEventListener("click", function () {
            window.location.href = "all-reviews.html"; // Change path if needed
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-review");

    submitButton.addEventListener("click", function () {
        const name = document.getElementById("reviewer-name").value.trim();
        const reviewText = document.getElementById("review-text").value.trim();
        const stars = document.querySelectorAll(".star.selected").length;

        if (name === "" || reviewText === "" || stars === 0) {
            alert("Please fill in all fields and select a rating.");
            return;
        }

        // Save review in localStorage
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push({ name, stars, reviewText });
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Redirect to the reviews page
        window.location.href = "reviews.html";
    });
});
