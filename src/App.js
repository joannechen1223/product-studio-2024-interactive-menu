import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Camera from "./pages/Camera";
import Home from "./pages/Home";
import Menu from "./pages/ListMenu";
import MenuItemDetail from "./pages/MenuItemDetail";
import Onboarding from "./pages/Onboarding";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rec" element={<Recommendation />} />
        <Route path="/menu-item/:itemId" element={<MenuItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
