import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Camera from "./pages/Camera";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </Router>
  );
}

export default App;
