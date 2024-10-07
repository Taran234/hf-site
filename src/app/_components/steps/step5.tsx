import { ModalTrigger } from "@/app/components/ui/model";
import Link from "next/link";
import { useEffect } from "react";

export function Step5() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center px-4 py-4 rounded-xl bg-neutral-900">
                    <div className="flex flex-col">
                        <div className="mt-5 text-lg font-medium md:leading-8 md:justify-start">
                            Your website is live, but our work has just begun. From here on we have two paths to scale traffic to your website: our SEO content package brings steady, organic traffic over time, or we can help you scale quickly with targeted ads on Google, Facebook, and Instagram. For the best results, we recommend a balanced approach—building SEO while running ads for faster growth.
                            Alongside either package, we provide FREE technical maintenance to keep your site fast, secure, and always performing at its best.
                        </div>
                        <div className="flex md:flex-row flex-col flex-1 justify-evenly items-center mt-2">
                            <ModalTrigger className="bg-amber-500  justify-center items-center flex mx-auto px-16 md:my-8 my-4 text-white  group/modal-btn">
                                <span className="group-hover/modal-btn:-translate-y-40 text-center transition duration-500">
                                    📞 Book a Call!
                                </span>
                                <div className="translate-y-40 group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                    Contact Now!
                                </div>
                            </ModalTrigger>
                            <span>OR</span>
                            <button className="bg-amber-500 p-2 m-2 rounded-lg font-aclonica font-extrabold justify-center items-center flex mx-auto px-16 md:my-8 my-4 text-white" ><Link href={`https://maps.app.goo.gl/U8AEH1ut9YatNpBi6`}> Check our Reviews!</Link></button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}