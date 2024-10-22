import { useState } from "react";
import SliderCard from "./SliderCard";

export default function Slider() {
    type Slide = {
        card: React.ReactNode;
    };

    const slides: Slide[] = [
        {
            card: <SliderCard nameTeste="John Smith" position="Marketing Director at XYZ Corp"/>
        },
        {
            card: <SliderCard nameTeste="Sarah Kim" position="Content Creator"/>
        },
        {
            card: <SliderCard nameTeste="Michael Brown" position="Senior SEO Specialist"/>
        },
        {
            card: <SliderCard nameTeste="Jane Doe" position="Director of Operations"/>
        },
        {
            card: <SliderCard nameTeste="Brian Williams" position="Social Media Specialist"/>
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const handleAnimation = (newIndex: number, dir: 'left' | 'right') => {
        if (!isAnimating) {
            setDirection(dir);
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(newIndex);
                setIsAnimating(false);
            }, 700);
        }
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        handleAnimation(newIndex, 'left');
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        handleAnimation(newIndex, 'right');
    };

    const goToSlide = (slideIndex: number) => {
        const dir = slideIndex > currentIndex ? 'right' : 'left';
        handleAnimation(slideIndex, dir);
    };

    return (
        <div className="flex flex-col items-center relative w-[90vw]  h-auto gap-4 bg-Dark rounded-[45px]">
            <div className="w-full relative overflow-hidden h-[554px] lg:h-[625px] rounded-[45px]" >
                <div className="relative w-full h-full">
                    <div
                        className={`absolute w-full h-full transition-all duration-1000 ease transform opacity-100 ${isAnimating
                                ? direction === 'right'
                                    ? 'translate-x-full opacity-0'
                                    : '-translate-x-full opacity-0'
                                : 'translate-x-0 opacity-100'
                            }`}
                    >
                        {slides[currentIndex].card}
                    </div>
                    <div
                        className={`absolute w-full h-full transition-all duration-1000 ease transform opacity-100 ${isAnimating
                                ? direction === 'right'
                                    ? '-translate-x-full opacity-0'
                                    : 'translate-x-full opacity-0'
                                : 'translate-x-0 opacity-100'
                            }`}
                    >
                        {slides[(currentIndex + 1) % slides.length].card}
                    </div>
                </div>
            </div>
            <div className="flex bottom-[20px] lg:bottom-[68px] gap-[32px] sm:gap-[72px] lg:gap-[208px] absolute justify-center py-2">
                <button onClick={prevSlide} className="hover:scale-150 active:scale-100">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z"
                            fill="white"
                        />
                    </svg>
                </button>

                <div className="flex gap-[20px]">
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className="cursor-pointer"
                        >
                            {currentIndex === slideIndex ? (
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                                        fill="#B9FF66"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                                        fill="white"
                                    />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>

                <button onClick={nextSlide} className="hover:scale-150 active:scale-100">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}










