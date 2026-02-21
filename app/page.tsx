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
import { PageTransition } from "@/components/PageTransition";
import { SmoothParallax } from "@/components/SmoothParallax";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative z-10">
        <Hero />
        <SmoothParallax offset={50}>
          <Stats />
        </SmoothParallax>
        <SmoothParallax offset={60}>
          <About />
        </SmoothParallax>
        <SmoothParallax offset={50}>
          <Skills />
        </SmoothParallax>
        <SmoothParallax offset={60}>
          <WhatIDo />
        </SmoothParallax>
        <SmoothParallax offset={50}>
          <Projects />
        </SmoothParallax>
        <SmoothParallax offset={60}>
          <Experience />
        </SmoothParallax>
        <SmoothParallax offset={50}>
          <Testimonials />
        </SmoothParallax>
        <SmoothParallax offset={60}>
          <CTA />
        </SmoothParallax>
        <Contact />
      </div>
    </PageTransition>
  );
}
