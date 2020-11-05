import React, { useState } from "react";

import { Provider } from "react-redux";
import { data } from "./data/data";
import Skyline from "./Components/Skyline.jsx";
import Contact from "./Components/Contact.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cyborg/bootstrap.css";
import "./App.css";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  const [linksDisplay, setLinksDisplay] = useState(true);
  const [accountsDisplay, setAccountsDisplay] = useState(true);
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[5]);
  const [appAddress, setAppAddress] = useState(property.name);
  const [appColor, setAppColor] = useState(property.color);

  //const [goToSlide, setGoToSlide] = useState(0);

  let portStyleOne = {
    position: "absolute",
    top: "2px",
    height: "40vh",
    left: "5%",
    width: "90%",
    transition: "width 2s",
    background: "red",
    zIndex: "4",
    display: "block"
  };

  if (true) {
    portStyleOne = {
      position: "absolute",
      top: "0px",
      height: "80vh",
      left: "5%",
      width: "0%",
      transition: "width 2s",
      background: "red",
      zIndex: "4",
      display: "none"
    };
  }

  function nextProperty() {
    const newIndex = property.index + 1;
    if (property.index < properties.length - 1) {
      setProperty(data.properties[newIndex]);
    } else {
      setProperty(data.properties[0]);
    }
  }

  function prevProperty() {
    const newIndex = property.index - 1;
    if (property.index > 0) {
      setProperty(data.properties[newIndex]);
    } else {
      setProperty(data.properties[properties.length - 1]);
    }
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Skyline} />
        <Route exact path="/contact" component={Contact} />
        {/* end of app */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
