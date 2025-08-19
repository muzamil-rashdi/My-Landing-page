import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import logo from '../assets/icons/image.png';
import WhiteButton from "../components/common/WhiteButton";
import GreenButton from "../components/common/GreenButton";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Maintenance", "Pricing", "FAQs", "Updated"];

  return (
    
    <nav
      className="font-albert w-full max-w-[1440px] mx-auto h-[80px] px-[0px] py-4 flex items-center justify-between border-b border-[#F8F8F8] bg-white relative relative w-full max-w-[1350px]  mx-auto "
      style={{
        background: "var(--surface-surface_0, #FFFFFF)",
        borderBottom: "1px solid var(--outline-base_em, #F8F8F8)",
      }}
    >


  <img className="h-7 w-21" src={logo} alt="Logo" />

      <div className="hidden md:flex gap-[20px]">
        {links.map((link) => (
          <a
            key={link}
            href={'#'+link}
            className="text-[#242424] hover:text-[#3CAB5C] transition w-22 flex justify-between items-center text-[#242424] hidden xl:flex"
          >
            {link}
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.71967 8.21967C6.01256 7.92678 6.48744 7.92678 6.78033 8.21967L10.5 11.9393L14.2197 8.21967C14.5126 7.92678 14.9874 7.92678 15.2803 8.21967C15.5732 8.51256 15.5732 8.98744 15.2803 9.28033L11.0303 13.5303C10.8897 13.671 10.6989 13.75 10.5 13.75C10.3011 13.75 10.1103 13.671 9.96967 13.5303L5.71967 9.28033C5.42678 8.98744 5.42678 8.51256 5.71967 8.21967Z" fill="#242424"/>
</svg>

          </a>
        ))}
      </div>

      
      <div className="hidden xl:flex gap-[20px]">
      <WhiteButton text="Get started" />
      <GreenButton text="Submit a request" />
      </div>

     
      <div className="xl:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>


      
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center gap-4 py-4 md:hidden z-50">
          {links.map((link) => (
            <a
              key={link}
              href={'#'+link}
              className="text-gray-700 hover:text-[#3CAB5C] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
      <WhiteButton text="Get started" />
      <GreenButton text="Submit a request" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
