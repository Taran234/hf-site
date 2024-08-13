import Image from "next/image";
import * as React from "react";

export function Step1() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">


            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center px-7 py-8 rounded-xl bg-neutral-900 ">


                    <div className="flex md:flex-row flex-col">
                        <div className="mt-5 md:text-xl text-sm font-medium md:leading-8 mb-3 max-md:mb-10  md:justify-start justify-center">
                            Schedule a call to help us understand your requirements,{" "}
                            project idea, and clarify your vision. We'll examine your current{" "}
                            systems and create actionable next steps while answering any{" "}
                            questions you might have about our service.
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}
