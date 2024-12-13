"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdStarRate } from "react-icons/md";
import { RiDoubleQuotesL, RiQuoteText } from "react-icons/ri";

const testimonials = [

    {
        content:
            '"Look no further if you need a good web design company in Toronto! Harbourfront did a great job for our 2 websites and we always use them when we need a new website set up"',
        author: "Matt Evans, Owner of a Gourmet Food Truck Service",
        imgAlt: "Peter",
    },
    {
        content:
            '"Really good experience so far. The team I have been working with has been incredibly responsive and communicative regarding my design ideas. Would definitely recommend them to anyone wanting a new website or SEO service done."',
        author: "Adam Gelinas, Founder of a Craft Brewery",
        imgAlt: "James",
    },

    {
        content:
            '"I couldn’t be happier with the work Harbourfront Web Designs did for my business here in Toronto. They completely redesigned my website and within a couple of months I noticed a huge improvement in my Google rankings thanks to their SEO efforts. The team is super easy to work with, and they really understand how to help local businesses grow online."',
        author: "Berke .A, Owner of a Niche Consulting Firm",
        imgAlt: "John",
    },
    {
        content:
            '"Working with Harbourfront Web Designs has been great for my business. Not only does my website look better, but it’s also easier for people to find me online now. I’ve definitely seen more local traffic coming in since the update. If you’re a business in Toronto, they’re a great choice for web design and SEO"',
        author: "Mike, Proprietor of a Handmade Leather Goods Workshop",
        imgAlt: "Peter",
    },
    {
        content:
            '"This is a talented and professional web development Company who delivered a high-quality website that exceeded my expectations. They were responsive, knowledgeable, and brought my vision to life. I highly recommend them for their excellent work and dedication."',
        author: "Peter ifeanyi, Fitness Studio and Personal Training Gym Owner",
        imgAlt: "Peter",
    },
];

export const TestimonialsVariant1 = ({ keyword }: { keyword: any }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    function handleNextSlide() {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }

    function handlePreviousSlide() {
        setCurrentSlide(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
    }

    return (
        <div className="p-4 w-full">
            <div className="w-full overflow-hidden rounded-2xl grid grid-cols-1 md:px-20 ">
                <div className="flex md:flex-row flex-col">
                    <div className="text-left md:w-1/2 md:text-6xl mx-8 font-semibold leading-normal my-10">
                        <div className="md:text-xl text-base font-aclonica lg:leading-tight  justify-start md:mx-20 text-left tracking-tight font-medium text-gray-500">
                            Website Design {keyword ? keyword : "Toronto"}
                        </div>
                        <div className="md:text-4xl text-2xl font-aclonica lg:leading-tight  justify-start md:mx-20 text-left tracking-tight font-medium text-white">
                            Anyone can make promises we give you proof.
                        </div>

                        <div className="md:text-2xl text-sm font-aclonica lg:leading-tight mt-4 justify-start md:mx-20 text-left tracking-tight font-medium text-white">
                            We asked some of our clients to write an honest review about their experience working with us. Here's what they had to say:
                        </div>

                    </div>

                    <div className="flex  items-center mx-auto md:w-1/2 justify-center ">
                        <div className="flex flex-col items-center space-x-2 w-full mx-4 md:w-auto bg-[#222222] rounded-3xl p-8">



                            {/* Rating Info */}
                            <div className="flex flex-row gap-2">
                                <FcGoogle size={36} />
                                <div className="text-2xl font-bold p-1">5.0</div>
                                <div className="flex space-x-1">
                                    {/* Rating Stars */}
                                    <MdStarRate size={36} className=" text-yellow-400" />
                                    <MdStarRate size={36} className=" text-yellow-400" />
                                    <MdStarRate size={36} className=" text-yellow-400" />
                                    <MdStarRate size={36} className=" text-yellow-400" />
                                    <MdStarRate size={36} className=" text-yellow-400" />
                                </div>
                            </div>
                            <div aria-label="link to our google business profile listing" className="bg-amber-500 p-2 m-2 rounded-lg font-aclonica font-extrabold justify-center items-center flex  text-white" ><Link href={`https://maps.app.goo.gl/U8AEH1ut9YatNpBi6`}> Review us on Google</Link></div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-end gap-5">
                    <button
                        aria-label="next review"
                        className="group inline-flex size-16 items-center justify-center rounded-full p-1.5 bg-amber-600"
                        disabled={currentSlide === 0}
                        onClick={handlePreviousSlide}
                        type="button"
                    >
                        <BsArrowLeft size={32} className=" text-white transition-colors group-disabled:stroke-neutral-500/40" />
                    </button>
                    <button
                        aria-label="previous review"
                        className="group inline-flex size-16 items-center justify-center rounded-full p-1.5 bg-amber-600"
                        disabled={currentSlide === testimonials.length - 1}
                        onClick={handleNextSlide}
                        type="button"
                    >
                        <BsArrowRight size={32} className=" text-white transition-colors group-disabled:stroke-neutral-500/40" />
                    </button>
                </div>
                <section className="mt-8 flex w-full gap-2 *:shrink-0">
                    {testimonials.map((testimonial, index) => {
                        return (
                            <AnimatePresence key={testimonial.content} mode="popLayout">
                                {index >= currentSlide && (
                                    <motion.div
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        className="flex h-60 w-[24rem] flex-col justify-between rounded-lg  p-4 shadow-sm bg-neutral-800"
                                        exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
                                        initial={{ opacity: 0, x: 0, scale: 0.8 }}
                                        layout
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                    >
                                        <div className="size-8 rounded-full"><RiDoubleQuotesL size={32} /></div>
                                        <p className="font-medium  leading-5 tracking-tight text-neutral-400 line-clamp-6">
                                            {testimonial.content}
                                        </p>
                                        <p className="text-xs text-neutral-500">
                                            {testimonial.author}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}