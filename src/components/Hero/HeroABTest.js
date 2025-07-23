import React, { useState } from "react";
import HeroVariantA from "./HeroVariantA";
import HeroVariantB from "./HeroVariantB";
import "./hero.css";

const HeroABTest = () => {
  const [variant, setVariant] = useState("A");

  return (
    <div className="relative">
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 xl:top-8 xl:right-8 z-50 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-1.5 sm:p-2 xl:p-2.5 flex gap-1 xl:gap-1.5">
        <button
          onClick={() => setVariant("A")}
          className={`w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 rounded-full transition-all duration-300 text-sm sm:text-base xl:text-lg font-semibold ${
            variant === "A"
              ? "bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg scale-110"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          title="Wariant A - Elegancki"
        >
          A
        </button>
        <button
          onClick={() => setVariant("B")}
          className={`w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 rounded-full transition-all duration-300 text-sm sm:text-base xl:text-lg font-semibold ${
            variant === "B"
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-110"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          title="Wariant B - Energetyczny"
        >
          B
        </button>
      </div>

      {variant === "A" ? <HeroVariantA /> : <HeroVariantB />}
    </div>
  );
};

export default HeroABTest;
