import * as React from "react";

export function Step5() {
    return (
        <div className="flex flex-col pb-2 mt-10 text-base leading-6 text-white rounded-xl bg-neutral-900">
            <div className="flex overflow-hidden relative flex-col items-start px-20 w-full max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col justify-center p-0.5 max-w-full text-xs font-bold leading-4 uppercase rounded-md w-[101px]">
                    <div className="justify-center px-5 py-3 bg-neutral-900">
                        Step Five
                    </div>
                </div>
                <div className="relative mt-5 text-4xl font-medium leading-10 max-md:max-w-full">
                    Track and Manage your Progress
                </div>
                <div className="relative mt-5 max-md:max-w-full">
                    Simply login and track your projects progress using Trello. We{" "}
                </div>
                <div className="relative max-md:max-w-full">
                    make it easy to review tasks, assign revisions, add comments,{" "}
                </div>
                <div className="relative max-md:max-w-full">
                    view links, and share new details with your developer. We{" "}
                </div>
                <div className="relative max-md:max-w-full">
                    understand that development needs can fluctuate. That's why{" "}
                </div>
                <div className="relative max-md:max-w-full">
                    you can pause your subscription if you have no tasks and resume{" "}
                </div>
                <div className="relative mb-72 max-md:mb-10 max-md:max-w-full">
                    when you do.
                </div>
            </div>
        </div>
    );
}
