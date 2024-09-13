import Link from "next/link";


export function Pricing() {
    return (
        <div className="flex flex-col max-w-5xl justify-center mx-auto pb-16 px-5 py-20">
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
                <span className="bg-gradient-to-r from-[#a2783b] via-[#f1e696] to-[#a2783b] text-transparent bg-clip-text my-7">Pricing</span>
                <br />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col bg-zinc-900  rounded-md border border-emerald-400  border-solid hover:shadow-xl hover:shadow-emerald-400 md:mt-7">
                    <div className="  text-white py-8 px-6">
                        <div className="text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-emerald-400 border-solid mb-4 py-2">
                            E-Commerce
                        </div>
                        <div className="text-lg mb-2">STARTING AT</div>
                        <div className="text-7xl text-amber-500 mb-4 ">$600</div>
                        <div className="flex flex-col space-y-2 uppercase">
                            <div>1-10 products</div>
                            <div>multiple Payment <br />options</div>
                            <div>and more from standard package</div>
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
                        <div className="text-lg mb-2">STARTING AT JUST</div>
                        <div className="text-7xl text-amber-500 mb-4">$400</div>
                        <div className="flex flex-col space-y-2 uppercase">
                            <div>1-5 Pages</div>
                            <div>Free Contact Form</div>
                            <div>Google Reviews</div>
                            <div>Unlimited revisions</div>
                            <div>24/7 Developer Support</div>
                            <div>Satisfaction Guaranteed</div>
                        </div>
                        <button className="flex justify-center mx-auto mt-7 text-amber-400 text-md font-bold py-2 px-4 rounded-md border-2 border-white border-solid hover:bg-amber-400 hover:text-white shadow-sm">
                            <Link href={'#footer'}>CONTACT US</Link>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col bg-zinc-900  rounded-md border border-emerald-400  border-solid hover:shadow-xl hover:shadow-emerald-400 md:mt-7">
                    <div className="  text-white py-8 px-6">
                        <div className="text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-emerald-400 border-solid mb-4 py-2">
                            Services
                        </div>
                        <div className="text-lg mb-2">INCLUDED!</div>
                        <div className="text-7xl text-amber-500 mb-4">Free</div>
                        <div className="flex flex-col space-y-2">
                            <div>1 YEAR MAINTENANCE</div>
                            <div>CUSTOM WEBSITE DESIGN</div>
                            <div>MOBILE FRIENDLY</div>
                            <div>SEARCH OPTIMIZATION FOR GOOGLE</div>
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
