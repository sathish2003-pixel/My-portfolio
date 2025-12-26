import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Stats } from "@/components/sections/Stats";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <AnimatedBackground />
      <div className="relative z-10 overflow-x-hidden">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <WhatIDo />
        <Projects />
        <Experience />
        <Testimonials />
        <CTA />
        <Contact />
      </div>
    </PageTransition>
  );
}
