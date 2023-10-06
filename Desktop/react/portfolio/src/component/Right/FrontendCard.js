import React from "react";

function FrontendCard({ imageLink, techName }) {
  return (
    <div className="card">
      <img
        style={{
          width: "260px",
          borderRadius: "10px",
        }}
        src={imageLink}
        alt="HTML,CSS"
      />
      <h3 style={{ color: "white" }}>{techName}</h3>
    </div>
  );
}

export default FrontendCard;
