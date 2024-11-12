import React from "react";
import { useNavigate } from "react-router-dom";
const Camera = () => {
  const navigate = useNavigate();
  return (
    <div>
      Working on it...
      <button onClick={() => navigate("/menu")}>Jump to menu</button>
    </div>
  );
};

export default Camera;
