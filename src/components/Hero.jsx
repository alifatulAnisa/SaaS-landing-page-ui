"use client";

import React, { useState } from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import HeroImage from "../assets/hero-img.jpg";

const Hero = () => {
    const [email, setEmail] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register email:", email);
    };

    return (
        <>
            <section className="relative flex items-center min-h-screen pt-4">
                <Element name="hero" className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        
                        {/* Left Section - Hero Details */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <p className="text-black font-semibold tracking-wide">
                                Effortless Meeting Scheduling
                            </p>

                            <h1 className="text-5xl font-bold text-gray-900 leading-tight max-md:text-4xl">
                                Schedule Meetings Seamlessly with AI Assistance
                            </h1>

                            <p className="text-lg text-gray-600 mt-4">
                                Automate scheduling, sync with your calendar, and eliminate back-and-forth emails with our smart meeting tool.
                            </p>

                            {/* Email Registration Form */}
                            <form 
                                onSubmit={handleRegister} 
                                className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full sm:w-72 px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 hover:text-black transition-all"
                                >
                                    Get Started for Free
                                </button>
                            </form>
                        </div>

                        {/* Right Section - Hero Image */}
                        <div className="w-full lg:w-1/2 flex justify-end">
                            <Image
                                src={HeroImage}
                                width={1200} 
                                height={700} 
                                alt="Hero Image"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Element>
            </section>
            <div className="w-full border-t border-gray-300 mt-8"></div>
        </>
    );
};

export default Hero;
