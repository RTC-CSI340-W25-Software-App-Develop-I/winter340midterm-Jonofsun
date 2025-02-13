//Do not change //////////////////////////////////

const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

/////////////////////////////////////////////////////////////////////
// Append the reviews to the DOM
const reviewsSection = document.querySelector(".reviews");

reviews.forEach((review) => renderReview(review));

/////////////////////////////////////////////////////////////////////
// Update average star rating
function updateAverageStarRating() {
  const starRatingElement = document.querySelector(".starRating");
  const average = calculateStarAverage(reviews);
  starRatingElement.textContent = `Star Rating: ${average.toFixed(1)}`;
}

updateAverageStarRating();

/////////////////////////////////////////////////////////////////////
// Handle new review submission
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const image = document.getElementById("image").value;
  const star = parseInt(document.getElementById("star").value);
  const reviewText = document.getElementById("review").value;

  const newReview = {
    username,
    image,
    star,
    review: reviewText,
  };

  reviews.push(newReview);

  renderReview(newReview);
  updateAverageStarRating();

  form.reset();
});
