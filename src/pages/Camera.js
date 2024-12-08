import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

import menuImage from "../assets/menu.jpg";
import BottomBar from "../components/BottomBar.js";
import TopBar from "../components/TopBar.js";

const MobileMenu = () => {
  const wrapperStyle = {
    margin: "auto",
    position: "relative",
    width: "100vw",
    height: "750px",
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
  };

  const mainContainerStyle = {
    height: "calc(100vh - 80px)",
    display: "flex",
    backgroundColor: "#444444",
  };

  const contentContainerStyle = {
    position: "relative",
    width: "1200px",
    height: "700px",
    minWidth: "1200px", // Forces horizontal scroll on mobile
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.3)",
  };

  const linkStyle = {
    display: "block",
    padding: "4px 8px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    textDecoration: "none",
    color: "white",
    borderRadius: "4px",
    fontSize: "14px",
    transition: "background-color 0.3s",
    whiteSpace: "nowrap",
    touchAction: "manipulation",
    marginTop: "3.5px",
    marginBottom: "3.5px",
  };

  const linkStyle_thin = {
    display: "block",
    padding: "4px 8px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    textDecoration: "none",
    color: "white",
    borderRadius: "4px",
    fontSize: "14px",
    transition: "background-color 0.3s",
    whiteSpace: "nowrap",
    touchAction: "manipulation",
    marginTop: "1.5px",
    marginBottom: "1.5px",
  };

  const linkStyle_broad = {
    display: "block",
    padding: "4px 8px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    textDecoration: "none",
    color: "white",
    borderRadius: "4px",
    fontSize: "14px",
    transition: "background-color 0.3s",
    whiteSpace: "nowrap",
    touchAction: "manipulation",
    marginTop: "18px",
    marginBottom: "18px", // Consistent spacing between items
  };

  const sectionStyle = {
    position: "absolute",
    pointerEvents: "all",
    display: "flex",
    flexDirection: "column",
    gap: "6px", // Consistent gap between items
  };

  const tipStyle = {
    position: "sticky",
    inset: 0,
    backgroundColor: "#111111",
    opacity: 0.7,
    borderRadius: "32px",
    width: "300px",
    height: "85px",
    padding: "20px",
    top: "81%",
    color: "#FFFFFF",
    left: "10%",
    display: "flex",
    gap: "10px",
  };

  const [tipVisible, setTipVisible] = useState(true);

  return (
    <div style={mainContainerStyle}>
      <div style={wrapperStyle} className="menu-wrapper">
        <div style={contentContainerStyle}>
          <img src={menuImage} alt="Boucherie Menu" style={imageStyle} />

          <div style={{ position: "absolute", inset: 0, width: "100%" }}>
            <TopBar />
          </div>

          <div style={{ position: "absolute", inset: 0, paddingBottom: "0" }}>
            {/* Left Side - Hors D'oeuvres */}
            <div style={{ ...sectionStyle, top: "35%", left: "5%" }}>
              <a href="#/menu-item/1" style={linkStyle}>
                Soupe à l'Oignon
              </a>
              <a href="#/menu-item/2" style={linkStyle}>
                Bisque de Homard
              </a>
              <a href="#/menu-item/3" style={linkStyle}>
                La Salade Niçoise
              </a>
              <a href="#/menu-item/4" style={linkStyle}>
                Prime Steak Tartare
              </a>
              <a href="#/menu-item/5" style={linkStyle}>
                Les Escargots
              </a>
              <a href="#/menu-item/6" style={linkStyle}>
                Wagyu Carpaccio
              </a>
              <a href="#/menu-item/7" style={linkStyle}>
                Salade Mesclun au Croquette de Chèvre
              </a>
              <a href="#/menu-item/8" style={linkStyle}>
                Salade César
              </a>
            </div>

            {/* Center-Left - Les Tartines & Les Sucrés */}
            <div style={{ ...sectionStyle, top: "10%", left: "30%" }}>
              <a href="#/menu-item/9" style={linkStyle}>
                Mousse de Foie Gras
              </a>
              <div className="tartines" style={{ marginTop: "40px" }}>
                <a href="#/menu-item/10" style={linkStyle_broad}>
                  Chèvre
                </a>
                <a href="#/menu-item/11" style={linkStyle}>
                  Saumon Fumé
                </a>
                <a href="#/menu-item/12" style={linkStyle_broad}>
                  Avocat et Tomate
                </a>
              </div>
              <div className="sucres" style={{ marginTop: "90px" }}>
                <a href="#/menu-item/13" style={linkStyle}>
                  Chia Seed Pudding
                </a>
                <a href="#/menu-item/14" style={linkStyle_broad}>
                  Yogurt Parfait
                </a>
                <a href="#/menu-item/15" style={linkStyle_broad}>
                  Boucherie Waffles
                </a>
                <a href="#/menu-item/16" style={linkStyle_broad}>
                  Pain Perdu
                </a>
              </div>
            </div>

            {/* Center - Les Oeufs */}
            <div style={{ ...sectionStyle, top: "30%", left: "53.5%" }}>
              <a href="#/menu-item/17" style={linkStyle}>
                Eggs Benedict
              </a>
              <a href="#/menu-item/18" style={linkStyle}>
                Eggs Norwegian
              </a>
              <a href="#/menu-item/19" style={linkStyle}>
                Steak aux Oeufs
              </a>
              <a href="#/menu-item/20" style={linkStyle_broad}>
                Omelette au Choix
              </a>
              <a href="#/menu-item/21" style={linkStyle}>
                Oeufs Meurette
              </a>
            </div>

            {/* Right Side - Plats Principaux & Les Sandwiches */}
            <div style={{ ...sectionStyle, top: "18%", right: "15%" }}>
              <a href="#/menu-item/22" style={linkStyle}>
                Steak Frites
              </a>
              <a href="#/menu-item/23" style={linkStyle_thin}>
                Moules Dijonnaise
              </a>
              <a href="#/menu-item/24" style={linkStyle_thin}>
                Coq au Vin
              </a>
              <a href="#/menu-item/25" style={linkStyle_thin}>
                Saumon Rôti
              </a>
              <a href="#/menu-item/26" style={linkStyle_thin}>
                Les St Jacques Rôties
              </a>
              <div className="sandwiches" style={{ marginTop: "38px" }}>
                <a href="#/menu-item/27" style={linkStyle}>
                  Le Croque Monsieur
                </a>
                <a href="#/menu-item/28" style={linkStyle}>
                  Le Croque Madame
                </a>
                <a href="#/menu-item/29" style={linkStyle_broad}>
                  Sandwich au Boeuf
                </a>
                <a href="#/menu-item/30" style={linkStyle_broad}>
                  Boucherie Burger
                </a>
                <a href="#/menu-item/31" style={linkStyle_broad}>
                  Wagyu Burger
                </a>
              </div>
            </div>

            {tipVisible && (
              <div style={{ ...tipStyle }}>
                <span style={{ margin: "auto" }}>
                  Tip: Click on the highlighted areas to view individual items
                </span>
                <Icon
                  name="close"
                  onClick={() => setTipVisible(false)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}
          </div>
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default MobileMenu;
