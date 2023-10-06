import React from "react";

function Backend() {
  return (
    <div
      style={{
        padding: "15px",
      }}
    >
      <h1 style={{ color: "white" }}>BackEnd</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <div className="backendCard" style={{}}>
          <img
            style={{ width: "250px", borderRadius: "10px" }}
            src="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fbackend%2Fnodejs.webp&w=1920&q=75"
            alt=""
          />
          <h2 style={{ color: "white" }}>Node Js</h2>
        </div>
        <div className="backendCard">
          <img
            style={{ width: "250px", height: "150px", borderRadius: "10px" }}
            src="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fbackend%2Fexpress.png&w=1920&q=75"
            alt=""
          />
          <h2 style={{ color: "white" }}>Express Js</h2>
        </div>
      </div>
    </div>
  );
}

export default Backend;
