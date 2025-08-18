import React from "react";
import RoundButton from "./common/RoundButton";
const Pricing = () => {
  return (
    <>
    <section className="font-neue my-20 relative w-full max-w-[1344px]  mx-auto mt-10 sm:mt-20 my-10">
            <RoundButton text={"Pricing"}/>
       <h1 className="text-3xl md:text-6xl mt-2 md:mt-">
        Transparent Pricing & Clear Expectations
         </h1>
         <div className="flex flex-col md:flex-row w-full h-full mt-20 gap-4 md:gap-2">
         <div className="flex flex-col md:flex-row" >
        <div className=" text-black flex-1 bg-[#F6F7F9] rounded-xl flex flex-col px-4 py-6">
                    <div className="flex-1"></div>
                    <div className="flex-1 flex flex-col gap-7">
                     <h2 className="text-2xl md:text-4xl text-[#242424]">Know what to expect before work begins</h2>
                     <p className="text-md md:text-xl font-normal text-[#333333]">Our system is built around smart technology to give you an estimated price range for repairs based upon the details you provide, recent similar jobs, local labor rates, and vendor pricing trends. This upfront range gives you the ability to make informed decisions without any surprises. Once the job is complete, you will only pay for the work that was done.</p>
                    </div>
                     </div>
         </div>
                  <div className="flex flex-col md:flex-row" >
        <div className=" text-black flex-1 bg-[#F6F7F9] rounded-xl flex flex-col px-4 py-6">
                    <div className="flex-1"></div>
                    <div className="flex-1 flex flex-col gap-7">
                     <h2 className="text-2xl md:text-4xl text-[#242424]">There is No Substitute for Hands-on Diagnostic Experience</h2>
                     <p className="text-md md:text-xl font-normal text-[#333333]">In rare instances, a deeper issue is uncovered on site, such as a slow drain that turns out to be caused by a collapsed waste pipe, not a clog. In such cases, vendors report the findings, and Properteasy alerts you right away. We only move forward if you approve the additional work and revised estimate. You’re always in control of what gets done, and just as importantly, what doesn’t.</p>
                    </div>
                     </div>
         </div>
         </div>
    </section>
    </>
  );
};

export default Pricing;
