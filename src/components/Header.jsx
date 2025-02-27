"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../assets/aa.png";
import { Link as LinkScroll } from "react-scroll";
import Magic from "../assets/magic.png";
import Close from "../assets/close.png";
import clsx from "clsx";
import Arrow from "../assets/down-arrow.png";

const NavLink = ({ title, to, extraClasses = "" }) => {
  return (
    <LinkScroll
      to={to}
      smooth={true}
      duration={500}
      className={`transition-colors duration-500 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md ${extraClasses}`}
    >
      {title}
    </LinkScroll>
  );
};

const Dropdown = ({ title, links }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth < 1024); 
     };

     handleResize(); 
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
     <div
       className="relative w-full"
       onMouseEnter={!isMobile ? () => setIsOpen(true) : undefined}
       onMouseLeave={!isMobile ? () => setIsOpen(false) : undefined}
     >
       <button
         className="flex items-center gap-1 px-4 py-2 text-black transition-colors duration-500 hover:bg-gray-200 rounded-md w-full"
         onClick={isMobile ? () => setIsOpen((prev) => !prev) : undefined}
       >
         {title}
         {/* <i
           className={`bi bi-caret-down transition-transform duration-300 ml-2 ${
             isOpen ? "rotate-180" : "rotate-0"
           }`}
         ></i> */}
         <Image 
            src={Arrow}
            width={15}
            height={15}
            alt="arrow"
            className={`bi bi-caret-down transition-transform duration-300 ml-2 ${
             isOpen ? "rotate-180" : "rotate-0"}`}
         />
       </button>

       {/* Dropdown List */}
       <div
         className={clsx(
           "absolute left-0 top-full mt-1 w-full bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 z-50",
           isOpen ? "block" : "hidden"
         )}
       >
         {links.map((link, index) => (
           <NavLink
             key={index}
             title={link.title}
             to={link.to}
             extraClasses="block px-4 py-2 hover:bg-gray-100"
           />
         ))}
       </div>
     </div>
   );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // kalau nak letak line tambah shadow-md
    <header className="fixed top-0 left-0 z-50 w-full bg-white h-16"> 
      <div className="flex items-center justify-between h-16 w-full px-8">

        <a className="flex-shrink-0 z-10">
          <Image src={Logo} width={120} height={120} alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-black">
          <Dropdown
            title="Products"
            links={[
              { title: "Personal", to: "product1-section" },
              { title: "Collaborative", to: "product2-section" },
              { title: "Entreprise", to: "product3-section" },
            ]}
          />
          <Dropdown
            title="Resources"
            links={[
              { title: "Blog", to: "blog-section" },
              { title: "Guides", to: "guides-section" },
              { title: "Support", to: "support-section" },
            ]}
          />
          <NavLink title="Pricing" to="pricing-section" />
          <NavLink title="FAQ" to="faq-section" />
          <NavLink title="Download" to="download-section" />
        </nav>

        {/* Right-side buttons */}
         <div className="hidden lg:flex space-x-6">
            <NavLink 
               title="Sign In" 
               to="signIn-section" 
               extraClasses="text-black" 
            />
            <NavLink 
               title="Start Free" 
               to="free-section" 
               extraClasses="bg-black text-white rounded-lg px-6 py-2 hover:bg-black-700 hover:text-black" 
            />
         </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-10 size-10 border-2 border-gray-300 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image
            src={isOpen ? Close : Magic}
            width={20}
            height={20}
            alt={isOpen ? "Close" : "Magic"}
            className="size-1/2 object-contain"
          />
        </button>
        
      </div>

      {/* Mobile Navigation Menu */}
      <div
         className={clsx(
            "bg-white transform transition-transform lg:hidden flex flex-col w-full px-8 py-8",
            isOpen ? "translate-x-0" : "translate-x-full"
         )}
         style={{ display: "flex", flexDirection: "column", height: "100dvh" }} // 100dvh ensures full viewport height
      >
         {/* Navigation section */}
         <nav className="flex flex-col space-y-4 flex-grow text-black">
            <Dropdown
               title="Products"
               links={[
                  { title: "Personal", to: "product1-section" },
                  { title: "Collaborative", to: "product2-section" },
                  { title: "Entreprise", to: "product3-section" },
               ]}
            />
            <Dropdown
               title="Resources"
               links={[
                  { title: "Blog", to: "blog-section" },
                  { title: "Guides", to: "guides-section" },
                  { title: "Support", to: "support-section" },
               ]}
            />
            <NavLink title="Pricing" to="pricing-section" extraClasses="text-black" />
            <NavLink title="FAQ" to="faq-section" extraClasses="text-black" />
            <NavLink title="Download" to="download-section" extraClasses="text-black" />
         </nav>

         {/* Buttons at the bottom */}
         <div className="flex flex-col space-y-4 p-6 pb-10">
            <NavLink title="Sign In" to="signIn-section" extraClasses="text-black text-center" />
            <NavLink
               title="Start Free"
               to="free-section"
               extraClasses="bg-black text-white rounded-lg px-6 py-2 text-center hover:bg-black-700 hover:text-white"
            />
         </div>
      </div>
    </header>
  );
};

export default Header; 