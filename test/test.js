import { assert } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
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
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

describe("calculateStarAverage", function () {
  it("should return the correct average for the mockReviews array", function () {
    const average = calculateStarAverage(mockReviews);
    // (5 + 3 + 1) / 3 = 3
    assert.equal(average, 3);
  });

  it("should return the correct average for a different set of reviews", function () {
    const testReviews = [
      {
        username: "TestUser1",
        image: "./images/test.png",
        star: 4,
        review: "Nice place!",
      },
      {
        username: "TestUser2",
        image: "./images/test.png",
        star: 2,
        review: "Could be better.",
      },
    ];
    // (4 + 2) / 2 = 3
    const average = calculateStarAverage(testReviews);
    assert.equal(average, 3);
  });
});

// describe("renderReview", function () {
//   it("should append a review to the DOM", function () {
//     const reviewsSection = document.createElement("div");
//     reviewsSection.classList.add("reviews");

//     const review = {
//       username: "TestUser",
//       image: "./images/test.png",
//       star: 4,
//       review: "Nice place!",
//     };

//     renderReview(review);

//     const container = reviewsSection.querySelector(".review_container");
//     assert.ok(container);

//     const img = container.querySelector("img");
//     assert.equal(img.src, review.image);

//     const usernameEl = container.querySelector("p");
//     assert.equal(usernameEl.textContent, review.username);

//     const starEl = container.querySelectorAll("p")[1];
//     assert.equal(starEl.textContent, `Star Rating: ${review.star}`);

//     const reviewEl = container.querySelectorAll("p")[2];
//     assert.equal(reviewEl.textContent, review.review);
//   });
// });

/*
ReferenceError: document is not defined
      at Context.<anonymous> (file:///Users/tenshin/RTC_BAS/340SoftwareEngineeringI/Midterm/winter340midterm-Jonofsun/test/test.js:57:28)
      at process.processImmediate (node:internal/timers:491:21)
*/
//what is the expected output?
//The expected output is that the test will pass and the review will be appended to the DOM correctly.
//using the referenceError, what do I need to change to fix the failing test?
//I need to add a global object that will be used to simulate the DOM. This object will be used to create the elements that are needed to test the renderReview function.
/*
> midterm@1.0.0 test
> mocha


 Exception during run: Error [ERR_REQUIRE_CYCLE_MODULE]: Cannot require() ES Module /Users/tenshin/RTC_BAS/340SoftwareEngineeringI/Midterm/winter340midterm-Jonofsun/test/test.js in a cycle. (from /Users/tenshin/RTC_BAS/340SoftwareEngineeringI/Midterm/winter340midterm-Jonofsun/node_modules/mocha/lib/nodejs/esm-utils.js)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:315:15)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1411:24)
    at Module._compile (node:internal/modules/cjs/loader:1544:5)
    at Object..js (node:internal/modules/cjs/loader:1668:16)
    at Module.load (node:internal/modules/cjs/loader:1313:32)
    at Function._load (node:internal/modules/cjs/loader:1123:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:217:24)
    at Module.require (node:internal/modules/cjs/loader:1335:12)
    at require (node:internal/modules/helpers:136:16)
    at exports.requireOrImport (/Users/tenshin/RTC_BAS/340SoftwareEngineeringI/Midterm/winter340midterm-Jonofsun/node_modules/mocha/lib/nodejs/esm-utils.js:53:16)
    at async exports.loadFilesAsync (/Users/tenshin/RTC_BAS/340SoftwareEngineeringI/Midterm/winter340midterm-Jonofsun/node_modules/mocha/lib/nodejs/esm-utils.js:100:20)
    at async singleRun (/Users/tenshin/RTC_BAS/340SoftwareEngineeringI/Midterm/winter340midterm-Jonofsun/node_modules/mocha/lib/cli/run-helpers.js:162:3)
    at async exports.handler (/Users/tenshin/RTC_BAS/340SoftwareEngineeringI/Midterm/winter340midterm-Jonofsun/node_modules/mocha/lib/cli/run.js:375:5) {
  code: 'ERR_REQUIRE_CYCLE_MODULE'
*/
/*
Refactor to Isolate renderReview:
Move the renderReview function into its own module 
(for example, create a new file called renderReview.js). 
Then import that function in both index.js and your test file. 
This breaks the cycle because your test file will no longer be pulling in the rest of the code in index.js.
*/
/*
Configure Mocha for ESM:
Another approach is to ensure your project is entirely using ESM. 
You can add "type": "module" in your package.json to force Node.js to treat all files as ES modules. 
However, even with that setting, you must be careful to avoid circular dependencies by structuring your imports appropriately. 
In many cases, isolating functions you want to test (like in option 1) is cleaner and avoids the cycle.
*/
