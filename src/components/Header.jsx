import React from "react";
import { Link } from "react-router-dom";
import sbabLogo from "../assets/sbab-logo.svg"; // du behöver lägga loggan i public eller assets

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#1A237E] text-white shadow-md">
      <div className="flex items-center space-x-3">
        <img src={sbabLogo} alt="SBAB logotyp" className="h-8 w-auto" />
        <h1 className="text-xl font-semibold">SBAB Notiscenter</h1>
      </div>
      <nav>
        <Link
          to="/prototypes"
          className="bg-white text-[#1A237E] font-medium px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Gå till prototyper
        </Link>
      </nav>
    </header>
  );
}

export default Header;
