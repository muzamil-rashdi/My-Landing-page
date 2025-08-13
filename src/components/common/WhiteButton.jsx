import React from "react";

const WhiteButton = ({ text }) => {
  return (
    <button className="bg-[#F8F8F8] text-[#242424] px-5 py-3 rounded-xl hover:bg-gray-300 transition border border-[#ECECEC]">
      {text}
    </button>
  );
};

export default WhiteButton;
