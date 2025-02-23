document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const reviewList = document.getElementById("review-list");
    const submitButton = document.getElementById("submit-review");
    const viewAllButton = document.getElementById("view-all-reviews");
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
            star.style.color = index < rating ? "gold" : "gray";
        });
    }

    submitButton.addEventListener("click", function () {
        const nameInput = document.getElementById("name").value.trim();
        const reviewInput = document.getElementById("review").value.trim();
    
        console.log("Name:", nameInput);
        console.log("Review:", reviewInput);
        console.log("Selected Rating:", selectedRating); // Check if rating is captured
    
        if (nameInput === "" || reviewInput === "" || selectedRating === 0) {
            alert("⚠️ Please fill out all fields and select a rating!");
            return;
        }
    
        const reviewObject = {
            name: nameInput,
            rating: selectedRating,
            text: reviewInput
        };
    
        let savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        savedReviews.push(reviewObject);
        localStorage.setItem("reviews", JSON.stringify(savedReviews));
    
        document.getElementById("name").value = "";
        document.getElementById("review").value = "";
        selectedRating = 0;
        updateStarRating(selectedRating);
    });
    
    function updateStarRating(rating) {
        selectedRating = rating; // Ensure this updates correctly
        console.log("Updated Rating:", selectedRating); // Debugging
        stars.forEach((star, index) => {
            star.style.color = index < rating ? "gold" : "gray"; 
        });
    }
    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            selectedRating = index + 1; 
            console.log("Star Clicked, Rating:", selectedRating); // Debugging
            updateStarRating(selectedRating);
        });
    });
        
    // Redirect to All Reviews Page
    viewAllButton.addEventListener("click", function () {
        window.location.href = "pages/all-reviews.html";
    });
});
