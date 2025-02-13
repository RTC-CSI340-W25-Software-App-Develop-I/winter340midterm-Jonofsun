import { assert } from "chai";
import { JSDOM } from "jsdom";
import { renderReview } from "../src/renderReview.js";

// Set up JSDOM to simulate the DOM in Node
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;

describe("renderReview", function () {
  it("should append a review to the DOM", function () {
    // Create a container for testing
    const reviewsSection = document.createElement("div");
    reviewsSection.classList.add("reviews");

    const review = {
      username: "TestUser",
      image: "./images/test.png",
      star: 4,
      review: "Nice place!",
    };

    // Pass in the container to renderReview
    renderReview(review, reviewsSection);

    const container = reviewsSection.querySelector(".review_container");
    assert.ok(container);

    const img = container.querySelector("img");
    // Note: Depending on JSDOM, you might need to check img.src ends with the expected image path
    assert.ok(img.src.includes(review.image));

    const paragraphs = container.querySelectorAll("p");
    assert.equal(paragraphs[0].textContent, review.username);
    assert.equal(paragraphs[1].textContent, `Star Rating: ${review.star}`);
    assert.equal(paragraphs[2].textContent, review.review);
  });
});
