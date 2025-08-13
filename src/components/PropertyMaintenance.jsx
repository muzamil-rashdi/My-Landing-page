import React from "react";
import RoundButton from "../components/common/RoundButton";
const PropertyMaintenance = () => {
  return (
    <section  className="relative w-full max-w-[1344px] h-[701px] bg overflow-hidden mx-auto mt-10 sm:mt-20">
        <div>
        <RoundButton text="Property Maintenance"/>
        <h1 className="text-3xl md:text-6xl mt-2 md:mt-5">
            Everything You Need To Manage Repairs Without The Headaches
        </h1>
        <p className="text-md md:text-xl mt-2 md:mt-5">
            We handle repair requests from start to finish, including vendor dispatch and real-time progress updates. You stay in control without dealing with calls, scheduling, or follow ups.
        </p>
        </div>
    </section>
  );
};

export default PropertyMaintenance;

