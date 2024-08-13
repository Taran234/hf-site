import Image from "next/image";

export function Step2() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">

            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center items-start px-7 py-8 rounded-xl bg-neutral-900">

                    <div className="flex md:flex-row-reverse flex-col">
                        <div className="mt-5 md:text-base text-sm font-medium md:leading-8  md:justify-start">
                            We reach out to you and discuss project's details, then in 24 hrs you receive a custom design for absolutely FREE tailored to your project's details. We handle design revisions, functional outlines, and all information to guide seamless development.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
