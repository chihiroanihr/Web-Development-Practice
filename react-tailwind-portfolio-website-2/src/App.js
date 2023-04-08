import { useState, useEffect } from "react";
import {
  Navbar,
  DotGroup,
  Landing,
  MySkills,
  Projects,
  Testimonials,
  Contact,
  Footer,
} from "./scenes";
import { LineGradient } from "./components";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  // State to determine what pages we are on
  const [selectedPage, setSelectedPage] = useState("home");
  // State to determine if window is at top of the page
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  // Set Media Query for Large Devices
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  // Add an event listener to the window object for the scroll event
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

      {/* Home */}
      <div className="w-5/6 mx-auto">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      {/* Skills */}
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <MySkills />
      </div>

      {/* Projects */}
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      {/* Testimonials */}
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Testimonials />
      </div>

      {/* Contact */}
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
