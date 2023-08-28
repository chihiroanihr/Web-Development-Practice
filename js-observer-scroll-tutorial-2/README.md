## Screenshot
<img width="689" alt="Screenshot 2023-03-31 at 5 51 12 PM" src="https://user-images.githubusercontent.com/42660669/229239313-5c84663c-96fd-4838-b9b9-635337552728.png">

## Assets Used
- [**Google Fonts**](https://fonts.google.com/)

## JavaScript Code for Animation On Scroll
```js
// Scroll Animate using Intersection Observer

// Create Intersection Observer
const observer = new IntersectionObserver((entries) => {
  // callback function
  // can observe multiple elements or entries at the same time
  // runs anytime one of the observed elements changes its state
  entries.forEach((entry) => {
    console.log(entry);
    // if intersecting the viewport
    if (entry.isIntersecting) {
      // add class
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Identify DOM element that we want to observe
const hiddenElements = document.querySelectorAll(".hidden");
// Observe all hidden elements
hiddenElements.forEach((element) => observer.observe(element));

```
