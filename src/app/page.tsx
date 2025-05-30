// import { About } from "@/components/AboutBento";
import { About } from "@/components/AboutBento";
import { Container } from "@/components/container";
import { Hero } from "@/components/Hero";
import UserStatsCard from "@/components/userProgess";
import Image from "next/image";

export default function Home() {
  return (
   <Container className="" >
    <Hero/>
    <About/>
   </Container>
  );
}
