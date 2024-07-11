'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const body: Record<string, any> = {};
        formData.forEach((value, key) => {
            body[key] = value;
        });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...body,
                    access_key: "db44416b-ca9d-48e0-9d50-30bcbcfea335",
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
            console.log(result); // Log the response from the API

            setLoading(false);
            setSubmitted(true);
            resetForm();
        } catch (error) {
            console.error("Error submitting the form:", error);
            setLoading(false);
            // Handle error state if needed
        }
    }

    function resetForm() {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        if (form) {
            form.reset();
        }
    }

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
                <path fill="#f97316" fillOpacity="1" d="M0,64L80,101.3C160,139,320,213,480,218.7C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div className="relative flex w-full justify-center mx-auto py-6 md:px-16 md:py-10 text-sm leading-5 text-white bg-orange-500">
                <div className="flex flex-col max-w-full">

                    <div className="flex md:flex-row flex-col md:justify-between justify-center md:mx-auto px-7 md:gap-40 gap-7">
                        <div className="block w-full md:hidden">

                            <div className="flex flex-wrap gap-10 justify-center items-center mx-auto mt-5 text-md font-bold">
                                <Link href={'#about'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">About</Link>
                                <Link href={'#how-it-works'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">How We Work</Link>
                                <Link href={'#detail'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">Services</Link>
                                <Link href={'#our-work'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">Our Works</Link>
                                <Link href={'#pricing'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">Pricing</Link>
                                <Link href={'#faq'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">FAQ</Link>
                            </div>
                        </div>
                        <div className="col-span-1" id="contact">

                            <div className="w-full md:mx-auto sm:px-6 ">
                                <span className="text-center text-base md:text-lg font-semibold leading-normal mb-4 block">
                                    Send Us A Message
                                </span>

                                <form id="contact-form" onSubmit={handleSubmit} className="bg-inherit">
                                    <input type="checkbox" className="hidden" name="botcheck" />
                                    <div className="mb-4">
                                        <input type="text" placeholder="Full Name" autoComplete="off"
                                            className="w-full px-4 py-2 border-2 border-gray-600 bg-gray-300 rounded-md outline-none placeholder-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                            name="name" required />
                                    </div>
                                    <div className="mb-4">
                                        <input id="email_address" type="email" placeholder="Your Contact Email" autoComplete="off"
                                            className="w-full px-4 py-2 border-2 border-gray-600 bg-gray-300 rounded-md outline-none placeholder-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                            name="email" required />
                                    </div>
                                    <div className="mb-4">
                                        <textarea placeholder="Your Message"
                                            className="w-full px-4 py-2 border-2 border-gray-600 bg-gray-300 rounded-md outline-none placeholder-gray-800 focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                            name="message" required>
                                        </textarea>
                                    </div>
                                    <button type="submit"
                                        className="w-full py-2 font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                                        {loading ? 'Loading...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>

                        </div>

                        <div className="md:block col-span-1 hidden">
                            <p className="font-semibold text-balance text-white">Quick Link</p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <Link href={'#about'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">About</Link>
                                <Link href={'#how-it-works'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">How We Work</Link>
                                <Link href={'#detail'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">Services</Link>
                                <Link href={'#our-work'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">Our Works</Link>
                                <Link href={'#pricing'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">Pricing</Link>
                                <Link href={'#faq'} className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer ">FAQ</Link>
                            </div>
                        </div>

                        <div className="col-span-1 mt-5 md:mt-0">
                            <p className="font-semibold  text-white">Contact Us</p>
                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <a
                                    href="tel:+12895443272"
                                    className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer "
                                >
                                    +1 (289) 544 3272
                                </a>
                                <a
                                    href="mailto:harbourfrontwebdesings@gmail.com"
                                    className=" transition-colors duration-300 text-gray-100 hover:text-blue-400  hover:cursor-pointer "
                                >
                                    harbourfrontwebdesings@gmail.com
                                </a>

                                <div className="flex flex-row  md:gap-3 gap-2 pt-10">
                                    <Image
                                        alt="Logo Harbourfront web designs"
                                        width={200}
                                        height={200}
                                        loading="lazy"
                                        src="/yatch-white.png"
                                        className="shrink-0 self-stretch max-w-full aspect-[1.75] md:w-[100px] w-[64px]"
                                    />
                                    <div className="flex flex-col md:text-xl text-sm justify-center items-center">
                                        <h3 className="md:items-start font-bold md:border-b-0.5 uppercase">Harbourfront</h3>
                                        <h3 className="md:items-end font-extrabold ">Web Designs</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
