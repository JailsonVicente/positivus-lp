import CaseStudies from "@/components/caseStudies/CaseStudies";
import HeroSection from "@/components/heroSection/HeroSection";
import WorkingProcess from "@/components/process/WorkingProcess";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";



export default function Home() {
  return (
    <main className="px-[20px] lg:px-[100px] pt-[30px] lg:pt-[0px]">
        <HeroSection/>
        <Services/>
        <CaseStudies/>
        <WorkingProcess/>
        <Team/>
        <Testimonials/>
    </main>
  );
}
