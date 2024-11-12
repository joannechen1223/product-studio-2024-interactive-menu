import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Camera from "./pages/Camera";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
function App() {
  return (
    <BrowserRouter basename="/product-studio-2024-interactive-menu">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
