import * as React from "react";

export function Pricing() {
    return (
        <div className="px-20 max-md:px-5 md:m-20 py-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center pt-px pb-3.5 w-full text-white rounded-md border border-sky-400 border-solid shadow-lg bg-zinc-900">
                        <div className="justify-center items-center self-stretch md:px-16 text-sm font-bold text-center uppercase whitespace-nowrap bg-black rounded-md border-b-2 border-sky-100 border-solid leading-[50px] max-md:px-5">
                            E-Commerce
                        </div>
                        <div className="mt-5 text-lg">STARTING AT</div>
                        <div className="mt-1 text-7xl text-sky-400 max-md:text-4xl">$1200</div>
                        <div className="flex flex-col items-start justify-center pt-px pb-4 pl-10 mt-7 max-w-full text-xl w-full max-md:pl-5">
                            <div>$600 min. Up Front Cost</div>
                            <div className="mt-4">Custom Designed</div>
                            <div className="mt-4">Custom Coded</div>
                            <div className="mt-4">Shopify Integration</div>
                            <div className="mt-4">Easy to edit</div>
                        </div>
                        <div className="justify-center px-8 py-4 mt-5 text-xs font-bold text-center text-sky-400 rounded-md border border-black border-solid shadow-sm bg-white bg-opacity-0 max-md:px-5">
                            CONTACT US
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center pt-px pb-3.5 w-full text-white rounded-md border border-sky-400 border-solid shadow-lg bg-zinc-900">
                        <div className="justify-center items-center self-stretch md:px-16 text-sm font-bold text-center uppercase whitespace-nowrap bg-black rounded-md border-b-2 border-sky-100 border-solid leading-[50px] max-md:px-5">
                            Standerd
                        </div>
                        <div className="mt-8 text-2xl">5 PAGES</div>
                        <div className="self-start mt-1 ml-12 text-7xl text-sky-400 max-md:ml-2.5 max-md:text-4xl">
                            $150/m
                        </div>
                        <div className="flex flex-col items-start self-start pt-px pb-5 pl-12 mt-7 text-2xl max-md:pl-5">
                            <div>Unlimited Edits</div>
                            <div className="mt-5">Includes Hosting</div>
                            <div className="mt-5">24/7 Customer</div>
                            <div>Service</div>
                            <div className="mt-5">Lifetime Updates</div>
                            <div className="mt-5">Garenteed Google Ranking</div>
                            <div className="mt-5">Minimum Contract 5 months</div>
                        </div>
                        <div className="justify-center px-9 py-4 mt-7 text-sm font-bold text-center text-sky-400 rounded-md border border-black border-solid shadow-sm bg-white bg-opacity-0 max-md:px-5">
                            CONTACT US
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  w-[33%] ">
                    <div className="flex flex-col grow items-center pt-px pb-8 w-full text-white rounded-md border border-sky-400 border-solid shadow-lg bg-zinc-900 max-w-[400px]">
                        <div className="justify-center self-stretch px-14 text-sm font-bold text-center uppercase bg-black rounded-md border-b-2 border-sky-100 border-solid leading-[50px] max-md:px-5">
                            Logos & Graphic Design
                        </div>
                        <div className="mt-5 text-lg">INCLUDED!</div>
                        <div className="mt-1 text-7xl text-sky-400 max-md:text-4xl">Free</div>
                        <div className="flex flex-col items-start self-start pt-px pb-5 pl-12 mt-7 text-2xl max-md:pl-5">
                            <div>2 revisions</div>
                            <div className="mt-4">All File Formats</div>
                            <div className="mt-4">Ready to use</div>
                            <div className="mt-4">FREE w/ Subscription</div>
                        </div>
                        <div className="justify-center px-8 py-4 mt-7 text-xs font-bold text-center text-sky-400 rounded-md border border-black border-solid shadow-sm bg-white bg-opacity-0 max-md:px-5">
                            CONTACT US
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

