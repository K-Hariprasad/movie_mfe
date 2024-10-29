import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    alert("Redirecting to login...");
  };

  return (
    <header className="header">
      <div>
        <h1 className="title" onClick={() => navigate("/")}>
          Movie App
        </h1>
      </div>
      <button onClick={handleLogin} className="loginButton">
        Login
      </button>
    </header>
  );
};

export default Header;
