import React from "react";
import FrontendCard from "./FrontendCard";

let cardsContainerStyle = {
  display: "flex",
  gap: "30px",
};

function Frontend() {
  return (
    <div style={{ padding: "15px" }}>
      <h1 style={{ color: "white" }}>FrontEnd</h1>
      <div className="cardsContaienr" style={cardsContainerStyle} id="frontend">
        <FrontendCard
          imageLink="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fhtmlcss.jpeg&w=1920&q=75"
          techName="HTML,CSS"
        />
        <FrontendCard
          imageLink="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Freactjs.jpg&w=1920&q=75"
          techName="React Js"
        />
        <FrontendCard
          imageLink="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Ffrontend%2Fjsts.jpeg&w=1920&q=75"
          techName="Javascript,TypeScript"
        />
      </div>
    </div>
  );
}

export default Frontend;
