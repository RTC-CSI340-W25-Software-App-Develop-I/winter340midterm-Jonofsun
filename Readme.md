[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GTts5bFD)
# 340 Midterm Deliverables


## What’s Already There

- Do not change anything in the index.html or CSS.
- Most of your code will go in index.js. Do not change anything in the logic.js file.
- Do not manually modify the existing reviews array. However, you may add new reviews to the array using JavaScript.
- The images folder contains images for the midterm. Feel free to add your own images.
- The code for your test will go in the test/test.js
- The package.json is already initialized, the only thing you’ll need to install your node modules with `npm i`

## Hints

- Manually test your code early and often.
- Don't forget to use debugger and console.log to debug your code.
- This is an open-book and open-internet exam, but you are not allowed to use AI tools.
- Don’t be afraid to ask for help. I can’t give you the answers, but I can nudge you in the right direction.
- Turning in something is better than turning in nothing.
- Check the rubric for exact details on what I’m looking for.

## Description

You will be making a Yelp-like application where users can leave reviews for a restaurant. Below are the deliverables you need to complete:

Render content to the DOM
Use a higher-order function
Extract data from a form
Write Mocha tests
This assignment covers content from Weeks 1-3.

What This Does Not Include
This assignment does not cover Week 4. You will not be required to:

Use Express
Work with REST or HTTP
Create an API

## Midterm Deliverables

1. Create a function that will render a review.

- The structure of the review should follow the example below.
- Pay attention to the class names, as they are important for CSS styling to be applied correctly.

  ```
  <div class="review_container">
    <img src="img url here"/>
    <div>
      <p> username here </p>
      <p> star rating here </p>
      <p> review here </p>
    <div>
  </div>

  ```

- Use .forEach to iterate through the reviews.
- Pass a callback to .forEach that renders each review.

2. JavaScript Forms

- Select the form from the DOM.
- Add an event listener to the form for the submit event.
- Don't forget e.preventDefault()
- On submit, the form should render a new review to the screen and add it to the existing reviews array.

3. Mocha Tests

- Create at minimum two test for the calculateStarAverage function in test/test.js
- Remember to import chai and the calculateStarAverage function
- Use npm run test to run your tests

### Stuck? Here are some resources that may help

### Arrow Functions

- [Arrow Functions Documentation on W3Schools](https://www.w3schools.com/js/js_arrow_function.asp)
- [Arrow Functions Video Tutorial](https://www.youtube.com/watch?v=fRRRkognpOs)

### Dom Manipulation

- [Learn DOM Manipulation In 18 Minutes](https://www.youtube.com/watch?v=y17RuWkWdn8)
- [FreeCodeCamp Article on DOM Manipulation](https://www.freecodecamp.org/news/dom-manipulation-in-javascript/)

### e.preventDefault()

- [EVENT.PREVENTDEFAULT in JavaScript, Simplified](https://www.youtube.com/watch?v=md8jQkOEyyk)

### Reduce

- [Reduce basics - Part 3 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=Wl98eZpkp-c)

### Testing

- [Mocha Documentation](https://mochajs.org/#getting-started)
- [Unit Testing With Mocha For Beginners](https://www.youtube.com/watch?v=sPyb6QlgBaU)
