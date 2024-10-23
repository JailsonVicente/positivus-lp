"use client";

import Form from "./Form";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const formRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate heading and text on scroll
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
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: -30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        // Animate form on scroll
        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <section className="mb-[90px]" id="contact">
            <div className={`flex flex-col items-center lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]`}>
                <h2 ref={headingRef}>
                    <span className="bg-Green font-medium rounded-[7px]">Contact Us</span>
                </h2>
                <p
                    ref={textRef}
                    className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[473px] lg:h-[46px]"
                >
                    Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
                </p>
            </div>

            <div ref={formRef}>
                <Form />
            </div>
        </section>
    );
}
