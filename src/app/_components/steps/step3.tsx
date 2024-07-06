import Image from "next/image";
import * as React from "react";

export function Step3() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">

            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center items-start px-7 py-8  rounded-xl bg-neutral-900 ">

                    <div className="flex justify-start py-3 bg-neutral-900 md:text-lg text-sm font-bold leading-4 uppercase">
                        Step three
                    </div>
                    <div className="my-4 md:text-4xl text-xl font-medium md:leading-10 text-white ">
                        Create Our Project Tasks And Start Development
                    </div>
                    <div className="flex md:flex-row flex-col">
                        <div className="mt-5 md:text-2xl text-sm font-medium md:leading-10 mb-3 max-md:mb-10 md:w-2/4 justify-start">

                            Once we settle on a design we break down the Project into tasks and start working on the development side of things.
                        </div>
                        <div className="flex md:w-2/4 md:justify-end">
                            <Image alt="Book a Call" width={400} height={400} src={'/development.svg'} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
