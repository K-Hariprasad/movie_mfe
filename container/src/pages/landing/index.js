import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="app-title">Welcome to MovieApp</h1>
        <div className="button-group">
          <button
            onClick={() => navigate("/movies")}
            className="button movies-button"
          >
            MOVIES
          </button>
          <button className="button sign-in-button">SIGN IN</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
