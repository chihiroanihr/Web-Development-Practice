import { useState, useEffect } from "react";

// To check if a specific media query matches the current screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  // To add an event listener for the resize event and
  // To set the matches state based on the result of the media query
  // useEffect(() => {...}, [matches, query]);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);

      // Checks if the matches state variable is different from the result of the media query
      if (mediaQuery.matches !== matches) {
        setMatches(mediaQuery.matches); // update
      }

      // A listener function that will be executed whenever the resize event is triggered on the window object
      const listener = () => setMatches(mediaQuery.matches); // update

      // Whenever the window is resized, the listener function will be called
      window.addEventListener("resize", listener);

      // A cleanup function that will be called when the component using this hook is unmounted
      // This function removes the listener function from the resize event listener.
      return () => window.removeEventListener("resize", listener);
    },

    // useEffect() is run (Event listener is created and updated) whenever the matches and query parameters change
    [matches, query]
  );

  return matches;
};

export default useMediaQuery;
