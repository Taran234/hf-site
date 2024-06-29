import Image from "next/image";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Partners } from "./_components/partners";
import { About } from "./_components/about";
import { Howitworks } from "./_components/howitworks";
import { Detail } from "./_components/details";
import { Pricing } from "./_components/pricing";
import { OurWork } from "./_components/ourWork";
import { Faq } from "./_components/faq";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Howitworks />
      <Detail />
      <Pricing />
      <OurWork />
      <Faq />
      <Footer />
    </>

  );
}
