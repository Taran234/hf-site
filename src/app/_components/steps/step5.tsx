import { ModalTrigger } from "@/app/components/ui/model";
import Link from "next/link";

export function Step5() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center px-4 py-4 rounded-xl bg-neutral-900">
                    <div className="flex md:flex-row flex-col">
                        <div className="md:p-6 p-1 text-md tracking-wide font-medium md:leading-8 md:justify-start md:w-2/3">
                            Your website is live - congrats! Now, let’s team up to grow your traffic. We can build steady, organic traffic with our SEO content package or drive quick results with targeted ads on Google, Facebook, and Instagram. Whatever your goals, we’re here to help you succeed!                        </div>
                        <div className="flex md:flex-row flex-col w-1/3 flex-1 justify-center mx-auto items-center mt-2">
                            <ModalTrigger className="bg-amber-600  justify-center items-center flex mx-auto  md:my-2 my-4 text-white  group/modal-btn">
                                <span className="group-hover/modal-btn:-translate-y-40 text-center  inline-flex transition duration-500">
                                    📞 Get a Free Quote!
                                </span>
                                <div className="translate-y-40 group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                    Contact Now!
                                </div>
                            </ModalTrigger>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}