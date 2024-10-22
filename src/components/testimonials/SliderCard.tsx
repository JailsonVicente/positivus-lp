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
            rounded-[45px] bg-Dark
            flex  flex-col lg:items-center
        `}>
            <div className="flex justify-center p-[30px] text-white lg:w-[606px] gap-[30px] lg:gap-[40px]">

                {isLg ? (
                    <Image
                        width={606}
                        height={266}
                        src={"/assets/Bubble.png"}
                        alt="Image-large"
                    />
                ) : (
                    <Image
                        width={330}
                        height={326.38}
                        src={"/assets/BubbleSM.png"}
                        alt="Image-small"
                    />
                )}
            </div>
            <div className='flex flex-col items-center'>
                <h4 className='text-Green'>{props.nameTeste}</h4>
                <span className='text-white'>{props.position}</span>
            </div>
        </div>
    );
}


