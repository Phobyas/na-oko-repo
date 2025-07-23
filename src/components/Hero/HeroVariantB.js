import React, { useState, useEffect } from "react";

const HeroVariantB = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      bg: "linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 100%)",
      accent: "#FF69B4",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=800&fit=crop",
      title: "Shopping Time",
      subtitle: "Najnowsze trendy czekają na Ciebie",
    },
    {
      bg: "linear-gradient(135deg, #E6E6FA 0%, #DDA0DD 100%)",
      accent: "#9370DB",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=800&fit=crop",
      title: "Casual Chic",
      subtitle: "Wygoda i styl na co dzień",
    },
    {
      bg: "linear-gradient(135deg, #FFDAB9 0%, #FFE4B5 100%)",
      accent: "#FF8C69",
      image:
        "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=800&h=800&fit=crop",
      title: "Street Style",
      subtitle: "Modowe inspiracje z wielkich miast",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [slides.length, isHovered]);

  return (
    <section
      className="relative h-screen lg:h-screen flex items-center transition-all duration-1000 overflow-hidden"
      style={{
        background: slides[activeSlide].bg,
      }}
    >
      <div className="absolute inset-0 hidden md:block">
        <div
          className="absolute -top-20 -right-20 w-48 md:w-64 lg:w-96 h-48 md:h-64 lg:h-96 rounded-full opacity-20 animate-morph"
          style={{ backgroundColor: slides[activeSlide].accent }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 rounded-full opacity-20 animate-morph-reverse"
          style={{ backgroundColor: slides[activeSlide].accent }}
        />
      </div>

      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 35px, ${slides[activeSlide].accent}15 35px, ${slides[activeSlide].accent}15 70px)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-4 sm:py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-2 sm:mb-3 animate-fade-in shadow-lg">
              <span className="text-red-500 font-bold text-sm sm:text-base">
                -30%
              </span>
              <span className="text-gray-700 font-medium text-xs sm:text-sm">
                Wyprzedaż
              </span>
            </div>

            <div className="mb-1 sm:mb-2 animate-fade-in">
              <span className="text-gray-700 text-sm sm:text-base font-light">
                {slides[activeSlide].title}
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-3 leading-[0.9] animate-scale-in">
              <span
                className="inline-block transform -rotate-3 text-white drop-shadow-2xl"
                style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}
              >
                Bądź
              </span>
              <br />
              <span
                className="inline-block transform rotate-3 text-white drop-shadow-2xl"
                style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}
              >
                SOBĄ!
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg mb-1 font-light text-gray-700 animate-fade-in-delay max-w-lg mx-auto lg:mx-0">
              {slides[activeSlide].subtitle}
            </p>
            <p className="text-xs sm:text-sm lg:text-base mb-3 sm:mb-5 text-gray-600 animate-fade-in-delay max-w-lg mx-auto lg:mx-0">
              Odkryj kolekcję stworzoną z myślą o Tobie
            </p>

            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-2 sm:gap-3 animate-fade-in-delay-2">
              <button
                className="group relative px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-bold text-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-xl w-full xs:w-auto"
                style={{ backgroundColor: slides[activeSlide].accent }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center justify-center xs:justify-start gap-2">
                  Zobacz wyprzedaż
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              <button className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-gray-700 text-xs sm:text-sm lg:text-base font-medium border-2 border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 backdrop-blur-sm w-full xs:w-auto">
                Katalog PDF
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-3 sm:mt-5 animate-fade-in-delay-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-md"
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-gray-700 text-[10px] sm:text-xs">
                <span className="font-bold">2,122</span> klientek
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div
              className="relative h-[280px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === activeSlide
                      ? "opacity-100 scale-100 rotate-0"
                      : index < activeSlide
                      ? "opacity-0 scale-95 -rotate-6"
                      : "opacity-0 scale-95 rotate-6"
                  }`}
                  style={{
                    transform:
                      index === activeSlide
                        ? "rotateY(0deg)"
                        : "rotateY(25deg)",
                  }}
                >
                  <div className="relative h-full group px-2 sm:px-0">
                    <img
                      src={slide.image}
                      alt=""
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-gray-700 w-5 sm:w-6 h-2 sm:h-2.5"
                      : "bg-gray-400 hover:bg-gray-600 w-2 sm:w-2.5 h-2 sm:h-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div
          className="absolute top-20 right-10 w-16 xl:w-20 h-16 xl:h-20 rounded-full animate-float-slow opacity-20"
          style={{ backgroundColor: slides[activeSlide].accent }}
        />
        <div
          className="absolute bottom-40 left-20 w-24 xl:w-32 h-24 xl:h-32 rounded-full animate-float-reverse opacity-15"
          style={{ backgroundColor: slides[activeSlide].accent }}
        />
      </div>
    </section>
  );
};

export default HeroVariantB;
