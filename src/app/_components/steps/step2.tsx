import * as React from "react";

export function Step2() {
    return (
        <div className="flex flex-col justify-center py-7 rounded-xl md:max-w-4xl">
            <div className="flex flex-col justify-center px-0.5 mt-10">
                <div className="flex flex-col justify-center md:px-20 py-6 mt-0 mb-0 rounded-xl bg-neutral-900">
                    <div className="flex flex-col justify-center self-center p-0.5 text-xs font-bold leading-4 text-white uppercase rounded-md max-w-[103px]">
                        <div className="px-5 py-3 bg-neutral-900">Step two</div>
                    </div>
                    <div className="self-center mt-8 text-4xl font-medium leading-10 text-white text-center max-md:max-w-full">
                        Add your project details
                    </div>
                    <div className="mt-6 text-base leading-6 text-white max-md:mx-2.5 max-md:max-w-full text-center">
                        Once subscribed, add your project details to your Trello board. This includes uploading designs, outlining functionality, and providing all information that will guide the development process. Don't worry, we'll guide you in setting up your project board correctly.
                    </div>
                    <div className="mt-14 max-w-full w-[520px] mx-auto max-md:mt-10">
                        <div className="flex gap-5 flex-row">
                            <div className="flex flex-col w-full md:w-6/12">
                                <div className="flex flex-col mt-6">
                                    <div className="flex justify-center items-center py-4 text-base font-bold leading-6 text-white bg-orange-500 rounded-xl border border-solid border-stone-100 max-md:px-5">
                                        Client Hub
                                    </div>
                                    <div className="flex flex-col px-3.5 pt-3.5 pb-4 mt-2.5 rounded-xl border border-solid bg-stone-900 border-neutral-700">
                                        <div className="flex flex-col items-start px-4 pt-4 pb-20 rounded-md border border-solid border-zinc-800 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="..."
                                                className="mb-5 w-5 aspect-[1.25]"
                                            />
                                        </div>
                                        <div className="flex justify-center items-start px-4 py-5 mt-1.5 text-xs font-medium leading-4 text-white rounded-md border border-solid bg-neutral-900 border-zinc-800 max-md:pr-5">
                                            + add new
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full md:w-6/12">
                                <div className="flex flex-col grow text-white mt-6">
                                    <div className="flex justify-center items-center py-4 text-base font-bold leading-6 bg-orange-500 rounded-xl border border-solid border-stone-100 max-md:px-5">
                                        Weekly Sprint
                                    </div>
                                    <div className="flex flex-col px-3.5 pt-3.5 mt-2.5 w-full text-xs leading-4 rounded-xl border border-solid bg-stone-900 border-neutral-700">
                                        <div className="flex gap-1.5 items-start pt-4 pr-16 pb-20 pl-4 whitespace-nowrap rounded-md border border-solid border-zinc-800 max-md:pr-5">
                                            <div className="px-1 py-1.5 text-black bg-green-300 rounded">Android</div>
                                            <div className="px-1 py-1.5 mt-3 rounded bg-stone-600">Desktop</div>
                                            <div className="py-1.5 mt-3 bg-black rounded">iOS</div>
                                        </div>
                                        <div className="flex justify-center items-start px-4 py-5 mt-6 font-medium rounded-md border border-solid bg-neutral-900 border-zinc-800 max-md:pr-5">
                                            + add new
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
