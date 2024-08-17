import Image from "next/image";
import * as React from "react";

export function Step5() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center px-7 py-8 rounded-xl bg-neutral-900 ">
                    <div className="flex md:flex-row flex-col">
                        <div className="mt-5 md:text-base text-sm font-medium md:leading-8  md:justify-start">
                            Once your project is complete, we review the final product with you and make any necessary adjustments. Our commitment to excellence means unlimited revisions until you’re fully satisfied. We also provide ongoing support to ensure your website remains high-performing and aligned with your marketing goals.                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
