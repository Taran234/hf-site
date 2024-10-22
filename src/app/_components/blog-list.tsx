"use client"
import { client } from "../lib/contentful";
import { Blog, BlogsPre, BlogsPreProps } from "../_components/blog-preview";
import { Header } from "../_components/header";
import { Modal, ModalBody, ModalContent, ModalProvider } from "../components/ui/model";
import Calen from "../_components/calendly";
import { useAnimation, motion } from "framer-motion";
import { Footer } from "./footer";


const BlogsList = async ({ blogs }: BlogsPreProps) => {
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
                                <span className="px-1 py-0.5 rounded-md bg-neutral-800 border-neutral-700 border">
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

                    <BlogsPre blogs={blogs} />
                    <Footer />
                </Modal>

            </ModalProvider>
        </>
    );
}

export default BlogsList;
