import HeroSection from "@/components/heroSection/HeroSection";
import Services from "@/components/services/Services";
import Image from "next/image";



export default function Home() {
  return (
    <main className="px-[20px] lg:px-[100px] pt-[30px] lg:pt-[0px]">
        <HeroSection/>
        <Services/>
    </main>
  );
}
