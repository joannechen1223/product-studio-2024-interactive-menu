import React from "react";

import menuImage from "../assets/menu.jpg";
import BottomBar from "../components/BottomBar.js";
import TopBar from "../components/TopBar.js";

const MobileMenu = () => {
  const wrapperStyle = {
    margin: "auto",
    position: "relative",
    width: "100vw",
    height: "700px",
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
  };

  const mainContainerStyle = {
    height: "100vh",
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
    marginTop: "10px",
    marginBottom: "10px",
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
  };

  return (
    <div style={mainContainerStyle}>
      <div style={wrapperStyle} className="menu-wrapper">
        <div style={contentContainerStyle}>
          <img src={menuImage} alt="Boucherie Menu" style={imageStyle} />

          <div style={{ position: "absolute", inset: 0, width: "100%" }}>
            <TopBar menuType="pic" />
          </div>

          <div style={{ position: "absolute", inset: 0 }}>
            {/* Hors D'oeuvres Left */}
            <div style={{ ...sectionStyle, top: "18%", left: "5%" }}>
              <a href="/menu/soupe" style={linkStyle}>
                Soupe a l'Oignon
              </a>
              <a href="/menu/escargots" style={linkStyle}>
                Escargots
              </a>
              <a href="/menu/tartare" style={linkStyle}>
                Steak Tartare
              </a>
              <a href="/menu/foie" style={linkStyle_broad}>
                Mousse de Foie
              </a>
              <a href="/menu/pate" style={linkStyle_broad}>
                Pâté en Croûte
              </a>
              <a href="/menu/granola" style={linkStyle_broad}>
                Granola
              </a>
              <a href="/menu/fruits" style={linkStyle}>
                Salade de Fruits
              </a>
            </div>

            {/* Hors D'oeuvres Center-Left */}
            <div style={{ ...sectionStyle, top: "22%", left: "27%" }}>
              <a href="/menu/pain-perdu" style={linkStyle}>
                Pain Perdu
              </a>
              <a href="/menu/salade-nicoise" style={linkStyle}>
                Salade Niçoise
              </a>
              <a href="/menu/saumon-ecosse" style={linkStyle}>
                Saumon D'Ecosse
              </a>
              <a href="/menu/salade-lyonnaise" style={linkStyle_broad}>
                Salade Lyonnaise
              </a>
            </div>

            {/* Les Oeufs Center-Right */}
            <div style={{ ...sectionStyle, top: "29%", left: "53%" }}>
              <a href="/menu/croque" style={linkStyle}>
                Le Croque Madame
              </a>
              <a href="/menu/toast" style={linkStyle_broad}>
                Toast Avocat et Tomate
              </a>
              <a href="/menu/benedict" style={linkStyle_broad}>
                Eggs Benedict
              </a>
              <a href="/menu/norwegian" style={linkStyle}>
                Eggs Norwegian
              </a>
              <a href="/menu/steak-oeufs" style={linkStyle}>
                Steak aux Oeufs
              </a>
              <a href="/menu/omelette" style={linkStyle}>
                Omelette au Choix
              </a>
              <a href="/menu/brandade" style={linkStyle}>
                Brandade de Morue
              </a>
            </div>

            {/* Plats Principaux Right */}
            <div style={{ ...sectionStyle, top: "17%", right: "10%" }}>
              <a href="/menu/saumon" style={linkStyle}>
                Saumon à la Poêle
              </a>
              <a href="/menu/canard" style={linkStyle}>
                Cuisse De Canard Confite
              </a>
              <a href="/menu/sandwich" style={linkStyle_broad}>
                Steak Sandwich
              </a>
              <a href="/menu/burger" style={linkStyle_broad}>
                Boucherie Burger
              </a>
              <a href="/menu/beyond" style={linkStyle_broad}>
                Boucherie Beyond Burger
              </a>
              <a href="/menu/wagyu" style={linkStyle_broad}>
                Wagyu Burger
              </a>
              <a href="/menu/frites" style={linkStyle}>
                Steak Frites
              </a>
            </div>

            <div style={{ ...tipStyle }}>
              <span style={{ margin: "auto" }}>
                Tip: Click on the highlighted areas to view individual items
              </span>
            </div>

            <BottomBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
