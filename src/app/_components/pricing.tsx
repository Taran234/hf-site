import * as React from "react";

export function Pricing() {
    return (
        <div className="flex flex-col max-w-5xl justify-center mx-auto pb-16">
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
                <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text my-7">Pricing</span>
                <br />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* E-Commerce Card */}
                <div className="flex flex-col bg-zinc-900  rounded-md border border-emerald-400  border-solid hover:shadow-xl hover:shadow-emerald-400 mt-12">
                    <div className="  text-white py-8 px-6">
                        <div className="text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-emerald-400 border-solid mb-4 py-2">
                            E-Commerce
                        </div>
                        <div className="text-lg mb-2">STARTING AT</div>
                        <div className="text-7xl text-sky-400 mb-4">$900</div>
                        <div className="flex flex-col space-y-2">
                            <div>$300 up-front</div>
                            <div>Custom Designed</div>
                            <div>Custom Coded</div>
                            <div>Shopify Integration</div>
                            <div>Easy to edit</div>
                        </div>
                        <button className="flex justify-center mx-auto mt-7 text-amber-400 text-md font-bold py-2 px-4 rounded-md border-2 border-black border-solid hover:bg-amber-400 hover:text-white shadow-sm">
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* Standard Card */}
                <div className="flex flex-col bg-zinc-900  rounded-md border border-emerald-400  border-solid hover:shadow-xl hover:shadow-emerald-400">
                    <div className="  text-white py-8 px-4">
                        <div className="text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-emerald-400 border-solid mb-4 py-2">
                            Standard
                        </div>
                        <div className="text-2xl mb-2">5 PAGES</div>
                        <div className="text-7xl text-sky-400 mb-4">$600</div>
                        <div className="flex flex-col space-y-2">
                            <div>Unlimited Edits</div>
                            <div>Includes Hosting</div>
                            <div>24/7 Customer Service</div>
                            <div>Lifetime Updates</div>
                            <div>Guaranteed Google Ranking</div>
                            <div>Minimum monthly Payments $150/mo</div>
                        </div>
                        <button className="flex justify-center mx-auto mt-7 text-amber-400 text-md font-bold py-2 px-4 rounded-md border-2 border-black border-solid hover:bg-amber-400 hover:text-white shadow-sm">
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* Website Design Card */}
                <div className="flex flex-col bg-zinc-900  rounded-md border border-emerald-400  border-solid hover:shadow-xl hover:shadow-emerald-400 mt-12">
                    <div className="  text-white py-8 px-4">
                        <div className="text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-emerald-400 border-solid mb-4 py-2">
                            Website Design
                        </div>
                        <div className="text-lg mb-2">INCLUDED!</div>
                        <div className="text-7xl text-sky-400 mb-4">Free</div>
                        <div className="flex flex-col space-y-2">
                            <div>Unlimited Edits</div>
                            <div>All File Formats</div>
                            <div>Ready to use</div>
                            <div>FREE w/ Subscription</div>
                        </div>
                        <button className="flex justify-center mx-auto mt-7 text-amber-400 text-md font-bold py-2 px-4 rounded-md border-2 border-black border-solid hover:bg-amber-400 hover:text-white shadow-sm">
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
