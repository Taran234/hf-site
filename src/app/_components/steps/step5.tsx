import Image from "next/image";
import * as React from "react";

export function Step5() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center px-7 py-8 rounded-xl bg-neutral-900 ">
                    <div className="flex md:flex-row flex-col">
                        <div className="mt-5 md:text-base text-sm font-medium md:leading-8  md:justify-start">
                            Your website is live, but our work has just begun. To help your site climb the ranks on Google and attract more visitors,
                            we focus on continuous SEO enhancements and carefully crafted content. SEO is a process—Google usually takes a few months to fully rank a website,
                            so ongoing optimization is crucial. We don't just write random blog posts;
                            each one is carefully researched by experts to target the right audience for your business.
                            These blogs are designed to guide visitors through a funnel straight to your sales page, turning them into loyal customers.
                            Alongside this, we handle all technical maintenance to keep your site fast, secure, and always performing at its best.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
