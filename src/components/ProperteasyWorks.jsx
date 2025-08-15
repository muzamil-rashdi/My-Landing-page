import React from "react";
import RoundButton from "./common/RoundButton";
const ProperteasyWorks = () => {
  return (
   
    
    <section className="relative w-full max-w-[1344px]  mx-auto mt-10 sm:mt-20 my-10">
    <RoundButton text={"How Properteasy Works"}/>
       <h1 className="text-3xl md:text-6xl mt-2 md:mt-">
        Here’s How We Make Repairs Easy
         </h1>
         <div className="flex flex-col w-full h-full mt-20 gap-2">



            <div className=" flex flex-col sm:flex-row w-full h-full gap-2 md:h-[350px] h-auto">
       
                <div className="relative px-4 py-6 text-white flex[1] sm:flex-[1.5] bg-[#3CAB5C]  rounded-xl flex flex-col">
                                    <span
                                    className="absolute top-1 left-3 text-white select-none pointer-events-none"
                                    style={{
                                        fontSize: "150px", // width/height as text size
                                        lineHeight: "170px",
                                        opacity: 0.32,
                                    }}
                                    >
                                    01
                                    </span>
                    <div className="flex-1"></div>
                    <div className="flex-1 flex flex-col gap-6">
                         <h2 className="text-3xl ">Tenant submits repair request</h2>
                         <p className="text-xl font-normal">Your tenant reports any issue through Properteasy by providing details and images. This gives us everything we need to get started. No landlord action is required.</p>
                    </div>
                </div>

                <div className="relative px-4 py-6 font-normal flex-1 bg-[#ECEEF2] rounded-xl flex flex-col">
                    <span
                                    className="text-[#595959] absolute top-1 left-3 text-white select-none pointer-events-none"
                                    style={{
                                        fontSize: "150px", // width/height as text size
                                        lineHeight: "170px",
                                        opacity: 0.04,
                                    }}
                                    >
                                    02
                                    </span>
                    <div className="flex-[1]"></div>
                    <div className="flex-[1] flex flex-col gap-6">
                          <h2 className="text-3xl">If you feel the work needs to be done, approve it!</h2>
                          <p className="text-xl font-normal text-[#6b6a6a]">You’re instantly notified of the request and can review the details and estimate at your leisure. If you choose to move forward, simply approve it with one click.</p>
                    </div>
                </div>
            </div>



            <div className="flex flex-col sm:flex-row w-full f-full gap-2 md:h-[350px] h-auto">

                <div className="relative px-4 py-6 font-normal flex-1 md:flex-1 bg-[#ECEEF2] rounded-xl flex flex-col ">
                                    <span
                                    className="text-[#595959] absolute top-1 left-3 text-white select-none pointer-events-none"
                                    style={{
                                        fontSize: "150px", // width/height as text size
                                        lineHeight: "170px",
                                        opacity: 0.04,
                                    }}
                                    >
                                    03
                                    </span>
                    <div className="flex-1"></div>
                     <div className="flex-1 flex flex-col gap-6">
                     <h2 className="text-3xl">We assess the issue and <br/> broadcast the job to the most suitable vendors</h2>
                     <p className="text-xl text-[#6b6a6a]">Properteasy reviews the request, identifies the issue, and assigns it to the most qualified, local professionals.</p>
                </div>


                </div>
                     <div className="relative px-4 py-6  text-black flex-1 md:flex-[1.5] bg-[#ECEEF2]  rounded-xl flex flex-col">
                         <span
                                    className="text-[#595959] absolute top-1 left-3 text-white select-none pointer-events-none"
                                    style={{
                                        fontSize: "150px", // width/height as text size
                                        lineHeight: "170px",
                                        opacity: 0.04,
                                    }}
                                    >
                                    04
                                    </span>
                     <div className="flex-1"></div>
                     <div className="flex-1 flex flex-col gap-6">
                     <h2 className="text-3xl">Once a vendor accepts the job, your tenant schedules the job seamlessly</h2>
                     <p className="text-xl text-[#6b6a6a]">A qualified vendor reviews the details and accepts the job. Your tenant schedules a time that works for them through our platform. They can alternatively provide access instructions so the work can get done, even if nobody’s home.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full f-full gap-2 md:h-[350px] h-auto ">
                <div className="relative text-black flex-1 bg-[#ECEEF2]  rounded-xl flex flex-col px-4 py-6">
                     <span
                                    className="text-[#595959] absolute top-1 left-3 text-white select-none pointer-events-none"
                                    style={{
                                        fontSize: "150px", // width/height as text size
                                        lineHeight: "170px",
                                        opacity: 0.04,
                                    }}
                                    >
                                    05
                                    </span>
                   <div className="flex-1"></div>
                    <div className="flex-1 flex flex-col gap-7">
                         <h2 className="text-3xl">You're kept in the loop every step of the way</h2>
                          <p className="text-xl font-normal text-[#6b6a6a]">You receive real-time updates throughout the process so you always know what’s happening with your property, and when. No more wondering or chasing down job status from afar.</p>
                    </div>
                </div>
                <div className="relative text-black flex-1 bg-[#ECEEF2] rounded-xl flex flex-col px-4 py-6">
                     <span
                                    className="text-[#595959] absolute top-1 left-3 text-white select-none pointer-events-none"
                                    style={{
                                        fontSize: "150px", // width/height as text size
                                        lineHeight: "170px",
                                        opacity: 0.04,
                                    }}
                                    >
                                    06
                                    </span>
                                <div className="flex-1"></div>
                    <div className="flex-1 flex flex-col gap-7">
                         <h2 className="text-3xl">Pay when the work is completed</h2>
                          <p className="text-xl font-normal text-[#6b6a6a]">Once the maintenance request is resolved, you’ll receive a final invoice. All payments are made securely and conveniently through Properteasy.</p>
                    </div>
                     </div>
            </div>

         </div>


    </section>
    
  );
};

export default ProperteasyWorks;
