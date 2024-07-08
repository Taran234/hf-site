import Image from "next/image";
import * as React from "react";

export function Step5() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center px-7 py-8 rounded-xl bg-neutral-900 ">
                    <div className="flex md:justify-start py-3 bg-neutral-900 md:text-lg text-sm font-bold leading-4 uppercase">
                        Step five
                    </div>
                    <div className="my-4 md:text-4xl text-xl font-medium leading-10 text-white md:self-start text-left">
                        Perfecting Your Vision
                    </div>
                    <div className="flex md:flex-row flex-col">
                        <div className="mt-5 md:text-xl text-sm font-medium md:leading-10 mb-3 max-md:mb-10 md:w-2/4 md:justify-start justify-center">
                            After the initial design is complete, we welcome your feedback and make any necessary revisions to ensure your website exceeds expectations. Our commitment to perfection means unlimited edits until you are completely satisfied. We thoroughly test each adjustment to maintain seamless functionality and top-notch performance.
                        </div>
                        <div className="flex md:w-2/4 md:justify-end justify-center">
                            <Image alt="Book a Call" width={500} height={500} src={'/complete.svg'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
