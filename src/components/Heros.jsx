import React from "react";
import heroBg from "../assets/images/bghero.png";
import GreenButton from "../components/common/GreenButton";

const Hero = () => {
  return (
    <section

      className="relative  w-full max-w-[1344px] h-[701px] rounded-[20px] overflow-hidden mx-auto"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


      <div className="absolute inset-0 bg-black/60"></div>

      <div className="mx-40  relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 ">
        <h1
            className="
            font-heading
            font-medium
            text-[55px]
            leading-[1.2]
            tracking-[0]
            text-center
            m-0
        "
            >
            Owning Rental Properties is Not Supposed to be a Full Time Job
            </h1>

        <p className="text-white text-lg md:text-xl max-w-2xl mt-3">
          Let us handle the repairs so you can focus on profits, not problems
        </p>
        <div className="mt-5">
        <GreenButton  text={"Get Started as a Landlord"}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
