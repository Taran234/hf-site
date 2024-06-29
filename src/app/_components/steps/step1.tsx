import * as React from "react";

export function Step1() {
    return (
        <div className="flex flex-col pt-20 text-base leading-6 text-white rounded-xl w-full">
            <div className="flex flex-col justify-center px-0.5 py-px mt-24 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex z-10 flex-col justify-center items-start pt-8 pr-20 pb-20 pl-8 mt-0 rounded-xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col justify-center p-0.5 max-w-full text-xs font-bold leading-4 uppercase rounded-md w-[100px]">
                        <div className="justify-center px-5 py-3 bg-neutral-900">
                            Step one
                        </div>
                    </div>
                    <div className="mt-5 text-4xl font-medium leading-10 max-md:max-w-full">
                        Book a discovery call
                    </div>
                    <div className="mt-5 max-md:max-w-full">
                        Schedule a Discovery Call with us to understand your business,{" "}
                    </div>
                    <div className="max-md:max-w-full">
                        project idea, and clarify your vision. We'll examine your current{" "}
                    </div>
                    <div className="max-md:max-w-full">
                        systems and create actionable next steps while answering any{" "}
                    </div>
                    <div className="mb-32 max-md:mb-10 max-md:max-w-full">
                        questions you might have about our service.
                    </div>
                </div>
            </div>
        </div>
    );
}
