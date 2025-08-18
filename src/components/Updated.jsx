import React from "react";
import BgUpdated from "../assets/images/bgupdated.jpg";
import GreenButton from "../components/common/GreenButton";
const Updated = () => {
  const but=(
              <button
            type="submit"  
          >
            Subscribe to our Newsletter
          </button>
  )

  return (
    <section
      className="relative w-full max-w-[1500px] h-[500px]  overflow-hidden mx-auto flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${BgUpdated})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#3A4151]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-white ">
      
          <div className="rounded-full overflow-hidden inline-block mb-5">
        <GreenButton text={"Stay updated "} />
      </div>

        

        <h2 className="text-3xl md:text-6xl font-normal mb-5">
            Stay Updated with Properteasy
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-12">
          Get the latest tips on property maintenance, industry insights, and platform updates delivered to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center ">
          <input
            type="email"
            placeholder="Enter your email addess"
            required
            className="w-full sm:w-80 px-4 py-3 rounded-xl outline-none text-gray-800 placeholder:text-[#242424]"
          />
          <GreenButton text={but}/>

        </form>
          <p className="text-sm md:text-sm text-gray-200 mt-4">
         No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Updated;
