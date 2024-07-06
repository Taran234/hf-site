import Image from "next/image";

export function Step4() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">

            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center items-start px-7 py-8 rounded-xl bg-neutral-900">
                    <div className="flex self-end py-3 bg-neutral-900 md:text-lg text-sm font-bold leading-4 uppercase">
                        Step four
                    </div>
                    <div className="md:self-end my-4 md:text-4xl text-xl font-medium md:leading-10 text-white text-right">
                        Optimization and Responsiveness
                    </div>
                    <div className="flex md:flex-row-reverse flex-col">
                        <div className="mt-5 md:text-2xl text-sm font-medium md:leading-10 mb-3 max-md:mb-10 md:w-2/4 justify-end text-white">
                            we create SEO-optimized and responsive websites tailored for all devices. Our expert team ensures your site ranks high in search engines by integrating advanced SEO techniques from the ground up. We meticulously test your website across various devices and browsers to guarantee a seamless user experience, enhancing both functionality and design. Trust us to deliver a website that not only attracts traffic but also provides an exceptional, consistent experience for every visitor.
                        </div>
                        <div className="flex md:w-2/4 justify-start items-center">
                            <Image alt="Free Website Design" width={400} height={400} src={'/development.svg'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
