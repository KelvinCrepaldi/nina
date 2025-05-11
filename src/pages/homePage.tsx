import NavBar from "@/components/NavBar";
import About from "@/components/sections/About";
import Concepts from "@/components/sections/Concepts";
import Hero from "@/components/sections/Hero";
import Illustrations from "@/components/sections/Illustrations";
import Showreel from "@/components/sections/Showreel";

export default function HomePage() {
    return <section>
        <NavBar/>
        <Hero />
        <Concepts />
        <Illustrations />
        <Showreel />
        <About/>
    </section>
}