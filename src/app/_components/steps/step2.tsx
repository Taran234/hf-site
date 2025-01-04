import { motion } from "framer-motion";
import { SkeletonTwo } from "../skeletons";


export function Step2() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">

            <div className="flex flex-col justify-center px-0.5 mt-10 w-full">
                <div className="flex z-10 flex-col justify-center items-start px-4 py-4 rounded-xl bg-neutral-900">

                    <div className="flex md:flex-col flex-col">
                        <div className=" justify-center mt-4 items-center">
                            <SkeletonTwo />
                        </div>
                        <div className="md:p-6 p-1 text-md tracking-wide font-medium md:leading-8 md:justify-start">
                            After our FREE consultation, we’ll outline a clear strategy for your site’s development. This includes planning the technology stack, setting up the right tools, and developing a customized plan that ensures smooth functionality and a user-friendly design, all aimed at driving your business forward.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

