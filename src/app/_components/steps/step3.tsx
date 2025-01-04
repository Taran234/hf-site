import { SkeletonThree } from "../skeletons";


export function Step3() {


    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center items-start px-4 py-4  rounded-xl bg-neutral-900 ">

                    <div className="flex  flex-col">
                        <div className=" justify-center mt-4 items-center">
                            <SkeletonThree />
                        </div>
                        <div className="md:p-6 p-1 text-md tracking-wide font-medium md:leading-8  md:justify-start">
                            Once you give us the green flag, we jump into action—building your website in focused, actionable steps and keeping you updated to ensure every detail matches your vision.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}





