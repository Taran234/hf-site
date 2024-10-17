"use client"
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export interface Blog {
    date: string;
    title: string;
    description: string;
    link: string;
    image: string;
    alt: string;
}

export interface BlogsPreProps {
    blogs: Blog[];
}

export function BlogsPre({ blogs }: BlogsPreProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            <div className="max-w-7xl mt-20 mx-auto py-20 md:py-10 px-4 w-full">
                <div className="relative left-0 top- justify-start md:w-1/2">

                </div>
                <div className="relative right-0 top-0 text-right ml-auto justify-end md:w-1/2">
                    <p className="max-w-2xl text-base font-semiBold mt-8 text-neutral-200">
                        Stay Ahead with Our Industry Secrets for Easier Google Rankings
                    </p>
                    <div className="text-2xl md:text-4xl font-aclonica mt-2 font-bold text-white">
                        Learn How to Optimize Your Own Rankings with Our Blogs and Case Studies
                    </div>
                    <p className="max-w-2xl text-base font-semiBold md:text-xl mt-8 text-neutral-200">
                        Our expert insights and resources will empower you to enhance your online presence.
                        Keep up to date with the latest strategies to improve your visibility and drive more traffic.
                    </p>
                </div>
            </div>

            <div className="container mx-auto justify-center grid grid-cols-1 md:grid-cols-2  overflow-hidden gap-8 py-10">
                {blogs.map((blog, index) => (
                    <Link
                        href={blog.link}
                        key={index}
                        className="relative block p-2 h-full w-full group"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.span
                                    className="absolute inset-0  h-full w-full bg-neutral-200 dark:bg-gray-600/[0.8] block rounded-xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <div className="relative w-full z-10">
                            {/* Image Container */}
                            <div className="h-[300px] overflow-hidden rounded-xl">
                                <div
                                    className="bg-cover bg-center h-full"
                                    style={{ backgroundImage: `url(${blog.image})` }}

                                />
                            </div>
                            {/* Overlay */}
                            <div className="absolute inset-y-0 left-0 md:w-1/2 w-10/12 bg-amber-600 bg-opacity-90 m-4 flex flex-col justify-center">
                                <h2 className="text-5xl font-bold m-4 line-clamp-2 text-white">
                                    SEO SECRETS
                                </h2>
                                <h3 className="text-lg font-bold text-gray-800 m-4 line-clamp-3">
                                    {blog.title}
                                </h3>
                            </div>
                            {/* Clickable Area */}
                            <span className="absolute inset-0 z-10" />
                        </div>
                    </Link>
                ))}
            </div>
        </>

    );
}
