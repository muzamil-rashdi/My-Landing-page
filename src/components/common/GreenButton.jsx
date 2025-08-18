
import React from "react";

const GreenButton = ({ text }) => {
  return (
    <button
      className="
        bg-[#3CAB5C] 
        text-white 
        px-3 sm:px-3 md:px-3 lg:px-4 
        py-2 sm:py-2 md:py-2 
        text-sm sm:text-base md:text-lg 
        rounded-xl 
        hover:bg-[#34a152] 
        transition 
        w-full sm:w-auto
        max-w-xs md:max-w-sm
        text-center
      "
    >
      {text}
    </button>
  );
};

export default GreenButton;


// import React from "react";
// const GreenButton = ({ text }) => {
//   return (
//     <button className="bg-[#3CAB5C] text-white px-5 py-3 rounded-xl hover:bg-[#34a152] transition">
//       {text}
//     </button>
//   );
// };

// export default GreenButton;
