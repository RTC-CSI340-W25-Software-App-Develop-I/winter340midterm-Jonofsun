//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

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
//1. Append the reviews to the DOM

const reviewsSection = document.querySelector(".reviews");

function renderReview(review) {
  const container = document.createElement("div");
  container.classList.add("review_container");

  const img = document.createElement("img");
  img.src = review.image;
  container.appendChild(img);

  const contentDiv = document.createElement("div");

  const usernameEl = document.createElement("p");
  usernameEl.textContent = review.username;
  contentDiv.appendChild(usernameEl);

  const starEl = document.createElement("p");
  starEl.textContent = `Star Rating: ${review.star}`;
  contentDiv.appendChild(starEl);

  const reviewEl = document.createElement("p");
  reviewEl.textContent = review.review;
  contentDiv.appendChild(reviewEl);

  container.appendChild(contentDiv);

  reviewsSection.appendChild(container);
}
reviews.forEach((review) => renderReview(review));
//2. Append new reviews to the DOM from the form
function updateAverageStarRating() {
  const starRatingElement = document.querySelector(".starRating");
  const average = calculateStarAverage(reviews);
  starRatingElement.textContent = `Star Rating: ${average.toFixed(1)}`;
}
updateAverageStarRating();

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
