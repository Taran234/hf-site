import Image from "next/image";
import * as React from "react";

export function Step1() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
                <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Our Unique Approach</span>
                <br />
            </div>


            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center px-7 py-8 rounded-xl bg-neutral-900 ">

                    <div className="flex md:justify-start py-3 bg-neutral-900 md:text-lg text-sm font-bold leading-4 uppercase">
                        Step one
                    </div>
                    <div className="my-4 md:text-4xl text-xl font-medium leading-10 text-white ">
                        Book a discovery call
                    </div>
                    <div className="flex md:flex-row flex-col">
                        <div className="mt-5 md:text-xl text-sm font-medium md:leading-10 mb-3 max-md:mb-10 md:w-2/4 md:justify-start justify-center">

                            Schedule a Discovery Call with us to understand your business,{" "}
                            project idea, and clarify your vision. We'll examine your current{" "}
                            systems and create actionable next steps while answering any{" "}
                            questions you might have about our service.
                        </div>
                        <div className="flex md:w-2/4 md:justify-end justify-center">
                            <Image alt="Book a Call" width={500} height={500} src={'/texting.svg'} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
