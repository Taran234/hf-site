import * as React from "react";

export function Step4() {
    return (
        <div className="flex flex-col pt-20 text-base leading-6 text-white rounded-xl">
            <div className="flex flex-col justify-center px-0.5 py-px mt-24 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex z-10 flex-col justify-center px-8 pt-8 pb-20 mt-0 rounded-xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col justify-center p-0.5 max-w-full text-xs font-bold leading-4 uppercase rounded-md w-[397px]">
                        <div className="justify-center px-5 py-3 bg-neutral-900">
                            Step FOUR
                        </div>
                    </div>
                    <div className="mt-5 text-4xl font-medium leading-10 max-md:max-w-full">
                        Request Unlimited Tasks & Revisions
                    </div>
                    <div className="mt-5 max-md:mr-2.5 max-md:max-w-full">
                        We revise each tasks until you’re 100% happy. Once you approve{" "}
                    </div>
                    <div className="max-md:mr-2.5 max-md:max-w-full">
                        a task, we move onto the next and each week a new sprint will be{" "}
                    </div>
                    <div className="max-md:mr-2.5 max-md:max-w-full">
                        created consisting of new tasks. If a task from a previous sprint is{" "}
                    </div>
                    <div className="mb-32 max-md:mr-2.5 max-md:mb-10 max-md:max-w-full">
                        still 'in-progress' that task will roll over into the new sprint.
                    </div>
                </div>
            </div>
        </div>
    );
}

