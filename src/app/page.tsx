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
    <div>
      <div id="header" className="sticky top-0 z-30">
        <Header />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="how-it-works">
        <Howitworks />
      </div>
      <div id="detail">
        <Detail />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="our-work">
        <OurWork />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>


  );
}
