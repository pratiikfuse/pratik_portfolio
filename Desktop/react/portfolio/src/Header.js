import React from "react";
import "./App.css";
function Header() {
  return (
    <div
      style={{
        backgroundColor: "#14131a",
        paddingLeft: "40px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "20px",
        paddingTop: "20px",
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <div className="greenDot"></div>
        <div className="greenDot"></div>
      </div>
      <button id="contact-me" style={{ color: "white" }}>
        Contact me{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>
    </div>
  );
}

export default Header;
