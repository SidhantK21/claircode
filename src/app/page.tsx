// import { About } from "@/components/AboutBento";
import { About } from "@/components/AboutBento";
import { Container } from "@/components/container";
import FAQ from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/pricing";
import { Projects } from "@/components/projects";
import UserStatsCard from "@/components/userProgess";
import Image from "next/image";

export default function Home() {
  return (
   <Container className="" >
    <Hero/>
    <About/>
    <Pricing/>
    <Projects/>
    <FAQ/>
   </Container>
  );
}
