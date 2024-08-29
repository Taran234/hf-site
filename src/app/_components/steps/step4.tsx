import Image from "next/image";

export function Step4() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center items-start px-7 py-8 rounded-xl bg-neutral-900">
                    <div className="flex md:flex-row-reverse flex-col">
                        <div className="mt-5 md:text-base text-sm font-medium md:leading-8  md:justify-start">
                            After finalizing the design, we focus on creating a top-notch website. We make sure it looks great on all devices, from phones to desktops. We use high-quality images and videos, custom graphics, and smooth animations to make your site engaging and easy to navigate. We also ensure it loads quickly, is secure, and functions perfectly. Once everything is tested and ready, we launch your site and continue to refine it to keep it performing at its best.                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
