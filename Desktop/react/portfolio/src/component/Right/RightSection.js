import React from "react";
import "./rightsection.css";
import HeroComponent from "./HeroComponent";
import Project from "./Project";
import Frontend from "./Frontend";
import Backend from "./Backend";

function RightSection() {
  return (
    <div className="right-section">
      <HeroComponent />
      {/*projects Component*/}
      <Project />
      <Frontend />
      <Backend />
    </div>
  );
}

export default RightSection;
