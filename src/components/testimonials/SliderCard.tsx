"use client"

interface teste{
    nameTeste: string
    position: string
}


import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SliderCard(props: teste) {
    const [isLg, setIsLg] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLg(window.innerWidth >= 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`
            h-[554px] lg:h-[625px] rounded-[45px] bg-Dark p-[30px]
            flex  flex-col lg:items-center gap-[30px] lg:gap-[40px] lg:pt-[84px]

        `}>
            <div className="relative flex justify-center p-[30px] text-white lg:w-[606px]">
                <p className="z-10">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
                
                {isLg ? (
                    <Image
                        width={606}
                        height={266}
                        src={"/assets/BubbleLG.svg"}
                        alt="svg-large"
                        className="absolute top-0"
                    />
                ) : (
                    <Image
                        width={330}
                        height={326.38}
                        src={"/assets/Bubble.svg"}
                        alt="svg"
                        className="absolute top-0"
                    />
                )}
            </div>
            <div className='lg:w-[606px] lg:mt-[20px] ml-[60px] lg:ml-[140px]'>
                <h4 className='text-Green'>{props.nameTeste}</h4>
                <span className='text-white'>{props.position}</span>
            </div>
        </div>
    );
}


