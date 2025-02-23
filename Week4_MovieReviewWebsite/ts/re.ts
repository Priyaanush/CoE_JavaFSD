type Sentiment = "Positive" | "Negative" | "Neutral";

class MovieReviewPredictor {
    predict(review: string): Sentiment {
        console.log("Predicting sentiment for:", review);
        return "Neutral"; // Always returns Neutral for now (dummy logic)
    }
}

// Example usage
const predictor = new MovieReviewPredictor();
const review1 = "This movie was fantastic!";
const review2 = "Worst movie ever!";
const review3 = "It was okay.";

console.log(`Review 1: ${predictor.predict(review1)}`);
console.log(`Review 2: ${predictor.predict(review2)}`);
console.log(`Review 3: ${predictor.predict(review3)}`);
