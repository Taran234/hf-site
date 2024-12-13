"use client";
import React, { useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 4);
    const secondRow = products.slice(4, 8);
    const thirdRow = products.slice(8, 12);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1500]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1500]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
        springConfig
    );

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = products.map((product) => ({ src: product.thumbnail }));

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    return (
        <div
            ref={ref}
            className="md:h-[300vh] h-[280vh] my-20 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}

            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
                    {firstRow.map((product, index) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            onImageClick={() => handleImageClick(index)}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-10 space-x-10 ">
                    {secondRow.map((product, index) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            onImageClick={() => handleImageClick(index + 4)}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
                    {thirdRow.map((product, index) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            onImageClick={() => handleImageClick(index + 8)}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={currentIndex}
                />
            )}
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-10 px-4 w-full  left-0 top-0">
            <p className="max-w-2xl text-base  font-semiBold  mt-8 text-neutral-200">
                Website design Company Toronto
            </p>
            <div className="text-2xl md:text-4xl font-aclonica mt-2 font-bold text-white md:w-3/5 w-5/6">
                We Don't Just Build Websites, We Build Websites That Guarantee Results And Better Business.
            </div>
            <p className="max-w-2xl text-base  font-semiBold md:text-xl mt-8 text-neutral-200">
                We build beautiful products with the latest technologies and frameworks.
                Our website development and creation teams focus on what is best for your business and give you unmatched services then any other website design Company in Toronto.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
    onImageClick,
}: {
    product: {
        title: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
    onImageClick: () => void;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <div
                onClick={onImageClick}
                className="block group-hover/product:shadow-2xl cursor-pointer"
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    loading="lazy"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </div>
            <div className="absolute inset-0 h-full w-full opacity-10 group-hover/product:opacity-40 bg-black pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </div>
        </motion.div>
    );
};
