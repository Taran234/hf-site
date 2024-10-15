'use client'
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer id="footer" className="relative flex flex-col md:flex-row justify-evenly py-16 px-8 bg-[#1111] rounded-t-[30%] text-white">
            <div className="flex flex-col items-center  mb-8 md:mr-8 md:mb-0">
                <div className="flex flex-col md:gap-3 gap-2 relative">
                    <img src={`/harbourfront.png`} alt={`harbourfront`} className="rounded-lg w-56 my-2" />
                    <img src={`/web-designs.png`} alt={'web designers near me'} className="rounded-lg w-48 ml-4 -mt-7" />
                </div>
                <div className="social flex space-x-4 mb-4 mt-4 text-gray-500">
                    <a href="https://www.facebook.com/HarbourfrontWebDesigns" target="_blank" className="link"><FaFacebook size={32} /></a>
                    <a href="https://www.instagram.com/harbourfrontwebdesigns" target="_blank" className="link"><FaInstagram size={32} /></a>
                    <a href="https://x.com/HFWdesigns" target="_blank" className="link"><FaTwitter size={32} /></a>
                    <a href="https://www.linkedin.com/company/harbourfrontwebdesigns" target="_blank" className="link"><FaLinkedin size={32} /></a>
                </div>
                <p className="text-sm text-slate-100 ">2024 © All Rights Reserved</p>
            </div>
            <div className="col col1 flex flex-col items-center md:items-start mb-4 md:mb-0">
                <p className="mb-2 text-xl font-aclonica">Our Services</p>
                <Link href="/web-design-toronto" className="mb-2 text-gray-400">Web Design</Link>
                <div className="mb-2 text-gray-400">SEO Services</div>
                <div className="mb-2 text-gray-400">Google My Business Profile</div>
                <div className="mb-2 text-gray-400">Digital Marketing</div>
                <div className="mb-2 text-gray-400">Ecommerce Solutions</div>
                <div className="mb-2 text-gray-400">Website Redesign</div>
            </div>
            <div className="col col2 flex flex-col items-center md:items-start">
                <p className="mb-2 text-xl font-aclonica">Service Areas</p>
                <div className="flex flex-wrap md:flex-row justify-evenly w-full">
                    <div className="flex flex-col mb-4 md:mr-8">
                        <Link href="/web-design-toronto" className="mb-2 text-gray-400">Toronto</Link>
                        <Link href="/web-design-markham" className="mb-2 text-gray-400">Markham</Link>
                        <Link href="/web-design-richmond-hill" className="mb-2 text-gray-400">Richmond Hill</Link>
                        <Link href="/web-design-vaughan" className="mb-2 text-gray-400">Kitchener</Link>
                        <Link href="/web-design-hamilton" className="mb-2 text-gray-400">Hamilton</Link>
                        <Link href="/web-design-london" className="mb-2 text-gray-400">London</Link>
                    </div>
                    <div className="flex flex-col">
                        <Link href="/web-design-scarborough" className="mb-2 text-gray-400">Scarborough</Link>
                        <Link href="/web-design-waterloo" className="mb-2 text-gray-400">Waterloo</Link>
                        <Link href="/web-design-cambridge" className="mb-2 text-gray-400">Cambridge</Link>
                        <Link href="/web-design-oshawa" className="mb-2 text-gray-400">Oshawa</Link>
                        <Link href="/web-design-etobicoke" className="mb-2 text-gray-400">Etobicoke</Link>
                        <Link href="/web-design-mississauga" className="mb-2 text-gray-400">Mississauga</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
