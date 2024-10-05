import Image from "next/image";

export default function CaseStudies() {
    return (
        <section className="flex flex-col items-center" id="caseStudies">
            <div className={`
                    flex flex-col items-center w-full
                    lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]
                `}>
                <h2><span className="bg-Green font-medium rounded-[7px]">Case Studies</span></h2>
                <p className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[580px] lg:h-[46px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>
            <div className={`
                    flex flex-col gap-[30px] lg:hidden mb-[60px]
                `}>
                <div className={`
                        w-[350px] h-[252px] px-[50px] py-[42px]
                        bg-Dark rounded-[45px] flex flex-col justify-between
                    `}>
                    <p className="text-[#FFFFFF] text-left">
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </p>
                    <button className="flex items-center gap-2">
                        <span className="text-Green">Learn More</span>
                        <span>
                            <Image
                                width={17}
                                height={10}
                                src={"/assets/GreenIconArrow.svg"}
                                alt="Learn more"
                            />
                        </span>
                    </button>
                </div>
                <div className={`
                        w-[350px] h-[252px] px-[50px] py-[42px]
                        bg-Dark rounded-[45px] flex flex-col justify-between
                    `}>
                    <p className="text-[#FFFFFF] text-left">
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </p>
                    <button className="flex items-center gap-2">
                        <span className="text-Green">Learn More</span>
                        <span>
                            <Image
                                width={17}
                                height={10}
                                src={"/assets/GreenIconArrow.svg"}
                                alt="Learn more"
                            />
                        </span>
                    </button>
                </div>
                <div className={`
                        w-[350px] h-[252px] px-[50px] py-[42px]
                        bg-Dark rounded-[45px] flex flex-col justify-between
                    `}>
                    <p className="text-[#FFFFFF] text-left">
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </p>
                    <button className="flex items-center gap-2">
                        <span className="text-Green">Learn More</span>
                        <span>
                            <Image
                                width={17}
                                height={10}
                                src={"/assets/GreenIconArrow.svg"}
                                alt="Learn more"
                            />
                        </span>
                    </button>
                </div>
            </div>
            <div className={`
                    w-full px-[60px] pt-[70px] rounded-[45px]
                    bg-Dark h-[326px] justify-center mb-[140px] hidden lg:flex
                `}>
                <div className="w-[286px] h-[163px] flex flex-col gap-[20px] mr-[32px]">
                    <p className="text-[#FFFFFF] text-left">
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </p>
                    <button className="flex items-center gap-2">
                        <span className="text-Green">Learn More</span>
                        <span>
                            <Image
                                width={17}
                                height={10}
                                src={"/assets/GreenIconArrow.svg"}
                                alt="Learn more"
                            />
                        </span>
                    </button>
                </div>
                <div className="h-[186px] w-[1px] bg-white"></div>
                <div className="w-[286px] h-[163px] flex flex-col gap-[20px] ml-[32px] mr-[32px]">
                    <p className="text-[#FFFFFF] text-left">
                        For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                    </p>
                    <button className="flex items-center gap-2">
                        <span className="text-Green">Learn More</span>
                        <span>
                            <Image
                                width={17}
                                height={10}
                                src={"/assets/GreenIconArrow.svg"}
                                alt="Learn more"
                            />
                        </span>
                    </button>
                </div>
                <div className="h-[186px] w-[1px] bg-white"></div>
                <div className="w-[286px] h-[163px] flex flex-col gap-[20px] ml-[32px]">
                    <p className="text-[#FFFFFF] text-left">
                        For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                    </p>
                    <button className="flex items-center gap-2">
                        <span className="text-Green">Learn More</span>
                        <span>
                            <Image
                                width={17}
                                height={10}
                                src={"/assets/GreenIconArrow.svg"}
                                alt="Learn more"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}