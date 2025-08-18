import React from "react";

const RoundButton = ({ text }) => {
  return (
    <button
      className="
        bg-[#3CAB5C] bg-opacity-10 text-[#3CAB5C] 
        px-3 sm:px-3 md:px-3 
        py-2 sm:py-[1.5] md:py-[1.5]
        rounded-full 
        hover:bg-gray-200 
        transition-colors duration-200 
        border border-[#3CAB5C] border-[1.5px] 
        text-xs sm:text-sm md:text-sm lg:text-sm 
        font-medium whitespace-nowrap
      "
    >
      {text}
    </button>
  );
};

export default RoundButton;
