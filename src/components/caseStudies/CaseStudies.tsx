"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for mobile cards
    const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for desktop cards

    useEffect(() => {
        // Heading and text animation triggered by scroll
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%", // Animation starts when top of the element is 80% from the top of the viewport
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Animate each mobile card individually on scroll
        cardRefs.current.forEach((el, index) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        delay: 0.1 * index,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        });

        // Animate desktop cards on scroll
        desktopCardRefs.current.forEach((el, index) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, x: 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        delay: 0.2 * index,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <section className="flex flex-col items-center" id="caseStudies">
            {/* Heading Section */}
            <div className="flex flex-col items-center w-full lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]">
                <h2 ref={headingRef}>
                    <span className="bg-Green font-medium rounded-[7px]">Case Studies</span>
                </h2>
                <p ref={textRef} className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[580px] lg:h-[46px]">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </p>
            </div>

            {/* Mobile Cards */}
            <div className="flex flex-col gap-[30px] lg:hidden mb-[60px]">
                {[...Array(3)].map((_, index) => (
                    <div
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }} // Correctly assign ref for each card
                        key={index}
                        className="w-[350px] h-[252px] px-[50px] py-[42px] bg-Dark rounded-[45px] flex flex-col justify-between"
                    >
                        <p className="text-[#FFFFFF] text-left">
                            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                        </p>
                        <button className="flex items-center gap-2">
                            <span className="text-Green">Learn More</span>
                            <span>
                                <Image width={17} height={10} src="/assets/GreenIconArrow.svg" alt="Learn more" />
                            </span>
                        </button>
                    </div>
                ))}
            </div>

            {/* Desktop Cards */}
            <div className="w-full px-[60px] pt-[70px] rounded-[45px] bg-Dark h-[326px] justify-center mb-[140px] hidden lg:flex">
                {[...Array(3)].map((_, index) => (
                    <div
                        ref={(el) => {
                            desktopCardRefs.current[index] = el;
                        }} // Correctly assign ref for each desktop card
                        key={index}
                        className="w-[286px] h-[163px] flex flex-col gap-[20px] mr-[32px]"
                    >
                        <p className="text-[#FFFFFF] text-left">
                            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                        </p>
                        <button className="flex items-center gap-2">
                            <span className="text-Green">Learn More</span>
                            <span>
                                <Image width={17} height={10} src="/assets/GreenIconArrow.svg" alt="Learn more" />
                            </span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
