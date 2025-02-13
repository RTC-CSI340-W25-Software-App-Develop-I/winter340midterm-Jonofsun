export function renderReview(review, container) {
  // Create review container div
  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("review_container");

  // Create and append image
  const img = document.createElement("img");
  img.src = review.image;
  reviewContainer.appendChild(img);

  // Create inner div for text content
  const contentDiv = document.createElement("div");

  // Create and append username paragraph
  const usernameEl = document.createElement("p");
  usernameEl.textContent = review.username;
  contentDiv.appendChild(usernameEl);

  // Create and append star rating paragraph
  const starEl = document.createElement("p");
  starEl.textContent = `Star Rating: ${review.star}`;
  contentDiv.appendChild(starEl);

  // Create and append review text paragraph
  const reviewEl = document.createElement("p");
  reviewEl.textContent = review.review;
  contentDiv.appendChild(reviewEl);

  // Append the inner content to the container
  reviewContainer.appendChild(contentDiv);

  // Append the container to the provided container
  container.appendChild(reviewContainer);
}
