import React from "react";
import "./hero.css";

function HeroComponent() {
  return (
    <div class="hero-section">
      <div className="hero-bg-container">
        <img
          id="background-img"
          src={require("../../assets/hero/background.jpeg")}
          alt=""
        />
      </div>
      <div className="content">
        <div className="content-left">
          <img
            id="profile"
            src={require("../../assets/hero/profile.jpg")}
            alt=""
          />
          <div>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "bolder",
                color: "white",
                margin: "0",
              }}
            >
              Pratik Fuse
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                color: "white",
                margin: "0",
              }}
            >
              @pratikfuse
            </p>
          </div>
        </div>
        <a
          href="https://www.instagram.com/pratik_fuse_45/"
          className="content-right"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          <p style={{ margin: "0" }}>follow me on instagram</p>
        </a>
      </div>
    </div>
  );
}

export default HeroComponent;
