import * as React from "react";

export function Step4() {
    return (
        <div className="flex flex-col  text-base leading-6 text-white rounded-xl w-full md:max-w-4xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 py-px mt-24 w-full ">
                <div className="flex z-10 flex-col justify-center items-start pt-8 pr-20 pb-20 pl-8 mt-0 rounded-xl bg-neutral-900 ">
                    <div className="flex flex-col justify-center p-0.5  text-xs font-bold leading-4 uppercase rounded-md ">
                        <div className="justify-center px-5 py-3 bg-neutral-900">
                            Step FOUR
                        </div>
                    </div>
                    <div className="mt-5 text-4xl font-medium leading-10  ">
                        Request Unlimited Tasks & Revisions
                    </div>
                    <div className="mt-5 max-md:mr-2.5  ">
                        We revise each tasks until you're 100% happy. Once you approve{" "}
                    </div>
                    <div className="max-md:mr-2.5  ">
                        a task, we move onto the next and each week a new sprint will be{" "}
                    </div>
                    <div className="max-md:mr-2.5  ">
                        created consisting of new tasks. If a task from a previous sprint is{" "}
                    </div>
                    <div className="mb-32 max-md:mr-2.5 max-md:mb-10  ">
                        still 'in-progress' that task will roll over into the new sprint.
                    </div>
                </div>
            </div>
        </div>
    );
}

