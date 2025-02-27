"use client";

import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import Logos from "../assets/Logos.png";

const Companies = () => {
    return (
        <>
            <section className="py-16">
                <Element name="companies" className="container mx-auto px-6">
                    <div className="flex justify-between items-center flex-wrap gap-6">
                        <p className="text-black text-lg font-medium w-50">
                            Trusted by fast-growing companies around the world
                        </p>

                        <Image 
                            src={Logos}
                            width={700}
                            height={700}
                            alt="logos"
                            className="max-w-full h-auto"
                        />
                    </div>
                </Element>
            </section>
            <div className="w-full border-t border-gray-300"></div>
        </>
    );
};

export default Companies;
