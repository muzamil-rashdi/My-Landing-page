import React from "react";
import Logo from "../assets/icons/image.png"; // adjust path

const Foter = () => {
  return (
    <footer className="font-neue bg-white w-full mt-10 sm:mt-20">
      {/* Top Section */}
      <div className="max-w-[1500px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: Logo + text */}
        <div className="flex flex-col space-y-4">
          <img src={Logo} alt="Properteasy Logo" className="w-32" />
          <p className="text-[#242424] text-sm leading-relaxed">
            Connecting property owners with trusted maintenance professionals. Making property upkeep simple, reliable, and affordable.
          </p>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[#242424]">Property owners</p>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Post a job</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Find contractors</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">How pricing works</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Safety & insurance</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Property management</a>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[#242424]">Vendors</p>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Find work</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">How to get started</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Success stories</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Payment protection</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Professional resources</a>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[#242424]">Company</p>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">About us</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Careers</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Press</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Contact</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Help center</a>
        </div>

        {/* Col 5 */}
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[#242424]">Legal</p>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Privacy policy</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Terms of service</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Cookie policy</a>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-[1500px] mx-auto px-6">
          <p className="text-[#242424] text-sm">
            © 2025 Properteasy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Foter;
