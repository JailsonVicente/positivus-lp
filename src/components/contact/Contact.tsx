import Form from "./Form";

export default function Contact() {
    return (
        <section className="mb-[90px]" id="contact">
            <div className={`
                    flex flex-col items-center 
                    lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]
                `}>
                <h2><span className="bg-Green font-medium rounded-[7px]">Contact Us</span></h2>
                <p className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[473px] lg:h-[46px]">Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs</p>
            </div>

            <Form/>

        </section>
    )
}