"use client";

import React from "react";
import { Element } from "react-scroll";
import { CheckCircle, ShieldCheck, Clock, Calendar, Globe, Bell, Users, Lock, Zap, Cpu } from "lucide-react";
import Image from "next/image";
import Companies from "./Companies";
import One from "../assets/1.png";
import Two from "../assets/2.png";
import Three from "../assets/3.png";

const features = [
    {
        icon: <CheckCircle size={40} className="text-black" />,
        title: "Seamless Scheduling",
        description: "Automate meeting coordination with AI-powered scheduling."
    },
    {
        icon: <ShieldCheck size={40} className="text-black" />,
        title: "Top-Tier Security",
        description: "Protect your data with end-to-end encryption."
    },
    {
        icon: <Clock size={40} className="text-black" />,
        title: "Real-Time Reminders",
        description: "Never miss a meeting with instant notifications."
    }
];

const backgroundImages = [One, Two, Three];

const extraFeatures = [
    { icon: <Calendar size={24} className="text-black" />, title: "Smart Calendar", description: "Sync and manage all events effortlessly." },
    { icon: <Globe size={24} className="text-black" />, title: "Global Access", description: "Access from anywhere in the world." },
    { icon: <Bell size={24} className="text-black" />, title: "Instant Alerts", description: "Get real-time notifications and updates." },
    { icon: <Users size={24} className="text-black" />, title: "Team Collaboration", description: "Work together seamlessly with your team." },
    { icon: <Lock size={24} className="text-black" />, title: "Secure Data", description: "Your information is encrypted and protected." },
    { icon: <Zap size={24} className="text-black" />, title: "Fast Performance", description: "Enjoy a smooth and optimized experience." },
    { icon: <Cpu size={24} className="text-black" />, title: "AI Integration", description: "AI-powered tools for smarter workflows." },
    { icon: <CheckCircle size={24} className="text-black" />, title: "100% Reliability", description: "Trustworthy and always available." }
];

const Features = () => {
    return (
        <>
            <Companies />
            <section className="py-16">
                <Element name="features" className="container mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
                        <p className="text-gray-600 mt-4">
                            Discover how our platform helps you schedule meetings effortlessly.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded-xl border flex items-center text-black"
                            >
                                <Image 
                                    src={backgroundImages[index]} 
                                    width={64} 
                                    height={64} 
                                    alt={`Feature ${index + 1}`} 
                                    className="w-16 h-16 rounded-md mr-4"
                                />

                                {/* Feature Content */}
                                <div className="flex flex-col">
                                    {feature.icon}
                                    <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
                                    <p className="mt-1">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* And so much more section */}
                    <div className="text-center mt-12">
                        <h2 className="text-5xl font-bold text-black">...and so much more</h2>
                    </div>

                    {/* Extra Features Grid with Hover Effect */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                        {extraFeatures.map((feature, index) => (
                            <div 
                                key={index} 
                                className="p-4 border rounded-lg flex flex-col items-center justify-center text-center text-black group relative overflow-hidden h-32"
                            >
                                <div className="group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center">
                                    {feature.icon}
                                    <h3 className="text-lg font-medium mt-2">{feature.title}</h3>
                                </div>
                                
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-lg font-medium">{feature.title}</h3>
                                    <p className="text-sm mt-1">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </Element>
            </section>
        </>
    );
};

export default Features;
