import React from "react";
const GreenButton = ({ text }) => {
  return (
    <button className="bg-[#3CAB5C] text-white px-5 py-3 rounded-xl hover:bg-[#34a152] transition">
      {text}
    </button>
  );
};

export default GreenButton;
