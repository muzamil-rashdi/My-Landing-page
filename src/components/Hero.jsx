import React from "react";
import heroBg from "../assets/images/bghero.png";

const Hero = () => {
  return (
    <section
      className="relative w-full max-w-[1344px] h-[701px] rounded-[20px] overflow-hidden mx-auto"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Hero Title
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          This is a short description inside the hero section. You can add
          buttons or links here too.
        </p>
      </div>
    </section>
  );
};

export default Hero;
