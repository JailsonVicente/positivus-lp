"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react"; // Added useState import
import gsap from "gsap";

const DesktopComponent = () => {
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
        );

        gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", delay: 1.2 }
        );
    }, []);

    return (
        <section>
            <div className="flex w-full justify-between">
                <div className="w-[531px] flex flex-col gap-[35px]">
                    <h1 ref={headingRef} className="leading-[74px] pt-[30px]">
                        Navigating the digital landscape for success
                    </h1>
                    <div>
                        <p ref={textRef} className="text-left leading-[28px]">
                            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                        </p>
                        <button
                            ref={buttonRef}
                            className="w-full h-[68px] rounded-[14px] bg-Dark my-[40px] text-white cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-98"
                        >
                            Book a consultation
                        </button>
                    </div>
                </div>
                <Image
                    ref={imageRef}
                    height={600.46}
                    width={515}
                    src="/assets/IllustrationDesktop.svg"
                    alt="Illustration Home"
                />
            </div>
            {/* Other static images */}
            <div className="flex w-full items-center justify-between mb-[140px] mt-[90px]">
                <Image height={28} width={104.11} src="/assets/Amazon.png" alt="Amazon" />
                <Image height={28} width={106.37} src="/assets/Dribbble.png" alt="Dribbble" />
                <Image height={28} width={108.63} src="/assets/Hubspot.png" alt="HubSpot" />
                <Image height={28} width={105.24} src="/assets/Netflix.png" alt="Netflix" />
                <Image height={28} width={125.55} src="/assets/Notion.png" alt="Notion" />
                <Image height={28} width={90.57} src="/assets/Zoom.png" alt="Zoom" />
            </div>
        </section>
    );
};

const MobileComponent = () => {
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
        );

        gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", delay: 1.2 }
        );
    }, []);

    const book = () => {
        alert("It's just a portfolio project");
    };

    return (
        <section className="sm:flex sm:flex-col sm:items-center">
            <div>
                <h1 ref={headingRef} className="leading-[54.9px] pt-[30px]">
                    Navigating the digital landscape for success
                </h1>
            </div>
            <Image
                ref={imageRef}
                height={310}
                width={361.44}
                src="/assets/IllustrationDesktop.svg"
                alt="Illustration Home"
            />
            <div>
                <p ref={textRef} className="text-left">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <button
                    className="w-full h-[68px] rounded-[14px] bg-Dark my-[40px] text-white cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-90"
                    onClick={book}
                >
                    Book a consultation
                </button>
            </div>
            {/* Logos section (same as in DesktopComponent) */}
        </section>
    );
};

const Home = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div id="home">
            {isDesktop ? <DesktopComponent /> : <MobileComponent />}
        </div>
    );
};

export default Home;
