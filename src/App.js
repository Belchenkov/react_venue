import React from 'react';
import { Element } from 'react-scroll';

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venue_info";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer.js";

import './resources/styles.css';

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venue-info">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
