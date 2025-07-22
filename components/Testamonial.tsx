/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const Testimonial = () => {
    const testimonials = [
        {
            quote: "The team at Vlead Marketing Agency is outstanding! From designing a stunning website to implementing successful SEO strategies, they exceeded all our expectations. We've grown significantly since partnering with them.",
            author: "Harsha Jayawardena, Director, Global Tech Innovations",
            image: "https://via.placeholder.com/80?text=Person+1",
        },
        {
            quote: "Amazing service and creativity! The Vlead team transformed our online presence with their innovative designs and marketing strategies.",
            author: "Priya Sharma, CEO, Innovate Solutions",
            image: "https://via.placeholder.com/80?text=Person+2",
        },
        {
            quote: "Their SEO expertise is unmatched. Our traffic doubled within months, thanks to their dedicated efforts.",
            author: "Ravi Kumar, Founder, TechTrendz",
            image: "https://via.placeholder.com/80?text=Person+3",
        },
        {
            quote: "Vlead's web development team is top-notch. They delivered a user-friendly site ahead of schedule!",
            author: "Anita Desai, Marketing Head, BrightFuture",
            image: "https://via.placeholder.com/80?text=Person+4",
        },
        {
            quote: "Exceptional support and results. Highly recommend Vlead for any digital marketing needs.",
            author: "Suresh Patel, Owner, GreenLeaf Co.",
            image: "https://via.placeholder.com/80?text=Person+5",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: () =>
            setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1)),
        onSwipedRight: () =>
            setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1)),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

   
    return (
        <div>
            <div className="py-12 bg-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-700 mb-8">Our Clients</h2>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-8 px-4">
                    <img src="https://via.placeholder.com/150x50?text=Skymark+Solutions" alt="Skymark Solutions" className="h-12" />
                    <img src="https://via.placeholder.com/150x50?text=Ciao+Bella" alt="Ciao Bella" className="h-12" />
                    <img src="https://via.placeholder.com/150x50?text=Cartoro+Management" alt="Cartoro Management" className="h-12" />
                    <img src="https://via.placeholder.com/150x50?text=The+Crown" alt="The Crown" className="h-12" />
                    <img src="https://via.placeholder.com/150x50?text=Amma+Foods" alt="Amma Foods" className="h-12" />
                    <img src="https://via.placeholder.com/150x50?text=Orient+Lanka" alt="Orient Lanka" className="h-12" />
                    <img src="https://via.placeholder.com/150x50?text=Worr" alt="Worr" className="h-12" />
                </div>
            </div>

            <div className="bg-yellow-50 py-12 relative overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-4">
                    {/* Left Overlay */}
                    <div className="absolute left-0 top-0 h-full w-1/2 bg-yellow-50 z-10"></div>

                    {/* Testimonial Carousel */}
                    <div {...handlers} className="relative z-20 " id="animation-carousel" data-carousel="static">
                        <div className="relative h-80 overflow-hidden rounded-lg md:h-96">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    data-carousel-item={index === currentIndex ? 'active' : ''}
                                >
                                    <div className="bg-yellow-50 shadow-lg rounded-lg h-full flex flex-col justify-center items-center text-center">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="w-16 h-16 rounded-full mb-4 object-cover"
                                        />
                                        <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                                        <p className="text-gray-800 font-semibold">{testimonial.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Overlay */}
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-yellow-50 z-10"></div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
