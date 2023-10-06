import React from "react";
import "./projectCard.css";
import { FaPizzaSlice, FaClock, FaTreeCity } from "react-icons/fa6";

const projectContainerStyle = {
  padding: "15px",
  color: "white",
};
function Project() {
  return (
    <div
      style={projectContainerStyle}
      id="projects"
      className="project-container"
    >
      <p style={{ fontSize: "30px", fontWeight: "bold" }}>Projects</p>
      <div
        id="projectCardContainer"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "30px",
        }}
      >
        <a
          href="https://github.com/pratiikfuse/Spotify_Clone"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            backgroundColor: "rgba(28, 27, 35, 1)",
            padding: "20px",
          }}
        >
          <div style={{ backgroundColor: `gray` }} id="imageContainer">
            <img src="/spotify.png" alt="" />
          </div>
          <div>
            <p style={{ margin: "0", color: "white", fontWeight: "bold" }}>
              SPotify Clone
            </p>
            <p style={{ margin: "0", color: "rgba(68, 68, 72, 1)" }}>
              HTML5,CSS3,Javascript
            </p>
          </div>
        </a>

        <a
          href="https://github.com/pratiikfuse/Interactive-food-delivery"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            backgroundColor: "rgba(28, 27, 35, 1)",
            padding: "20px",
          }}
        >
          <div style={{ backgroundColor: `gray` }} id="imageContainer">
            <FaPizzaSlice color="white" style={{ width: "20px" }} alt="" />
          </div>
          <div>
            <p style={{ margin: "0", color: "white", fontWeight: "bold" }}>
              Food Website
            </p>
            <p style={{ margin: "0", color: "rgba(68, 68, 72, 1)" }}>
              HTML5,CSS3,Javascript
            </p>
          </div>
        </a>

        <a
          href="https://github.com/pratiikfuse/Timer"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            backgroundColor: "rgba(28, 27, 35, 1)",
            padding: "20px",
          }}
        >
          <div style={{ backgroundColor: `gray` }} id="imageContainer">
            <FaClock color="white" style={{ width: "20px" }} alt="" />
          </div>
          <div>
            <p style={{ margin: "0", color: "white", fontWeight: "bold" }}>
              Timer
            </p>
            <p style={{ margin: "0", color: "rgba(68, 68, 72, 1)" }}>
              HTML5,CSS3,Javascript
            </p>
          </div>
        </a>

        <a
          href="https://github.com/pratiikfuse/AirbnbClone"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            backgroundColor: "rgba(28, 27, 35, 1)",
            padding: "20px",
          }}
        >
          <div style={{ backgroundColor: `gray` }} id="imageContainer">
            <FaTreeCity color="white" style={{ width: "20px" }} alt="" />
          </div>
          <div>
            <p style={{ margin: "0", color: "white", fontWeight: "bold" }}>
              AirBnb Clone
            </p>
            <p style={{ margin: "0", color: "rgba(68, 68, 72, 1)" }}>
              HTML5,CSS3,Javascript
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Project;
