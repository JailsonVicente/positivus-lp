import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <section className={`
            bg-Dark text-white pt-[50px] px-[20px] pb-[30px] lg:mx-[100px] lg:rounded-t-[45px] lg:px-[55px]
            lg:h-[514px]
        `} id="footer">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:h-[30px]">
                <div>
                    <Image
                        width={144}
                        height={23.61}
                        src={"/assets/LogoWhite.svg"}
                        alt="logo"
                    />
                </div>
                <div>
                    <ul className="flex flex-col gap-[15px] my-[37px] lg:flex-row text-center">
                    <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#about"} >About us</Link>
                        </li>
                        <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#services"} >Services</Link>
                        </li>
                        <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#caseStudies"} >Use Case</Link>
                        </li>
                        <li className="hover:border-b-Green hover:border-b-2">
                        <Link href={"#footer"} >Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div className="lg:flex lg:gap-[20px] hidden">
                    <Image
                        width={30}
                        height={30}
                        src={"/assets/linkedin.svg"}
                        alt="LinkedIn"
                    />
                    <Image
                        width={30}
                        height={30}
                        src={"/assets/facebook.svg"}
                        alt="Facebook"
                    />
                    <Image
                        width={30}
                        height={30}
                        src={"/assets/twitter.svg"}
                        alt="Twitter / X"
                    />
                </div>
            </div>
            <div className={`
                    flex flex-col items-center lg:flex-row lg:h-[184px] lg:justify-between lg:mt-[65px]
                `}>
                <div className={`
                    flex flex-col items-center gap-[15px]  lg:justify-between lg:my-[65px] lg:items-start
                `}>
                    <h4 className="bg-Green font-medium rounded-[7px] w-[126px] h-[23px] leading-[23px] text-black text-center mb-[37px] lg:mb-0 lg:text-left">Contact us:</h4>
                    <span className="text-[16px] w-[295px] text-center lg:text-left">Email: info@positivus.com</span>
                    <span className="text-[16px] w-[295px] text-center lg:text-left">Phone: 555-567-8901</span>
                    <span className="text-[16px] w-[295px] text-center lg:text-left">Address: 1234 Main St
                        Moonstone City, Stardust State 12345</span>
                </div>
                <div className="flex flex-col bg-[#292A32] w-full lg:w-[634px] rounded-[14px] p-[30px] my-[37px] gap-[22px] lg:flex-row lg:justify-between lg:h-[184px] lg:items-center">
                    <input type="email" name="Email" placeholder="Email" className={`
                                h-[67px] rounded-[14px] py-[18px] px-[20px]
                                border border-white bg-Dark
                                placeholder-opacity-50 placeholder-white
                    `} />
                    <button className="h-[68px] w-full rounded-[14px] bg-Green text-black text-[20px]">
                        Subscribe to news
                    </button>
                </div>
                <div className="lg:hidden flex gap-[20px]">
                        <Image
                            width={30}
                            height={30}
                            src={"/assets/linkedin.svg"}
                            alt="LinkedIn"
                        />
                        <Image
                            width={30}
                            height={30}
                            src={"/assets/facebook.svg"}
                            alt="Facebook"
                        />
                        <Image
                            width={30}
                            height={30}
                            src={"/assets/twitter.svg"}
                            alt="Twitter / X"
                        />
                </div>
            </div>
            <div className="bg-white h-[1px] w-full my-[37px]"></div>
                <div className="flex flex-col items-center gap-[15px] lg:flex-row lg:mb-[50px] lg:gap-[40px]">
                    <span className="text-[16px] w-[295px] text-center lg:w-auto">© 2023 Positivus. All Rights Reserved.</span>
                    <span className="text-[16px] w-[295px] text-center underline cursor-pointer lg:w-auto">Privacy Policy</span>
                </div>
        </section>
    )
}