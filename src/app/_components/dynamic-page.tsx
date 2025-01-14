// _components/dynamic-page.tsx
"use client";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Header } from "../_components/header";
import { Hero } from "../_components/hero";
import { Partners } from "../_components/partners";
import { Howitworks } from "../_components/howitworks";
import { Faq } from "../_components/faq";
import { Footer } from "../_components/footer";
import Head from "next/head";
import Gallery from "./Designs";
import { Modal, ModalBody, ModalContent, ModalProvider } from "../components/ui/model";
import { Detail } from "./details";
import Calen from "./calendly";
import { TestimonialsVariant1 } from "./reviews";

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


export default function DynamicPage({ keyword, posts }: { keyword: string, posts: any }) {
    // List of city names with hyphens for multi-word cities
    const service = 'Website Design';
    return (
        <main className="overflow-x-hidden scroll-smooth bg-[#000000] bg-dot-white/15">


            <ModalProvider>
                <Modal>
                    <ModalBody>
                        <ModalContent>
                            <h4 className="text-lg md:text-2xl z-50 text-neutral-100 font-bold text-center mb-8">
                                Get a {" "}
                                <span className="px-1 py-0.5 rounded-md bg-amber-600 border-neutral-700 border">
                                    FREE
                                </span>{" "}
                                Consultation! 📞
                            </h4>

                            {/* <Contact /> */}
                            <Calen />
                        </ModalContent>

                    </ModalBody>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariant}
                        id="header" className="fixed top-0 left-0 right-0 z-50 "
                    >
                        <Header />

                    </motion.div>

                    <div id="hero">
                        <Hero location={keyword} service={service} />
                    </div>


                    <div id="partners">
                        <Partners />
                    </div>

                    <AnimatedSection >
                        <div id="detail" className="pt-10">
                            <Detail location={keyword} />
                        </div>
                    </AnimatedSection>
                    <div id="how-it-works">
                        <Howitworks />
                    </div>
                    <div id="reviews">
                        {/* <Testimonials keyword={location} /> */}
                        <TestimonialsVariant1 keyword={keyword} />
                    </div>
                    <AnimatedSection delay={0}>
                        <div id="our-work">
                            <Gallery />
                        </div>
                    </AnimatedSection>
                    {/* <div id="blogs">
                        <BlogsPre blogs={posts} />
                    </div> */}
                    <div id="faq">
                        <Faq />
                    </div>
                    <div id="footer">
                        <Footer />
                    </div>
                </Modal>

            </ModalProvider>

        </main>
    );
}
