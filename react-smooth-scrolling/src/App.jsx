import React from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import Destinations from "./sections/Destinations";
import Hotels from "./sections/Hotels";
import Flights from "./sections/Flights";
import Bookings from "./sections/Bookings";
import NavProvider from "./context/NavContext";

function App() {
  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <Destinations />
        <Hotels />
        <Flights />
        <Bookings />
      </NavProvider>
    </div>
  );
}

export default App;
