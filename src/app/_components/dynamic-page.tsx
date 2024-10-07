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
import { Blog, BlogsPre } from "../_components/blog-preview";
import { Footer } from "../_components/footer";
import Head from "next/head";
import Gallery from "./Designs";
import { Modal, ModalBody, ModalContent, ModalProvider } from "../components/ui/model";
import { Contact } from "./contact";
import { Detail } from "./details";
import Testimonials from "./testimonials";

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
    const cities = [
        'toronto', 'markham', 'burlington', 'richmond-hill', 'vaughan', 'ajax',
        'aurora', 'etobicoke', 'oshawa', 'scarborough', 'newmarket', 'sudbury',
        'pickering', 'thornhill', 'halton-hill', 'georgina', 'north-york',
        'simcoe', 'hamilton', 'welland', 'windsor', 'st-catharines', 'london',
        'waterloo', 'cambridge'
    ];

    const serviceMapping: Record<string, string> = {
        'digital-marketing': 'Digital Marketing',
        'digital-advertising': 'Digital Advertising',
        'facebook-ads': 'Digital Marketing',
        'google-ads': 'Digital Marketing',
        'web-design': 'Website Designing',
        'website-development': 'Website Designing',
        'seo-services': 'Website SEO',
        'ecommerce-seo': 'E-Commerce SEO',
        'ecommerce-website-development': 'E-Commerce Website',
        'website-maintenance': 'Website Services',
        'website-optimization': 'Website Services',
        'website-redesign': 'Website Services',
    };
    const service = Object.keys(serviceMapping).find(key => keyword.includes(key))
        ? serviceMapping[Object.keys(serviceMapping).find(key => keyword.includes(key))!]
        : 'Website Designing';

    // Find the city from the keyword
    const location = cities.find(city => keyword.includes(city));

    return (
        <main className="overflow-x-hidden scroll-smooth bg-[#000000] bg-dot-slate-50/10">
            <Head>
                <title>{service} {location} | Custom Website Designing Services {location}</title>
                <meta name="description" content={`${location}'s best all-in-one ${service} agency. Get weekly SEO updates, 24/7 on call support, affordable payment options and more...`} />
                <meta name="keywords" content={service} />
            </Head>

            <ModalProvider>
                <Modal>
                    <ModalBody>
                        <ModalContent>
                            <h4 className="text-lg md:text-2xl z-50 text-neutral-100 font-bold text-center mb-8">
                                Get a {" "}
                                <span className="px-1 py-0.5 rounded-md bg-neutral-800 border-neutral-700 border">
                                    FREE
                                </span>{" "}
                                Consultation! 📞
                            </h4>

                            <Contact />
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
                    <AnimatedSection>
                        <div id="hero">
                            <Hero location={location} service={service} />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <div id="partners">
                            <Partners />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <div id="detail" className="pt-10">
                            <Detail />
                        </div>
                    </AnimatedSection>
                    <div id="how-it-works">
                        <Howitworks />
                    </div>

                    <div id="reviews">
                        <Testimonials />
                    </div>

                    <AnimatedSection delay={0}>
                        <div id="our-work">
                            <Gallery />
                        </div>
                    </AnimatedSection>
                    <div id="blogs">
                        <BlogsPre blogs={posts} />
                    </div>
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
