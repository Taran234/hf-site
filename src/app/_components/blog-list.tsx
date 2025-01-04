"use client"
import { client } from "../lib/contentful";
import { Blog, BlogsPre, BlogsPreProps } from "../_components/blog-preview";
import { Header } from "../_components/header";
import { Modal, ModalBody, ModalContent, ModalProvider } from "../components/ui/model";
import Calen from "../_components/calendly";
import { useAnimation, motion } from "framer-motion";
import { Footer } from "./footer";


const BlogsList = ({ blogs }: BlogsPreProps) => {
    const fadeInVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } }
    };


    return (
        <>
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
                    <>
                        <div className="max-w-7xl mt-20 mx-auto py-20 md:py-10 px-4 w-full">
                            <div className="relative left-0 top- justify-start md:w-1/2">

                            </div>
                            <div className="relative right-0 top-0 text-right ml-auto justify-end md:w-1/2">
                                <p className="max-w-2xl text-base font-semiBold mt-8 text-neutral-200">
                                    Get Inspired with Our Web Design Tips and Insights
                                </p>
                                <div className="text-2xl md:text-4xl font-inknut mt-2 font-bold text-white">
                                    Explore Our Blogs and Case Studies to Elevate Your Website's Design
                                </div>
                                <p className="max-w-2xl text-base font-semiBold md:text-xl mt-8 text-neutral-200">
                                    Dive into our expert advice on creating stunning, user-friendly websites. Stay updated on the latest trends and techniques to enhance your online presence and design strategy.

                                </p>
                            </div>
                        </div>
                        <BlogsPre blogs={blogs} />

                    </>

                    <Footer />
                </Modal>

            </ModalProvider>
        </>
    );
}

export default BlogsList;
