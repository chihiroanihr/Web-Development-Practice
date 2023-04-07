import { useState, useEffect } from "react";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  // State to determine what pages we are on
  const [selectedPage, setSelectedPage] = useState("home");
  // State to determine if window is at top of the page
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  // Set Media Query for Large Devices
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(
    () => {
      // A handleScroll function that will be executed whenever the scroll event is triggered on the window object
      const handleScroll = () => {
        if (window.scrollY === 0) setIsTopOfPage(true);
        else setIsTopOfPage(false);
      };

      // Whenever the window is scrolled, the handleScroll function will be called
      window.addEventListener("scroll", handleScroll);

      // A cleanup function that will be called when the component using this hook is unmounted
      // This function removes the handlePage function from the scroll event listener.
      return () => window.removeEventListener("scroll", handleScroll);
    },

    // useEffect() runs when the component is loaded
    []
  );

  return (
    <div className="app bg-deep-blue">
      {/* Navbar */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* Content */}
      <div className="w-5/6 md:h-full mx-auto">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
