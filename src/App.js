import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Camera from "./pages/Camera";
import Menu from "./pages/ListMenu";
import MenuItemDetail from "./pages/MenuItemDetail";
import Onboarding from "./pages/Onboarding";
import Personalize from "./pages/Personalize";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Camera />} />
        <Route path="/personalize" element={<Personalize />} />
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
