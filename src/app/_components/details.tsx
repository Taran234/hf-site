import * as React from "react";
import { IoIosCreate } from "react-icons/io";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { SiCodewars } from "react-icons/si";

export function Detail() {
    return (
        <div className="flex flex-col md:px-16 py-7 mx-auto max-w-6xl ">
            <div className="w-full text-6xl font-medium tracking-tighter text-white leading-[66px]   max-md:text-4xl">
                What we do best
            </div>
            <div className="self-start mt-10 text-base leading-6 text-white  ">
                We didn't just reinvent software development - we made it accessible,
                efficient, and affordable. The era of traditional coding is{" "}
            </div>
            <div className="self-start text-base leading-6 text-white  ">
                out. Experience the accelerated pace of development, achieving up to 4x
                faster project completion, with your first task{" "}
            </div>
            <div className="self-start text-base leading-6 text-white  ">
                completed within 72 hours.
            </div>
            <div className="py-5 mt-2.5 w-full  ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-8 pt-8 pb-20 text-3xl font-medium leading-10 text-white rounded-2xl border-2 border-orange-500 border-solid max-md:px-5 max-md:mt-10">
                            <MdOutlineScreenSearchDesktop size={35} />
                            <div className="mt-6">SEO</div>
                            <div>Optimization</div>
                            <div className="mt-8 text-base leading-6">
                                Boost your business's visibility on Google with our expert SEO
                                services. We optimize your site through comprehensive audits,
                                targeted keyword research, quality content creation, and
                                strategic link building. Achieve higher rankings, drive traffic,
                                and grow your online presence effectively.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-8 py-10 text-base leading-6 text-white rounded-2xl border-2 border-emerald-400 border-solid max-md:px-5 max-md:mt-10">
                            <IoIosCreate size={35} />

                            <div className="mt-6 text-3xl font-medium leading-10">
                                Custom Business
                            </div>
                            <div className="text-3xl font-medium leading-10">Solutions</div>
                            <div className="mt-9 leading-6">
                                Revolutionize your business by building custom solutions or
                                seamlessly integrating
                            </div>
                            <div className="mt-2">
                                all your internal tools into a tailored{" "}
                            </div>
                            <div className="mt-2">dashboard. Develop your own systems </div>
                            <div className="mt-2 max-md:mr-2.5">
                                such as CMSs and Business Management{" "}
                            </div>
                            <div className="mt-2">
                                Tools. We understand that every business{" "}
                            </div>
                            <div className="mt-2 max-md:mr-2.5">
                                has its own unique fingerprint, so we craft{" "}
                            </div>
                            <div className="mt-2">
                                solutions that align perfectly with the{" "}
                            </div>
                            <div className="mt-2 max-md:mr-2.5">
                                specific needs and characteristics of your{" "}
                            </div>
                            <div className="mt-2">organization.</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-8 pt-8 pb-20 text-base leading-6 text-white rounded-2xl border-2 border-amber-400 border-solid max-md:px-5 max-md:mt-10">
                            <SiCodewars size={35} />
                            <div className="mt-6 text-3xl font-medium leading-10">
                                AI Solutions
                            </div>
                            <div className="text-3xl font-medium leading-10">
                                & Automations
                            </div>
                            <div className="mt-8 max-md:mr-2">
                                Harness the power of Artificial Intelligence{" "}
                            </div>
                            <div className="max-md:mr-2">
                                to future proof your software business or{" "}
                            </div>
                            <div className="max-md:mr-2.5">
                                streamline daily tasks and transform your{" "}
                            </div>
                            <div className="max-md:mr-2">
                                operations. Our AI solutions easily{" "}
                            </div>
                            <div className="max-md:mr-2">
                                integrate into the existing applications you{" "}
                            </div>
                            <div className="max-md:mr-2">
                                use, ensuring compatibility with your{" "}
                            </div>
                            <div className="max-md:mr-2">current systems.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-36 w-full max-md:mt-10  ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                Website Rebranding
                            </div>
                            <div className="mt-3">
                                Rebrand your old outdated website and give it a future
                            </div>
                            <div>proof makeover. User Experience is your friend.</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                Artificial Intelligence
                            </div>
                            <div className="mt-3 mr-7 max-md:mr-2.5">
                                Develop Simple to Advanced AI Applications using{" "}
                            </div>
                            <div className="mr-7 max-md:mr-2.5">Large Language Models.</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                Blogs Management
                            </div>
                            <div className="mt-3">
                                Develop your own no-code custom internal blogs{" "}
                            </div>
                            <div>management for your website.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-0.5 mt-5 w-full  ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                Custom CMS Systems
                            </div>
                            <div className="mt-3">
                                Develop CMS systems tailored for your business.{" "}
                            </div>
                            <div>No more </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                Custom AI Chatbots
                            </div>
                            <div className="mt-3 mr-6 max-md:mr-2.5">
                                Build custom knowledge based AI chatbot systems{" "}
                            </div>
                            <div className="mr-6 max-md:mr-2.5">
                                that can be applied with a variety of use cases.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                Custom Websites
                            </div>
                            <div className="mt-3">
                                Create a unique and visually appealing website{" "}
                            </div>
                            <div>tailored to your brand.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-px mt-5 w-full  ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                API Integrations
                            </div>
                            <div className="mt-3 max-md:mr-2.5">
                                We'll help you integrate your software or system with{" "}
                            </div>
                            <div className="max-md:mr-2.5">
                                almost any 3rd party application.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                SEO with Analytics
                            </div>
                            <div className="mt-3 max-md:mr-1.5">
                                Rank on Google searches and see your website traffic
                            </div>
                            <div className="max-md:mr-1.5">
                                with free integration of Google analytics to your site
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-4 pt-6 pb-7 w-full text-sm leading-5 text-white rounded-xl border border-solid shadow-sm bg-neutral-800 border-neutral-600 max-md:mt-5">
                            <div className="text-xl font-semibold leading-8">
                                Website Maintenance
                            </div>
                            <div className="mt-3 mr-5 max-md:mr-2.5">
                                Let us take care of your Website upkeep, from bugs{" "}
                            </div>
                            <div className="mr-5 max-md:mr-2.5">
                                to changes, or even additional features.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
