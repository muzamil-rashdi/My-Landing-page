import React, { useState } from "react";

const FAQs = () => {
  // 6 items from your screenshot
  const faqItems = [
    {
      id: 1,
      question: "How much does it cost to use Properteasy?",
      answer:
        "Joining Properteasy is completely free for landlords, homeowners & vendors. There are no subscription fees, membership fees or hidden charges. Property owners pay one, all-inclusive price for service rendered, and it costs nothing for vendors to join the Property network of licensed professionals.",
    },
    {
      id: 2,
      question: "How does Properteasy ensure quality contractors?",
      answer:
        "We ensure all contractors are vetted and licensed before joining our platform.",
    },
    {
      id: 3,
      question: "How does Properteasy ensure fair pricing?",
      answer:
        "Our platform compares market rates to ensure fair and competitive pricing.",
    },
    {
      id: 4,
      question: "How quickly will my job be done?",
      answer:
        "Most jobs are scheduled within 24-48 hours depending on the urgency and availability of contractors.",
    },
    {
      id: 5,
      question: "Is insurance coverage included?",
      answer:
        "Yes, all approved contractors carry full insurance coverage for the work they perform.",
    },
    {
      id: 6,
      question: "Is all work guaranteed?",
      answer:
        "Yes, all work is backed by a service guarantee to ensure your satisfaction.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="font-neue relative w-full max-w-[1344px] mx-auto mt-10 sm:mt-20 my-10">



      <div className="flex flex-col md:flex-row gap-10 lg:gap-40 md:gap-16 ">
         {/* --- left SIDE ---- */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                <span className="bg-[#F8F8F8] text-[#242424] border-[1.1px] border-[#ECECEC] px-4 py-2 rounded-full">FAQs</span>
                <h1 className="my-8 text-3xl md:text-5xl">
                    Frequently <br className="hidden md:block" /> Asked <br/> Questions
                </h1>
                <p className="text-lg md:text-xl">Got questions? We've got answers. Find everything you need to know about using Properteasy.</p>
                </div>
                <a className="text-[#2C8D48] underline" href="/">view all</a>
            </div>


          {/* ----------- left SIDE END------- */}




        {/* ---------------- RIGHT SIDE ---------------- */}

        <div className="flex-[1.5] py-2 md:pl-10">
            <div className=" border-b border-gray-300 "></div>
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={` transition-colors duration-500 border-b  ${
                  isOpen ? "border-transparent" : "border-gray-300"
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  {/* Question */}
                  <span
                    className={`text-[#595959] text-lg transition-all duration-300 ${
                      isOpen ? "font-semibold text-black" : "font-normal"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Plus / Minus */}
                  <span className="text-2xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100 " : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-4 text-[#333333] ">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* -RIGHT SIDE END  */}
      </div>
    </section>
  );
};

export default FAQs;
