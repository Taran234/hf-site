import * as React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { PiNotionLogo, PiNotionLogoFill } from "react-icons/pi";
import { SiNotion } from "react-icons/si";

export function Step3() {
    return (
        <div className="flex flex-col justify-center items-center mx-auto py-8 rounded-xl bg-neutral-900 md:max-w-4xl px-4">
            <div className="flex flex-col justify-center p-0.5 w-28 max-w-full text-xs font-bold leading-4 text-white uppercase rounded-md">
                <div className="justify-center px-5 py-3 bg-neutral-900">
                    Step THREE
                </div>
            </div>
            <div className="mt-8 text-4xl font-medium leading-10 text-white  ">
                Create Your  Project  Tasks
            </div>
            <div className="self-stretch mt-6 text-base leading-7 text-white max-md:mr-0.5 mx-10 text-center ">
                We breakdown your project details into actionable development tasks.
                Your developer will then create a weekly 'Sprint'{" "}

                cycle comprised of multiple tasks that will be due end of week. Each
                task throughout the week will be marked for{" "}

                review once completed.
            </div>
            <div className="mt-24 w-full max-w-[790px] max-md:mt-10  ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-white max-md:mt-5">
                            <div className="justify-center items-center md:px-16 py-4 text-base font-bold leading-6 bg-orange-500 rounded-xl border border-solid border-stone-100 max-md:px-5">
                                Client Hub
                            </div>
                            <div className="flex flex-col p-3.5 mt-2.5 rounded-xl border border-solid bg-stone-900 border-neutral-700">
                                <div className="flex flex-col p-4 w-full rounded-md border border-solid border-zinc-800">
                                    <div className="justify-center px-1 py-2 text-xs leading-4 whitespace-nowrap rounded bg-stone-600">
                                        CRM
                                    </div>
                                    <div className="flex gap-5 justify-center py-0.5 mt-3">
                                        <div className="text-sm font-bold leading-4">
                                            Onboarding
                                        </div>
                                        <div className="my-auto text-xs leading-3">Apr 12</div>
                                    </div>
                                    <div className="flex gap-1.5 justify-center items-center pr-20 mt-3 text-xs font-medium leading-4 max-md:pr-5">

                                        <SiNotion size={50} />
                                        <div className="self-stretch my-auto underline">
                                            Read More
                                        </div>
                                        <BiRightArrowAlt size={55} />
                                    </div>
                                </div>
                                <div className="justify-center items-start px-4 py-5 mt-3 text-xs font-medium leading-4 rounded-md border border-solid bg-neutral-900 border-zinc-800 max-md:pr-5">
                                    + add new
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-white max-md:mt-5">
                            <div className="justify-center items-center md:px-16 py-4 text-base font-bold leading-6 bg-orange-500 rounded-xl border border-solid border-stone-100 max-md:px-5">
                                Task Backlog
                            </div>
                            <div className="flex flex-col p-3.5 mt-2.5 text-xs font-medium leading-4 rounded-xl border border-solid bg-stone-900 border-neutral-700">
                                <div className="flex flex-col justify-center px-4 py-4 w-full rounded-md border border-solid border-zinc-800">
                                    <div className="flex gap-1.5 justify-between pr-12 whitespace-nowrap max-md:pr-5">
                                        <div className="justify-center px-1 py-1.5 text-black bg-green-300 rounded">
                                            Android
                                        </div>
                                        <div className="justify-center px-1 py-1.5 rounded bg-stone-600">
                                            Desktop
                                        </div>
                                        <div className="justify-center p-1.5 bg-black rounded">
                                            IOS
                                        </div>
                                    </div>
                                    <div className="mt-3 text-sm font-bold">
                                        Upload enhancement
                                    </div>
                                    <div className="mt-1.5">New integration with cloud </div>
                                    <div>providers.</div>
                                    <div className="flex gap-1 mt-3 max-md:pr-5">
                                        <SiNotion size={24} />
                                        <div className="underline">Document Link</div>
                                        <BiRightArrowAlt size={24} />
                                    </div>
                                    <div className="flex gap-1.5 mt-3 whitespace-nowrap">
                                        <SiNotion size={24} />
                                        <div className="flex-auto my-auto">Sathish</div>
                                    </div>
                                </div>
                                <div className="justify-center items-start px-4 py-5 mt-3 rounded-md border border-solid bg-neutral-900 border-zinc-800 max-md:pr-5">
                                    + add new
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-white max-md:mt-5">
                            <div className="justify-center items-center md:px-16 py-4 text-base font-bold leading-6 bg-orange-500 rounded-xl border border-solid border-stone-100 max-md:px-5">
                                Weekly Sprint
                            </div>
                            <div className="flex flex-col p-3.5 mt-2.5 text-xs font-medium leading-4 rounded-xl border border-solid bg-stone-900 border-neutral-700">
                                <div className="flex flex-col p-4 w-full rounded-md border border-solid border-zinc-800">
                                    <div className="flex gap-1.5 justify-between pr-11 whitespace-nowrap max-md:pr-5">
                                        <div className="justify-center px-1 py-1.5 text-black bg-green-300 rounded">
                                            SAAS
                                        </div>
                                        <div className="justify-center px-1 py-1.5 rounded bg-stone-600">
                                            Desktop
                                        </div>
                                        <div className="justify-center px-1 py-1.5 rounded bg-stone-600">
                                            Mobile
                                        </div>
                                    </div>
                                    <div className="mt-3 text-sm font-bold">
                                        Homepage Redesign
                                    </div>
                                    <div className="mt-1.5">Design and sign off on new </div>
                                    <div>design.</div>
                                    <div className="flex gap-1.5 justify-center pr-20 mt-3 max-md:pr-5">
                                        <SiNotion size={24} />
                                        <div className="underline">Read more</div>
                                        <BiRightArrowAlt size={24} />
                                    </div>
                                    <div className="flex gap-1.5 justify-center mt-3 whitespace-nowrap">
                                        <SiNotion size={24} />
                                        <div className="flex-auto my-auto">Sathish</div>
                                    </div>
                                </div>
                                <div className="flex flex-col p-4 mt-3 w-full rounded-md border border-solid border-zinc-800">
                                    <div className="justify-center px-1 py-2 text-black whitespace-nowrap bg-green-300 rounded">
                                        SAAS
                                    </div>
                                    <div className="mt-3 text-sm font-bold">
                                        Login/Signup Functionality
                                    </div>
                                    <div className="mt-1.5 max-md:mr-2.5">
                                        Added support for PencilKit for{" "}
                                    </div>
                                    <div className="max-md:mr-2.5">image manipulation.</div>
                                    <div className="flex gap-1.5 justify-center py-px mt-3 whitespace-nowrap">
                                        <FaCrown size={24} />
                                        <div className="flex-auto my-auto">Guna</div>
                                    </div>
                                </div>
                                <div className="justify-center items-start px-4 py-5 mt-3 rounded-md border border-solid bg-neutral-900 border-zinc-800 max-md:pr-5">
                                    + add new
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
