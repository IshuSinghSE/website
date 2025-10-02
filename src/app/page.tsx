"use client";
import { Suspense } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Belt from "@/components/Belt";
import BentoGrid from "@/components/BentoGrid";
import WeTextSection from "@/components/WeTextSection";
import Parallax from "@/components/Parallax";
import OurTeam from "@/components/OnlyLeads";
import Event from "@/components/Event";
import ScrambleText from "@/components/ScrambleText";
import Footer from "@/components/Footer";
import TeamList from "@/components/TeamList";


export default function Home(): JSX.Element {
  return (
    <>
      {/* Preloader outside of Suspense */}
      <Preloader />

      <Suspense fallback={null}>
        <main className="relative z-10">
          <section className="h-screen w-full">
            <Hero />
          </section>

          <section>
            <AboutUs />
          </section>

          <section>
            <Belt />
          </section>

          <section className="container mx-auto">
            <BentoGrid />
          </section>

          <section>
            <Belt />
          </section>

          <section className="container mx-auto">
            <WeTextSection />
          </section>

          <section>
            <Parallax />
          </section>

          <section className="container mx-auto">
            <TeamList />
          </section>

          <section>
            <Event />
          </section>

          <section className="container mx-auto">
            <ScrambleText />
          </section>
        </main>
        <Footer />
      </Suspense>
    </>
  );
}
