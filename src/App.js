import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter basename="/product-studio-2024-interactive-menu">
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
