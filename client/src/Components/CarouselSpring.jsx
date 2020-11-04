import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-spring-3d-carousel";
import { uuid } from "uuidv4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { white } from "color-name";
import drumPNG from "../images/drumPNG.png";
import quotesBPNG from "../images/quotesBPNG.png";
import markownPNG from "../images/markownPNG.png";
import clockBPNG from "../images/clockBPNG.png";
import calculatorPNG from "../images/calculatorPNG.png";
import fathackPNG from "../images/fathackPNG.png";
import greenBG1 from "../images/greenBG1.png";
import purpleClouds from "../images/purpleClouds.png";
import parsley from "../images/parsley.jpg";
import swirls5 from "../images/swirls5.png";
import clockBG from "../images/clockBG.jpg";
import quotesBG from "../images/quotesBG.jpg";
import drumBG from "../images/drumBG.jpg";
import mountains from "../images/mountains.jpg";
import lettuceBlur4 from "../images/lettuceBlur4.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function CarouselSpring({
  home,
  nextProperty,
  prevProperty,
  name,
  color,
  appLink,
  gitLink,
  description,
  note1,
  note2,
  note3,
  show,
  index
}) {
  const rightRef = useRef();
  const [goToSlide, setGoToSlide] = useState(0);

  const nextFunc = nextProperty;
  const prevFunc = prevProperty;

  const slides = [
    {
      key: uuid(),
      content: (
        <a
          href="https://fathacker.herokuapp.com/"
          className="anchor"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: home.showPort ? "block" : "none" }}
        >
          <img src={fathackPNG} alt="1" className="phone" />
        </a>
      )
    },
    {
      key: uuid(),
      content: (
        <a
          href="https://gabehaus.github.io/DrumMachine/"
          className="anchor"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: home.showPort ? "block" : "none" }}
        >
          <img src={drumPNG} alt="2" className="phone" />
        </a>
      )
    },
    {
      key: uuid(),
      content: (
        <a
          href="https://gabehaus.github.io/ReactQuotes3/"
          className="anchor"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: home.showPort ? "block" : "none" }}
        >
          <img src={quotesBPNG} alt="3" className="phone" />
        </a>
      )
    },
    {
      key: uuid(),
      content: (
        <a
          href="https://gabehaus.github.io/markdownViewer/"
          className="anchor"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: home.showPort ? "block" : "none" }}
        >
          <img src={markownPNG} alt="4" className="phone" />
        </a>
      )
    },
    {
      key: uuid(),
      content: (
        <a
          href="https://gabehaus.github.io/PomodoroClock/"
          className="anchor"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: home.showPort ? "block" : "none" }}
        >
          <img src={clockBPNG} alt="5" className="phone" />
        </a>
      )
    },
    {
      key: uuid(),
      content: (
        <a
          href="https://gabehaus.github.io/calculator/"
          className="anchor"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: home.showPort ? "block" : "none" }}
        >
          <img src={calculatorPNG} alt="1" className="phone" />
        </a>
      )
    }
  ];

  const backgrounds = [
    drumBG,
    quotesBG,
    mountains,
    clockBG,
    swirls5,
    lettuceBlur4
  ];

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  function handleButtonPress(direction) {
    if (direction === "right") {
      setGoToSlide(goToSlide => goToSlide + 1);
      nextProperty();
    } else if (direction === "left") {
      setGoToSlide(goToSlide => goToSlide - 1);
      prevProperty();
      console.log(direction);
    }
  }

  const handleKeyPress = event => {
    const { key, keyCode } = event;

    if (keyCode === 39) {
      handleButtonPress("right");
    }

    if (keyCode === 37) {
      handleButtonPress("left");
    }
  };

  return (
    <div className="slides">
      <div className="slide-title">
        <div className="app-title" style={{ color: color }}>
          {name}
        </div>
      </div>
      <div className="slide-links" target="_blank">
        <a className="app-link">INTRO + CODING DIARY</a>
        <br />
        <a className="app-link" href={gitLink} target="_blank">
          VIEW CODE
        </a>
        <br />
        <a className="app-link" href={appLink} target="_blank">
          VIEW APP
        </a>
      </div>
      <div className="description-box">
        <div className="description-text" style={{ color: color }}>
          {description}
        </div>
      </div>
      <div className="notes-box">
        <ul className="notes-list">
          <li>{note1}</li>
          <br />
          <li>{note2}</li>
          <br />
          <li>{note3}</li>
        </ul>
      </div>
      <div
        className={show ? "carouselBGbox-fadeIn" : "carouselBGbox-fadeOut"}
        key={show}
      >
        <TransitionGroup component={null} exit={false}>
          <CSSTransition timeout={500} key={backgrounds[index]}>
            <img src={backgrounds[index]} className="appBGimage"></img>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="carouselBox">
        <Carousel
          className="computer"
          slides={slides}
          showNavigation={false}
          offsetRadius={0}
          goToSlide={goToSlide}
        />{" "}
      </div>

      <div className="button-box">
        <button
          className="prev-button"
          onClick={() => {
            handleButtonPress("left");
          }}
        >
          <FontAwesomeIcon
            icon={faCaretLeft}
            style={{ height: "80px", width: "80px" }}
          />
        </button>
        <button
          className="next-button"
          onClick={() => {
            handleButtonPress("right");
          }}
        >
          <FontAwesomeIcon
            icon={faCaretRight}
            style={{ height: "80px", width: "80px" }}
          />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, {})(CarouselSpring);
