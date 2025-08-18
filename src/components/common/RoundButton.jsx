import React from "react";

const RoundButton = ({ text }) => {
  return (
    <button
      className="
        bg-[#F8F8F8] text-[#3CAB5C] 
        px-4 sm:px-6 md:px-8 
        py-2 sm:py-3 md:py-3.5 
        rounded-full 
        hover:bg-gray-200 
        transition-colors duration-200 
        border border-[#3CAB5C] border-[1.5px] 
        text-xs sm:text-sm md:text-base lg:text-lg 
        font-medium whitespace-nowrap
      "
    >
      {text}
    </button>
  );
};

export default RoundButton;
