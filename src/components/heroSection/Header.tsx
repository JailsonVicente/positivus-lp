"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                setIsVisible(true); // Scroll up
            } else {
                setIsVisible(false); // Scroll down
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={`
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            transition-transform duration-300 ease-in-out
            fixed top-0 left-0 right-0 z-50
            flex justify-between items-center
            h-[40px] lg:h-[80px] px-[20px] lg:px-[100px]
            bg-white 
        `}>
            <Link href="#home" className='h-[23.61px]'>
                <button>
                    <Image
                        src={"/assets/Logo.svg"}
                        width={144}
                        height={23.61}
                        alt='logo'
                    />
                </button>
            </Link>

            <ToggleMenu />
        </header>
    );
}

function ToggleMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <button
                className="lg:hidden"
                onClick={toggleMenu}
                id='toggleIcon'
            >
                <Image
                    src={"assets/BurgerMenuIcon.svg"}
                    width={24}
                    height={16}
                    alt='Menu Icon'
                />
            </button>

            {isMenuOpen && (
                <div className={`
                    fixed  right-0 top-0 bottom-0 z-40
                    flex flex-col items-center justify-center
                    bg-Dark h-screen w-3/4 bg-opacity-95 text-white shadow-md
                `}>
                    <ul className={`
                        h-full flex flex-col w-2/4
                        gap-4  p-5 items-center

                    `} onClick={closeMenu}>
                        <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#about"} onClick={closeMenu}>About us</Link>
                        </li>
                        <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#services"} onClick={closeMenu}>Services</Link>
                        </li>
                        <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#caseStudies"} onClick={closeMenu}>Use Case</Link>
                        </li>
                        <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#footer"} onClick={closeMenu}>Pricing</Link>
                        </li>
                        <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#footer"} onClick={closeMenu}>Blog</Link>
                        </li>
                        <li>
                            <button className={`
                                h-[35px] w-[35px] rounded-full border border-white
                                flex items-center justify-center  hover:bg-red-500 
                            `} onClick={closeMenu}>
                                X
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            <div className='hidden lg:block'>
                <ul className="flex text-[20px] gap-10 items-center">
                    <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#about"} onClick={closeMenu}>About us</Link>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#services"} onClick={closeMenu}>Services</Link>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#caseStudies"} onClick={closeMenu}>Use Case</Link>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#footer"} onClick={closeMenu}>Pricing</Link>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#footer"} onClick={closeMenu}>Blog</Link>
                    </li>
                    <li>
                        <Link href={"#contact"} onClick={closeMenu}>
                            <button className="
                                border border-Dark rounded-[14px] w-[231px] h-[68px] flex items-center justify-center
                                hover:bg-Green    
                            ">
                                Request a quote
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
