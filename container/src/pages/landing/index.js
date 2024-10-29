import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Landing</h1>
      <button onClick={()=>navigate('/movies')}>Movies</button>
    </div>
  );
}

export default Landing;
