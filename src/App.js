import React from "react";
import Player from "./components/WhoPlays";
import Navbar from "./components/Navbar";
import Play from "./components/Play";
import Tickets from "./components/Tickets";
import Footer from "./components/Footer";
import { StateContext } from "./context/StateContext";

const App = () => {
  return (
    <StateContext>
      <Navbar />
      <Play />
      <Player />
      <Tickets />
      <Footer />
    </StateContext>
  );
};

export default App;
