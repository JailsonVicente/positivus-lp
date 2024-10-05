import CardProcess from "./CardProcess";

export default function WorkingProcess() {
    return (
        <section id="about">
            <div className={`
                    flex flex-col items-center
                    lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]
                `}>
                <h2><span className="bg-Green font-medium rounded-[7px]">Our Working Process</span></h2>
                <p className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[292px] lg:h-[46px]">Step-by-Step Guide to Achieving Your Business Goals</p>
            </div>
            <CardProcess/>
        </section>
    )
}