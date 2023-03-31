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
