import "./App.css";
import { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Camera from "./pages/Camera";
import Menu from "./pages/ListMenu";
import MenuItemDetail from "./pages/MenuItemDetail";
import Onboarding from "./pages/Onboarding";
import Personalize from "./pages/Personalize";
import Recommendation from "./pages/Recommendation";

function App() {
  useEffect(() => {
    // Load Google Analytics Script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-96HKZNZV1J`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-96HKZNZV1J");
  }, []);

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
