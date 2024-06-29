import * as React from "react";

export function Step2() {
    return (
        <div className="flex flex-col justify-center py-20 rounded-xl">
            <div className="flex flex-col justify-center px-0.5 mt-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex z-10 flex-col justify-center px-20 py-6 mt-0 mb-0 rounded-xl bg-neutral-900 max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
                    <div className="flex flex-col justify-center self-center p-0.5 max-w-full text-xs font-bold leading-4 text-white uppercase rounded-md w-[103px]">
                        <div className="justify-center px-5 py-3 bg-neutral-900">
                            Step two
                        </div>
                    </div>
                    <div className="self-center mt-8 text-4xl font-medium leading-10 text-white max-md:max-w-full">
                        Add your project details
                    </div>
                    <div className="mt-6 text-base leading-6 text-white max-md:mr-2.5 max-md:max-w-full">
                        Once subscribed add your project details to your Trello board. This
                        includes uploading designs, outlining functionality,{" "}
                    </div>
                    <div className="mt-1.5 text-base leading-6 text-white max-md:mr-2.5 max-md:max-w-full">
                        and providing all information that will guide the development
                        process. Don't worry we'll guide you in setting up your{" "}
                    </div>
                    <div className="self-center mt-1.5 text-base leading-6 text-white">
                        project board correctly.
                    </div>
                    <div className="mt-14 ml-8 max-w-full w-[520px] max-md:mt-10">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col mt-1.5 max-md:mt-6">
                                    <div className="justify-center items-center px-16 py-4 text-base font-bold leading-6 text-white bg-orange-500 rounded-xl border border-solid border-stone-100 max-md:px-5">
                                        Client Hub
                                    </div>
                                    <div className="flex flex-col px-3.5 pt-3.5 pb-4 mt-2.5 rounded-xl border border-solid bg-stone-900 border-neutral-700">
                                        <div className="flex flex-col items-start px-4 pt-4 pb-20 rounded-md border border-solid border-zinc-800 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e37271d4cb1debd34ca5c5ba6d2b02fa7d0fd1f617749804be5a87dc864178?apiKey=15889098a2f64f5596f97e7e5322ac49&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e37271d4cb1debd34ca5c5ba6d2b02fa7d0fd1f617749804be5a87dc864178?apiKey=15889098a2f64f5596f97e7e5322ac49&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e37271d4cb1debd34ca5c5ba6d2b02fa7d0fd1f617749804be5a87dc864178?apiKey=15889098a2f64f5596f97e7e5322ac49&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e37271d4cb1debd34ca5c5ba6d2b02fa7d0fd1f617749804be5a87dc864178?apiKey=15889098a2f64f5596f97e7e5322ac49&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e37271d4cb1debd34ca5c5ba6d2b02fa7d0fd1f617749804be5a87dc864178?apiKey=15889098a2f64f5596f97e7e5322ac49&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e37271d4cb1debd34ca5c5ba6d2b02fa7d0fd1f617749804be5a87dc864178?apiKey=15889098a2f64f5596f97e7e5322ac49&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e37271d4cb1debd34ca5c5ba6d2b02fa7d0fd1f617749804be5a87dc864178?apiKey=15889098a2f64f5596f97e7e5322ac49&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e37271d4cb1debd34ca5c5ba6d2b02fa7d0fd1f617749804be5a87dc864178?apiKey=15889098a2f64f5596f97e7e5322ac49&"
                                                className="mb-5 w-5 aspect-[1.25]"
                                            />
                                        </div>
                                        <div className="justify-center items-start px-4 py-5 mt-1.5 text-xs font-medium leading-4 text-white rounded-md border border-solid bg-neutral-900 border-zinc-800 max-md:pr-5">
                                            + add new
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-white max-md:mt-5">
                                    <div className="justify-center items-center px-16 py-4 text-base font-bold leading-6 bg-orange-500 rounded-xl border border-solid border-stone-100 max-md:px-5">
                                        Weekly Sprint
                                    </div>
                                    <div className="flex flex-col px-3.5 pt-3.5 mt-2.5 w-full text-xs leading-4 rounded-xl border border-solid bg-stone-900 border-neutral-700">
                                        <div className="flex gap-1.5 items-start pt-4 pr-16 pb-20 pl-4 whitespace-nowrap rounded-md border border-solid border-zinc-800 max-md:pr-5">
                                            <div className="justify-center px-1 py-1.5 text-black bg-green-300 rounded">
                                                Android
                                            </div>
                                            <div className="justify-center px-1 py-1.5 mt-3 rounded bg-stone-600">
                                                Desktop
                                            </div>
                                            <div className="justify-center py-1.5 mt-3 bg-black rounded">
                                                IOS
                                            </div>
                                        </div>
                                        <div className="justify-center items-start px-4 py-5 mt-6 font-medium rounded-md border border-solid bg-neutral-900 border-zinc-800 max-md:pr-5">
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

