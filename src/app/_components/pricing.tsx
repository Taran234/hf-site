import Link from "next/link";
import * as React from "react";

export function Pricing() {
    return (
        <div className="flex flex-col max-w-5xl justify-center mx-auto pb-16 px-5 py-20">
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
                <span className="bg-gradient-to-r from-[#a2783b] via-[#f1e696] to-[#a2783b] text-transparent bg-clip-text my-7">Pricing</span>
                <br />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* E-Commerce Card */}
                <div className="flex flex-col bg-zinc-900  rounded-md border border-emerald-400  border-solid hover:shadow-xl hover:shadow-emerald-400 md:mt-7">
                    <div className="  text-white py-8 px-6">
                        <div className="text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-emerald-400 border-solid mb-4 py-2">
                            E-Commerce
                        </div>
                        <div className="text-lg mb-2">STARTING AT</div>
                        <div className="text-7xl text-amber-500 mb-4">$600</div>
                        <div className="flex flex-col space-y-2">
                            <div>All Payment options</div>
                            <div>Shopify Integration</div>
                            <div>Easy to edit</div>
                            <div>Plus Everything from<br /> Standerd Package</div>
                        </div>
                        <button className="flex justify-center mx-auto mt-7 text-amber-400 text-md font-bold py-2 px-4 rounded-md border-2 border-white border-solid hover:bg-amber-400 hover:text-white shadow-sm">
                            <Link href={'#footer'}>CONTACT US</Link>
                        </button>
                    </div>

                </div>

                {/* Standard Card */}
                <div className="flex flex-col bg-zinc-900  rounded-md border border-emerald-400  border-solid hover:shadow-xl hover:shadow-emerald-400">
                    <div className="  text-white py-8 px-6">
                        <div className="text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-emerald-400 border-solid mb-4 py-2">
                            Standard
                        </div>
                        <div className="text-lg mb-2">STARTING AT</div>
                        <div className="text-7xl text-amber-500 mb-4">$300</div>
                        <div className="flex flex-col space-y-2">

                            <div>Free Contact form</div>
                            <div>Unlimited Edits</div>
                            <div>24/7 Developer Support</div>
                            <div>Lifetime Updates</div>
                            <div>Guaranteed Google Ranking</div>
                            <div>Satisfaction Guaranteed</div>
                        </div>
                        <button className="flex justify-center mx-auto mt-7 text-amber-400 text-md font-bold py-2 px-4 rounded-md border-2 border-white border-solid hover:bg-amber-400 hover:text-white shadow-sm">
                            <Link href={'#footer'}>CONTACT US</Link>
                        </button>
                    </div>

                </div>

                {/* Website Design Card */}
                <div className="flex flex-col bg-zinc-900  rounded-md border border-emerald-400  border-solid hover:shadow-xl hover:shadow-emerald-400 md:mt-7">
                    <div className="  text-white py-8 px-6">
                        <div className="text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-emerald-400 border-solid mb-4 py-2">
                            Logo and Branding
                        </div>
                        <div className="text-lg mb-2">INCLUDED!</div>
                        <div className="text-7xl text-amber-500 mb-4">Free</div>
                        <div className="flex flex-col space-y-2">
                            <div>Unlimited Edits</div>
                            <div>All File Formats</div>
                            <div>Ready to use</div>
                            <div>Free w/ Either Package</div>
                        </div>
                        <button className="flex justify-center mx-auto mt-7 text-amber-400 text-md font-bold py-2 px-4 rounded-md border-2 border-white border-solid hover:bg-amber-400 hover:text-white shadow-sm">
                            <Link href={'#footer'}>CONTACT US</Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
