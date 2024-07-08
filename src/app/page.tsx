"use client";
import Image from "next/image";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Partners } from "./_components/partners";
import { About } from "./_components/about";
import { Howitworks } from "./_components/howitworks";
import { Detail } from "./_components/details";
import { Pricing } from "./_components/pricing";
import { Faq } from "./_components/faq";
import { Footer } from "./_components/footer";
import Gallery from "./_components/Designs";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

// Define animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};

const scrollAnimation = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay } }
});

const AnimatedSection = ({ children, delay = 0 }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scrollAnimation(delay)}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      className="overflow-x-hidden overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        id="header" className="sticky top-0 right-0 left-0 z-30"
      >
        <Header />
      </motion.div>
      <AnimatedSection>
        <div id="hero">
          <Hero />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div id="partners">
          <Partners />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div id="about">
          <About />
        </div>
      </AnimatedSection>

      <div id="how-it-works">
        <Howitworks />
      </div>

      <AnimatedSection delay={0.3}>
        <div id="detail">
          <Detail />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <div id="pricing">
          <Pricing />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <div id="our-work">
          <Gallery />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <div id="faq">
          <Faq />
        </div>
      </AnimatedSection>

      <div id="footer">
        <Footer />
      </div>

    </motion.div>
  );
}
