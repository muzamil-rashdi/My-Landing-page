import React from "react";
import heroBg from "../assets/images/bghero.png";
import GreenButton from "../components/common/GreenButton";

const Hero = () => {
  return (
    <section
      className="
        relative w-full max-w-[1344px] h-[701px] rounded-[20px] overflow-hidden mx-auto
        sm:h-[600px] md:h-[500px] lg:h-[600px] xl:h-[701px]
      "
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        className="
          relative z-10 flex flex-col items-center justify-center h-full text-center text-white
          px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40
        "
      >
        <h1
          className="
            font-heading font-medium
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px]
            leading-tight sm:leading-snug md:leading-snug lg:leading-[1.2]
            tracking-normal
            text-center m-0
          "
        >
          Owning Rental Properties is Not Supposed to be a Full Time Job
        </h1>

        <p
          className="
            text-white mt-3
            text-sm sm:text-base md:text-lg lg:text-xl
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl
          "
        >
          Let us handle the repairs so you can focus on profits, not problems
        </p>

        <div className="mt-5">
          <GreenButton text={"Get Started as a Landlord"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
