import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>IGSA</h1>
      <p>
        IGSA is a non-partisan volunteer student organization committed to
        supporting and serving the needs and interests of the Indian community
        at the University of Michigan.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          JOIN US
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          EVENTS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
