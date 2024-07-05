import Image from "next/image";

export function Step2() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">

            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center items-start pt-8 pr-20 pb-20 pl-8 mt-0 rounded-xl bg-neutral-900">
                    <div className="flex self-end py-3 bg-neutral-900 text-lg font-bold leading-4 uppercase">
                        Step Two
                    </div>
                    <div className="self-end my-4 text-4xl font-medium leading-10 text-white text-center max-md:max-w-full">
                        Get Your FREE Custom Design
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="mt-5 text-2xl font-medium leading-10 mb-3 max-md:mb-10 w-2/4 justify-end text-white">
                            Once Approved, receive a custom first design for free tailored to your project's details. We handle design uploads, functional outlines, and all information to guide seamless development.
                        </div>
                        <div className="flex w-2/4 justify-start items-center">
                            <Image alt="Free Website Design" width={400} height={400} src={'/designers.svg'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
