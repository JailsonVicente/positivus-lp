"use client"

import Slider from "./Slider";
import SliderCard from "./SliderCard";

export default function Testimonials() {
    return (
        <section className="mb-[60px]">
            <div className={`
                    flex flex-col items-center
                    lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]
                `}>
                <h2><span className="bg-Green font-medium rounded-[7px]">Testimonials</span></h2>
                <p className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[473px] lg:h-[46px]">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>
            <div className="flex">
                <Slider/>
            </div>


        </section>
    )
}