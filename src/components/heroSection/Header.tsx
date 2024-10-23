"use client";

import Image from 'next/image';
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

    const handleLogoClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
        window.location.reload(); // Reload the page to the initial state
    };

    return (
        <header className={`
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            transition-transform duration-300 ease-in-out
            fixed top-0 left-0 right-0 z-50
            flex justify-between items-center
            h-[40px] lg:h-[80px] px-[20px] lg:px-[100px]
            bg-white 
        `}>
            <button onClick={handleLogoClick} className='h-[23.61px]'>
                <Image
                    src={"/assets/Logo.svg"}
                    width={144}
                    height={23.61}
                    alt='logo'
                />
            </button>

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

            <div className={`fixed right-0 top-0 bottom-0 z-40 flex flex-col items-center justify-center bg-Dark h-screen w-3/4 bg-opacity-95 text-white shadow-md 
                transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
                opacity-${isMenuOpen ? '100' : '0'} duration-300 ease-in-out`}>
                <ul className={`h-full flex flex-col w-2/4 gap-4 p-5 items-center`} onClick={closeMenu}>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#about" onClick={closeMenu}>About us</a>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#services" onClick={closeMenu}>Services</a>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#caseStudies" onClick={closeMenu}>Use Case</a>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#footer" onClick={closeMenu}>Pricing</a>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#footer" onClick={closeMenu}>Blog</a>
                    </li>
                    <li>
                        <button className={`h-[35px] w-[35px] rounded-full border border-white flex items-center justify-center hover:bg-red-500`} onClick={closeMenu}>
                            X
                        </button>
                    </li>
                </ul>
            </div>

            <div className='hidden lg:block'>
                <ul className="flex text-[20px] gap-10 items-center">
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#about" onClick={closeMenu}>About us</a>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#services" onClick={closeMenu}>Services</a>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#caseStudies" onClick={closeMenu}>Use Case</a>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#footer" onClick={closeMenu}>Pricing</a>
                    </li>
                    <li className="hover:border-b-Green hover:border-b-2">
                        <a href="#footer" onClick={closeMenu}>Blog</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            <button className="border border-Dark rounded-[14px] w-[231px] h-[68px] flex items-center justify-center hover:bg-Green">
                                Request a quote
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
