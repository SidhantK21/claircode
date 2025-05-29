import { About } from "@/components/AboutBento";
import { Container } from "@/components/container";
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <Container className="" >
    <Hero/>
    <About/>
   </Container>
  );
}
