import React from 'react';

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venue_info";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";

import './resources/styles.css';

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
      <Pricing />
    </div>
  );
}

export default App;
