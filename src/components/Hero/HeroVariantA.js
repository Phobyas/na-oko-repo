import React, { useState, useEffect } from "react";

const HeroVariantA = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      <div className="relative min-h-screen lg:h-screen">
        <div className="lg:hidden min-h-screen flex flex-col relative">
          <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-white via-white/90 to-transparent">
            <div className="flex justify-between items-center">
              <div className="text-[10px] text-gray-600 font-light tracking-wider">
                NAOKO • EDITION 024
              </div>
              <div className="text-[10px] text-gray-600 font-light tracking-wider">
                {currentTime
                  .toLocaleDateString("pl-PL", {
                    day: "numeric",
                    month: "short",
                  })
                  .toUpperCase()}
              </div>
            </div>
          </div>

          <div className="relative min-h-screen">
            <div
              className={`absolute inset-0 transition-all duration-1000 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200"
                alt="Fashion collection"
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 pb-[calc(env(safe-area-inset-bottom,0px)+5rem)] sm:pb-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 mb-3 sm:mb-4">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] text-white/90 tracking-wider font-light">
                  NOUVELLE COLLECTION
                </span>
              </div>

              <h1 className="mb-3 sm:mb-4 animate-fade-in">
                <span className="block text-3xl sm:text-4xl font-thin text-white leading-[0.9]">
                  ODKRYJ SWOJĄ
                </span>
                <span className="block text-3xl sm:text-4xl font-normal text-white leading-[1.1] mt-1">
                  <em>Wyjątkowość</em>
                </span>
              </h1>

              <p className="text-white/80 text-[11px] sm:text-xs lg:text-sm font-light leading-relaxed mb-3 sm:mb-4 animate-fade-in-delay">
                Kolekcja FW24. 50 projektów, gdzie każdy detal ma znaczenie.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 animate-fade-in-delay-2">
                <button className="bg-white text-black py-2.5 sm:py-3 px-3 sm:px-4 text-[10px] sm:text-xs tracking-wider font-medium">
                  KOLEKCJA
                </button>
                <button className="border border-white/70 text-white py-2.5 sm:py-3 px-3 sm:px-4 text-[10px] sm:text-xs tracking-wider backdrop-blur-sm">
                  LOOKBOOK
                </button>
              </div>

              <div className="flex items-center justify-between gap-2 mt-4 sm:mt-6 text-white/70 animate-fade-in-delay-3">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg font-thin">2.5K</span>
                  <span className="text-[9px] sm:text-[10px] tracking-wider">
                    KLIENTEK
                  </span>
                </div>
                <div className="w-px h-3 sm:h-4 bg-white/30"></div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg font-thin">4.9</span>
                  <span className="text-[9px] sm:text-[10px] tracking-wider">
                    ★★★★★
                  </span>
                </div>
                <div className="w-px h-3 sm:h-4 bg-white/30"></div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg font-thin">24H</span>
                  <span className="text-[9px] sm:text-[10px] tracking-wider">
                    DOSTAWA
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-0.5 h-8 bg-white/60"></div>
                <div
                  className="text-[10px] text-white/60 font-light tracking-wider"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  01/03
                </div>
                <div className="w-0.5 h-8 bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-0 h-full">
          <div className="absolute top-0 left-0 right-0 z-30 p-6 sm:p-8 lg:p-12">
            <div className="flex justify-between items-center">
              <div className="text-xs sm:text-sm text-gray-600 font-normal tracking-wider">
                WARSZAWA •{" "}
                {currentTime
                  .toLocaleDateString("pl-PL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-light tracking-wider">
                {currentTime.toLocaleTimeString("pl-PL", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col justify-center items-center p-8 bg-white">
            <div
              className="text-[10px] lg:text-xs tracking-[0.3em] text-gray-400 font-normal"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              EKSKLUZYWNA KOLEKCJA FW24
            </div>
          </div>

          <div className="relative lg:col-span-7 h-full">
            <div
              className={`absolute inset-0 transition-all duration-1000 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600"
                alt="Fashion collection"
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            <div className="absolute top-0 right-0 w-0 h-0 border-t-[200px] border-t-transparent border-r-[200px] border-r-white opacity-90"></div>

            <div className="absolute bottom-12 left-12">
              <div className="bg-black text-white px-3 lg:px-4 py-1.5 lg:py-2 text-[10px] lg:text-xs tracking-wider">
                EDITION NO. 024
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 lg:p-8 xl:p-12 2xl:p-16 flex flex-col justify-center">
            <div className="max-w-md">
              <div className="flex items-center gap-4 mb-8 animate-fade-in">
                <div className="h-px bg-gray-300 w-12"></div>
                <span className="text-[10px] lg:text-xs tracking-[0.2em] text-gray-500 font-light">
                  NOUVELLE COLLECTION
                </span>
              </div>

              <h1 className="mb-6 animate-fade-in">
                <span className="block text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-thin text-gray-900 leading-[0.9] mb-2">
                  ODKRYJ
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-light text-gray-900 leading-[0.9]">
                  SWOJĄ
                </span>
                <span className="block text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-normal text-gray-900 leading-[0.9] mt-2">
                  <em>Wyjątkowość</em>
                </span>
              </h1>

              <p className="text-sm lg:text-base text-gray-600 font-light leading-relaxed mb-8 animate-fade-in-delay">
                Kolekcja FW24 to symfonia minimalizmu i wyrafinowania. 50
                starannie wyselekcjonowanych projektów, gdzie każdy detal ma
                znaczenie.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10 animate-fade-in-delay">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-thin text-gray-900 mb-1">
                    50
                  </div>
                  <div className="text-[10px] lg:text-xs text-gray-500 tracking-wider">
                    UNIKATOWYCH PROJEKTÓW
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-thin text-gray-900 mb-1">
                    24H
                  </div>
                  <div className="text-[10px] lg:text-xs text-gray-500 tracking-wider">
                    DARMOWA DOSTAWA
                  </div>
                </div>
              </div>

              <div className="space-y-4 animate-fade-in-delay-2">
                <button className="w-full bg-black text-white py-3 lg:py-4 px-6 lg:px-8 text-xs sm:text-sm tracking-wider hover:bg-gray-900 transition-colors duration-300">
                  ODKRYJ KOLEKCJĘ
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 lg:py-4 px-6 lg:px-8 text-xs sm:text-sm tracking-wider hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                  ZAPISZ SIĘ NA POKAZ
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in-delay-3">
                <div className="flex items-center justify-between text-[10px] lg:text-xs text-gray-500">
                  <span>DESIGNED IN WARSAW</span>
                  <span>SUSTAINABLE FASHION</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="text-[10px] lg:text-xs text-gray-400 font-light">
            01 / 03
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariantA;
