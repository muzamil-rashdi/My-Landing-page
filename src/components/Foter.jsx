import React from "react";
import Logo from "../assets/icons/image.png"; // adjust path

const Foter = () => {
  return (
    <footer className="bg-white w-full mt-10 sm:mt-20">
      {/* Top Section */}
      <div className="max-w-[1500px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: Logo + text */}
        <div className="flex flex-col space-y-4">
          <img src={Logo} alt="Properteasy Logo" className="w-32" />
          <p className="text-[#242424] text-sm leading-relaxed">
            Properteasy helps you manage properties with ease, giving you the
            latest tools and insights to stay ahead.
          </p>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[#242424]">Company</p>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">About Us</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Careers</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Blog</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Press</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Contact</a>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[#242424]">Support</p>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Help Center</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">FAQs</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Privacy Policy</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Terms</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Accessibility</a>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[#242424]">Resources</p>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Guides</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Market Trends</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Case Studies</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Community</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Events</a>
        </div>

        {/* Col 5 */}
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-[#242424]">Services</p>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Property Listing</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Property Management</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Consultation</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Investments</a>
          <a href="/" className="text-[#242424] hover:text-[#3CAB5C] hover:underline hover:decoration-[#3CAB5C]">Partnerships</a>
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
