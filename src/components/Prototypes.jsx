import React from "react";
import figmaLogo from "../assets/figma-logo.svg";
import miroLogo from "../assets/miro-logo.svg";

function Prototypes() {
  return (
    <main className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-6">
      <h2 className="text-2xl font-bold">Utforska designlösningarna</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.figma.com/file/YOUR-FIGMA-LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#F24E1E] text-white px-6 py-4 rounded-md shadow hover:bg-[#c63e13] focus:outline-none focus:ring-2 focus:ring-[#F24E1E]"
        >
          <img src={figmaLogo} alt="Figma logotyp" className="h-6 w-6" />
          Gå till Figma
        </a>
        <a
          href="https://miro.com/app/board/YOUR-MIRO-LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#050038] text-white px-6 py-4 rounded-md shadow hover:bg-[#07025f] focus:outline-none focus:ring-2 focus:ring-[#050038]"
        >
          <img src={miroLogo} alt="Miro logotyp" className="h-6 w-6" />
          Gå till Miro
        </a>
      </div>
    </main>
  );
}

export default Prototypes;
