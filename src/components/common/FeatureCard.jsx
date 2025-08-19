import React from "react";

 const FeatureCard=({ svg, title, description })=> {
  return (
    <div
      className={`bg-gray-100 md:h-full rounded-xl px-6 py-6 gap-4 mx-1 justify-between justify-start`}
    >
      
      {svg && <div className="mb-5">{svg}</div>}
      <h4 className="text-xl #242424 font-neue mb-5">{title}</h4>
      {description && <p className="text-[#595959] font-neue">{description}</p>}
    </div>
  );
}

export default FeatureCard;
