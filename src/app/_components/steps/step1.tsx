
import { SkeletonOne } from "../skeletons";


export function Step1() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-4xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-8 w-full ">
                <div className="flex z-10 flex-col justify-center px-4 py-4 rounded-xl bg-neutral-900 ">
                    <div className="flex flex-col-reverse  relative">
                        <div className="md:px-16 md:pt-8 m-1 text-md tracking-wide font-medium md:leading-8 w-full ">

                            Claim your FREE consultation to discuss how we can solve your website challenges. During the call, we’ll go over your goals, website vision, and provide a tailored solution with clear pricing and timeline, so you can move forward with confidence.
                            <div className="hidden md:block justify-center items-center ">
                                <SkeletonOne />
                                {/* <Calen /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
