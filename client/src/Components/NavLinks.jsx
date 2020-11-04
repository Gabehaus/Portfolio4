import React from "react";
import { connect } from "react-redux";
import {
  showLinks,
  showPort,
  showAccounts,
  showName,
  showWheel
} from "../actions/homeActions.js";
import { NavLink } from "reactstrap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <ul
      className={props.home.showLinks ? "fade-links-in" : "fade-links-out"}
      id="link-wrapper"
    >
      <Link to="/" className="link ">
        <button
          className={
            !props.home.showWheel
              ? "linkButton coloredLink"
              : "linkButton greyColoredLink"
          }
          onClick={() => {
            props.showLinks();
            props.showPort();
            props.showAccounts();
            props.showName();
          }}
        >
          PROJECTS
        </button>
      </Link>

      <div to="/skills" className="link ">
        {" "}
        <button
          href="/skills"
          className={
            !props.home.showWheel
              ? "linkButton blackLink"
              : "linkButton greyBlackLink"
          }
          onClick={() => {
            props.showWheel();

            props.showName();
          }}
        >
          SKILLS
        </button>
      </div>
      <Link to="/contact" className="link  ">
        <button
          className={
            !props.home.showWheel
              ? "linkButton blackLink"
              : "linkButton greyBlackLink"
          }
        >
          CONTACT
        </button>
      </Link>
      <Link to="/skills" className="link ">
        <button
          className={
            !props.home.showWheel
              ? "linkButton coloredLink"
              : "linkButton greyColoredLink"
          }
        >
          RESUME
        </button>
      </Link>
    </ul>
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
})(NavLinks);
