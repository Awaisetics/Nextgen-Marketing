import AboutSectionOne from "@/components/About/AboutSectionOne";
import CEO from "@/components/CEO";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextGen Marketing - Digital Marketing Agency",
  description: "Professional digital marketing services including web development, social media management, virtual assistance, and lead generation for growing businesses.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Statistics />
      <AboutSectionOne />
      <Testimonials />
      <CEO />
      <Contact />
    </>
  );
}
