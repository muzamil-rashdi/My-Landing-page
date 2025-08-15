import React from "react";
import RoundButton from "./common/RoundButton";
const WhatMakes = ({ text }) => {
  return (
        <>
        <section className="my-40">
        <RoundButton text={"What makes Properteasy different"}/>
        <div className="text-center my-16">
          <span className="bg-[#F3F3F3] py-3 px-2 rounded-lg ">
            <span className="px-12 py-2 bg-white rounded-md h-10 shadow-[0_2px_3px_rgba(0,0,0,0.1)]"><strong>Self Management</strong></span>
            <span className="mx-3 ">Traditional Property Management</span>
          </span>
        </div>
       <h1 className="text-3xl md:text-6xl mt-2 md:mt-">
        From Hands-on to Hands-free
         </h1>
        </section>
        </>
  );
};

export default WhatMakes;
