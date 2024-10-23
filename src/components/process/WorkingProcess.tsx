"use client";

import React, { useEffect, useRef } from "react";
import CardProcess from "./CardProcess";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkingProcess() {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);

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
    }, []);

    return (
        <section id="about">
            <div className={`flex flex-col items-center lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]`}>
                <h2 ref={headingRef}>
                    <span className="bg-Green font-medium rounded-[7px]">Our Working Process</span>
                </h2>
                <p ref={textRef} className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[292px] lg:h-[46px]">
                    Step-by-Step Guide to Achieving Your Business Goals
                </p>
            </div>
            <CardProcess />
        </section>
    );
}
