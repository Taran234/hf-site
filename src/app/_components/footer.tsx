'use client'
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer id="footer" className="relative flex flex-col md:flex-row justify-evenly py-16 px-8 bg-[#1111] rounded-t-[30%] text-white">
            <div className="flex flex-col items-center  mb-8 md:mr-8 md:mb-0">

                <div className="flex flex-col md:gap-3 gap-2 relative">
                    <Image
                        src="/harbourfront1.png"
                        alt="harbourfront"
                        width={300} // equivalent to w-56
                        height={300} // adjust this based on the image aspect ratio
                        className="rounded-lg my-2"
                    />
                    {/* <Image
                        src="/website-designs.png"
                        alt="web designers near me"
                        width={192} // equivalent to w-48
                        height={192} // adjust this based on the image aspect ratio
                        className="rounded-lg ml-4 -mt-7"
                    /> */}
                </div>

                <div className="flex space-x-4 mb-4 mt-4 text-gray-300">
                    <a href="https://www.facebook.com/HarbourfrontWebDesigns" aria-label="Follow us on facebook" target="_blank" className="link"><FaFacebook size={32} /></a>
                    <a href="https://www.instagram.com/harbourfrontwebdesigns" aria-label="Follow us on instagram" target="_blank" className="link"><FaInstagram size={32} /></a>
                    <a href="https://x.com/HFWdesigns" aria-label="Follow us on twitter/X" target="_blank" className="link"><FaTwitter size={32} /></a>
                    <a href="https://www.linkedin.com/company/harbourfrontwebdesigns" aria-label="Follow us on linkedin" target="_blank" className="link"><FaLinkedin size={32} /></a>
                </div>
                <p className="text-sm text-slate-100 ">2024 © All Rights Reserved</p>
            </div>
            <div className="items-center md:items-start mb-4 md:mb-0">
                <p className="mb-2 text-xl font-inknut">Our Services</p>
                <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 text-wrap">
                    <Link aria-label="link to main website of Harbourfront web designs" href="/" className="mb-2 text-gray-400">Web Design</Link>
                    <div className="mb-2 text-gray-400">SEO Services</div>

                    <div className="mb-2 text-gray-400">SAAS</div>
                    <div className="mb-2 text-gray-400">MVP</div>
                    <div className="mb-2 text-gray-400">Ecommerce </div>
                    <div className="mb-2 text-gray-400">Website Redesign</div>
                    <div className="mb-2 text-gray-400">Google My Business</div>
                </div>

            </div>
            <div className="col col2 flex flex-col items-center md:items-start">
                <p className="mb-2 text-xl font-inknut">Service Areas</p>
                <div className="flex flex-wrap md:flex-row justify-evenly w-full">
                    <div className="grid grid-cols-3 mb-4 md:mr-8">
                        <Link aria-label="link to Website Design Toronto" href="/website-design-toronto" className="mb-2 text-gray-400">Toronto</Link>
                        <Link aria-label="link to Website Design Markham" href="/website-design-markham" className="mb-2 text-gray-400">Markham</Link>
                        <Link aria-label="link to Website Design Richmond Hill" href="/website-design-richmond-hill" className="mb-2 text-gray-400">Richmond Hill</Link>
                        <Link aria-label="link to Website Design Vaughan" href="/website-design-vaughan" className="mb-2 text-gray-400">Vaughan</Link>
                        <Link aria-label="link to Website Design Kitchener" href="/website-design-kitchener" className="mb-2 text-gray-400">Kitchener</Link>
                        <Link aria-label="link to Website Design Hamilton" href="/website-design-hamilton" className="mb-2 text-gray-400">Hamilton</Link>
                        <Link aria-label="link to Website Design London" href="/website-design-london" className="mb-2 text-gray-400">London</Link>
                        <Link aria-label="link to Website Design Burlington" href="/website-design-burlington" className="mb-2 text-gray-400">Burlington</Link>

                        <Link aria-label="link to Website Design Scarborough" href="/website-design-scarborough" className="mb-2 text-gray-400">Scarborough</Link>
                        <Link aria-label="link to Website Design Waterloo" href="/website-design-waterloo" className="mb-2 text-gray-400">Waterloo</Link>
                        <Link aria-label="link to Website Design Cambridge" href="/website-design-cambridge" className="mb-2 text-gray-400">Cambridge</Link>
                        <Link aria-label="link to Website Design Oshawa" href="/website-design-oshawa" className="mb-2 text-gray-400">Oshawa</Link>
                        <Link aria-label="link to Website Design Etobicoke" href="/website-design-etobicoke" className="mb-2 text-gray-400">Etobicoke</Link>
                        <Link aria-label="link to Website Design Mississauga" href="/website-design-mississauga" className="mb-2 text-gray-400">Mississauga</Link>
                        <Link aria-label="link to Website Design Brampton" href="/website-design-brampton" className="mb-2 text-gray-400">Brampton</Link>
                        <Link aria-label="link to Website Design Oakville" href="/website-design-oakville" className="mb-2 text-gray-400">Oakville</Link>
                    </div>
                </div>
            </div>


        </footer>
    );
}
