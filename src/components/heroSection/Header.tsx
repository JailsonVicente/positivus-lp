"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
    return (
        <header className={`
            flex justify-between items-center
            h-[23.61px] lg:h-[198px]
        `}>
            <Image
                src={"/assets/Logo.svg"}
                width={144}
                height={23.61}
                alt='logo'
            />
            <ToggleMenu />
        </header>
    )
}


function ToggleMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return (<div className="">
        <button
            className={`
                lg:hidden
            `}
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
                left-0 right-0 top-0 bottom-0 fixed
                flex flex-col 
                items-center justify-center
                bg-[#2e2c20]
                h-screen w-screen z-40 text-center bg-opacity-95 text-white
            `}>
                <ul className='h-full w-full' onClick={closeMenu}>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Use Cases</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li></li>
                </ul>
            </div>
        )}  {(
            <div className='hidden lg:block'>
                <ul className={`
                    flex text-[20px] gap-10 items-center
                `}>
                    <li className="">
                        <Link href={"#"} onClick={closeMenu}>About us</Link>
                    </li>
                    <li className="">
                        <Link href={"#"} onClick={closeMenu}>Services</Link>
                    </li>
                    <li className="">
                        <Link href={"#"} onClick={closeMenu}>Use Case</Link>
                    </li>
                    <li className="">
                        <Link href={"#"} onClick={closeMenu}>Pricing</Link>
                    </li>
                    <li className="">
                        <Link href={"#"} onClick={closeMenu}>Blog</Link>
                    </li>
                    <li className="border border-Dark rounded-[14px] w-[231px] h-[68px] flex items-center justify-center">
                        <Link href={"#"} onClick={closeMenu}>Request a quote</Link>
                    </li>
                </ul>
            </div>
        )}
    </div>)
}

