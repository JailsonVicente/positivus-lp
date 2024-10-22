"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CardService from "./CardService";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%", // Start the animation when the card is 80% into the viewport
                        toggleActions: "play none none none", // Only play the animation on scroll
                    },
                }
            );
        });
    }, []);

    return (
        <section className="" id="services">
            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]">
                <h2><span className="bg-Green font-medium rounded-[7px]">Services</span></h2>
                <p className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[580px] lg:h-[46px]">
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </p>
            </div>

            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:items-center w-full">
                <div ref={(el) => (cardsRef.current[0] = el)} className="flex justify-center">
                    <CardService
                        title1="Search engine"
                        title2="optimization"
                        titleColor="#B9FF66"
                        ArrowColor="/assets/ArrowGreen.svg"
                        cardImage="/assets/cardImage1.svg"
                        width={165}
                        height={129}
                        cardBackground="#F3F3F3"
                        textColor="#000000"
                    />
                </div>
                <div ref={(el) => (cardsRef.current[1] = el)} className="flex justify-center">
                    <CardService
                        title1="Pay-per-click"
                        title2="advertising"
                        titleColor="#FFFFFF"
                        ArrowColor="/assets/ArrowGreen.svg"
                        cardImage="/assets/cardImage2.svg"
                        width={165}
                        height={116.47}
                        cardBackground="#B9FF66"
                        textColor="#000000"
                    />
                </div>
                <div ref={(el) => (cardsRef.current[2] = el)} className="flex justify-center">
                    <CardService
                        title1="Social Media"
                        title2="Marketing"
                        titleColor="#FFFFFF"
                        ArrowColor="/assets/ArrowBlack.svg"
                        cardImage="/assets/cardImage3.svg"
                        width={127.12}
                        height={129}
                        cardBackground="#191A23"
                        textColor="#FFFFFF"
                    />
                </div>
                <div ref={(el) => (cardsRef.current[3] = el)} className="flex justify-center">
                    <CardService
                        title1="Email"
                        title2="Marketing"
                        titleColor="#B9FF66"
                        ArrowColor="/assets/ArrowGreen.svg"
                        cardImage="/assets/cardImage4.svg"
                        width={155}
                        height={142}
                        cardBackground="#F3F3F3"
                        textColor="#000000"
                    />
                </div>
                <div ref={(el) => (cardsRef.current[4] = el)} className="flex justify-center">
                    <CardService
                        title1="Content"
                        title2="Creation"
                        titleColor="#FFFFFF"
                        ArrowColor="/assets/ArrowGreen.svg"
                        cardImage="/assets/cardImage5.svg"
                        width={138.72}
                        height={129}
                        cardBackground="#B9FF66"
                        textColor="#000000"
                    />
                </div>
                <div ref={(el) => (cardsRef.current[5] = el)} className="flex justify-center">
                    <CardService
                        title1="Analytics and"
                        title2="Tracking"
                        titleColor="#FFFFFF"
                        ArrowColor="/assets/ArrowBlack.svg"
                        cardImage="/assets/cardImage6.svg"
                        width={157.78}
                        height={129}
                        cardBackground="#191A23"
                        textColor="#FFFFFF"
                    />
                </div>
            </div>

            <div className="h-[370px] lg:h-[347px] rounded-[45px] bg-Grey p-[50px] my-[70px] flex justify-between items-center w-full">
                <div className="flex flex-col gap-[20px] lg:gap-[26px] lg:w-[500px] text-left">
                    <h3>Let’s make things happen</h3>
                    <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className="h-[68px] rounded-[14px] bg-Dark text-white lg:w-[288px]">Get your proposal</button>
                </div>
                <div className="hidden lg:block">
                    <Image width={359} height={394.27} src={"/assets/serviceIlustration.svg"} alt="Ilustration" />
                </div>
            </div>
        </section>
    );
}



// import Image from "next/image";
// import CardService from "./CardService";

// export default function Services() {
//     return (
//         <section className="" id="services">
//             <div className={`
//                     flex flex-col items-center
//                     lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]
//                 `}>
//                 <h2><span className="bg-Green font-medium rounded-[7px]">Services</span></h2>
//                 <p className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[580px] lg:h-[46px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
//             </div>

//             <div className={`flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-y-10 lg:items-center w-full`}>
//                 <div className="flex justify-center">
//                     <CardService
//                         title1="Search engine"
//                         title2="optimization"
//                         titleColor="#B9FF66"
//                         ArrowColor="/assets/ArrowGreen.svg"
//                         cardImage="/assets/cardImage1.svg"
//                         width={165}
//                         height={129}
//                         cardBackground="#F3F3F3"
//                         textColor="#000000"
//                     />
//                 </div>
//                 <div className="flex justify-center">
//                     <CardService
//                         title1="Pay-per-click"
//                         title2="advertising"
//                         titleColor="#FFFFFF"
//                         ArrowColor="/assets/ArrowGreen.svg"
//                         cardImage="/assets/cardImage2.svg"
//                         width={165}
//                         height={116.47}
//                         cardBackground="#B9FF66"
//                         textColor="#000000"
//                     />
//                 </div>
//                 <div className="flex justify-center">
//                     <CardService
//                         title1="Social Media"
//                         title2="Marketing"
//                         titleColor="#FFFFFF"
//                         ArrowColor="/assets/ArrowBlack.svg"
//                         cardImage="/assets/cardImage3.svg"
//                         width={127.12}
//                         height={129}
//                         cardBackground="#191A23"
//                         textColor="#FFFFFF"
//                     />
//                 </div>
//                 <div className="flex justify-center">
//                     <CardService
//                         title1="Email"
//                         title2="Marketing"
//                         titleColor="#B9FF66"
//                         ArrowColor="/assets/ArrowGreen.svg"
//                         cardImage="/assets/cardImage4.svg"
//                         width={155}
//                         height={142}
//                         cardBackground="#F3F3F3"
//                         textColor="#000000"
//                     />
//                 </div>
//                 <div className="flex justify-center">
//                     <CardService
//                         title1="Content"
//                         title2="Creation"
//                         titleColor="#FFFFFF"
//                         ArrowColor="/assets/ArrowGreen.svg"
//                         cardImage="/assets/cardImage5.svg"
//                         width={138.72}
//                         height={129}
//                         cardBackground="#B9FF66"
//                         textColor="#000000"
//                     />
//                 </div>
//                 <div className="flex justify-center">
//                     <CardService
//                         title1="Analytics and"
//                         title2="Tracking"
//                         titleColor="#FFFFFF"
//                         ArrowColor="/assets/ArrowBlack.svg"
//                         cardImage="/assets/cardImage6.svg"
//                         width={157.78}
//                         height={129}
//                         cardBackground="#191A23"
//                         textColor="#FFFFFF"
//                     />
//                 </div>
//             </div>
//             <div className={`
//                 h-[370px] lg:h-[347px] rounded-[45px] bg-Grey p-[50px] my-[70px]
//                 flex justify-between items-center w-full
//             `}>
//                 <div className={`
//                         flex flex-col gap-[20px] lg:gap-[26px] lg:w-[500px] text-left
//                     `}>
//                     <h3>Let’s make things happen</h3>
//                     <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
//                     <button className={`
//                     h-[68px] rounded-[14px] bg-Dark text-white
//                     lg:w-[288px]
//                 `}>Get your proposal</button>
//                 </div>
//                 <div className="hidden lg:block">
//                     <Image
//                         width={359}
//                         height={394.27}
//                         src={"/assets/serviceIlustration.svg"}
//                         alt="Ilustration"
//                     />
//                 </div>
//             </div>
//         </section>


//     )
// }