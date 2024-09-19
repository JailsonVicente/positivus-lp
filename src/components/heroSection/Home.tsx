"use client"

import Image from "next/image";
import React, { useState, useEffect } from 'react';


const DesktopComponent = () => {
    return (
        <section>
            <div className="flex w-full justify-between">
                <div className="w-[531px] flex flex-col gap-[35px]">
                    <div>
                        <h1 className="leading-[74px] pt-[30px]">Navigating the digital landscape for success</h1>
                    </div>
                    <div>
                        <p className="text-left leading-[28px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                        <button className={`
                w-full h-[68px] rounded-[14px] bg-Dark my-[40px] text-white
                `}>Book a consultation
                        </button>
                    </div>
                </div>
                <Image
                    height={600.46}
                    width={515}
                    src={"/assets/IllustrationDesktop.svg"}
                    alt="Ilustration Home"
                />
            </div>


            <div className="flex w-full items-center justify-between mb-[140px] mt-[90px]">
                <Image
                    height={28}
                    width={104.11}
                    src={"/assets/Amazon.png"}
                    alt="Amazon"
                />
                <Image
                    height={28}
                    width={106.37}
                    src={"/assets/Dribbble.png"}
                    alt="Dribbble"
                />
                <Image
                    height={28}
                    width={108.63}
                    src={"/assets/Hubspot.png"}
                    alt="HubSpot"
                />
                <Image
                    height={28}
                    width={105.24}
                    src={"/assets/Netflix.png"}
                    alt="Netflix"
                />
                <Image
                    height={28}
                    width={125.55}
                    src={"/assets/Notion.png"}
                    alt="Notion"
                />
                <Image
                    height={28}
                    width={90.57}
                    src={"/assets/Zoom.png"}
                    alt="Zoom"
                />
            </div>
        </section>
    )
}

const MobileComponent = () => {
    return (
        <section>
            <div>
                <h1 className="leading-[54.9px] pt-[30px]">Navigating the digital landscape for success</h1>
            </div>
            <Image
                height={310}
                width={361.44}
                src={"/assets/IllustrationDesktop.svg"}
                alt="Ilustration Home"
            />
            <div>
                <p className="text-left">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button className={`
                w-full h-[68px] rounded-[14px] bg-Dark my-[40px] text-white
                `}>Book a consultation
                </button>
            </div>
            <div className="flex flex-col w-full items-center gap-4 mb-[60px]">
                <div className="flex w-full gap-4 justify-center">
                    <Image
                        height={28}
                        width={104.11}
                        src={"/assets/Amazon.png"}
                        alt="Amazon"
                    />
                    <Image
                        height={28}
                        width={106.37}
                        src={"/assets/Dribbble.png"}
                        alt="Dribbble"
                    />
                    <Image
                        height={28}
                        width={108.63}
                        src={"/assets/Hubspot.png"}
                        alt="HubSpot"
                    />
                </div>
                <div className="flex w-full gap-4 justify-center">
                    <Image
                        height={28}
                        width={105.24}
                        src={"/assets/Netflix.png"}
                        alt="Netflix"
                    />
                    <Image
                        height={28}
                        width={125.55}
                        src={"/assets/Notion.png"}
                        alt="Notion"
                    />
                    <Image
                        height={28}
                        width={90.57}
                        src={"/assets/Zoom.png"}
                        alt="Zoom"
                    />
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isDesktop ? <DesktopComponent /> : <MobileComponent />}
        </div>
    );
};

export default Home;
