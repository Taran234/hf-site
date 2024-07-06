import * as React from "react";
import { IoIosCreate } from "react-icons/io";
import { MdOutlineMobileFriendly, MdOutlineScreenSearchDesktop } from "react-icons/md";
import { SiCodewars } from "react-icons/si";

export function Detail() {
    return (
        <div className="flex flex-col justify-center md:mx-auto max-w-5xl mx-5 mt-10">
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
                <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">What we do Best</span>
                <br />
            </div>
            <div className="self-start mt-10 mx-20 text-base leading-6 text-white  ">
                We didn't just reinvent website development - we made it accessible,
                efficient, and affordable. The era of traditional coding is out.
                Experience the accelerated pace of development, better User Experience
                and more with our special monthly payment model.
            </div>

            <div className="flex gap-5 max-md:flex-col md:mt-10 mt-5">
                <div className="flex flex-col w-full rounded-2xl mt-7">
                    <div className="flex flex-col  text-3xl font-medium leading-10 text-white rounded-2xl border-2 border-orange-500 border-solid p-7 min-h-[650px]  hover:shadow-xl hover:shadow-orange-500">
                        <MdOutlineScreenSearchDesktop size={35} />
                        <div className="mt-6">SEO-Optimization</div>
                        <div className="mt-8 text-base leading-6">
                            Boost your business's visibility on Google with our expert SEO
                            services. We optimize your site through comprehensive audits,
                            targeted keyword research, quality content creation, and
                            strategic link building. Achieve higher rankings, drive traffic,
                            and grow your online presence effectively.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:ml-5 w-full rounded-2xl ">
                    <div className="flex flex-col  text-base leading-6 text-white rounded-2xl border-2 border-emerald-400 border-solid p-7 min-h-[650px] hover:shadow-xl hover:shadow-emerald-400">
                        <IoIosCreate size={35} />

                        <div className="mt-6 text-3xl font-medium leading-10">
                            Custom Business
                            Solutions</div>
                        <div className="mt-8 text-base leading-6">
                            Revolutionize your business by building custom solutions or
                            seamlessly integrating
                            all your internal tools into a tailored
                            dashboard. Develop your own systems
                            such as CMSs and Business Management
                            Tools. We understand that every business
                            has its own unique fingerprint, so we craft
                            solutions that align perfectly with the
                            specific needs and characteristics of your
                            organization.</div>
                    </div>
                </div>
                <div className="flex flex-col md:ml-5 w-full rounded-2xl mt-7 ">
                    <div className="flex flex-col  text-base leading-6 text-white rounded-2xl border-2 border-amber-400 border-solid p-7 min-h-[650px] hover:shadow-xl hover:shadow-orange-500">
                        <MdOutlineMobileFriendly size={35} />
                        <div className="mt-6 text-3xl font-medium leading-10">
                            Mobile Friendly
                        </div>
                        <div className="mt-8 text-base max-md:mr-2">
                            In today's digital landscape, responsiveness is key. At Harbourfront Web Designs, we ensure your website isn't just viewed, but experienced seamlessly across all devices. Our mobile-friendly designs optimize user engagement and accessibility, ensuring your message reaches every visitor effectively. With mobile-first indexing in mind, we craft websites that load quickly and perform flawlessly, enhancing both user satisfaction and search engine visibility.
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 w-full md:mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:py-20">
                <div className="flex flex-col">
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-800 to-amber-800 border-2 border-black rounded p-4 m-auto h-[200px]">
                        <div className="text-xl font-semibold leading-8">Website Rebranding</div>
                        <div className="mt-3">Rebrand your old outdated website and give it a future proof makeover. User Experience is your friend.</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-800 to-amber-800 border-2 border-black rounded p-4 m-auto h-[200px]">
                        <div className="text-xl font-semibold leading-8">Blogs Management</div>
                        <div className="mt-3">Develop your own no-code custom internal blogs management for your website.</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-800 to-amber-800 border-2 border-black rounded p-4 m-auto h-[200px]">
                        <div className="text-xl font-semibold leading-8">Custom CMS Systems</div>
                        <div className="mt-3">Develop CMS systems tailored for your business. No more...</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-800 to-amber-800 border-2 border-black rounded p-4 m-auto h-[200px]">
                        <div className="text-xl font-semibold leading-8">Custom AI Chatbots</div>
                        <div className="mt-3">Build custom knowledge-based AI chatbot systems that can be applied with a variety of use cases.</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-800 to-amber-800 border-2 border-black rounded p-4 m-auto h-[200px]">
                        <div className="text-xl font-semibold leading-8">Custom Websites</div>
                        <div className="mt-3">Create a unique and visually appealing website tailored to your brand.</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-800 to-amber-800 border-2 border-black rounded p-4 m-auto h-[200px]">
                        <div className="text-xl font-semibold leading-8">API Integrations</div>
                        <div className="mt-3">We'll help you integrate your software or system with almost any 3rd party application.</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-800 to-amber-800 border-2 border-black rounded p-4 m-auto h-[200px]">
                        <div className="text-xl font-semibold leading-8">SEO with Analytics</div>
                        <div className="mt-3">Rank on Google searches and see your website traffic with free integration of Google Analytics to your site.</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" bg-gradient-to-b from-gray-700 via-gray-800 to-amber-800 border-2 border-black rounded p-4 m-auto h-[200px]">
                        <div className="text-xl font-semibold leading-8">Website Maintenance</div>
                        <div className="mt-3">Let us take care of your Website upkeep, from bugs to changes, or even additional features.</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
