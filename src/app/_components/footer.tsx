'use client'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer id="footer" className="relative flex flex-col md:flex-row justify-evenly py-16 px-8 bg-[#1111] rounded-t-[30%] text-white">
            <div className="flex flex-col items-center md:items-start mb-8 md:mr-8 md:mb-0">
                <div className="flex flex-row md:gap-3 gap-2 relative">
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 448.508 448.508"
                        xmlSpace="preserve"
                        className="self-stretch max-w-full aspect-[2] md:w-[90px] w-[64px]"
                    >
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "#a2783b" }} />
                                <stop offset="50%" style={{ stopColor: "#f1e696" }} />
                                <stop offset="100%" style={{ stopColor: "#a2783b" }} />
                            </linearGradient>
                        </defs>
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    style={{ fill: "url(#logoGradient)", stroke: "none", strokeLinecap: "round", strokeLinejoin: "round" }}
                                    d="M131.896,304.53l0.031,0.008 c18.193,5.075,40.746,10.712,64.277,13.143c-2.138-0.667-4.268-1.351-6.381-2.066c-23.42-7.125-45.465-11.48-66.838-13.189 c2.975,0.621,5.939,1.309,8.879,2.097L131.896,304.53z"
                                ></path>
                                <path
                                    style={{ fill: "url(#logoGradient)", stroke: "none", strokeLinecap: "round", strokeLinejoin: "round" }}
                                    d="M218.874,325.325 c-29.414,0-59.245-6.399-88.67-14.607c-13.166-3.529-26.702-5.301-40.198-5.3c-31.157,0.001-62.073,9.45-87.52,28.54 c24.655-10.414,48.674-15.175,72.857-15.174c21.101,0.001,42.328,3.626,64.192,10.285c19.7,6.68,41.592,10.487,63.451,10.487 c19.406,0,38.781-3.009,56.563-9.672c-11.274-0.897-22.565-2.471-33.715-4.686C223.517,325.281,221.197,325.325,218.874,325.325z"
                                ></path>
                                <path
                                    style={{ fill: "url(#logoGradient)", stroke: "none", strokeLinecap: "round", strokeLinejoin: "round" }}
                                    d="M55.729,275.199 c21.563-6.916,44.19-10.424,67.26-10.424c19.829,0,39.618,2.609,58.817,7.755l0.045,0.012l0.044,0.013 c33.708,9.403,78.059,20.197,122.182,20.197c24.01,0,46.25-3.143,67.127-9.517l77.304-148.526c0,0-162.357-16.376-446.022,122.976 v40.646h4.137C21.785,288.573,38.243,280.809,55.729,275.199z M239.254,192.224c6.627,0,12,5.373,12,12c0,6.627-5.373,12-12,12 s-12-5.373-12-12C227.254,197.596,232.627,192.224,239.254,192.224z M201.254,204.224c6.627,0,12,5.373,12,12 c0,6.627-5.373,12-12,12s-12-5.373-12-12C189.254,209.597,194.627,204.224,201.254,204.224z M164.754,216.224 c6.627,0,12,5.373,12,12c0,6.627-5.373,12-12,12s-12-5.373-12-12C152.754,221.597,158.127,216.224,164.754,216.224z"
                                ></path>
                                <path
                                    style={{ fill: "url(#logoGradient)", stroke: "none", strokeLinecap: "round", strokeLinejoin: "round" }}
                                    d="M179.473,281.24 c-18.498-4.958-37.523-7.447-56.485-7.447C79.2,273.792,35.76,287.071,0,313.9c34.646-14.636,68.397-21.326,102.382-21.324 c29.649,0.001,59.479,5.096,90.202,14.453c27.684,9.387,58.448,14.738,89.164,14.738c50.849,0,101.553-14.673,137.844-50 c-37.338,21.854-76.166,30.001-115.515,30.001C262.739,301.768,220.827,292.776,179.473,281.24z"
                                ></path>
                                <path
                                    style={{ fill: "url(#logoGradient)", stroke: "none", strokeLinecap: "round", strokeLinejoin: "round" }}
                                    d="M96.575,132.911l3.659,12.041 c6.723-2.837,25.23-10.244,46.143-15.142c4.03-0.942,8.066,1.559,9.013,5.592c0.944,4.033-1.56,8.068-5.593,9.013 c-21.549,5.047-40.84,13.108-45.174,14.976l10.625,34.957c0,0,93.771-44.118,203.885-60.232l-106.165-23.737 c0,0-79.13-9.933-149.614,22.611C63.354,132.99,78.333,137.616,96.575,132.911z"
                                ></path>
                            </g>
                        </g>
                    </svg>

                    <div className="flex flex-col md:text-xl text-sm justify-center bg-gradient-to-r from-[#a2783b] via-[#f1e696] to-[#a2783b] text-transparent bg-clip-text items-center">
                        <h3 className="md:items-start font-bold md:border-b-0.5 uppercase text-xl md:text-2xl">Harbourfront</h3>
                        <h3 className="md:items-end font-extrabold text-lg md:text-2xl">Web Designs</h3>
                    </div>
                </div>
                <div className="social flex space-x-4 mb-4 mt-4 md:ml-24">
                    <a href="https://www.facebook.com/HarbourfrontWebDesigns" target="_blank" className="link"><FaFacebook size={32} /></a>
                    <a href="https://www.instagram.com/harbourfrontwebdesigns" target="_blank" className="link"><FaInstagram size={32} /></a>
                    <a href="https://x.com/HFWdesigns" target="_blank" className="link"><FaTwitter size={32} /></a>
                    <a href="https://www.linkedin.com/company/harbourfrontwebdesigns" target="_blank" className="link"><FaLinkedin size={32} /></a>
                </div>
                <p className="text-sm text-slate-100 md:ml-24">2024 © All Rights Reserved</p>
            </div>
            <div className="col col2 flex flex-col items-center md:items-start mb-8 md:mb-0">
                <p className="mb-2">About</p>
                <p className="mb-2">How we Work</p>
                <p className="mb-2">Privacy Policy</p>
                <p className="mb-2">Terms of Service</p>
            </div>
            <div className="col col3 flex flex-col items-center md:items-start">
                <p className="mb-2">Services</p>
                <p className="mb-2">Our Designs</p>
                <p className="mb-2">Frequently Asked Question</p>
                <p className="mb-2">harbourfrontwebdesigns@gmail.com</p>
            </div>
        </footer>
    );
}
