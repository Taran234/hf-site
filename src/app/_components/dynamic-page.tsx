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
const generateMetaTags = ({ service, location }: { service: string; location: string | undefined }) => ({
    title: `${service} ${location ? location : "Toronto"} | Best Website Design Company for Small Businesses ${location ? location : "Toronto"}`,
    description: `${location ? location : "Toronto"}'s best Top-Rated ${service} Company. Get weekly SEO updates, 24/7 on-call support, affordable payment options, and more...`,
    keywords: `${service}, ${location ? location : "Toronto"}, website design Company, small business website`,
    ogTitle: `${service} Services in ${location ? location : "Toronto"}`,
    ogDescription: `Looking for ${service} in ${location ? location : "Toronto"}? We're the leading website design Company offering tailored solutions for small businesses.`,
    ogUrl: `https://harbourfrontwebdesigns.com/${service.replace(/\s+/g, "-").toLowerCase()}-${location ? location : "Toronto"}`,
    ogImage: `/meta.png`,
    twitterTitle: `Top ${service} Services in ${location ? location : "Toronto"}`,
    twitterDescription: `The best ${service} Company in ${location ? location : "Toronto"}. Affordable prices, SEO updates, and 24/7 support.`,
    twitterImage: `/meta.png`,
});

export default function DynamicPage({ keyword, posts }: { keyword: string, posts: any }) {
    // List of city names with hyphens for multi-word cities
    const cities = [
        'toronto', 'markham', 'richmond-hill',
        'etobicoke', 'oshawa', 'kitchener', 'hamilton',
        'london', 'waterloo', 'cambridge', 'mississauga',
        'brampton', 'oakville', 'burlington'
    ];

    const serviceMapping: Record<string, string> = {
        'website-design': 'Business Website Design',
        'website-development': 'Business Website Development',
        'ecommerce-website-development': 'E-Commerce Website Development',
        'ecommerce-website-design': 'E-Commerce Website Designers',
    };
    const service = Object.keys(serviceMapping).find(key => keyword.includes(key))
        ? serviceMapping[Object.keys(serviceMapping).find(key => keyword.includes(key))!]
        : 'Business Website Design';

    // Find the city from the keyword
    let location = (cities?.find(city => keyword.includes(city)))?.toString() || "Toronto";
    location = location.charAt(0).toUpperCase() + location.slice(1);
    const meta = generateMetaTags({ service, location });
    return (
        <main className="overflow-x-hidden scroll-smooth bg-[#000000] bg-dot-slate-50/10">
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta property="og:title" content={meta.ogTitle} />
                <meta property="og:description" content={meta.ogDescription} />
                <meta property="og:url" content={meta.ogUrl} />
                <meta property="og:image" content={meta.ogImage} />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content={meta.twitterTitle} />
                <meta name="twitter:description" content={meta.twitterDescription} />
                <meta name="twitter:card" content={meta.twitterImage} />
                <meta name="twitter:image" content={meta.twitterImage} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Harbourfront Web Designs" />
                <link rel="canonical" href={meta.ogUrl} />
            </Head>

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
                        <Hero location={location} service={service} />
                    </div>


                    <div id="partners">
                        <Partners />
                    </div>

                    <AnimatedSection >
                        <div id="detail" className="pt-10">
                            <Detail location={location} />
                        </div>
                    </AnimatedSection>
                    <div id="how-it-works">
                        <Howitworks />
                    </div>
                    <div id="reviews">
                        {/* <Testimonials keyword={location} /> */}
                        <TestimonialsVariant1 keyword={location} />
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
