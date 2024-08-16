// _components/dynamic-page.tsx
"use client";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Header } from "../_components/header";
import { Hero } from "../_components/hero";
import { Partners } from "../_components/partners";
import { FeaturesSectionDemo } from "../_components/details";
import { Howitworks } from "../_components/howitworks";
import Gallery from "../_components/Designs";
import { Faq } from "../_components/faq";
import { Footer } from "../_components/footer";
import Head from "next/head";

const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
};

const scrollAnimation = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay } }
});

const AnimatedSection = ({ children, delay = 0 }: any) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 });

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

export default function DynamicPage({ keyword }: { keyword: string }) {
    const location = keyword.split('-').pop();

    return (
        <main className="overflow-hidden scroll-smooth bg-[#000000]">
            <Head>
                <title>{keyword} | Harbourfront Web Designs</title>
                <meta name="description" content={`${location}'s best one-stop website design and development solution. Get unlimited edits, 24/7 support, monthly payment options...`} />
                <meta name="keywords" content={keyword} />
            </Head>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                id="header" className="fixed top-0 left-0 right-0 z-50"
            >
                <Header />
            </motion.div>
            <AnimatedSection>
                <div id="hero">
                    <Hero location={location} />
                </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
                <div id="partners">
                    <Partners />
                </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
                <div id="detail" className="pt-10">
                    <FeaturesSectionDemo />
                </div>
            </AnimatedSection>
            <div id="how-it-works">
                <Howitworks />
            </div>
            <AnimatedSection delay={0}>
                <div id="our-work">
                    <Gallery />
                </div>
            </AnimatedSection>
            <div id="faq">
                <Faq />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </main>
    );
}
