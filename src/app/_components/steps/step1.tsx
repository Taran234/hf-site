import * as React from "react";

export function Step1() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-4xl mx-auto">
            <div className="text-center text-3xl md:text-6xl font-semibold leading-normal mb-10">
                <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Our Unique Approach</span>
                <br />
            </div>


            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center items-start pt-8 pr-20 pb-20 pl-8 mt-0 rounded-xl bg-neutral-900 ">
                    <div className="flex flex-col justify-center p-0.5  text-xs font-bold leading-4 uppercase rounded-md ">
                        <div className="justify-center px-5 py-3 bg-neutral-900">
                            Step one
                        </div>
                    </div>
                    <div className="mt-5 text-4xl font-medium leading-10 ">
                        Book a discovery call
                    </div>
                    <div className="mt-5  ">
                        Schedule a Discovery Call with us to understand your business,{" "}
                    </div>
                    <div className=" ">
                        project idea, and clarify your vision. We'll examine your current{" "}
                    </div>
                    <div className=" ">
                        systems and create actionable next steps while answering any{" "}
                    </div>
                    <div className="mb-32 max-md:mb-10  ">
                        questions you might have about our service.
                    </div>
                </div>
            </div>
        </div>
    );
}
