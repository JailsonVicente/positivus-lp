import Header from "./Header";
import Home from "./Home";

export default function HeroSection() {
    return(
        <section className={`
            lg:mt-[80px]
        `} id="HeroSection">
            <Header/>
            <Home/>
        </section>
    )
}