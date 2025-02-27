import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/aa.png"

const Footer = () => {
  return (
    <footer className="text-white py-10 bg-black">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo & Tagline */}
        <div className="flex justify-center">
            <div className="bg-white rounded-full shadow-md flex items-center justify-center w-[100px] h-[100px]">
                <Image src={Logo} width={90} height={90} alt="Logo" className="rounded-full" />
            </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Pricing</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Blog</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Careers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg">Support</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-white hover:text-gray-200">Help Center</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Contact Us</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Terms of Service</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg">Stay Updated</h3>
          <p className="text-white mt-2">Subscribe to our newsletter for updates.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-white rounded-l-md focus:outline-none"
            />
            <button type="submit" className="bg-gray-200 text-black px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-10 flex justify-center space-x-6">
        <a href="#" className="text-white hover:text-white"><Facebook size={20} /></a>
        <a href="#" className="text-white hover:text-white"><Twitter size={20} /></a>
        <a href="#" className="text-white hover:text-white"><Linkedin size={20} /></a>
        <a href="#" className="text-white hover:text-white"><Instagram size={20} /></a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} AA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
