import React, { useState } from "react";
import "./App.css";

import sbabLogo from "./assets/sbab-logo.png";
import figmaLogo from "./assets/figma-logo.png";
import miroLogo from "./assets/miro-logo.png";

function App() {
  const [currentSection, setCurrentSection] = useState("welcome");

  return (
    <div className="app">
      <header className="app-header" role="banner">
        <img src={sbabLogo} alt="SBAB Logo" className="logo" />
      </header>

      {currentSection === "welcome" && (
        <main className="welcome-section" role="main">
          <h1>Välkommen till mitt projekt!</h1>
          <button
            className="btn primary-btn"
            onClick={() => setCurrentSection("links")}
            aria-label="Gå till arbetslänkar"
          >
            Gå vidare
          </button>
        </main>
      )}

      {currentSection === "links" && (
        <main className="links-section" role="main">
          <button
            className="btn figma-btn"
            onClick={() =>
              window.open(
                "https://www.figma.com/design/E8yFqLvCbnhaJ7dC7KLqcd/Notiscenter?node-id=8-5329&t=uK8GHOogxRkn7h7u-1",
                "_blank",
                "noopener noreferrer"
              )
            }
            aria-label="Öppna Figma"
          >
            <img
              src={figmaLogo}
              alt=""
              className="btn-logo"
              aria-hidden="true"
            />
            Figma
          </button>
          <button
            className="btn miro-btn"
            onClick={() =>
              window.open(
                "https://miro.com/app/board/uXjVIyjkbEc=/?share_link_id=734031037",
                "_blank",
                "noopener noreferrer"
              )
            }
            aria-label="Öppna Miro"
          >
            <img
              src={miroLogo}
              alt=""
              className="btn-logo"
              aria-hidden="true"
            />
            Miro
          </button>
          <button
            className="btn back-btn"
            onClick={() => setCurrentSection("welcome")}
            aria-label="Tillbaka till startsidan"
          >
            Tillbaka
          </button>
        </main>
      )}
    </div>
  );
}

export default App;
