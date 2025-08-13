import React from "react";
import RoundButton from "./common/RoundButton";
const ProperteasyWorks = () => {
  return (
    <>
    
    <section className="my-20">
    <RoundButton text={"How Properteasy Works"}/>
       <h1 className="text-3xl md:text-6xl mt-2 md:mt-">
        Here’s How We Make Repairs Easy
         </h1>
         <div className="flex flex-col w-full h-full mt-20 gap-2">

            <div className=" flex flex-col sm:flex-row w-full f-full gap-2 md:h-[350px]">
                <div className=" text-white flex-1 bg-[#3CAB5C]  rounded-xl flex flex-col">
                    <div className="flex-1"></div>
                    <div className="flex-1 flex flex-col gap-10">
                    <h2 className="text-3xl ">Tenant submits repair request</h2>
                    <p className="">Your tenant reports any issue through Properteasy by providing details and images. This gives us everything we need to get started. No landlord action is required.</p>
                    </div>
                </div>
                <div className="flex-1 md:flex-2 bg-[#ECEEF2] rounded-xl flex flex-col">
                    <div className="flex-2 bg-black min-h-[18vh]"></div>
                     <div className="flex-1 flex flex-col gap-10">
                   <h2 className="text-3xl">If you feel the work needs to be done, approve it!</h2>
                    <p className="">Your tenant reports any issue through Properteasy by providing details and images. This gives us everything we need to get started. No landlord action is required.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full f-full gap-2 h-[350px]">

                <div className="flex-1 md:flex-2 bg-[#ECEEF2] rounded-xl">
                    <h2 className="text-xl">If you feel the work needs to be done, approve it!</h2>
                </div>
                     <div className=" text-white flex-1 bg-[#ECEEF2]  rounded-xl flex flex-col">
                    <div className="flex-1"></div>
                    <div className="flex-1 flex flex-col gap-10">
                    <h2 className="text-2xl ">Tenant submits repair request</h2>
                    <p className="">Your tenant reports any issue through Properteasy by providing details and images. This gives us everything we need to get started. No landlord action is required.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full f-full gap-2 h-[350px]">
                <div className=" text-white flex-1 bg-[#ECEEF2]  rounded-xl flex flex-col">
                    <div className="flex-1"></div>
                    <div className="flex-1 flex flex-col gap-10">
                    <h2 className="text-2xl ">Tenant submits repair request</h2>
                    <p className="">Your tenant reports any issue through Properteasy by providing details and images. This gives us everything we need to get started. No landlord action is required.</p>
                    </div>
                </div>
                <div className="flex-1 bg-[#ECEEF2] rounded-xl">
                    <h2 className="text-xl">If you feel the work needs to be done, approve it!</h2>
                </div>
            </div>

         </div>


    </section>
    </>
  );
};

export default ProperteasyWorks;
