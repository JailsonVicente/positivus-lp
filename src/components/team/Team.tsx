import SliderCard from "@/components/testimonials/SliderCard";
import TeamCard from "./TeamCard";

export default function Team() {
    return (
        <section className="mb-[160px]">
            <div className={`
                    flex flex-col items-center
                    lg:flex-row lg:items-center lg:h-[51px] lg:mt-[140px] lg:mb-[80px]
                `}>
                <h2><span className="bg-Green font-medium rounded-[7px]">Team</span></h2>
                <p className="text-center lg:text-left mt-[30px] mb-[40px] lg:ml-[40px] lg:w-[473px] lg:h-[46px]">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>
            <div className={`
                    flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-y-10
                `}>
                <TeamCard
                    profileSRC="/assets/Picture1.png"
                    name="John Smith"
                    position="CEO and Founder"
                    description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
                />
                <TeamCard
                    profileSRC="/assets/Picture2.png"
                    name="Jane Doe"
                    position="Dir. of Operations"
                    description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
                />
                <TeamCard
                    profileSRC="/assets/Picture3.png"
                    name="Michael Brown"
                    position="SEO Specialist"
                    description="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
                />
                <TeamCard
                    profileSRC="/assets/Picture4.png"
                    name="Emily Johnson"
                    position="PPC Manager"
                    description="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
                />
                <TeamCard
                    profileSRC="/assets/Picture5.png"
                    name="Brian Williams"
                    position="Social Media"
                    description="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
                />
                <TeamCard
                    profileSRC="/assets/Picture6.png"
                    name="Sarah Kim"
                    position="Content Creator"
                    description="2+ years of experience in writing and editing
                Skilled in creating compelling, SEO-optimized content for various industries"
                />
            </div>
            <div className="mt-[40px]  relative w-full">
                <button className={`
                        h-[68px] rounded-[14px] bg-Dark text-white
                        lg:w-[288px] w-full absolute right-0
                    `}>See all team
                </button>
            </div>

        </section>
    )
}
