import React from "react";

const RoundButton = ({ text }) => {
  return (
    <button className="bg-[#F8F8F8] text-[#3CAB5C] px-5 py-3 rounded-full  hover:bg-gray-300 transition border border-[#3CAB5C] border-[1.5px]">
      {text}
    </button>
  );
};

export default RoundButton;
