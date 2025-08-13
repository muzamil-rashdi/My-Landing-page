import React from "react";

 const FeatureCard=({ svg, title, description })=> {
  return (
    <div
      className={`bg-gray-100 md:h-full rounded-xl px-6 py-6 flex flex-col gap-4 mx-1 justify-between`}

    >
      {svg && <div>{svg}</div>}
      <h4 className="text-xl font-semibold">{title}</h4>
      {description && <p className="text-[#595959]">{description}</p>}
    </div>
  );
}

export default FeatureCard;
