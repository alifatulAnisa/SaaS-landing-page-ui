"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import User1 from "../assets/boy.png";
import User2 from "../assets/gamer.png";
import User3 from "../assets/girl2.png";
import User4 from "../assets/happy.png";
import User5 from "../assets/man.png";
import User6 from "../assets/man2.png";

const testimonials = [
  { name: "John Doe", role: "Product Manager", feedback: "This platform has completely changed how we schedule meetings!", image: User1, rating: 5 },
  { name: "Jane Smith", role: "Software Engineer", feedback: "I love the real-time notifications and security features!", image: User2, rating: 4 },
  { name: "Michael Lee", role: "Startup Founder", feedback: "AI-powered scheduling is a game-changer!", image: User3, rating: 5 },
  { name: "Sophia Brown", role: "UI/UX Designer", feedback: "The user-friendly interface makes this tool a must-have!", image: User4, rating: 5 },
  { name: "David Kim", role: "Marketing Manager", feedback: "Our team collaboration has never been easier!", image: User5, rating: 5 },
  { name: "Emily Wilson", role: "Project Manager", feedback: "The seamless integrations save us so much time!", image: User6, rating: 5 },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);
  const slideWidth = 750; // Width of one slide

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
        <p className="text-gray-600 mt-3">Real feedback from happy customers.</p>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden mt-10 mx-auto max-w-[750px]">
          <motion.div
            className="flex"
            animate={{ x: `-${index * slideWidth}px` }} 
            transition={{ ease: "easeInOut", duration: 0.6 }}
            style={{ width: `${totalSlides * slideWidth}px` }} 
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex w-[750px] justify-center gap-6">
                {testimonials
                  .slice(slideIndex * itemsPerPage, slideIndex * itemsPerPage + itemsPerPage)
                  .map((testimonial, i) => (
                    <div
                      key={i}
                      className="w-[220px] h-[260px] p-4 bg-white rounded-xl border flex flex-col items-center text-center shadow-md"
                    >
                      <Image src={testimonial.image} width={60} height={60} alt={testimonial.name} className="w-16 h-16 rounded-full mb-3" />
                      <h3 className="text-md font-semibold text-black">{testimonial.name}</h3>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-500" />
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-black">{testimonial.feedback}</p>
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
