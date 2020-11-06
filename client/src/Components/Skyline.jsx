import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  showLinks,
  showPort,
  showAccounts,
  showName,
  showWheel
} from "../actions/homeActions.js";
import nodeCircle from "../images/nodeCircle.png";

import illustratorCircle from "../images/illustratorCircle.png";
import photoshopCircle from "../images/photoshopCircle.png";
import bootstrapCircle from "../images/bootstrapCircle.png";
import reactCircle from "../images/reactCircle.png";
import mongoCircle from "../images/mongoCircle.png";
import expressCircle from "../images/expressCircle.png";
import vueCircle from "../images/vueCircle.png";
import angularCircle from "../images/angularCircle.png";
import reactNoCircle from "../images/reactNoCircle.png";
import CarouselSpring from "./CarouselSpring";
import purpleClouds from "../images/purpleClouds.png";
import Links from "./Links.jsx";
import NavLinks from "./NavLinks.jsx";
import { data } from "../data/data";
import Name from "./Name.jsx";
import fullStackDev from "../images/fullStackDev.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Skyline(props) {
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[5]);
  const [appAddress, setAppAddress] = useState(property.name);
  const [appColor, setAppColor] = useState(property.color);
  const [showLinks, setShowLinks] = useState(props.home.showLinks);
  let [index, setIndex] = useState(0);

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

  useEffect(() => {
    setShowLinks(props.home.showLinks);
    console.log("show changed");
  }, [props.home.showLinks]);

  return (
    <div className="skyline">
      {" "}
      {/* div of 100 vw and 100 vh */}
      <div className="cloudsBox">
        <img
          src={purpleClouds}
          className={
            props.home.showAccounts ? "clouds-fade-in" : "clouds-fade-out"
          }
        ></img>
      </div>
      {/* start of projects modal */}
      <div className={props.home.showPort ? "fade-port-in" : "fade-port-out"}>
        <button
          className="exit-button2"
          onClick={() => {
            props.showLinks();
            props.showPort();
            props.showAccounts();
            props.showName();
          }}
        >
          X
        </button>

        <CarouselSpring
          showNavigation={false}
          nextProperty={nextProperty}
          prevProperty={prevProperty}
          name={property.name}
          color={property.color}
          appLink={property.app}
          gitLink={property.github}
          description={property.description}
          note1={property.note1}
          note2={property.note2}
          note3={property.note3}
          show={showLinks}
          index={property.index}
        />
      </div>
      {/* End of projects modal */}
      {props.home.showWheel ? (
        <TransitionGroup component={null} exit={false}>
          <CSSTransition timeout={500} key={"a"}>
            <div className="skillsBox-fadeIn">
              <button
                className="exit-button"
                onClick={() => {
                  props.showWheel();

                  props.showName();
                }}
              >
                X
              </button>
              <div className="logo1box">
                <img src={nodeCircle} className="rotateLogo1"></img>
              </div>
              <div className="logo2box">
                <img src={photoshopCircle} className="rotateLogo2"></img>
              </div>
              <div className="logo3box">
                <img src={illustratorCircle} className="rotateLogo3"></img>
              </div>
              <div className="logo4box">
                <img src={bootstrapCircle} className="rotateLogo4"></img>
              </div>
              <div className="logo5box">
                <img src={angularCircle} className="rotateLogo5"></img>
              </div>
              <div className="logo6box">
                <img src={mongoCircle} className="rotateLogo6"></img>
              </div>
              <div className="logo7box">
                <img src={expressCircle} className="rotateLogo7"></img>
              </div>
              <div className="logo8box">
                <img src={vueCircle} className="rotateLogo8"></img>
              </div>
              <div className="centerLogoBox">
                <img src={reactNoCircle} className="centerLogo"></img>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      ) : null}
      <Name />
      <NavLinks />
      <Links />
    </div> /* end of skyline */
  );
}

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, {
  showLinks,
  showPort,
  showAccounts,
  showName,
  showWheel
})(Skyline);
