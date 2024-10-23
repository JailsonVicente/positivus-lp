"use client";

import SliderCard from "@/components/testimonials/SliderCard";
import TeamCard from "./TeamCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Team() {
    const teamCardRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for the team cards

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate each team card on scroll
        teamCardRefs.current.forEach((el, index) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 }, // Start off-screen
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%", // Animation starts when top of the element is 80% from the top of the viewport
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section className="mb-[160px]">
            <div className={`flex flex-col items-center lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]`}>
                <h2><span className="bg-Green font-medium rounded-[7px]">Team</span></h2>
                <p className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[473px] lg:h-[46px]">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </p>
            </div>
            <div className={`flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-y-10`}>
                {[
                    {
                        profileSRC: "/assets/Picture1.png",
                        name: "John Smith",
                        position: "CEO and Founder",
                        description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
                    },
                    {
                        profileSRC: "/assets/Picture2.png",
                        name: "Jane Doe",
                        position: "Dir. of Operations",
                        description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
                    },
                    {
                        profileSRC: "/assets/Picture3.png",
                        name: "Michael Brown",
                        position: "SEO Specialist",
                        description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
                    },
                    {
                        profileSRC: "/assets/Picture4.png",
                        name: "Emily Johnson",
                        position: "PPC Manager",
                        description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
                    },
                    {
                        profileSRC: "/assets/Picture5.png",
                        name: "Brian Williams",
                        position: "Social Media",
                        description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
                    },
                    {
                        profileSRC: "/assets/Picture6.png",
                        name: "Sarah Kim",
                        position: "Content Creator",
                        description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
                    },
                ].map((teamMember, index) => (
                    <div
                        key={index}
                        ref={(el) => {teamCardRefs.current[index] = el}} // Assign ref for each team card
                    >
                        <TeamCard {...teamMember} />
                    </div>
                ))}
            </div>
            <div className="mt-[40px] relative w-full">
                <button className={`h-[68px] rounded-[14px] bg-Dark text-white lg:w-[288px] w-full absolute right-0`}>
                    See all team
                </button>
            </div>
        </section>
    );
}
