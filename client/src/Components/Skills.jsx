import React from "react";
import nodeCircle from "../images/nodeCircle.png";
import htmlCircle from "../images/htmlCircle.png";
import cssCircle from "../images/cssCircle.png";
import bootstrapCircle from "../images/bootstrapCircle.png";
import reactCircle from "../images/reactCircle.png";
import mongoCircle from "../images/mongoCircle.png";
import expressCircle from "../images/expressCircle.png";
import vueCircle from "../images/vueCircle.png";

export default function Skills() {
  return (
    <div>
      <div className="skillsBox-fadeIn">
        <div className="logo1box">
          <img src={nodeCircle} className="rotateLogo1"></img>
        </div>
        <div className="logo2box">
          <img src={htmlCircle} className="rotateLogo2"></img>
        </div>
        <div className="logo3box">
          <img src={cssCircle} className="rotateLogo3"></img>
        </div>
        <div className="logo4box">
          <img src={bootstrapCircle} className="rotateLogo4"></img>
        </div>
        <div className="logo5box">
          <img src={reactCircle} className="rotateLogo5"></img>
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
      </div>
      <div className="centerLogoBox" id="centerLogoBox">
        "bobo"
      </div>
    </div>
  );
}
